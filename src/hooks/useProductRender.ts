import { useEffect, useState } from 'react';
import { getProductsList } from '../utilities/api';
import { IProduct } from '../models';

function useProductRender() {
  const [productsData, setProductsData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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

  return { productsData, isLoading, error };
}

export { useProductRender };
