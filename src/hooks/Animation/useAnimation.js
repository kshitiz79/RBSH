// useAnimation.js
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useAnimation = () => {
  useEffect(() => {
    // Timeline for .animated-h1
    const h1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.animated-h1',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    h1Timeline
      .fromTo(
        '.animated-h1',
        { opacity: 0, y: -200 },
        {
          opacity: 1,
          y: 0,
          duration: 7,
          ease: 'power3.out',
          stagger: 0.2,
        }
      )
      

    // Animation for .animated-para
    gsap.fromTo(
      '.animated-para',
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 6,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.animated-para',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
};

export default useAnimation;
