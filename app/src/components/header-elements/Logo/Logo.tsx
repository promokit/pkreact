import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PREFIX_URL } from '../../../constants/constants';
import { logoSelector } from '../../../providers/header/selector';

import './styles.scss';

const Logo: React.FC = (): JSX.Element => {
  const { width, height, url } = useSelector(logoSelector);
  return (
    <Link to={`${PREFIX_URL}`}>
      <img src={url} width={width} height={height} alt="webpage logo" className="logo" />
    </Link>
  );
};

export default Logo;
