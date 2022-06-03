import { useSelector } from 'react-redux';
import { productSelector } from '../../../../providers/pages/product/selectors';

import MiniProductList from '../../../product-listing/MiniProductList/MiniProductList';

import './styles.scss';

const ProductPageAccessories = () => {
  const { accessories } = useSelector(productSelector);

  if (!accessories || !Object.keys(accessories).length) return <></>;

  return (
    <div className="product-page-accessories">
      <h4>Accessories</h4>
      <MiniProductList products={accessories} />
    </div>
  );
};

export default ProductPageAccessories;
