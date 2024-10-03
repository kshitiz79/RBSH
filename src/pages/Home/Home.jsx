import React, { useEffect, useState, Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import LazyLoad from 'react-lazyload';
import Spinner from '../../components/Spinner/Spinner'; // Adjust the path as needed

// Lazy load the components
const Hero = React.lazy(() => import('./Hero/Hero'));
const VideoSection = React.lazy(() => import('../../pages/Home/Video/Video'));
const Gallery = React.lazy(() => import('../../pages/Home/Gallery/Gallery'));
const ClientSection = React.lazy(() => import('../../pages/Home/Clients/Clients'));
const FloatingSection = React.lazy(() => import('./Slider/Slider'));
const Tablet = React.lazy(() => import('./Tablet/Tablet'));
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
            content="Welcome to RBSH Studio where we showcase our creative projects, clients, and cutting-edge technologies."
          />
          <meta
            name="keywords"
            content="creative design, video section, gallery, projects, clients, technologies"
          />
          <meta name="robots" content="index, follow" />
          {/* Additional meta tags */}
        </Helmet>

        {loading && (
          <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
            <Spinner />
          </div>
        )}

        <Suspense fallback={null}>
          <Hero />
          <LazyLoad height={200} offset={100}>
            <DefineUs className="z-10" />
          </LazyLoad>
          <LazyLoad height={200} offset={100}>
            <VideoSection />
          </LazyLoad>
          <LazyLoad height={200} offset={100}>
            <Tablet />
          </LazyLoad>
          <LazyLoad height={200} offset={100}>
            <FloatingSection />
          </LazyLoad>
          <LazyLoad height={200} offset={100}>
            <Gallery />
          </LazyLoad>
          <LazyLoad height={200} offset={100}>
            <HorizontalScrollCard />
          </LazyLoad>
          <LazyLoad height={200} offset={100}>
            <ClientSection />
          </LazyLoad>
          <LazyLoad height={200} offset={100}>
            <Technology />
          </LazyLoad>
          <LazyLoad height={200} offset={100}>
            <ScrollingText />
          </LazyLoad>
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default Home;