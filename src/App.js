import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
// import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// new test
// Views 
import Home from './views/Home';
import V1 from './views/V1';
import Cyrex from './views/Cyrex';
import Blog from './views/Blog';

import ReactGA from "react-ga";
import { createBrowserHistory } from 'history';

require('dotenv').config()

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);
ReactGA.initialize(process.env.GA_INIT);

const trackPage = page => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          {/* <AppRoute exact path="/watchdogs_s02" component={Home} layout={LayoutDefault} /> */}
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/v1/product" component={V1} layout={LayoutDefault} />
          <AppRoute exact path="/v2/cyrex" component={Cyrex} layout={LayoutDefault} />
          <AppRoute exact path="/blog" component={Blog} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;