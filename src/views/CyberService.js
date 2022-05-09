import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import sections
import Cta from '../components/sections_cyberservice/Cta';
import Hero from '../components/sections_cyberservice/Hero';
import Expert from '../components/sections_cyberservice/Expert';
import Partners from '../components/sections_cyberservice/Partners';
import Service4box from '../components/sections_cyberservice/Service4box';


const CyberService = () => {

  const [GeoDataCyber, setGeoDataCyber] = useState(null)

  useEffect(() => {
    fetch('http://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => setGeoDataCyber(data.ip))
  }, [])

  console.log('IP_CyberService', GeoDataCyber)

  const report = async () => {
    try {
        const res = await axios.post('http://112.149.154.193:5000/api/history/accesshistory', {
          cyberservice: GeoDataCyber
        }).then(res => console.log(res))
    } catch (error) {
      console.error(error);
    }
  };


 useEffect(() => {
   if(GeoDataCyber && GeoDataCyber.length > 0) {
     report()
   } else {
     return
   }
 },[GeoDataCyber])

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