import { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Header, HeaderProps } from '@alpsbte/shared/components';
import { nameof } from '@alpsbte/shared/util';

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
        <Route path={`/${nameof<typeof pages>(pages, (x) => x.home)}`} exact>
          <pages.home />
          <div>test</div>
        </Route>
        <Route path={`/${nameof<typeof pages>(pages, (x) => x.aboutUs)}`} exact>
          <pages.aboutUs />
        </Route>
        <Route path={`/${nameof<typeof pages>(pages, (x) => x.gallery)}`} exact>
          <pages.gallery />
        </Route>
        <Route
          path={`/${nameof<typeof pages>(pages, (x) => x.downloads)}`}
          exact
        >
          <pages.downloads />
        </Route>
        <Route path={`/${nameof<typeof pages>(pages, (x) => x.faq)}`} exact>
          <pages.faq />
        </Route>
        <Route
          path={`/${nameof<typeof pages>(pages, (x) => x.application)}`}
          exact
        >
          <pages.application />
        </Route>
        <Route path={`/${nameof<typeof pages>(pages, (x) => x.contact)}`} exact>
          <pages.contact />
        </Route>
        <Route path="/" component={() => <Redirect to="/home" />}></Route>
      </Suspense>
    </BrowserRouter>
  );
};
