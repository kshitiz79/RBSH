

const Career = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-6 md:py-12">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold outline-heading">CAREERS</h1>
        </header>
      </section>

      {/* Why Work with Us Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center py-6 md:py-12 px-6 md:px-0">
        <figure className="w-full md:w-1/2 p-4">
          <img
            src="./download.jpg" // Replace with actual image source
            alt="David Ogilvy, 1978"
            className="w-full h-auto rounded-md object-cover"
          />
        </figure>
        <article className="w-full md:w-1/2 p-4 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Why Work with Us?</h2>
          <p className="text-base md:text-lg leading-relaxed">
            At RBSH Studio, we believe in nurturing talent and creating an environment where everyone can succeed. Here are some reasons why you should consider joining our team:
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Ogilvy has been there every step of the way, shepherding the world’s most successful brands through uncertainty and helping them adapt and stay relevant for the long term.
          </p>
        </article>
      </section>

      {/* Diversity and Inclusion Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center py-6 md:py-12 px-6 md:px-0">
        <article className="w-full md:w-1/2 p-4 order-2 md:order-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Diversity and Inclusion</h2>
          <p className="text-base md:text-lg leading-relaxed">
            At Ogilvy, our people are at the heart of what we do: a creative agency that sparks game-changing ideas through collaboration, integrity, and a celebration of self-expression.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            We build powerful teams with purpose, hiring talent across all races, ethnicities, religions, abilities, sexual orientations, and gender identities, ensuring equity and fairness.
          </p>
        </article>
        <figure className="w-full md:w-1/2 p-4 order-1 md:order-2">
          <img
            src="./download.jpg" // Replace with actual image source
            alt="Employee making a comment during a Town Hall staff meeting"
            className="w-full h-auto rounded-md object-cover"
          />
        </figure>
      </section>

      {/* Who We Are Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center py-6 md:py-12 px-6 md:px-0">
        <figure className="w-full md:w-1/2 p-4">
          <img
            src="./download.jpg" // Replace with actual image source
            alt="David Ogilvy, 1978"
            className="w-full h-auto rounded-md object-cover"
          />
        </figure>
        <article className="w-full md:w-1/2 p-4 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Who We Are</h2>
          <p className="text-base md:text-lg leading-relaxed">
            Ogilvy was founded in 1948 as one office. Today, we operate as a creative network in 132 locations across 83 countries. Throughout this growth, the world has transformed beyond recognition.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Ogilvy has been there every step of the way, helping the world’s most successful brands navigate change and adapt for the long term.
          </p>
        </article>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto py-6 md:py-12 text-center px-6">
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold italic leading-relaxed">
          “Talent, I believe, is most likely to be found among nonconformists, rebels, and dissenters.”
          <br />
          <span className="text-xl md:text-2xl">– David Ogilvy</span>
        </blockquote>
      </section>

      {/* Diversity and Inclusion Section (Repeat) */}
      <section className="container mx-auto flex flex-col md:flex-row items-center py-6 md:py-12 px-6 md:px-0">
        <article className="w-full md:w-1/2 p-4 order-2 md:order-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Diversity and Inclusion</h2>
          <p className="text-base md:text-lg leading-relaxed">
            At Ogilvy, our people are at the heart of what we do: a creative agency that sparks game-changing ideas through collaboration, integrity, and a celebration of self-expression.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            We build powerful teams with purpose, hiring talent across all races, ethnicities, religions, abilities, sexual orientations, and gender identities, ensuring equity and fairness.
          </p>
        </article>
        <figure className="w-full md:w-1/2 p-4 order-1 md:order-2">
          <img
            src="./download.jpg" // Replace with actual image source
            alt="Employee engaged in a discussion"
            className="w-full h-auto rounded-md object-cover"
          />
        </figure>
      </section>
    </div>
  );
};

export default Career;
