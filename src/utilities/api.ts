import { IProduct } from '../models';

const baseUrl = 'https://fakestoreapi.com/products/';

const productsQueryUrl = 'category/jewelery';

async function getProductsList() {
  const response = await fetch(`${baseUrl}${productsQueryUrl}`);
  const data = await response.json();
  return data;
}

async function addNewProduct(newProductData: IProduct) {
  const response = await fetch(baseUrl, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(newProductData),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorMessage = await response.json();
    throw new Error(
      `${response.status} ${response.statusText} Причина: ${errorMessage?.message}`
    );
  }
}

export { getProductsList, addNewProduct };
