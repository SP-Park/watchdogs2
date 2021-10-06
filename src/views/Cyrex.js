import React from 'react';
// import sections
import Hero from '../components/sections_cyrex/Hero';
import Portfolio from '../components/sections_cyrex/Portfolio';
import PenTest from '../components/sections_cyrex/PenTest';
import LoadTest from '../components/sections_cyrex/LoadTest';
import Penintro from '../components/sections_cyrex/Penintro';
import Penmodel from '../components/sections_cyrex/Penmodel';
import Loadintro from '../components/sections_cyrex/Loadintro';
import Headless from '../components/sections_cyrex/Headless';



const V1 = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Penintro />
      <Penmodel />
      <Portfolio />
      <PenTest />
      <Loadintro topDivider />
      <Headless />
      <LoadTest />
    </>
  );
}

export default V1;