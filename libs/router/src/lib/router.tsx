/*eslint-disable*/
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, HeaderProps } from '@alpsbte/shared/components';
import { Loader } from '@alpsbte/loader';
import { nameof } from '@alpsbte/shared/util';

const pages = {
  home: {
    component: lazy(() => import('@alpsbte/home')),
  },
  aboutUs: {
    component: lazy(() => import('@alpsbte/about-us')),
  },
  gallery: { component: lazy(() => import('@alpsbte/gallery')) },
  downloads: { component: lazy(() => import('@alpsbte/downloads')) },
  faq: { component: lazy(() => import('@alpsbte/faq')) },
  application: { component: lazy(() => import('@alpsbte/application')) },
  contact: { component: lazy(() => import('@alpsbte/contact')) },
  error: { component: lazy(() => import('@alpsbte/error')) },
};

export type ROUTES = { [K in keyof typeof pages]: K };

/**
 * @key => Route name
 * @value => Route in URL (same as @key except for home; home: "")
 */
export const ROUTES: ROUTES = Object.keys(pages).reduce(
  (acc, curr) =>
    curr === nameof<typeof pages>(pages, (p) => p.home)
      ? { ...acc, [curr]: '' }
      : { ...acc, [curr]: curr },
  {}
) as ROUTES;

export const Router = () => {
  const headerProps: HeaderProps = {
    mobileBreakpoint: 800,
    forceColor: window.location.pathname === '/home',
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

  console.log(ROUTES);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header {...headerProps}></Header>
        <Switch>
          {Object.entries(pages).map(([pageKey, component]) => {
            console.log(pageKey, component);
            return (
              <Route
                key={pageKey}
                exact
                path={`/${ROUTES[pageKey as keyof typeof pages]}`}
                component={() => <component.component></component.component>}
              ></Route>
            );
          })}
          <Route path="*" component={() => <pages.error.component />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
