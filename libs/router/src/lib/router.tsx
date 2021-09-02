/*eslint-disable*/
import { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Header, HeaderProps } from '@alpsbte/shared/components';
import { Loader } from '@alpsbte/loader';
import { propnameOf } from '@alpsbte/shared/util';
import { Language, tr } from '@alpsbte/shared/language';
import { LanguageStore, languageStore } from '@alpsbte/shared/stores';
import { inject, observer } from 'mobx-react';

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
} as const;

/**
 * @key Route name
 * @value URL route (usually same as key. However, exceptions e.g. home can be defined here)
 */
export type ROUTES = {
  [K in keyof typeof pages]: K extends 'home'
    ? `${Language}`
    : `${Language}/${K}`;
};
export const ROUTES: ROUTES = Object.keys(pages).reduce(
  (acc, curr) =>
    curr === propnameOf<typeof pages>(pages, (p) => p.home)
      ? { ...acc, [curr]: `${languageStore.language}` }
      : { ...acc, [curr]: `${languageStore.language}/${curr}` },
  {}
) as ROUTES;

export const Router = inject(languageStore.storeKey)(
  observer(() => {
    const headerProps: HeaderProps = {
      mobileBreakpoint: 900,
      forceColor: window.location.pathname === '/home',
      headerText: 'Alps BTE',
      navItems: [
        { text: tr('navItems.aboutUs'), to: ROUTES.aboutUs },
        { text: tr('navItems.gallery'), to: ROUTES.gallery },
        { text: tr('navItems.downloads'), to: ROUTES.downloads },
        { text: tr('navItems.faq'), to: ROUTES.faq },
        {
          text: tr('navItems.application'),
          to: ROUTES.application,
        },
        { text: tr('navItems.contact'), to: ROUTES.contact },
      ],
    };

    return (
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Header {...headerProps} />
          <Switch>
            {Object.entries(pages).map(([pageKey, component]) => (
              <Route
                key={pageKey}
                exact
                path={`/${ROUTES[pageKey as keyof typeof pages]}`}
                component={() => <component.component></component.component>}
              />
            ))}
            <Route
              path={`/${languageStore.language}/*`}
              component={() => <pages.error.component />}
            />
            <Route
              path={`*`}
              component={() => <Redirect to={`/${languageStore.language}`} />}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  })
);
