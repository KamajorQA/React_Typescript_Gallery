import { Product } from './components/Product';
import { productsData } from './utilities/productsData';

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Product product={productsData[0]} title={'first'} />
      <Product product={productsData[1]} title={'second'} />
    </div>
  );
}

export default App;
