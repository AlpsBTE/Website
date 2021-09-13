/* eslint-disable*/
import './footer.scss';

export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer__about">about</div>
      <div className="footer__quick-links">content</div>
    </footer>
  );
};

export default Footer;
