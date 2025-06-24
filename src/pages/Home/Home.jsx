import React, { useEffect, useState, Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LazyLoad from 'react-lazyload';
import Spinner from '../../components/Spinner/Spinner'; // Adjust the path as needed
import InfoBar2 from '../../components/Infobar2/InfoBar2';
import Hero from './Hero/Hero';
import Video from './Video/Video';
import Tablet from './Tablet/Tablet';
import Gallery from '../../pages/Home/Gallery/Gallery';
import ClientSection from './Clients/Clients';


// Lazy load the components

const FloatingSection = React.lazy(() => import('./Slider/Slider'));
const HorizontalScrollCard = React.lazy(() => import('../../components/HorizontalScrollCard/HorizontalScrollCard'));
const DefineUs = React.lazy(() => import('./DefineUs/DefineUs'));
const Technology = React.lazy(() => import('./Technology/Technology'));
const ScrollingText = React.lazy(() => import('../../components/ScrollingText/ScrollingText'));

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top of the page on component mount
    window.scrollTo({ top: 0, behavior: 'instant' });
    setLoading(false);
  }, []);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Home - RBSH Studio | Creative Design Solutions</title>
          <meta
            name="description"
            content="RBSH Studio is the top marketing website and leading web development company in Noida NCR, offering creative design solutions, 360° marketing services, and advanced technology-driven projects."
          />
          <meta
            name="keywords"
            content="top marketing website Noida NCR, best web development company Noida, leading marketing agency NCR, top web development services, creative design solutions, digital marketing Noida, 360 marketing services NCR"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="RBSH Studio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Top Marketing Website & Web Development Company in Noida NCR | RBSH Studio" />
          <meta property="og:description" content="Explore RBSH Studio's top-notch marketing and web development services in Noida NCR. We provide creative design solutions and digital growth strategies." />
          <meta property="og:url" content="https://rbshstudio.com" />
          <meta property="og:type" content="website" />
        </Helmet>

        {loading && (
          <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
            <Spinner />
          </div>
        )}

        <Hero />

        {/* Use Suspense with a single Spinner for all lazy-loaded components */}
        <Suspense fallback={<Spinner />}>
        
            <DefineUs className="z-10" />


          <Video />

          <Tablet />

      


            <FloatingSection />
      

          <Gallery />


            <HorizontalScrollCard />



            <ClientSection />
 


            <Technology />
    

          <LazyLoad height={200} offset={100}>
            <ScrollingText />
          </LazyLoad>
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default Home;
