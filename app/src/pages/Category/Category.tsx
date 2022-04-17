import { useParams } from 'react-router-dom';
import { NotificationType } from '../../model/enums';
import { useFetchCategoryProducts } from '../../hooks/hooks';

import NormalProductList from '../../components/product-listing/NormalProductList/NormalProductList';
import CategoryDetails from '../../components/category/CategoryDetails/CategoryDetails';
import ComponentLoader from '../../components/loaders/ComponentLoader/ComponentLoader';
import Notifications from '../../components/notifications/Notifications/Notifications';
import Notification from '../../components/notifications/Notification/Notification';
import LoadMore from '../../components/product-listing/LoadMore/LoadMore';

import './styles.scss';

const Category: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const { isLoading, msg, category, productListingPage } = useFetchCategoryProducts(
    Number(id) || 0
  );

  if (isLoading && productListingPage === 1) {
    return <ComponentLoader />;
  }

  if (msg.error) {
    return <Notifications message={msg} />;
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
