import React from 'react';
import CardButtonGrid from '../../components/CardGrid/CardGrid';
import { Link } from 'react-router-dom';
import QuickLinks from '../../components/QuickLinks/QuickLinks';

const PhotoGraphy = () => {
  return (
    <div className="bg-white text-black">

      <div className="relative flex justify-center items-center p-4 sm:p-6">
     

        <img
          src="./services1.png"
          alt="Photography Services"
          className="w-full h-48 sm:h-[50vh] rounded object-cover"
   
        />
      </div>


      <div className="container mx-auto py-8 mt-10 px-4 sm:px-6 lg:px-24">

        <div className="flex flex-col md:flex-row">
          <QuickLinks />
     
          <div className="md:w-2/3 mt-8 md:mt-4 md:pl-8">
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed text-justify">
             
              That’s why we offer a range of web development services to help businesses establish a strong online presence and achieve their business goals.
            </p>
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 sm:mt-8 text-justify">
              Our team of experienced developers are well-versed in WordPress, a popular content management system that allows for easy updates and customizable design options. It is perfect for businesses looking for a website that can be updated easily and maintained in-house. We also support the no-code movement, which allows for website development without requiring coding knowledge.
            </p>
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 sm:mt-8 ">
              Contact us today to learn more about how we can help your business succeed online.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mb-16 sm:mb-20 px-4 sm:px-6 lg:px-24">
   
        <CardButtonGrid />
      </div>
    </div>
  );
};

export default PhotoGraphy;
