import { useSelector } from 'react-redux';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { homePageFeaturedSelector } from '../../../providers/pages/home/selectors';

import ProductNormal from '../../product-miniatures/ProductNormal/ProductNormal';
import WithWidgetWrapper from '../../../hocs/WithWidgetWrapper/WithWidgetWrapper';

import 'swiper/css';
import 'swiper/css/navigation';

const FeaturedProducts = () => {
  const featuredProductsList = useSelector(homePageFeaturedSelector);
  return (
    <WithWidgetWrapper id="featured-products" title="Featured Products">
      <Swiper spaceBetween={20} slidesPerView={2} navigation modules={[Navigation]}>
        {featuredProductsList.map((product) => (
          <SwiperSlide key={product.id_product}>
            <ProductNormal product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </WithWidgetWrapper>
  );
};

export default FeaturedProducts;
