"use client";


import { lazy, Suspense } from "react";

const ScrollAnimationBlock = lazy(() => import("./ScrollAnimationBlock"));
const MobileServices = lazy(() => import("./ScrollAnimationMobile"));

const Services = () => {
  const isMobile = useIsMobile();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isMobile ? <MobileServices /> : <ScrollAnimationBlock />}
    </Suspense>
  );
};

export default Services;
