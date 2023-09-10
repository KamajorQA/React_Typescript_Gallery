import { Product } from './components/Product';
import Spinner from './components/Spinner';
import { useProducts } from './components/hooks/productHandling';

function App() {
  const { productsData, isLoading, error } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {!!isLoading && <Spinner />}
      {!!error && <p className="text-center text-red-600 font-bold">{error}</p>}
      {productsData.map((el) => (
        <Product product={el} key={el.id} />
      ))}
    </div>
  );
}

export default App;
