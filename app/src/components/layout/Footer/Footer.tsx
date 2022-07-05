import { Link } from 'react-router-dom';
import { PS_ROOT_URL, APP_URL, APP_ASSETS } from '../../../constants/constants';
import FooterSticky from '../../footer-elements/FooterSticky/FooterSticky';

import './styles.scss';

const Footer = () => (
  <>
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
              <Link to={`${APP_URL}/cms-page/3`}>Terms and condition</Link>
            </li>
            <li>
              <Link to={`${APP_URL}/cms-page/4`}>About us</Link>
            </li>
            <li>
              <Link to={`${APP_URL}/cms-page/5`}>Secure payment</Link>
            </li>
            <li>
              <Link to={`${APP_URL}/contact-us`}>Contact us</Link>
            </li>
            <li>
              <Link to={`${APP_URL}/new-products`}>New Products</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="page-width">
          <div className="payment-methods-section">
            <img
              src={`${PS_ROOT_URL}${APP_ASSETS}images/payment-methods.webp`}
              alt="Available Payment Methods"
              className="img"
              loading="lazy"
              height="116"
              width="980"
            />
          </div>
          <div className="copyright-section">
            © {new Date().getFullYear()}{' '}
            <a href="https://promokit.eu" target="_blank" rel="noreferrer">
              Promokit Co.
            </a>
          </div>
        </div>
      </div>
    </footer>
    <FooterSticky />
  </>
);

export default Footer;
