import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from '@alpsbte/home';
import { AboutUs } from '@alpsbte/about-us';

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
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
