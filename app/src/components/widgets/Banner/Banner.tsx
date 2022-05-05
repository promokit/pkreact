import { useSelector } from 'react-redux';
import { homePageBannerSelector } from '../../../providers/pages/home/selectors';

const Banner = () => {
  const { image_url } = useSelector(homePageBannerSelector);

  return (
    <div className="page-block hp-banner">
      <img className="img" src={image_url} width="100" height="100" alt="banner-img" />
    </div>
  );
};

export default Banner;
