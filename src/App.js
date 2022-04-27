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
import CyberService from './views/CyberService';

import ReactGA from "react-ga";

require('dotenv').config()

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);
// ReactGA.initialize(process.env.GA_INIT, { debug: true });
const history = createBrowserHistory();

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

  useEffect(()=>{
    ReactGA.initialize(process.env.GA_INIT, { debug: true });
    history.listen((location) => {
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });
    // ReactGA.pageview(window.location.pathname + window.location.search);
  },[])

  // ReactGA.initialize(process.env.REACT_APP_TRACKING_ID, { debug: true });
  // const history = createBrowserHistory();
  // history.listen((location: any) => {
  //   ReactGA.set({ page: location.pathname }); // Update the user's current page
  //   ReactGA.pageview(location.pathname); // Record a pageview for the given page
  // });


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
          <AppRoute exact path="/blog" component={Blog} layout={LayoutDefault} />
          <AppRoute exact path="/v3/cyberservice" component={CyberService} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;