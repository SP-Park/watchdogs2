import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import sections
import Cta from '../components/sections_1/Cta';
import Hero from '../components/sections_1/Hero';
import Support from '../components/sections_1/Support';
import Testimonial from '../components/sections_1/Testimonial';
import Features4box from '../components/sections_1/Features4box';
import FeaturesTiles from '../components/sections_1/FeaturesTiles';
import FeaturesSplit from '../components/sections_1/FeaturesSplit';
import FeaturesAward from '../components/sections_1/FeaturesAward';

const Denuvo = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Features4box />
      <Support />
      <FeaturesAward />
      <Testimonial />
      <hr />
      <Cta topDivider split />
    </>
  );
}

export default Denuvo;