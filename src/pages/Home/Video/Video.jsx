import React, { useRef, useEffect, useState, memo } from "react";

const VideoSection = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices using the user agent
  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  // Only set up the Intersection Observer on non-mobile devices
  useEffect(() => {
    if (!isMobile && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect(); // Stop observing once visible
            }
          });
        },
        {
          threshold: 0.25, // Trigger when 25% of the video is visible
        }
      );

      observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="relative w-full items-center h-[30vh] md:h-[60vh] lg:h-screen overflow-hidden bg-[#e2e5ea]"
    >
      {/* On mobile: always render the video. On desktop: render only when visible */}
      {(isMobile || isVisible) && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          // The extra attribute for iOS Safari:
          webkit-playsinline="true"
          // Use auto preload on mobile to ensure the video loads,
          // but keep preload="none" on desktop to save resources.
          preload={isMobile ? "auto" : "none"}
          poster="./video-poster.webp"
          aria-hidden="true"
        >
          <source src="./video3.mp4" type="video/webm" />
          <source src="/video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default memo(VideoSection);
