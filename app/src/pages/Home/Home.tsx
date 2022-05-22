import { useEffect } from 'react';
import { useHomePage } from '../../hooks/useHomePage';
import { NotificationType, StatusType } from '../../model/enums';

import Banner from '../../components/widgets/Banner/Banner';
import Notification from '../../components/notifications/Notification/Notification';
import ComponentLoader from '../../components/atoms/loaders/ComponentLoader/ComponentLoader';
import FeaturedProducts from '../../components/widgets/FeaturedProducts/FeaturedProducts';

import './styles.scss';

const Home = () => {
  const { fetchHomePage, status } = useHomePage();

  useEffect(() => {
    fetchHomePage();
  }, [fetchHomePage]);

  if (status === StatusType.Loading) {
    return <ComponentLoader />;
  }

  if (status === StatusType.Error) {
    return <Notification type={NotificationType.Error} message="Category doesn't loaded" />;
  }

  return (
    <>
      <Banner />
      <FeaturedProducts />
    </>
  );
};

export default Home;
