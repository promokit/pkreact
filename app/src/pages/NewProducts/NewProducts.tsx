import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StatusType } from '../../model/enums';
import { useNewProductsPage } from '../../hooks/useNewProductsPage';

import PageTitle from '../../components/atoms/PageTitle/PageTitle';
import PageWrapper from '../../components/pages-elements/PageWrapper/PageWrapper';
import ComponentLoader from '../../components/atoms/loaders/ComponentLoader/ComponentLoader';
import NewProductsList from '../../components/pages-elements/newproducts-page/NewProductsList/NewProductsList';
import NewProductsLoadMore from '../../components/pages-elements/newproducts-page/NewProductsLoadMore/NewProductsLoadMore';

import './styles.scss';

const NewProducts = () => {
  const { pathname } = useLocation();
  const { fetchNewProductsPage, status, setPage, productListingPage } = useNewProductsPage();
  const isLoading = status === StatusType.Loading;

  useEffect(() => {
    fetchNewProductsPage({ page: productListingPage });
  }, [fetchNewProductsPage, productListingPage]);

  useEffect(() => {
    // reset product listing page if URL was changed
    productListingPage !== 1 && setPage(1);
  }, [pathname]);

  return (
    <PageWrapper status={status}>
      <>
        <PageTitle title="New Products" />
        <NewProductsList />
        {isLoading && <ComponentLoader />}
        <NewProductsLoadMore />
      </>
    </PageWrapper>
  );
};

export default NewProducts;
