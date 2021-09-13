import React from 'react';
// import sections
import Hero from '../components/sections_1/Hero';
import FeaturesTiles from '../components/sections_1/FeaturesTiles';
import FeaturesSplit from '../components/sections_1/FeaturesSplit';
import Features4box from '../components/sections_1/Features4box';
import FeaturesAward from '../components/sections_1/FeaturesAward';
import Testimonial from '../components/sections_1/Testimonial';
import Cta from '../components/sections_1/Cta';

const V1 = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Features4box />
      <FeaturesAward />
      <Testimonial />
      <hr />
      <Cta topDivider split />
    </>
  );
}

export default V1;