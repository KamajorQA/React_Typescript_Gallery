import { useContext } from 'react';

import { ErrorBlock } from '../components/ErrorBlock';
import { Modal } from '../components/Modal';
import { ModalSwitch } from '../components/ModalSwitch';
import { Product } from '../components/Product';
import { Spinner } from '../components/Spinner';
import { AddProductForm } from '../components/addProductForm';
import { useProductRender } from '../hooks/useProductRender';
import { ModalContext } from '../context/ModalContext';
import { PageTitle } from '../components/PageTitle';

function HomePage() {
  const { productsData, isLoading, error, handleAddProduct } =
    useProductRender();

  const { modalActive, openModal, closeModal } = useContext(ModalContext);

  return !!isLoading ? (
    <Spinner visible={isLoading} />
  ) : (
    <section className="container mx-auto max-w-2xl pt-5 flex-1 relative">
      <PageTitle
        titleText={"Today's exquisite jewelry offer on the auction list"}
      />
      {!!error && <ErrorBlock error={error} />}
      {productsData.map((el) => (
        <Product product={el} key={el.id} />
      ))}
      {!!modalActive && (
        <Modal titleText={'Specify new product details'} onClose={closeModal}>
          <AddProductForm onCreateSuccess={handleAddProduct} />
        </Modal>
      )}
      {!modalActive && <ModalSwitch onClick={openModal} />}
    </section>
  );
}

export { HomePage };
