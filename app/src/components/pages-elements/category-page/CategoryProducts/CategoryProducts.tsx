import { useSelector } from 'react-redux';
import { categorySelector } from '../../../../providers/pages/category/selectors';
import NormalProductList from '../../../product-listing/NormalProductList/NormalProductList';

const CategoryProducts = () => {
  const { products } = useSelector(categorySelector);
  return <NormalProductList products={products} />;
};

export default CategoryProducts;
