import { useSelector } from 'react-redux';
import { productSelector } from '../../../../providers/pages/product/selectors';

const ProductPageName = () => {
  const { name } = useSelector(productSelector);
  return <h2 className="product__name">{name}</h2>;
};

export default ProductPageName;
