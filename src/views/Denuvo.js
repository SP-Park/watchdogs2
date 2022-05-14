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

  const [GeoDataDenuvo, setGeoDataDenuvo] = useState(null)

  useEffect(() => {
    const response = axios.get('https://api.ipify.org/?format=json')
    .then(response => setGeoDataDenuvo(response.data.ip))
  }, [])

  console.log('IP_Denuvo', GeoDataDenuvo)

  const report = async () => {
    try {
        const res = await axios.post('http://112.149.154.193:5000/api/history/accesshistory', {
          denuvo: GeoDataDenuvo
        }).then(res => console.log(res))
    } catch (error) {
      console.error(error);
    }
  };


 useEffect(() => {
   if(GeoDataDenuvo && GeoDataDenuvo.length > 0) {
     report()
   } else {
     return
   }
 },[GeoDataDenuvo])

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile  imageFill className="illustration-section-02" />
      <Features4box />
      <Support />
      <FeaturesAward />
      <Testimonial />
      <Cta  />
    </>
  );
}

export default Denuvo;