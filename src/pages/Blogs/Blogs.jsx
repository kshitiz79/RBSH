import React from 'react';

const Blog = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6 sm:p-8 lg:p-36">
      {/* Header Section */}
      <header className="text-center mb-8 lg:mb-24">
        <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold">
          Is it weird to have a crush on your website builder?
        </h1>
        <p className="mt-4 text-base sm:text-lg">
          We don't think so — and neither do these happy people
        </p>
      </header>

      {/* Main Content Section */}
      <main>
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {/* Column 1: Text and Video Blocks */}
          <article className="space-y-6">
            {/* Testimonial 1 */}
            <div className="bg-yellow-200 p-4 sm:p-6 rounded-lg">
              <blockquote>
                "Showit has changed my business and enabled me to make products
                that have been on my plate for over 6 years. The modular
                functionality and superior support have been so easy. The design
                of my site was SO easy, and I've been able to elevate my brand in
                a really beautiful way that puts $$ on the table."
              </blockquote>
              <cite className="block mt-4 font-bold">LEAH HUETE</cite>
            </div>

            {/* Video 1 */}
            <div className="bg-yellow-200 p-4 sm:p-6 rounded-lg">
              <figure>
                <iframe
                  className="w-full h-40 sm:h-64"
                  src="https://www.youtube.com/embed/sample-video-1"
                  title="Testimonial Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <figcaption className="text-center mt-2">
                  Testimonial from Leah Huete
                </figcaption>
              </figure>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
              <blockquote>
                "If you want to have a website that stands out and looks
                professional, you should invest in SHOWIT!!"
              </blockquote>
              <cite className="block mt-4 font-bold">NIKKI MONTOYA</cite>
            </div>
          </article>

          {/* Column 2: Text and Video Blocks */}
          <article className="space-y-6">
            {/* Testimonial 3 */}
            <div className="bg-orange-500 p-4 sm:p-6 rounded-lg">
              <blockquote>
                "After 10 years of building websites, I haven't had any platform
                come close to Showit."
              </blockquote>
              <cite className="block mt-4 font-bold">TYLER DUGONI</cite>
            </div>

            {/* Video 2 */}
            <div className="bg-blue-200 p-4 sm:p-6 rounded-lg">
              <figure>
                <iframe
                  className="w-full h-40 sm:h-64"
                  src="https://www.youtube.com/embed/sample-video-2"
                  title="Testimonial Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <figcaption className="text-center mt-2">
                  Testimonial from Tyler Dugoni
                </figcaption>
              </figure>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-gray-200 p-4 sm:p-6 rounded-lg">
              <blockquote>
                "I LOVE my website!!! Showit allowed me to have full control over
                the look and feel and were readily available and fast to respond
                when I needed help."
              </blockquote>
              <cite className="block mt-4 font-bold">BRIDGETTE GIPSON</cite>
            </div>
          </article>

          {/* Column 3: Text and Video Blocks */}
          <article className="space-y-6">
            {/* Testimonial 5 */}
            <div className="bg-yellow-100 p-4 sm:p-6 rounded-lg">
              <blockquote>
                "My website is beautiful! And it's improved my overall conversion
                rate."
              </blockquote>
              <cite className="block mt-4 font-bold">JEN MCKEE</cite>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-orange-200 p-4 sm:p-6 rounded-lg">
              <blockquote>
                "I have zero knowledge in website building, and I was very nervous
                creating mine. Showit is so easy, and whenever I needed help, I
                had it within a few hours!"
              </blockquote>
              <cite className="block mt-4 font-bold">HAYLEY HOLMES</cite>
            </div>

            {/* Testimonial 7 */}
            <div className="bg-yellow-100 p-4 sm:p-6 rounded-lg">
              <blockquote>"So frickin' easy, it almost feels too good to be true!"</blockquote>
              <cite className="block mt-4 font-bold">LAUREN BRYANT</cite>
            </div>

            {/* Video 3 */}
            <div className="bg-yellow-200 p-4 sm:p-6 rounded-lg">
              <figure>
                <iframe
                  className="w-full h-40 sm:h-64"
                  src="https://www.youtube.com/embed/sample-video-3"
                  title="Testimonial Video 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <figcaption className="text-center mt-2">
                  Testimonial from Lauren Bryant
                </figcaption>
              </figure>
            </div>

            {/* Testimonial 8 */}
            <div className="bg-orange-500 p-4 sm:p-6 rounded-lg">
              <blockquote>
                "Of all the platforms I used to build different types of websites,
                landing pages, and sales funnels, this is the real deal."
              </blockquote>
              <cite className="block mt-4 font-bold">NJ ASUNCION</cite>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Blog;
