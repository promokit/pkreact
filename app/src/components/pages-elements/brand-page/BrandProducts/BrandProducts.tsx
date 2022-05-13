import { useSelector } from 'react-redux';
import { brandSelector } from '../../../../providers/pages/brand/selectors';
import NormalProductList from '../../../product-listing/NormalProductList/NormalProductList';

const BrandProducts = () => {
  const { products } = useSelector(brandSelector);
  return <NormalProductList products={products} />;
};

export default BrandProducts;
