import { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Header, HeaderProps } from '@alpsbte/shared/components';

const pages = {
  home: lazy(() => import('@alpsbte/home')),
  aboutUs: lazy(() => import('@alpsbte/about-us')),
  gallery: lazy(() => import('@alpsbte/gallery')),
  downloads: lazy(() => import('@alpsbte/downloads')),
  faq: lazy(() => import('@alpsbte/faq')),
  application: lazy(() => import('@alpsbte/application')),
  contact: lazy(() => import('@alpsbte/contact')),
  error: lazy(() => import('@alpsbte/error')),
};

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
      <Suspense fallback={<div>Loading...</div>}>
        <Header {...headerProps}></Header>
        <Route path="/home" exact>
          <pages.home />
          <div>test</div>
        </Route>
        <Route path="/about-us" exact>
          <pages.aboutUs />
        </Route>
        <Route path="/gallery" exact>
          <pages.gallery />
        </Route>
        <Route path="/downloads" exact>
          <pages.downloads />
        </Route>
        <Route path="/faq" exact>
          <pages.faq />
        </Route>
        <Route path="/application" exact>
          <pages.application />
        </Route>
        <Route path="/contact" exact>
          <pages.contact />
        </Route>
        <Route path="/" component={() => <Redirect to="/home" />}></Route>
      </Suspense>
    </BrowserRouter>
  );
};
