import { IProduct } from '../models';
import { useProductDetails } from '../hooks/useProductDetails';
import { Button } from './Button';

interface ProductProps {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  const { details, btnClasses, btnText, handleButtonClick } =
    useProductDetails();

  return (
    <article className="border py-2 px-4 rounded flex flex-col items-center mb-4 gap-5">
      <p className="font-bold w-1/2 text-center"> {product.title}</p>

      <img
        src={product.image}
        alt={product.title}
        className="max-h-48 max-w-xs"
      />
      <p className="font-bold"> {`Price: ${product.price} \u00A3`}</p>
      <Button
        btnClasses={btnClasses}
        handleButtonClick={handleButtonClick}
        btnText={btnText}
        btnType={'button'}
      />
      {!!details && (
        <div className="flex flex-col gap-5 justify-items-center items-center">
          <p className="text-center">{product.description}</p>
          {!!product?.rating && (
            <p className="flex gap-5">
              <span>
                Rate:
                <span style={{ fontWeight: 'bold' }}>
                  {' '}
                  {product.rating?.rate}
                </span>
              </span>
              <span className="opacity-25">|</span>
              <span>
                Reviews:{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {product.rating?.count}
                </span>
              </span>
            </p>
          )}
        </div>
      )}
    </article>
  );
}

export { Product };
