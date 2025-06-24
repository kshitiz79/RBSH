import React, { useEffect } from 'react';

// Configure each testimonial in code with its own background and text color
const testimonials = [
  {
    title: 'Digital marketing in 2025 is revolutionized by AI-powered personalization, tailoring experiences in real time.',
    titleFont: 'font-awesome',
    textSize: 'text-4xl',
    bgColor: "bg-[#dfeefc]",
    textColor: "text-black",
  },
  {
    title: 'Voice search reshapes SEO as natural language queries drive content discovery on smart devices.',
    titleFont: 'font-mono',
    textSize: 'text-3xl',
    bgColor: "bg-[#A5654E]",
    textColor: "text-white",
  },
  {
    title: 'AI-driven digital advertising optimizes targeting and creative content to boost conversions.',
    titleFont: 'font-serif',
    textSize: 'text-4xl',
    bgColor: "bg-[#93A0BD]",
    textColor: "text-white",
  },
  {
    title: 'E-commerce SEO leverages fast-loading sites, structured data, and user reviews for higher rankings.',
    titleFont: 'font-roboto',
    textSize: 'text-3xl',
    bgColor: "bg-[#fff9bf]",
    textColor: "text-black",
  },
  {
    title: 'Social media branding demands consistent identities, influencer partnerships, and dynamic content.',
    titleFont: 'font-serif',
    textSize: 'text-4xl',
    bgColor: "bg-[#DA9E38]",
    textColor: "text-white",
  },
  {
    title: 'Video marketing becomes essential, with short-form and live streaming content engaging audiences deeply.',
    titleFont: 'font-serif',
    textSize: 'text-4xl',
    bgColor: "bg-[#ffceb4]",
    textColor: "text-black",
  },
  {
    title: 'AI transforms content marketing through automation, smart SEO, and hyper-personalized user interactions.',
    titleFont: 'font-roboto',
    textSize: 'text-3xl',
    bgColor: "bg-[#00c0ef]",
    textColor: "text-black",
  },
  {
    title: 'Website speed is critical for SEO, reducing bounce rates and enhancing user experience.',
    titleFont: 'font-serif',
    textSize: 'text-4xl',
    bgColor: "bg-[#93A0BD]",
    textColor: "text-white",
  },
  {
    title: 'Integrating these trends ensures brands remain competitive in the rapidly evolving digital landscape.',
    titleFont: 'font-serif',
    textSize: 'text-4xl',
    bgColor: "bg-[#ffcf55]",
    textColor: "text-black",
  },
];



// Define videos to be inserted
const videos = [
  './videoblog4.mp4', // 1st video
  './videoblog2.mp4', // 2nd video
  './videoblog1.mp4',  // 3rd video
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const NUM_COLUMNS = 3;
  const columns = Array.from({ length: NUM_COLUMNS }, () => []);

  // Distribute testimonials among columns
  testimonials.forEach((testimonial, index) => {
    columns[index % NUM_COLUMNS].push({ ...testimonial, index });
  });

  return (
    <div className="p-6 sm:p-8  lg:mt-0 bg-gray-900 ">
      <header className="text-center mb-8 mt-10 lg:mb-14">
        <h1 className="relative text-base sm:text-2xl md:text-3xl lg:text-4xl mb-3 font-semibold text-white font-mono">
          Rewriting the Rules of Blogs <br /> 
          <span className="mt-10 font-thin text-sm sm:text-2xl md:text-3xl lg:text-3xl">with Cutting-Edge Tech</span>  
        </h1>
        <h2 className="relative text-xs sm:text-base md:text-2xl lg:text-2xl font-normal text-white font-roboto">
          Innovation Meets Impact <br /> And These Brands Are Living Proof
        </h2>
      </header>

      <main>
        <section className="flex flex-col sm:flex-row gap-6 lg:-mt-32 lg:p-28">
          {columns.map((columnTestimonials, columnIndex) => (
            <div key={columnIndex} className="flex-1 space-y-6">
              {/* Column 1: Insert 1st video at the top */}
              {columnIndex === 0 && (
                <div className="flex items-center justify-center">
                  <video
                    src={videos[0]}
                    className="w-full lg:h-[70vh] rounded-3xl object-cover border-[0.8rem] border-yellow-400"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              )}

              {columnIndex === 2 ? (
                // Column 3: Insert 3rd video at the second position
                columnTestimonials.map((testimonial, idx) => (
                  <React.Fragment key={testimonial.index}>
                    {idx === 1 && (
                      <div className="flex items-center justify-center">
                        <video
                          src={videos[2]}
                          className="w-full lg:h-[70vh] rounded-3xl object-cover border-[0.8rem] border-blue-600"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    )}
                    <article className="space-y-2">
                      <div className={`${testimonial.bgColor} p-4 sm:p-6 rounded-3xl transition-all duration-500 ease-in-out overflow-hidden`}>
                        <div className="text-center mb-4">
                          <div className={`${testimonial.textSize} ${testimonial.titleFont} ${testimonial.textColor}`}>
                            <p>{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </React.Fragment>
                ))
              ) : (
                // Column 1 (after the top video) and Column 2
                columnTestimonials.map((testimonial) => (
                  <article key={testimonial.index} className="space-y-2">
                    <div className={`${testimonial.bgColor} p-4 sm:p-6 rounded-3xl transition-all duration-500 ease-in-out overflow-hidden`}>
                      <div className="text-center mb-4">
                        <div className={`${testimonial.textSize} ${testimonial.titleFont} ${testimonial.textColor}`}>
                          <p>{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              )}

              {/* Column 2: Insert 2nd video at the bottom */}
              {columnIndex === 1 && (
                <div className="flex items-center justify-center">
                  <video
                    src={videos[1]}
                    className="w-full lg:h-[70vh] rounded-3xl object-cover border-[0.8rem] border-white"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Blog;
