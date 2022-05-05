import { useSelector } from 'react-redux';
import { productSelector } from '../../../../providers/pages/product/selectors';

interface ComponentInterface {
  short?: boolean;
  full?: boolean;
}

const ProductPageDescription = ({ short = true, full = false }: ComponentInterface) => {
  const { description_short, description } = useSelector(productSelector);
  return (
    <>
      {short && <p className="product__desc-short">{description_short}</p>}
      {full && <p className="product__desc-full">{description}</p>}
    </>
  );
};

export default ProductPageDescription;
