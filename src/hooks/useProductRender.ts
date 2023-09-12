import { useContext, useEffect, useState } from 'react';
import { getProductsList } from '../utilities/api';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';

function useProductRender() {
  const [productsData, setProductsData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { closeModal } = useContext(ModalContext);

  useEffect(() => {
    setIsLoading(true);
    setError('');

    getProductsList()
      .then((data) => {
        setProductsData(data);
      })
      .catch((err) => {
        console.warn('>>', err.message);
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleAddProduct = (createdProduct: IProduct) => {
    closeModal();
    setProductsData((pervState) => [...pervState, createdProduct]);
  };

  return {
    productsData,
    isLoading,
    error,
    handleAddProduct,
  };
}

export { useProductRender };
