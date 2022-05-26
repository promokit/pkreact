import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useBrandPage } from '../../hooks/useBrandPage';
import { NotificationType, StatusType } from '../../model/enums';

import Notification from '../../components/notifications/Notification/Notification';
import ComponentLoader from '../../components/atoms/loaders/ComponentLoader/ComponentLoader';
import BrandDetails from '../../components/pages-elements/brand-page/BrandDetails/BrandDetails';
import BrandProducts from '../../components/pages-elements/brand-page/BrandProducts/BrandProducts';
import BrandLoadMore from '../../components/pages-elements/brand-page/BrandLoadMore/BrandLoadMore';

import './styles.scss';

const Brand = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { status, brand, productListingPage, setPage, fetchBrandPage } = useBrandPage();
  const isLoading = status === StatusType.Loading;
  const brandId = Number(id);

  useEffect(() => {
    if (!brand) return;
    fetchBrandPage({ brandId, brand, productListingPage });
  }, [fetchBrandPage, brandId, productListingPage]);

  useEffect(() => {
    // reset product listing page if URL was changed
    productListingPage !== 1 && setPage(1);
  }, [pathname, setPage]);

  if (isLoading && productListingPage === 1) {
    return <ComponentLoader />;
  }

  if (status === StatusType.Error || !brand) {
    return <Notification type={NotificationType.Error} message="Unable to load brand page" />;
  }

  return (
    <>
      <BrandDetails />
      <BrandProducts />
      {isLoading && <ComponentLoader />}
      <BrandLoadMore disabled={isLoading} />
    </>
  );
};

export default Brand;
