// components/FloatingSection.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FloatingSection = () => {
  const sectionRef = useRef(null);
  const headingsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    // GSAP Animation for each paragraph
    headingsRef.current.forEach((heading, index) => {
      gsap.fromTo(
        heading,
        { opacity: 0, x: 100 }, // Start position: off-screen to the right
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%', // Trigger animation when the element is near the viewport
            end: 'top 20%', // Reverse animation when scrolling out of view
            scrub: true,
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative lg:flex lg:items-start lg:justify-between py-16 px-4 sm:px-6 md:px-8 lg:px-24 bg-gray-50"
    >
      {/* Left Heading Section */}
      <div className="mb-10 lg:mb-0 lg:sticky lg:top-16 lg:w-1/2">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold leading-tight uppercase mt-10 sm:mt-14 md:mt-20 lg:mt-28"
          style={{ lineHeight: '1.2' }}
        >
          We develop <br /> brands<br />from strategy <br /> to immersive <br /> experience.
        </h1>
      </div>

      {/* Right Floating Text Section */}
      <div className="lg:ml-auto lg:w-1/2 space-y-8 sm:space-y-10">
        {[
          {
            number: '1',
            title: 'Brand Strategy',
            text: 'We create a strategy that aligns with your goals and resonates with your audience, making your brand stand out.',
          },
          {
            number: '2',
            title: 'Brand Experience',
            text: 'Our team designs visual identities, develops brand guidelines, and ensures consistent brand representation, creating customer-focused experiences that engage your audience.',
          },
          {
            number: '3',
            title: 'Impactful Advertising',
            text: 'We craft campaigns that captivate your audience and deliver results, optimizing and tracking your advertising for efficiency.',
          },
          {
            number: '4',
            title: 'AdTech & Data',
            text: 'We know you use a lot of tools in your business. That’s why we integrate with great software like Flodesk, WordPress, Shopify, WooCommerce, MemberPress, and much more.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row mt-5"
            ref={(el) => (headingsRef.current[index] = el)}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal mr-0 sm:mr-4 md:mr-6">
              {item.number}
            </h2>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-3">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingSection;
