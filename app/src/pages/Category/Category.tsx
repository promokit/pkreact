import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePsContext } from '../../hooks/usePsContext';
import { useCategoryPage } from '../../hooks/useCategoryPage';
import { NotificationType, StatusType } from '../../model/enums';

import Notification from '../../components/notifications/Notification/Notification';
import ComponentLoader from '../../components/loaders/ComponentLoader/ComponentLoader';
import CategoryDetails from '../../components/pages-elements/category-page/CategoryDetails/CategoryDetails';
import CategoryLoadMore from '../../components/pages-elements/category-page/CategoryLoadMore/CategoryLoadMore';
import CategoryProducts from '../../components/pages-elements/category-page/CategoryProducts/CategoryProducts';

import './styles.scss';

const Category = () => {
  const { id } = useParams();
  const { fetchCategoryPage, status, category } = useCategoryPage();
  const { productListingPage } = usePsContext();
  const categoryId = Number(id);

  useEffect(() => {
    if (!category) return;

    fetchCategoryPage({ category, categoryId, productListingPage });
  }, [fetchCategoryPage, categoryId, productListingPage]);

  if (status === StatusType.Loading && productListingPage === 1) {
    return <ComponentLoader />;
  }

  if (status === StatusType.Error || !category) {
    return <Notification type={NotificationType.Error} message="Unable to load category" />;
  }

  return (
    <>
      <CategoryDetails />
      <CategoryProducts />
      {status === StatusType.Loading && <ComponentLoader />}
      <CategoryLoadMore />
    </>
  );
};

export default Category;
