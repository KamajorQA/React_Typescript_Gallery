import { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { addNewProduct } from '../utilities/api';
import { ErrorBlock } from './ErrorBlock';

function AddProductForm() {
  const btnBgClasses = 'bg-gradient-to-r from-indigo-400/50 to-yellow-500/50';
  const btnHoverClasses = 'hover:from-pink-500 hover:to-yellow-500';
  const btnMainClasses = 'py-2 px-4 ml-1 w-32 border rounded';
  const btnClasses = `${btnBgClasses} ${btnHoverClasses} ${btnMainClasses}`;

  const [formError, setFormError] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    description: '',
    image: '',
    category: 'jewelery',
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.warn('currrent state : ', formData);
    console.log('event.target.name > ', event.target.name);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormError('');

    if (formData.title.trim().length === 0 || formData.image.length === 0) {
      setFormError('Please enter valid product details');
      return;
    }

    addNewProduct(formData);

    setFormData({
      title: '',
      price: 0,
      description: '',
      image: '',
      category: 'jewelery',
    });
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-2 font-medium"
      onSubmit={handleFormSubmit}
    >
      <label className="w-full text-end text-gray-700/25">
        Label
        <Input
          type={'text'}
          placeholder={'Type product name'}
          value={formData.title}
          handleInput={handleInputChange}
          name={'title'}
          required
        />
      </label>

      <label className="w-full text-end text-gray-700/25">
        Price
        <Input
          type={'number'}
          placeholder={'Estimate product price'}
          value={formData.price}
          handleInput={handleInputChange}
          name={'price'}
          required={false}
        />
      </label>

      <label className="w-full text-end text-gray-700/25">
        Legend
        <Input
          type={'textarea'}
          placeholder={'Define product description'}
          value={formData.description}
          handleInput={handleInputChange}
          name={'description'}
          required={false}
        />
      </label>

      <label className="w-full text-end text-gray-700/25">
        Representation
        <Input
          type="url"
          placeholder={'https://image.link'}
          value={formData.image}
          handleInput={handleInputChange}
          name={'image'}
          required
        />
      </label>

      {!!formError && <ErrorBlock error={formError} />}

      <Button
        btnType="submit"
        btnClasses={btnClasses}
        handleButtonClick={() => {}}
        btnText={'Add Product'}
      />
    </form>
  );
}

export { AddProductForm };
