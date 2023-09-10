import { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const mainBgColorGradient =
    'bg-gradient-to-r from-green-400/50 to-blue-500/50';
  const altBgColorGradient =
    'bg-gradient-to-l from-indigo-400/50 via-purple-500/50 to-pink-500/50';

  const btnBgClassName = !!details ? altBgColorGradient : mainBgColorGradient;

  const btnClasses = [
    'py-2 px-4 w-32 border rounded',
    btnBgClassName,
    'hover:from-pink-500 hover:to-yellow-500',
  ];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-4 gap-5">
      <p className="font-bold w-1/2 text-center"> {product.title}</p>

      <img
        src={product.image}
        alt={product.title}
        className="max-h-48 max-w-xs"
      />
      <p className="font-bold"> {`Price: ${product.price} \u00A3`}</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails((prevState) => !prevState)}
      >
        {!!details ? 'Hide Details' : 'Show Details'}
      </button>
      {!!details && (
        <div className="flex flex-col gap-5 justify-items-center items-center">
          <p className="text-center">{product.description}</p>
          <p className="flex gap-5">
            <span>
              Rate:
              <span style={{ fontWeight: 'bold' }}> {product.rating.rate}</span>
            </span>
            <span className="opacity-25">|</span>
            <span>
              Reviews:{' '}
              <span style={{ fontWeight: 'bold' }}>{product.rating.count}</span>
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export { Product };
