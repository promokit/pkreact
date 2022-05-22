import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { APP_URL } from '../../../constants/constants';
import { logoSelector } from '../../../providers/header/selector';

import './styles.scss';

const Logo = () => {
  const { width, height, url } = useSelector(logoSelector);
  return (
    <Link to={`${APP_URL}`}>
      <img src={url} width={width} height={height} alt="webpage logo" className="logo" />
    </Link>
  );
};

export default Logo;
