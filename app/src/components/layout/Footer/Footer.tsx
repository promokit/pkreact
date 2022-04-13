import './styles.scss';

const Footer = () => (
  <footer>
    <div className="page-width flex flex-column">
      <div className="footer-content">
        <h2>Shop Links</h2>
        <ul>
          <li>
            <a href="https://promokit.eu">Delivery</a>
          </li>
          <li>
            <a href="https://promokit.eu">Legal Notice</a>
          </li>
          <li>
            <a href="https://promokit.eu">Terms and conditions of use</a>
          </li>
          <li>
            <a href="https://promokit.eu">About us</a>
          </li>
          <li>
            <a href="https://promokit.eu">Secure payment</a>
          </li>
          <li>
            <a href="https://promokit.eu">Kontakt z nami</a>
          </li>
          <li>
            <a href="https://promokit.eu">Mapa strony</a>
          </li>
          <li>
            <a href="https://promokit.eu">Sklepy</a>
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
