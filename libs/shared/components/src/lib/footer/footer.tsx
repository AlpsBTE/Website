/* eslint-disable*/
import './footer.scss';
import logo from '../shared/assets/logo.png';

export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer__about">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer__quick-links">content</div>
    </footer>
  );
};

export default Footer;
