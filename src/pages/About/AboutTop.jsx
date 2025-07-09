import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async"; // For adding SEO meta tags
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
    if (!h1Ref.current) return;

    const letters = h1Ref.current.querySelectorAll('.letter');
    gsap.set(letters, { opacity: 1 });

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 5,
    });

    tl.to(letters, {
      duration: 0.05,
      opacity: 0,
      stagger: {
        each: 0.05,
        from: 'end',
        ease: 'none',
      },
    });

    tl.to(letters, {
      duration: 0.05,
      opacity: 1,
      stagger: {
        each: 0.05,
        from: 'start',
        ease: 'none',
      },
    }, ">");

    return () => {
      tl.kill();
    };
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, index) => {
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
      {/* SEO Meta Tags */}
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
        <meta property="og:image" content="https://rbshstudio.com/og-image.png" /> {/* Replace with actual image URL */}
        <meta name="address" content="T3-236, Golden-I, Techzone IV, Greater Noida West, NCR" />
      </Helmet>

      <div
        className="
          relative 
          w-screen 
          bg-black 
          overflow-hidden
          h-[24vh]          /* Mobile: 50% of viewport height */
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

      <section className="w-full flex flex-col justify-between bg-white">
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
