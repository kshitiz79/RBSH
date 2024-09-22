import React from 'react';
import HomeParallax from '../../components/Parallax/HomeParallax';
import InfoBar from '../../components/Infobar/Infobar';
import FAQ from '../../components/FAQ/FAQ';

const AboutPage = () => {
  return (
    <>
      {/* Meta Tags for SEO */}
      <head>
        <meta name="description" content="Learn more about RBSH Studio, our core values, and how we bring creativity and innovation to design. Explore our marketplace of design solutions." />
        <meta name="keywords" content="RBSH Studio, Design Studio, Creativity, Innovation, Video Editing, Core Values, Branding" />
        <meta name="author" content="RBSH Studio" />
        <meta property="og:title" content="About Us | RBSH Studio - Design Marketplace" />
        <meta property="og:description" content="RBSH Studio is dedicated to providing turn-key design solutions that inspire creativity and innovation." />
        <meta property="og:image" content="https://rbshstudio.com/banner.jpg" />
        <meta property="og:url" content="https://rbshstudio.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>About Us | RBSH Studio - Design Marketplace</title>
      </head>

      {/* Banner Section */}
      <header className="relative w-full h-96">
        <img
          src="./banner.jpg" // Ensure this is the correct path to your image
          alt="RBSH Studio Banner"
          className="w-full h-[40rem] object-cover"
        />
        <div className="absolute inset-0 flex mt-[30rem] justify-end items-center font-lato">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-[60%] bg-white bg-opacity-90 px-4 py-4 md:px-8 rounded-l-full shadow-lg">
            <div className="text-center text-black">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">RBSH Studio Marketplace</h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg">
                Find everything you need to get your site launched quickly. Turn-key templates ready
                <br /> for you to plug, play, and launch; or customize any template to fit your brand perfectly.
                <br />
                <strong>Either way, RBSH Studio has everything you need to get started!</strong>
              </p>
            </div>
          </div>
        </div>
      </header>
<HomeParallax/>
      {/* Main Content */}
      <main className="bg-white mt-64">
        <section className="flex flex-col lg:flex-row items-start mt-12 space-y-8 lg:space-y-0 lg:space-x-8 px-4 md:px-8 py-8 md:py-16">
          {/* Left Side */}
          <article className="lg:w-2/3">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-gray-900">
              Curiosity & Creativity at RBSH Studio
            </h2>
            <p className="mt-8 md:mt-28 lg:mt-20 text-base md:text-lg text-gray-700">
            Welcome to RBSH Studio. We are your strategic partner in achieving brand excellence. We are a dynamic team of passionate visionaries who blend creativity with data-driven insights to deliver exceptional marketing solutions. 

Through innovative marketing strategies, we drive growth and success, propelling your business to new heights. <br/> <br/> We are committed to delivering measurable results that make a real impact, we specialize in a wide range of marketing services, including brand strategy, digital marketing (SEO, PPC, social media), content creation, design and development, and analytics and optimization.
            </p>
          </article>

          {/* Right Side - Core Values */}
          <aside className="lg:w-1/3 space-y-4">
            <h3 className="text-lg md:text-xl font-semibold mt-2 text-gray-800">— Our Core Values</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {["download.jpg", "download.jpg", "download.jpg", "download.jpg"].map((src, index) => (
                <img
                  key={index}
                  src={`./${src}`}
                  alt={`Core values image ${index + 1}`}
                  className="rounded-lg object-cover w-full h-32 md:h-48 lg:h-64"
                />
              ))}
            </div>
          </aside>
        </section>

        {/* InfoBar Component */}
        <section aria-labelledby="info-bar">
          <div className="auto">
            <InfoBar />
          </div>
        </section>

        {/* FAQ Component */}
        <section aria-labelledby="faq-section">
          <FAQ />
        </section>
      </main>
    </>
  );
};

export default AboutPage;
