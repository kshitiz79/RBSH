import React from 'react'
import Hero from './Hero/Hero';


import VideoSection from '../../pages/Home/Video/Video';
import Gallery from '../../pages/Home/Gallery/Gallery';
import ClientSection from '../../pages/Home/Clients/Clients';
import FloatingSection from './Slider/Slider';
import Tablet from './Tablet/Tablet';
import HorizontalScrollCard from '../../components/HorizontalScrollCard/HorizontalScrollCard';

import DefineUs from './DefineUs/DefineUs';
import Technology from './Technology/Technology';
import ScrollingText from '../../components/ScrollingText/ScrollingText';



const Home = () => {
  return (
    <div>

       <Hero/>
       <DefineUs className="z-10" />

        <VideoSection/>
        <Tablet/>
        <FloatingSection/>
       
        <Gallery/>
        <HorizontalScrollCard/>
        <ClientSection/>
    
        <Technology/>
        <ScrollingText/>
    </div>
  )
}

export default Home