import { useSelector } from 'react-redux';
import { categorySelector } from '../../../../providers/pages/category/selectors';

import LoadMore from '../../../product-listing/LoadMore/LoadMore';

interface ComponentInterface {
  disabled: boolean;
}

const CategoryLoadMore = ({ disabled }: ComponentInterface) => {
  const { pagination } = useSelector(categorySelector);
  return <LoadMore pagination={pagination} disabled={disabled} />;
};

export default CategoryLoadMore;
