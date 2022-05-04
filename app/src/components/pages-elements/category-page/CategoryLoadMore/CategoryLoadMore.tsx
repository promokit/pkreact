import { useSelector } from 'react-redux';
import { categorySelector } from '../../../../providers/pages/category/selectors';

import LoadMore from '../../../product-listing/LoadMore/LoadMore';

const CategoryLoadMore: React.FC = (): JSX.Element => {
  const { pagination } = useSelector(categorySelector);
  return <LoadMore pagination={pagination} />;
};

export default CategoryLoadMore;
