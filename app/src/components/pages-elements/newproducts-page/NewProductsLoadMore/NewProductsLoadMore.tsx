import { StatusType } from '../../../../model/enums';
import { useNewProductsPage } from '../../../../hooks/useNewProductsPage';

import LoadMore from '../../../product-listing/LoadMore/LoadMore';

const NewProductsLoadMore = () => {
  const { setPage, pagination, status } = useNewProductsPage();
  const isLoading = status === StatusType.Loading;
  return <LoadMore pagination={pagination} disabled={isLoading} setPage={setPage} />;
};

export default NewProductsLoadMore;
