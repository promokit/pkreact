import { useSelector } from 'react-redux';
import { newproductsSelector } from '../../../../providers/pages/new-products/selectors';
import NormalProductList from '../../../product-listing/NormalProductList/NormalProductList';

const NewProductsList = () => {
  const { products } = useSelector(newproductsSelector);
  return <NormalProductList products={products} />;
};

export default NewProductsList;
