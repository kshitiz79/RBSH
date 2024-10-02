import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const About3 = () => {
  const [bgColor, setBgColor] = useState("bg-red-700");
  const sectionRef = useRef(null);
  const [currentPara, setCurrentPara] = useState(0);
  const textRef = useRef(null);
  const [wordsPerLine, setWordsPerLine] = useState(18);

  const paragraphs = [
    "At RBSH Studio, we understand that every brand has a unique story waiting to be told. Our journey begins with a deep dive into your brand’s ethos, values, and vision. We believe that understanding your goals is crucial to crafting impactful marketing strategies that resonate with your audience. By aligning our creative efforts with your aspirations, we set the foundation for extraordinary campaigns that capture attention and inspire action.",
    "Our passionate team of creatives thrives on collaboration and innovation. We blend artistic vision with strategic insight, ensuring that every campaign reflects the authentic essence of your brand. By prioritizing emotional connections, we transform ideas into compelling narratives that engage, inspire, and leave a lasting impression. Whether it’s through eye-catching visuals, persuasive storytelling, or immersive experiences, we’re dedicated to showcasing your brand in a way that truly resonates with your audience.",
    "Our commitment to excellence means that every detail is meticulously executed. We leverage our expertise and cutting-edge technology to create campaigns that not only meet but exceed your expectations. Our systematic approach ensures that all aspects of your marketing strategy are aligned and effective, leading to measurable results. We monitor and adapt our strategies in real-time, guaranteeing that your brand remains relevant and impactful in an ever-evolving marketplace.",
  ];

  // Handle dynamic words per line based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Mobile
        setWordsPerLine(10);
      } else if (window.innerWidth < 1024) { // Tablet
        setWordsPerLine(15);
      } else { // Laptop/Desktop
        setWordsPerLine(18);
      }
    };

    handleResize(); // Set initial value

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Rotate paragraphs every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPara((prev) => (prev + 1) % paragraphs.length);
    }, 3000); // Change paragraph every 3 seconds

    return () => clearInterval(interval);
  }, [paragraphs.length]);

  // Change background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          setBgColor("bg-black");
        } else {
          setBgColor("bg-red-700");
        }
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case the page is already scrolled
    handleScroll();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // GSAP animation for text
  useEffect(() => {
    const text = textRef.current;
    const letters = text.querySelectorAll(".letter");

    const tl = gsap.timeline({
      repeat: -1, // Repeat infinitely
      repeatDelay: 5, // Wait for 5 seconds before repeating
    });

    // Step 1: Fade out letters from end to start
    tl.to(letters, {
      duration: 0.05, // Duration for each letter's fade-out
      opacity: 0, // Fade to opacity 0
      stagger: {
        each: 0.05, // Delay between each letter's animation
        from: 'end', // Start staggering from the end
        ease: 'none', // Linear easing for consistent timing
      },
    });

    // Step 2: Fade in letters from start to end (reverse of fade out)
    tl.to(letters, {
      duration: 0.05, // Duration for each letter's fade-in
      opacity: 1, // Fade to opacity 1
      stagger: {
        each: 0.05, // Delay between each letter's animation
        from: 'start', // Start staggering from the start
        ease: 'none', // Linear easing for consistent timing
      },
    }, ">");

    return () => {
      tl.kill(); // Cleanup the timeline if component unmounts
    };
  }, []);

  // Function to split paragraph into lines based on wordsPerLine
  const splitParagraphIntoLines = (text, wordsPerLine) => {
    const words = text.split(" ");
    const lines = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(" "));
    }
    return lines;
  };

  // Function to split text into individual letters for animation
  const splitTextToLetters = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="letter" style={{ display: 'inline-block' }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <>
      <div
        ref={sectionRef}
        className={`relative ${bgColor} text-white min-h-screen sm:h-80[vh] flex flex-col justify-between`}
      >
        {/* Top Static Paragraphs */}
        <div
          className="px-4 sm:px-6 md:px-10 py-6 md:py-10 space-y-4 text-base sm:text-lg md:text-4xl"
          ref={textRef}
        >
          <p className="text-2xl sm:text-3xl md:text-5xl">
            <strong>{splitTextToLetters("Open your eyes to a new way.")}</strong>
          </p>
          <p className="text-sm sm:text-base md:text-xl">
            We build visually.{' '}
            <strong className="text-semibold">
              {splitTextToLetters("Put feelings over numbers.")}
            </strong>
          </p>
          <p className="text-sm sm:text-base md:text-xl">
            Stay small on purpose.{' '}
            <strong className="text-semibold">
              {splitTextToLetters("And deliver like clockwork.")}
            </strong>
          </p>
        </div>

        {/* Rotating Paragraphs at the Bottom */}
        <div className="px-4 sm:px-6 md:px-10 py-6 md:py-10 w-full  mb-28 lg:mb-2 ">
          <div className="relative flex items-center text-xs sm:text-sm md:text-xl h-auto sm:h-24 md:h-28 lg:h-32 justify-center">
            {paragraphs.map((para, index) => (
              <div
                key={index}
                className={`absolute w-full font-semibold transition-opacity duration-1000 ${
                  currentPara === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {splitParagraphIntoLines(para, wordsPerLine).map((line, idx) => (
                  <p key={idx} className="mb-1 sm:mb-2 text-justify">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About3;
