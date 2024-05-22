import './footer.css';
import { FaInstagram, FaSquareFacebook, FaTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2024 Sisyphus. All rights reserved.</p>
      <div className="footer__social">
        <a href="#" className="footer__social-icon">
          <FaSquareFacebook />
        </a>
        <a href="#" className="footer__social-icon">
          <FaTwitter />
        </a>
        <a href="#" className="footer__social-icon">
          <FaInstagram />
        </a>
      </div>
      <a href="#" className="footer__contact">
        Contact
      </a>
    </footer>
  );
}

export default Footer;
