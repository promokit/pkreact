import { StatusType } from '../../../../model/enums';
import { useCategoryPage } from '../../../../hooks/useCategoryPage';

import LoadMore from '../../../product-listing/LoadMore/LoadMore';

const CategoryLoadMore = () => {
  const { setPage, pagination, status } = useCategoryPage();
  const isLoading = status === StatusType.Loading;
  return <LoadMore pagination={pagination} disabled={isLoading} setPage={setPage} />;
};

export default CategoryLoadMore;
