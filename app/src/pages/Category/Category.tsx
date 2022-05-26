import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useCategoryPage } from '../../hooks/useCategoryPage';
import { NotificationType, StatusType } from '../../model/enums';

import Notification from '../../components/notifications/Notification/Notification';
import ComponentLoader from '../../components/atoms/loaders/ComponentLoader/ComponentLoader';
import CategoryDetails from '../../components/pages-elements/category-page/CategoryDetails/CategoryDetails';
import CategoryLoadMore from '../../components/pages-elements/category-page/CategoryLoadMore/CategoryLoadMore';
import CategoryProducts from '../../components/pages-elements/category-page/CategoryProducts/CategoryProducts';

import './styles.scss';

const Category = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { status, category, productListingPage, setPage, fetchCategoryPage } = useCategoryPage();
  const isLoading = status === StatusType.Loading;
  const categoryId = Number(id);

  useEffect(() => {
    if (!category) return;
    fetchCategoryPage({ category, categoryId, productListingPage });
  }, [fetchCategoryPage, categoryId, productListingPage]);

  useEffect(() => {
    // reset product listing page if URL was changed
    productListingPage !== 1 && setPage(1);
  }, [pathname, setPage]);

  if (isLoading && productListingPage === 1) {
    return <ComponentLoader />;
  }

  if (status === StatusType.Error || !category) {
    return <Notification type={NotificationType.Error} message="Unable to load category" />;
  }

  return (
    <>
      <CategoryDetails />
      <CategoryProducts />
      {isLoading && <ComponentLoader />}
      <CategoryLoadMore disabled={isLoading} />
    </>
  );
};

export default Category;
