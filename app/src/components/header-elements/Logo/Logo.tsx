import { useSelector } from 'react-redux';
import { HeaderInterface } from '../../../model/interfaces';
import { AppState } from '../../../providers/store';
import { Link } from 'react-router-dom';

import './styles.scss';

interface ComponentInterface {
  header: HeaderInterface;
}

const Logo: React.FC = (): JSX.Element => {
  const {
    header: {
      logo: { url, width, height },
    },
  } = useSelector<AppState, ComponentInterface>((state) => state.bootstrap);
  return (
    <Link to="/">
      <img src={url} width={width} height={height} alt="alt" className="logo" />
    </Link>
  );
};

export default Logo;
