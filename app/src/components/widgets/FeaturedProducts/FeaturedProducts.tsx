import { useSelector } from 'react-redux';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { homePageFeaturedSelector } from '../../../providers/pages/home/selectors';

import ProductNormal from '../../product-miniatures/ProductNormal/ProductNormal';
import WidgetTitle from '../WidgetTitle/WidgetTitle';

import 'swiper/css';
import 'swiper/css/navigation';

const FeaturedProducts = (): JSX.Element => {
  const featuredProductsList = useSelector(homePageFeaturedSelector);
  return (
    <>
      <WidgetTitle title="Featured Products" />
      <Swiper spaceBetween={20} slidesPerView={2} navigation modules={[Navigation]}>
        {featuredProductsList.map((product) => (
          <SwiperSlide key={product.id_product}>
            <ProductNormal product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturedProducts;
