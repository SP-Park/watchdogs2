import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import sections
import Cta from '../components/sections_cyberservice/Cta';
import Hero from '../components/sections_cyberservice/Hero';
import Expert from '../components/sections_cyberservice/Expert';
import Partners from '../components/sections_cyberservice/Partners';
import Service4box from '../components/sections_cyberservice/Service4box';


const CyberService = () => {
  
  return (
    <>
      <Hero />
      <Service4box />
      <Expert />
      <Partners />
      <hr />
      <Cta topDivider split />
      {/* <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Features4box />
      <Support />
      <FeaturesAward />
      <Testimonial />
      <hr />
      <Cta topDivider split /> */}
    </>
  );
}

export default CyberService;