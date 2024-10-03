
import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';




const Career = () => {

  const images = [
    './careerslider1.png',
    './careerslider2.png',
    './careerslider3.png',
  

  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);


  const [activeText, setActiveText] = useState('HOW');

 // Set initial state as false




  // This object holds the text content for each tab
  const textContent = {
    // MAFIA: "Would you be the good old Thakur who's remembered only in Gabbar’s dialogues, or would you rather be Gabbar himself, whose name is iconic?",
    HOW: "We believe in power of collaboration. At RBSH, every voice counts, and we foster an open environment where innovation flourishes. By blending technology and creativity, we deliver campaigns that exceed expectations. You’ll work alongside passionate professionals who share your drive for excellence.",
    WHY: "We are a community of forward-thinkers dedicated to creating bold, innovative work. Our culture is built on inclusion, adaptability, and collaboration. If you’re looking to make an impact in a supportive and dynamic environment, RBSH Studio is where you can leave your mark and shape the future of advertising.",
    WHAT: "Joining RBSH Studio means more than just a job — it’s a career investment. We provide the mentorship, tools, and opportunities to help you grow. You’ll work on cutting-edge projects that challenge and inspire you, with a team that celebrates your achievements and values your development. "
  }
  const getArrowPosition = () => {
    switch (activeText) {
      case 'HOW':
        return '10%';  // Adjust the percentage based on the layout
      case 'WHY':
        return '40%';  // Adjust as necessary
      case 'WHAT':
        return '67%';  // Adjust as necessary
      default:
        return '10%';
    }
  };

  return (
    <>

<section className="flex flex-row items-center bg-blue-600 p-10 lg:h-[80vh] relative h-[38vh]">
      {/* Left section with text */}
      <div className="flex-1 text-white hollow-text-white text-3xl md:text-9xl  lg:text-9xl font-extrabold space-y-4 lg:ml-[11%] font-lato ">
    <p
      className={`hover:text-white cursor-pointer ${activeText === 'HOW' ? 'text-white' : ''}`}
      onMouseEnter={() => setActiveText('HOW')}
    >
      HOW
    </p>
    <p
      className={`hover:text-white cursor-pointer ${activeText === 'WHY' ? 'text-white' : ''}`}
      onMouseEnter={() => setActiveText('WHY')}
    >
      WHY
    </p>
    <p
      className={`hover:text-white cursor-pointer ${activeText === 'WHAT' ? 'text-white' : ''}`}
      onMouseEnter={() => setActiveText('WHAT')}
    >
      WHAT
    </p>
  </div>

      {/* Right section with active arrow */}
      <div className="max-w-lg bg-white lg:px-12 lg:py-12  rounded-2xl shadow-lg lg:mr-60 relative px-6 py-6 sm:py-6  md:px-6 ml-12  md:mr-32   ">
        {/* Arrow that moves with active text */}
        <div
          className="absolute left-[-2rem] text-white"
          style={{ top: getArrowPosition(), fontSize: '3rem' }}// Dynamically setting the top position
        >
          &#9664; {/* Arrow symbol */}
        </div>

        <p className=" md:text-xl text-black text-justify lg:w-80 lg:mb-20  lg:text-xl  text-[0.6rem]   md:mb-6  ">
          {textContent[activeText]}
        </p>
      </div>
    </section>


    <div className="bg-white text-black">
        <section className="container mx-auto py-6 md:py-12 px-4 md:px-32">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold outline-heading uppercase">Our Core Values</h1>
            <p className="mt-4 md:mt-10 text-lg md:text-xl text-justify">
              At the heart of everything we do are our core values. These guide our decisions, define our work environment, and help us maintain our vision:
            </p>

            <div className="mt-4 md:mt-6 space-y-3">
              <p className="text-sm md:text-base leading-relaxed text-justify">
                <span className="font-bold uppercase">Integrity:</span> We uphold the highest standards of integrity in all of our actions.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-justify">
                <span className="font-bold uppercase">Collaboration:</span> We work together to achieve common goals and support each other's growth.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-justify">
                <span className="font-bold uppercase">Excellence:</span> We are committed to excellence in everything we do, constantly striving to improve.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-justify">
                <span className="font-bold uppercase">Customer-Centricity:</span> Our customers are at the centre of everything we do, and we go the extra mile to exceed their expectations.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full h-64 md:h-80 mx-auto px-4">
        <Swiper
  spaceBetween={30}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 3000 }}
  modules={[Autoplay]}
  className="h-full w-full"
>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>




      <div className="flex flex-col md:flex-col lg:flex-row  h-auto lg:h-[70vh] md:h-[50vh] p-6 md:p-0 lg:mt-16 md:mt-10">
        {/* "WORK WITH US" text with black stroke */}
        <h1 className="text-left inline-block text-6xl lg:text-[12rem]  md:text-[10rem] font-bold leading-tight md:ml-36 lg:ml-14 hollow-text-black font-lato mt-5 md:mt-9">
          WORK<br />WITH US
        </h1>

        <div className="w-full lg:w-1/4 md:w-4/6 mx-auto mt-9  px-4  ">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 lg:mt-6">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="First Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Last Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Phone"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location (City) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Location (City)"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Career;