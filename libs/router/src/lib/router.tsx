import { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Header, HeaderProps } from '@alpsbte/shared/components';

const pages = {
  Home: lazy(() => import('@alpsbte/home')),
  AboutUs: lazy(() => import('@alpsbte/about-us')),
  Gallery: lazy(() => import('@alpsbte/gallery')),
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
      <Suspense fallback={<div>Loading...</div>}>
        <Header {...headerProps}></Header>
        <Route path="/" exact>
          <pages.Home />
          <div>test</div>
        </Route>
        <Route path="/about-us" exact>
          <pages.AboutUs />
        </Route>
        <Route path="/gallery" exact>
          <pages.Gallery />
        </Route>
        <Route path="/downloads" exact>
          <pages.Downloads />
        </Route>
        <Route path="/faq" exact>
          <pages.Faq />
        </Route>
        <Route path="/application" exact>
          <pages.Application />
        </Route>
        <Route path="/contact" exact>
          <pages.Contact />
        </Route>
        <Route path="/" component={() => <Redirect to="/" />}></Route>
      </Suspense>
    </BrowserRouter>
  );
};
