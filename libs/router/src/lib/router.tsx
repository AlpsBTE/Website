/*eslint-disable*/
import { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Header, HeaderProps } from '@alpsbte/shared/components';
import { Loader } from '@alpsbte/loader';

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

export type ROUTES = { [K in keyof typeof pages]: K };

export const ROUTES: ROUTES = Object.keys(pages).reduce(
  (acc, curr) => ({ ...acc, [curr]: curr }),
  {}
) as ROUTES;

const headerProps: HeaderProps = {
  mobileBreakpoint: 500,
  forceColor: false,
  headerText: 'Alps BTE',
  navItems: [
    { text: 'About Us', to: ROUTES.aboutUs },
    { text: 'Gallery', to: ROUTES.gallery },
    { text: 'Downloads', to: ROUTES.downloads },
    { text: 'FAQ', to: ROUTES.faq },
    {
      text: 'Application',
      to: ROUTES.application,
    },
    { text: 'Contact', to: ROUTES.contact },
  ],
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header {...headerProps}></Header>
        <Switch>
          <Route
            path={`/${ROUTES.home}`}
            exact
            component={() => <pages.home />}
          ></Route>
          <Route
            path={`/${ROUTES.aboutUs}`}
            exact
            component={() => <pages.aboutUs />}
          />
          <Route
            path={`/${ROUTES.gallery}`}
            exact
            component={() => <pages.gallery />}
          />
          <Route
            path={`/${ROUTES.downloads}`}
            exact
            component={() => <pages.downloads />}
          />
          <Route
            path={`/${ROUTES.faq}`}
            exact
            component={() => <pages.faq />}
          />
          <Route
            path={`/${ROUTES.application}`}
            exact
            component={() => <pages.application />}
          />
          <Route
            path={`/${ROUTES.contact}`}
            exact
            component={() => <pages.contact />}
          />
          {/* Use below in case you want to show 404 */}
          {/* <Route path="*" component={() => <pages.error />} /> */}
          <Route
            path="*"
            component={() => <Redirect to={`/${ROUTES.home}`} />}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
