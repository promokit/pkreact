import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../providers/store';
import { HomepageInterface } from '../../../model/interfaces';
import ProductNormal from '../../product-miniatures/ProductNormal/ProductNormal';
import WidgetTitle from '../WidgetTitle/WidgetTitle';

import 'swiper/css';
import 'swiper/css/navigation';

interface ComponentInterface {
  homepage: HomepageInterface;
}

const FeaturedProducts = (): JSX.Element => {
  const {
    homepage: { featuredProductsList }
  } = useSelector<AppState, ComponentInterface>((state) => state.bootstrap);

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
