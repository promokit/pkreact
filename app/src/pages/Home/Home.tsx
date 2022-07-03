import { useEffect } from 'react';
import { useHomePage } from '../../hooks/useHomePage';

import Banner from '../../components/widgets/Banner/Banner';
import Newsletter from '../../components/widgets/Newsletter/Newsletter';
import ImageSlider from '../../components/widgets/ImageSlider/ImageSlider';
import PageWrapper from '../../components/pages-elements/PageWrapper/PageWrapper';
import FeaturedProducts from '../../components/widgets/FeaturedProducts/FeaturedProducts';

import './styles.scss';

const Home = () => {
  const { fetchHomePage, status } = useHomePage();

  useEffect(() => {
    fetchHomePage();
  }, [fetchHomePage]);

  return (
    <PageWrapper status={status}>
      <>
        <ImageSlider />
        <FeaturedProducts />
        <Banner />
        <Newsletter />
      </>
    </PageWrapper>
  );
};

export default Home;
