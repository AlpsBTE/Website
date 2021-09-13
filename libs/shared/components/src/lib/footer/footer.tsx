/* eslint-disable*/
import './footer.scss';
import { Logo } from '@alpsbte/shared/components';
import { languageStore } from '@alpsbte/shared/stores';
import { inject, observer } from 'mobx-react';
import { tr } from '@alpsbte/shared/language';

export interface FooterProps {}

export const Footer = inject(languageStore.storeKey)(
  observer(({}: FooterProps) => {
    return (
      <footer className="footer">
        <div className="footer__about">
          <div className="footer__about__title">
            <Logo />
            <h3>Alps BTE</h3>
          </div>
          <p className="footer__about__copyright">
            Copyright {new Date().getFullYear()} - {tr('footer.rightsReserved')}
          </p>
        </div>
        <div className="footer__quick-links">content</div>
      </footer>
    );
  })
);

export default Footer;
