"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// import { motion, useAnimation, useInView } from "framer-motion";

const ValuesSection = () => {
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
    const letters = h1Ref.current.querySelectorAll(".letter");
    gsap.set(letters, { opacity: 1 });
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });

    tl.to(letters, {
      duration: 0.05,
      opacity: 0,
      stagger: { each: 0.05, from: "end", ease: "none" },
    });
    tl.to(
      letters,
      {
        duration: 0.05,
        opacity: 1,
        stagger: { each: 0.05, from: "start", ease: "none" },
      },
      ">"
    );

    return () => tl.kill();
  }, []);



  return (
    <section className="relative bg-[#0A0D11] text-white px-6 md:px-20 overflow-hidden">
      <h1
        ref={h1Ref}
        className="top-0 left-0 text-[8rem] md:text-[11rem] font-bold text-[#E6E8EA] leading-none -z-10 tracking-tight select-none"
      >
        {phrases[currentPhraseIndex]}
      </h1>

      <div className="relative z-10 max-w-2xl ml-auto mt-32">
        {/* Description Block */}
        <div className="flex items-start gap-8 ">
          <img
            src="https://atolldigital.com/wp-content/uploads/2025/01/force-icon.svg"
            alt="Icon"
            className="w-32"
          />
          <p className="text-xl text-[#E6E8EA] leading-snug max-w-lg">
            Our passionate team of creatives thrives on collaboration and
            innovation. We blend artistic vision with strategic insight,
            ensuring that every campaign reflects the authentic essence of your
            brand.
          </p>
        </div>
      </div>
  
    </section>
  );
};


export default ValuesSection;
