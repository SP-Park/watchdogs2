import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import sections
import Intro from '../components/sections_about/Intro';
import Partners from '../components/sections_about/Partners';



const AboutUS = () => {

  const [GeoDataAboutUS, setGeoDataAboutUS] = useState(null)

  useEffect(() => {
    const response = axios.get('https://api.ipify.org/?format=json')
    .then(response => setGeoDataAboutUS(response.data.ip))
  }, [])

  // console.log('IP_AboutUS', GeoDataAboutUS)

  const report = async () => {
    try {
        const res = await axios.post('https://112.149.154.193:5000/api/history/accesshistory', {
          aboutus: GeoDataAboutUS
        }).then(res => console.log(res))
    } catch (error) {
      console.error(error);
    }
  };


 useEffect(() => {
   if(GeoDataAboutUS && GeoDataAboutUS.length > 0) {
     report()
   } else {
     return
   }
 },[GeoDataAboutUS])

  return (
    <>
      <Intro />
      <Partners />
    </>
  );
}

export default AboutUS;