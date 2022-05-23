import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import sections
import Blogs from '../components/sections_blog/Blogs';


const Blog = () => {

  const [GeoDataBlog, setGeoDataBlog] = useState(null)

  useEffect(() => {
    const response = axios.get('https://api.ipify.org/?format=json')
    .then(response => setGeoDataBlog(response.data.ip))
  }, [])

  // console.log('IP_Bolg', GeoDataBlog)

  const report = async () => {
    try {
        const res = await axios.post('https://112.149.154.193:6000/api/history/accesshistory', {
          blog: GeoDataBlog
        }).then(res => console.log(res))
    } catch (error) {
      console.error(error);
    }
  };


 useEffect(() => {
   if(GeoDataBlog && GeoDataBlog.length > 0) {
     report()
   } else {
     return
   }
 },[GeoDataBlog])

  return (
    <>
      <Blogs />
    </>
  );
}

export default Blog;