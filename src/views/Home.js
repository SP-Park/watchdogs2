import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  const [GeoData, setGeoData] = useState()

  useEffect(() => {
    fetch('http://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => setGeoData(data.ip))
  }, [])

  const report = async () => {
    try {
        const res = await axios.post('http://112.149.154.193:5000/api/history/accesshistory', {
          home: GeoData
        }).then(res => console.log(res))
    } catch (error) {
      console.error(error);
    }
  };


  console.log('IP_Home', GeoData)

 useEffect(() => {
   if(GeoData && GeoData.length > 0) {
     report()
   } else {
     return
   }
 },[GeoData])


  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;