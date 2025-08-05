import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import for SEO
import Spinner from '../components/Spinner/Spinner';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'; // Adjust the path



// Lazy load components
const Header = lazy(() => import('../components/Header/Header'));
const Footer = lazy(() => import('../components/Footer/Footer'));
const CustomCursor = lazy(() => import('../components/CustomCursor/CustomCursor'));

const Layout = () => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  // Simulate content load finish for Footer rendering
  useEffect(() => {
    // Adjust the logic as per your actual content loading behavior
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 1000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        {/* SEO Meta Tags for RBSH */}
        <Helmet>
          <title>RBSH | Top Marketing, Advertising & Web Development Company in NCR</title>
          <meta
            name="description"
            content="RBSH Studio is the top marketing, advertising, and web development company located in Greater Noida West, NCR. We offer expert creative design, branding, and digital solutions for businesses."
          />
          <meta
            name="keywords"
            content="RBSH, top marketing company in NCR, advertising company in NCR, web development company NCR, creative design, digital marketing, branding, Greater Noida West, Techzone IV"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="RBSH Studio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="RBSH | Top Marketing, Advertising & Web Development Company in NCR" />
          <meta property="og:description" content="RBSH Studio is the leading marketing, advertising, and web development company in NCR, offering creative design, branding, and digital marketing solutions." />
          <meta property="og:url" content="https://rbshstudio.com" />
          <meta property="og:type" content="website" />

          {/* Contact information for SEO */}
          <meta name="address" content="T3-236, Golden-I, Techzone IV, Greater Noida West, NCR" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Mozilla+Text:wght@200..700&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        {/* Header and CustomCursor */}
        <Suspense fallback={<Spinner />}>
          <CustomCursor />
          <Header />
        </Suspense>

        {/* Main Content */}
        <div className="main-content">
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </div>



        {/* Footer (only visible after content is loaded) */}
        {isContentLoaded && (
          <Suspense fallback={<Spinner />}>
            <Footer />
          </Suspense>
        )}
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default Layout;
