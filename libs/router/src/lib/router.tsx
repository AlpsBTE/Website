import { lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header, HeaderProps } from '@alpsbte/shared/components';

const pages = {
  Home: lazy(() => import('@alpsbte/home')),
  AboutUs: lazy(() => import('@alpsbte/gallery')),
  Application: lazy(() => import('@alpsbte/application')),
  Contact: lazy(() => import('@alpsbte/contact')),
  Downloads: lazy(() => import('@alpsbte/downloads')),
  Error: lazy(() => import('@alpsbte/error')),
  Faq: lazy(() => import('@alpsbte/faq')),
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
