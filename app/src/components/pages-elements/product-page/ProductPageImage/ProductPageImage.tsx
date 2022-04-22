import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductPageInterface } from '../../../../model/interfaces';

import 'swiper/css';
import 'swiper/css/navigation';

interface ComponentInterface {
  product: ProductPageInterface;
}

const ProductPageImage: React.FC<ComponentInterface> = ({ product }): JSX.Element => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        className="product-images"
      >
        {product.images.map(({ url, width, height }) => (
          <SwiperSlide key={url}>
            <img className="img" src={url} width={width} height={height} alt={product.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductPageImage;
