import { Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AppState } from '../../../../providers/store';
import { ProductPageComponentInterface } from '../../../../model/interfaces';

import 'swiper/css';
import 'swiper/css/navigation';

const ProductPageImage: React.FC = (): JSX.Element => {
  const {
    product: { details }
  } = useSelector<AppState, ProductPageComponentInterface>((state) => state.pages);

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        className="product-images"
      >
        {details.images.map(({ url, width, height }) => (
          <SwiperSlide key={url}>
            <img className="img" src={url} width={width} height={height} alt={details.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductPageImage;
