import { useSelector } from 'react-redux';
import { productSelector } from '../../../../providers/pages/product/selectors';

const ProductPageName: React.FC = (): JSX.Element => {
  const { name } = useSelector(productSelector);
  return <h2 className="product__name">{name}</h2>;
};

export default ProductPageName;
