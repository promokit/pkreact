import { useSelector } from 'react-redux';
import { homePageBannerSelector } from '../../../providers/pages/home/selectors';

import WidgetWrapper from '../WidgetWrapper/WidgetWrapper';

const Banner = () => {
  const { image_url } = useSelector(homePageBannerSelector);

  return (
    <WidgetWrapper id="banner">
      <img
        className="img"
        src={image_url}
        width="100"
        height="100"
        alt="banner-img"
        loading="lazy"
      />
    </WidgetWrapper>
  );
};

export default Banner;
