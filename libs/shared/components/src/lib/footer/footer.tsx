/* eslint-disable*/
import './footer.scss';
import { Logo } from '@alpsbte/shared/components';

export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer__about">
        <Logo />
      </div>
      <div className="footer__quick-links">content</div>
    </footer>
  );
};

export default Footer;
