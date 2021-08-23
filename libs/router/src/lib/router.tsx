import { BrowserRouter, Route } from 'react-router-dom';
import { Header, HeaderProps } from '@alpsbte/shared/components';
import { Home } from '@alpsbte/home';
import { AboutUs } from '@alpsbte/about-us';
import { Application } from '@alpsbte/application';
import { Contact } from '@alpsbte/contact';
import { Downloads } from '@alpsbte/downloads';
import { Error } from '@alpsbte/error';
import { Faq } from '@alpsbte/faq';
import { Gallery } from '@alpsbte/gallery';

const pages = {
  Home,
  AboutUs,
  Application,
  Contact,
  Downloads,
  Error,
  Faq,
  Gallery,
} as const;

const headerProps: HeaderProps = {
  mobileBreakpoint: 500,
  forceColor: false,
  headerText: 'Alps BTE',
  navItems: [
    { text: 'About Us', to: '/aboutUs' },
    { text: 'Gallery', to: '/gallery' },
    { text: 'Downloads', to: '/downloads' },
    { text: 'FAQ', to: '/faq' },
    { text: 'Application', to: '/application' },
    { text: 'Contact', to: '/contact' },
  ],
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Header {...headerProps}></Header>
      <Route path="/" exact>
        <pages.Home />
      </Route>
    </BrowserRouter>
  );
};
