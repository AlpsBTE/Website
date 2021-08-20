/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from '@alpsbte/home';
import { AboutUs } from '@alpsbte/about-us';
import { Faq } from '@alpsbte/faq';
import { Contact } from '@alpsbte/contact';
import { Gallery } from '@alpsbte/gallery';
import { Downloads } from '@alpsbte/downloads';
import { Application } from '@alpsbte/application';

export function App() {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/aboutUs" exact>
            <AboutUs />
          </Route>
          <Route path="/faq" exact>
            <Faq />
          </Route>
          <Route path="/contact" exact>
            <Gallery />
          </Route>
          <Route path="/gallery" exact>
            <Gallery />
          </Route>
          <Route path="/downloads" exact>
            <Downloads />
          </Route>
          <Route path="/application" exact>
            <Application />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
