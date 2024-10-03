// src/layout/Layout.jsx
import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'; // Adjust the path

// Lazy load components
const Header = lazy(() => import('../components/Header/Header'));
const Footer = lazy(() => import('../components/Footer/Footer'));
const CustomCursor = lazy(() => import('../components/CustomCursor/CustomCursor'));

const Layout = () => {
  return (
    <ErrorBoundary>
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

      {/* Footer */}
      <Suspense fallback={<Spinner />}>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Layout;
