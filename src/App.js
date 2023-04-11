import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import { createBrowserHistory } from "history";

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Blog from './views/Blog';
import Home from './views/Home';
import Cyrex from './views/Cyrex';
import Denuvo from './views/Denuvo';
import ThreatX from './views/ThreatX';
import AboutUS from './views/AboutUs';
import CyberService from './views/CyberService';

import ReactGA from "react-ga";

require('dotenv').config()

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);
// ReactGA.initialize(process.env.REACT_APP_GA_INIT, { debug: true });
ReactGA.initialize(process.env.REACT_APP_GA_INIT);
const history = createBrowserHistory();

const trackPage = page => {
  console.log('track', page)
  ReactGA.set({ page });
  ReactGA.pageview(page);
};


const App = () => {
  // const history = createBrowserHistory();

  // useEffect(() => {
  //   ReactGA.initialize('UA-217910849-1');
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, [])

  // history.listen((location) => {
  //   ReactGA.pageview(location.pathname);
  // })

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(location.pathname);
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/v1/product" component={Denuvo} layout={LayoutDefault} />
          <AppRoute exact path="/v2/cyrex" component={Cyrex} layout={LayoutDefault} />
          <AppRoute exact path="/v3/cyberservice" component={CyberService} layout={LayoutDefault} />
          <AppRoute exact path="/v4/threatx" component={ThreatX} layout={LayoutDefault} />
          <AppRoute exact path="/blog" component={Blog} layout={LayoutDefault} />
          <AppRoute exact path="/about" component={AboutUS} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;