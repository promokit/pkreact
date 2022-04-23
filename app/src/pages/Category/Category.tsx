import { useParams } from 'react-router-dom';
import { NotificationType } from '../../model/enums';
import { useFetchCategoryProducts } from '../../hooks/hooks';

import LoadMore from '../../components/product-listing/LoadMore/LoadMore';
import Notification from '../../components/notifications/Notification/Notification';
import Notifications from '../../components/notifications/Notifications/Notifications';
import ComponentLoader from '../../components/loaders/ComponentLoader/ComponentLoader';
import CategoryDetails from '../../components/product-listing/CategoryDetails/CategoryDetails';
import NormalProductList from '../../components/product-listing/NormalProductList/NormalProductList';

import './styles.scss';

const Category: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const { isLoading, msg, category, productListingPage } = useFetchCategoryProducts(
    Number(id) || 0
  );

  if (msg.error) {
    return <Notifications message={msg} />;
  }

  if (isLoading && productListingPage === 1) {
    return <ComponentLoader />;
  }

  if (!category) {
    return <Notification type={NotificationType.Error} message="Category doesn't loaded" />;
  }

  return (
    <>
      <CategoryDetails category={category} />
      <NormalProductList products={category.products} />
      {isLoading && <ComponentLoader />}
      <LoadMore pagination={category.pagination} />
    </>
  );
};

export default Category;
