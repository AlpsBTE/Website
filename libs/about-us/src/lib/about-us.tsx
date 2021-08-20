import { Route, Link } from 'react-router-dom';

import './about-us.module.scss';

/* eslint-disable-next-line */
export interface AboutUsProps {}

export function AboutUs(props: AboutUsProps) {
  return (
    <div>
      <h1>Welcome to AboutUs!</h1>

      <ul>
        <li>
          <Link to="/">about-us root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the about-us root route.</div>}
      />
    </div>
  );
}

export default AboutUs;
