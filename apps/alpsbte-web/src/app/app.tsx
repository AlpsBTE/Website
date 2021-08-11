
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Loading from "../routes/loading/loading";

const Home = lazy(() => import('../routes/home/home'));

export function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
        </Switch>
      </Router>
    </Suspense>
  );  
}

export default App;
