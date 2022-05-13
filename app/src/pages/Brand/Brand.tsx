import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { usePsContext } from '../../hooks/usePsContext';
import { useBrandPage } from '../../hooks/useBrandPage';
import { NotificationType, StatusType } from '../../model/enums';

import ComponentLoader from '../../components/loaders/ComponentLoader/ComponentLoader';
import Notification from '../../components/notifications/Notification/Notification';
import BrandDetails from '../../components/pages-elements/brand-page/BrandDetails/BrandDetails';
import BrandProducts from '../../components/pages-elements/brand-page/BrandProducts/BrandProducts';
import BrandLoadMore from '../../components/pages-elements/brand-page/BrandLoadMore/BrandLoadMore';

import './styles.scss';
const Brand = () => {
  const { id } = useParams();
  const { setPage } = usePsContext();
  const { fetchBrandPage, status, brand } = useBrandPage();
  const { productListingPage } = usePsContext();
  const brandId = Number(id);

  useEffect(() => {
    if (!brand) return;

    // reset page number if category ID is changed
    brandId !== brand.id && setPage(1);

    fetchBrandPage({ brandId, brand, productListingPage });
  }, [fetchBrandPage, setPage, brandId, productListingPage]);

  const { pathname } = useLocation();

  useEffect(() => {
    setPage(1);
  }, [pathname]);

  if (status === StatusType.Loading && productListingPage === 1) {
    return <ComponentLoader />;
  }

  if (status === StatusType.Error || !brand) {
    return <Notification type={NotificationType.Error} message="Unable to load brand page" />;
  }

  return (
    <>
      <BrandDetails />
      <BrandProducts />
      {status === StatusType.Loading && <ComponentLoader />}
      <BrandLoadMore />
    </>
  );
};

export default Brand;
