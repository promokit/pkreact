import { useSelector } from 'react-redux';
import { HomepageInterface } from '../../model/interfaces';
import { AppState } from '../../providers/store';

interface ComponentInterface {
  homepage: HomepageInterface;
}

const Banner: React.FC = (): JSX.Element => {
  const {
    homepage: {
      banner: { image_url },
    },
  } = useSelector<AppState, ComponentInterface>((state) => state.bootstrap);

  return (
    <div className="page-block hp-banner">
      <img
        className="img"
        src={image_url}
        width="100"
        height="100"
        alt="banner-img"
      />
    </div>
  );
};

export default Banner;
