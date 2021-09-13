/* eslint-disable*/
import './footer.scss';
import { Logo } from '@alpsbte/shared/components';
import { languageStore } from '@alpsbte/shared/stores';
import { inject, observer } from 'mobx-react';
import { tr } from '@alpsbte/shared/language';
import { Link } from 'react-router-dom';
import { ROUTES } from '@alpsbte/router';

export interface FooterProps {}

export const Footer = inject(languageStore.storeKey)(
  observer(({}: FooterProps) => {
    return (
      <footer className="footer">
        <div className="footer__about">
          <Link
            to={`/${languageStore.language}`}
            className="footer__about__title"
          >
            <Logo />
            <h3>Alps BTE</h3>
          </Link>
          <p className="footer__about__copyright">
            {tr('footer.copyright')} {new Date().getFullYear()} -{' '}
            {tr('footer.rightsReserved')}
          </p>
        </div>
        <div className="footer__quick-links">
          <div className="footer__quick-links__team">
            <h4>{tr('footer.quickLinks.team')}</h4>
            <Link to={`/${languageStore.language}/${ROUTES.aboutUs}`}>
              {tr('navItems.aboutUs')}
            </Link>
            <Link to={`/${languageStore.language}/${ROUTES.contact}`}>
              {tr('navItems.contact')}
            </Link>
            <Link to={`/${languageStore.language}/${ROUTES.application}`}>
              {tr('navItems.application')}
            </Link>
          </div>
          <div className="footer__quick-links__showcase">
            <h4>{tr('footer.quickLinks.showcase')}</h4>
            <Link to={`/${languageStore.language}/${ROUTES.gallery}`}>
              {tr('navItems.gallery')}
            </Link>
            <Link to={`/${languageStore.language}/${ROUTES.contact}`}>
              {tr('navItems.contact')}
            </Link>
            <Link to={`/${languageStore.language}/${ROUTES.downloads}`}>
              {tr('navItems.downloads')}
            </Link>
          </div>
          <div className="footer__quick-links__help">
            <h4>{tr('footer.quickLinks.help')}</h4>
          </div>
          <div className="footer__quick-links__socials">
            <h4>{tr('footer.quickLinks.socials')}</h4>
          </div>
        </div>
      </footer>
    );
  })
);

export default Footer;
