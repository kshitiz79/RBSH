import { useEffect, useState,  useRef } from "react";
import { gsap } from 'gsap';



const AboutTop = () => {
  const phrases = ["We Brainstorm.", "We Create.", "We Deliver."];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const h1Ref = useRef(null);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 700);

    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    // Ensure that h1Ref is assigned before querying
    if (!h1Ref.current) return;
  
    // Select all elements with the class 'letter' inside the h1
    const letters = h1Ref.current.querySelectorAll('.letter');
  
    // Set initial opacity to 1 for all letters to ensure they are visible at start
    gsap.set(letters, { opacity: 1 });
  
    // Create a GSAP timeline
    const tl = gsap.timeline({
      repeat: -1,       // Repeat infinitely
      repeatDelay: 5,   // Wait for 5 seconds before repeating
    });
  
    // Step 1: Fade out letters from end to start
    tl.to(letters, {
      duration: 0.05,    // Duration for each letter's fade-out
      opacity: 0,        // Fade to opacity 0
      stagger: {
        each: 0.05,      // Delay between each letter's animation
        from: 'end',     // Start staggering from the end
        ease: 'none',    // Linear easing for consistent timing
      },
    });
  
    // Step 2: Fade in letters from start to end (reverse of fade out)
    tl.to(letters, {
      duration: 0.05,    // Duration for each letter's fade-in
      opacity: 1,        // Fade to opacity 1
      stagger: {
        each: 0.05,      // Delay between each letter's animation
        from: 'start',   // Start staggering from the start
        ease: 'none',    // Linear easing for consistent timing
      },
    }, ">"); // Start this tween immediately after the previous one

    return () => {
      tl.kill();
    };
  }, []);
  


  const splitText = (text) => {
    return text.split('').map((char, index) => {
      // Replace spaces with non-breaking spaces to preserve spacing
      if (char === ' ') {
        return (
          <span key={index} className="letter text-black">
            &nbsp;
          </span>
        );
      }
      return (
        <span key={index} className="letter text-black">
          {char}
        </span>
      );
    });
  };


  return (
    <>
      <div
        className="
          relative 
          w-screen 
          bg-black 
          overflow-hidden
          h-[32vh]          /* Mobile: 50% of viewport height */
          md:h-[65vh]       /* Tablet: 65% of viewport height */
          lg:h-screen       /* Laptop and above: 100% of viewport height */
        "
      >
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/ABOUTUS.mp4" // Replace with your video path
          autoPlay
          muted
          loop
        ></video>
      </div>

      <section className="w-full flex flex-col  justify-between bg-white">
        <div
          className="
            flex 
            flex-col 
            h-full 
            bg-slate-100 
            space-y-2 
            px-4          /* Mobile padding */
            py-6          /* Mobile padding */
            md:px-16      /* Tablet padding */
            md:py-10      /* Tablet padding */
            lg:py-32
          "
        >
          <h1
            className="
              text-3xl      /* Mobile text size */
              md:text-5xl   /* Tablet and up text size */
              font-bold 
              leading-tight 
              mb-4         /* Mobile margin bottom */
            "
            ref={h1Ref}
          >
            {splitText('This is RBSH ')}
            <span className="block">{splitText('Original in digital')}</span>
          </h1>
          <p
            className="
              text-2xl      /* Mobile text size */
              md:text-5xl   /* Tablet and up text size */
              font-light
            "
          >
            {phrases[currentPhraseIndex]}
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutTop;