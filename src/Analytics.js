import {useEffect} from "react";
import ReactGA from "react-ga";
require('dotenv').config()
const Analytics = () => {
  const pathName = window.location.pathname;
  useEffect(() => {
      ReactGA.initialize(process.env.GA_INIT);
      ReactGA.set({page: pathName});
 }, [pathName]);
  return (
    null
  );
}

export default Analytics;