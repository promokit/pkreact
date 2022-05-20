import { useSelector } from 'react-redux';
import { brandSelector } from '../../../../providers/pages/brand/selectors';

import LoadMore from '../../../product-listing/LoadMore/LoadMore';

interface ComponentInterface {
  disabled: boolean;
}

const BrandLoadMore = ({ disabled }: ComponentInterface) => {
  const { pagination } = useSelector(brandSelector);
  return <LoadMore pagination={pagination} disabled={disabled} />;
};

export default BrandLoadMore;
