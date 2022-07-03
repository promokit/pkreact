import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { homePageFeaturedSelector } from '../../../providers/pages/home/selectors';

import ProductNormal from '../../product-miniatures/ProductNormal/ProductNormal';
import WidgetWrapper from '../WidgetWrapper/WidgetWrapper';

import 'swiper/css';

const FeaturedProducts = () => {
  const featuredProductsList = useSelector(homePageFeaturedSelector);
  return (
    <WidgetWrapper id="featured-products" title="Featured Products">
      <Swiper spaceBetween={20} slidesPerView={1.75}>
        {featuredProductsList.map((product) => (
          <SwiperSlide key={product.id_product}>
            <ProductNormal product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </WidgetWrapper>
  );
};

export default FeaturedProducts;
