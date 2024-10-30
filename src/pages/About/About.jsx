import InfoBar from "../../components/Infobar/Infobar";
import FAQ from "../../components/FAQ/FAQ";
import AboutTop from "./AboutTop";
import AboutPhotoGrid from "./AboutPhotoGrid";
import About3 from "./About3";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async"; // Import for SEO meta tags
import InfoBar2 from "../../components/Infobar2/InfoBar2";

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
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
      </Helmet>

      {/* Page Content */}
      <AboutTop />
      <AboutPhotoGrid />
      <About3 />

      {/* Image-Text Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h3 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mb-5">
              OUR VISION
            </h3>
            <p className="mb-6 text-base sm:text-lg md:text-xl text-gray-700 text-justify">
              We collaborate with visionary brands to help them evolve and succeed. By
              transforming brand culture into passionate advocacy, we leverage digital
              strategies to create a loyal and engaged customer community. We craft
              compelling narratives that resonate deeply, turning brand stories into
              excellent experiences. Our innovative approaches bridge the gap between
              technology and emotion, driving meaningful engagement. Together, we
              redefine possibilities, building a future where your brand not only
              thrives but leads the way.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <img
              src="./aboutus.png" // Replace with your image URL
              alt="Innovative Solutions"
              className="w-96 sm:w-full h-48  sm:h-64 md:h-[25rem]  object-cover rounded shadow-lg "
            />
          </div>
        </div>
      </section>

      <main className="bg-white relative">
        <section aria-labelledby="info-bar">
          <div className="auto">
          <InfoBar2/>
          </div>
        </section>

        <section aria-labelledby="faq-section">
          <FAQ />
        </section>
      </main>
    </>
  );
};

export default AboutPage;
