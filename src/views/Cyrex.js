import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import sections
import Hero from '../components/sections_cyrex/Hero';
import Portfolio from '../components/sections_cyrex/Portfolio';
import PenTest from '../components/sections_cyrex/PenTest';
import LoadTest from '../components/sections_cyrex/LoadTest';
import Penintro from '../components/sections_cyrex/Penintro';
import Penmodel from '../components/sections_cyrex/Penmodel';
import Loadintro from '../components/sections_cyrex/Loadintro';
import Headless from '../components/sections_cyrex/Headless';



const Cyrex = () => {

  const [GeoDataCyrex, setGeoDataCyrex] = useState(null)

  useEffect(() => {
    const response = axios.get('http://api.ipify.org/?format=json')
    .then(response => setGeoDataCyrex(response.data.ip))
  }, [])

  
  console.log('IP_Cyrex', GeoDataCyrex)


  const report = async () => {
    try {
        const res = await axios.post('http://112.149.154.193:5000/api/history/accesshistory', {
          cyrex: GeoDataCyrex
        }).then(res => console.log(res))
    } catch (error) {
      console.error(error);
    }
  };


 useEffect(() => {
   if(GeoDataCyrex && GeoDataCyrex.length > 0) {
     report()
   } else {
     return
   }
 },[GeoDataCyrex])

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

export default Cyrex;