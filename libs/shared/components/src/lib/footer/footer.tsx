/*eslint-disable */
import './footer.scss';
import { Logo } from '@alpsbte/shared/components';
import { languageStore } from '@alpsbte/shared/stores';
import { inject, observer } from 'mobx-react';
import { tr } from '@alpsbte/shared/language';
import { Link } from 'react-router-dom';
import { ROUTES } from '@alpsbte/router';
import { socials } from '@alpsbte/shared/config';

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
            <h3>ALPS BTE</h3>
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
          </div>
          <div className="footer__quick-links__help">
            <h4>{tr('footer.quickLinks.help')}</h4>
            <Link to={`/${languageStore.language}/${ROUTES.faq}`}>
              {tr('navItems.faq')}
            </Link>
          </div>
          <div className="footer__quick-links__socials">
            <h4>{tr('footer.quickLinks.socials')}</h4>
            {Object.values(socials).map((s) => {
              return (
                <a href={s.link} target="_blank" rel="noreferrer">
                  {s.text}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    );
  })
);

export default Footer;
