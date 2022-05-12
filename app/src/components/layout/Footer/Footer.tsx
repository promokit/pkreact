import { Link } from 'react-router-dom';
import { APP_URL } from '../../../constants/constants';

import './styles.scss';

const Footer = () => (
  <footer>
    <div className="page-width flex flex-column">
      <div className="footer-content">
        <h2>Shop Links</h2>
        <ul>
          <li>
            <Link to={`${APP_URL}/cms-page/1`}>Delivery</Link>
          </li>
          <li>
            <Link to={`${APP_URL}/cms-page/2`}>Legal Notice</Link>
          </li>
          <li>
            <Link to={`${APP_URL}/cms-page/3`}>Terms and condit</Link>
          </li>
          <li>
            <Link to={`${APP_URL}/cms-page/4`}>About us</Link>
          </li>
          <li>
            <Link to={`${APP_URL}/cms-page/5`}>Secure payment</Link>
          </li>
          <li>
            <Link to={`${APP_URL}/cms-page/6`}>Kontakt z nami</Link>
          </li>
          <li>
            <Link to={`${APP_URL}/cms-page/7`}>Mapa strony</Link>
          </li>
          <li>
            <Link to={`${APP_URL}/cms-page/8`}>Sklepy</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="page-width">
        © {new Date().getFullYear()}{' '}
        <a href="https://promokit.eu" target="_blank" rel="noreferrer">
          Promokit Co.
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
