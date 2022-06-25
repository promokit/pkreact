import { useSelector } from 'react-redux';
import { homePageBannerSelector } from '../../../providers/pages/home/selectors';

import WithWidgetWrapper from '../../../hocs/WithWidgetWrapper/WithWidgetWrapper';

const Banner = () => {
  const { image_url } = useSelector(homePageBannerSelector);

  return (
    <WithWidgetWrapper id="banner">
      <img
        className="img"
        src={image_url}
        width="100"
        height="100"
        alt="banner-img"
        loading="lazy"
      />
    </WithWidgetWrapper>
  );
};

export default Banner;
