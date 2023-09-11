import { ErrorBlock } from './components/ErrorBlock';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { Spinner } from './components/Spinner';
import { AddProductForm } from './components/addProductForm';
import { useProductRender } from './hooks/useProductRender';

function App() {
  const { productsData, isLoading, error } = useProductRender();

  return (
    <section className="container mx-auto max-w-2xl pt-5">
      {!!isLoading && <Spinner visible={isLoading} />}
      {!!error && <ErrorBlock error={error} />}
      {productsData.map((el) => (
        <Product product={el} key={el.id} />
      ))}
      <Modal titleText={'Specify new product details'}>
        <AddProductForm />
      </Modal>
    </section>
  );
}

export default App;
