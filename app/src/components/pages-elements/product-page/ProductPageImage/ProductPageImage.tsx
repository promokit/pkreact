import { Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imagesSelector } from '../../../../providers/pages/product/selectors';

import 'swiper/css';
import 'swiper/css/navigation';

const ProductPageImage = () => {
  const images = useSelector(imagesSelector);
  return (
    <Swiper
      navigation
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation]}
      className="product__images"
    >
      {images.map(({ url, width, height }) => (
        <SwiperSlide key={url}>
          <img className="img" src={url} width={width} height={height} alt="product main" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductPageImage;
