const baseUrl = 'https://fakestoreapi.com/products/category/jewelery';

async function getProductsList() {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
}

export { getProductsList };
