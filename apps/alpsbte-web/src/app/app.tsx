import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '@alpsbte/home';
import { AboutUs } from '@alpsbte/about-us';
import { Faq } from '@alpsbte/faq';
import { Contact } from '@alpsbte/contact';
import { Gallery } from '@alpsbte/gallery';
import { Downloads } from '@alpsbte/downloads';
import { Application } from '@alpsbte/application';
import { Error } from '@alpsbte/error';
import { Header, HeaderProps } from '@alpsbte/shared/components';

export function App() {
  const headerProps: HeaderProps = {
    headerIcon:
      'https://yt3.ggpht.com/ytc/AKedOLQ5MRqFQDZEnX4QQZZbtYh_dqp680D-an9ZIfTM=s900-c-k-c0x00ffffff-no-rj',
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
  return (
    <Router>
      <Header {...headerProps}></Header>
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
          <Contact />
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
        <Route path="/">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
