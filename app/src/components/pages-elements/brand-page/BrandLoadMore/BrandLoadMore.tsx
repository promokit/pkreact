import { useBrandPage } from '../../../../hooks/useBrandPage';
import { StatusType } from '../../../../model/enums';

import LoadMore from '../../../product-listing/LoadMore/LoadMore';

const BrandLoadMore = () => {
  const { setPage, pagination, status } = useBrandPage();
  const isLoading = status === StatusType.Loading;
  return <LoadMore pagination={pagination} disabled={isLoading} setPage={setPage} />;
};

export default BrandLoadMore;
