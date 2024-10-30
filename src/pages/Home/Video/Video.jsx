import React, { useRef, useEffect, useState, memo } from 'react';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={videoRef}
      className="relative w-full items-center h-[45vh] md:h-[60vh] lg:h-screen overflow-hidden bg-white"
    >
      {isVisible && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="none"  // Prevent unnecessary video loading until visible
          poster="./video-poster.webp"
          aria-hidden="true"
        >
          <source src="./video.webm" type="video/webm" />
          <source src="./video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default memo(VideoSection);
