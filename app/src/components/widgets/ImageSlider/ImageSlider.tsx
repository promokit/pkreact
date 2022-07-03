import { useSelector } from 'react-redux';
import { Pagination, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { homePageSliderSelector } from '../../../providers/pages/home/selectors';

import WidgetWrapper from '../WidgetWrapper/WidgetWrapper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import './styles.scss';

const ImageSlider = () => {
  const slides = useSelector(homePageSliderSelector);

  return (
    <WidgetWrapper id="image-slider">
      <>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true
          }}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400]
            },
            next: {
              translate: ['100%', 0, 0]
            }
          }}
          modules={[Pagination, EffectCreative]}
        >
          {slides.map(({ id_slide, title, image_url, sizes }) => (
            <SwiperSlide key={id_slide}>
              <img
                className="img"
                src={image_url}
                width={sizes[0]}
                height={sizes[1]}
                alt={title ? title : 'slider image'}
              />
              {title && <h3>{title}</h3>}
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </WidgetWrapper>
  );
};

export default ImageSlider;
