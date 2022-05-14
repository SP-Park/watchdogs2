import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import sections
import Partners from '../components/sections_about/Partners';
import Support from '../components/sections_about/Support';


const AboutUS = () => {

  const [GeoDataAboutUS, setGeoDataAboutUS] = useState(null)

  useEffect(() => {
    const response = axios.get('https://api.ipify.org/?format=json')
    .then(response => setGeoDataAboutUS(response.data.ip))
  }, [])

  console.log('IP_AboutUS', GeoDataAboutUS)

  const report = async () => {
    try {
        const res = await axios.post('http://112.149.154.193:5000/api/history/accesshistory', {
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
      <Partners />
      <Support />
    </>
  );
}

export default AboutUS;