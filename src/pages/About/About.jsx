
import FAQ from "../../components/FAQ/FAQ";


import { useEffect } from "react";
import { Helmet } from "react-helmet-async"; // Import for SEO meta tags

import AboutSection from "./AboutSection";
import ValuesSection from "../../components/About/ValueSection";
import Text from "../../components/About/Text";
import WhyRBSH from "../../components/About/WhyRBSH";
import { ImageRippleDemo } from "../../components/About/ImageReppleDemo";


// import HorizontalAboutSection from "../../components/About/HorizontalAbout";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Us | RBSH Studio - Design Marketplace</title>
        <meta
          name="description"
          content="Learn more about RBSH Studio, our core values, and how we bring creativity and innovation to design. Explore our marketplace of design solutions."
        />
        <meta
          name="keywords"
          content="RBSH Studio, Design Studio, Creativity, Innovation, Video Editing, Core Values, Branding"
        />
        <meta name="author" content="RBSH Studio" />
        <meta
          property="og:title"
          content="About Us | RBSH Studio - Design Marketplace"
        />
        <meta
          property="og:description"
          content="RBSH Studio is dedicated to providing turn-key design solutions that inspire creativity and innovation."
        />
        <meta property="og:image" content="https://rbshstudio.com/banner.jpg" />
        <meta property="og:url" content="https://rbshstudio.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Optional: Ensure proper scaling on mobile devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      {/* <HorizontalAboutSection/> */}
      <AboutSection/>
      <ValuesSection/>
      <Text/>
      <WhyRBSH/>
      {/* <ImageRippleDemo/> */}

      <main className="bg-white relative">
  

        <section aria-labelledby="faq-section">
          <FAQ />
        </section>
      </main>
    </>
  );
};

export default AboutPage;
