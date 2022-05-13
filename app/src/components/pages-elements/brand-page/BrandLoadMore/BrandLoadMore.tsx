import { useSelector } from 'react-redux';
import { brandSelector } from '../../../../providers/pages/brand/selectors';

import LoadMore from '../../../product-listing/LoadMore/LoadMore';

const BrandLoadMore = () => {
  const { pagination } = useSelector(brandSelector);
  return <LoadMore pagination={pagination} />;
};

export default BrandLoadMore;
