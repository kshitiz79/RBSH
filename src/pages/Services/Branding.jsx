import React from 'react';
import CardButtonGrid from '../../components/CardGrid/CardGrid';
import QuickLinks from '../../components/QuickLinks/QuickLinks';

const Branding = () => {
  return (
    <div className="bg-white text-black">

      <div className="relative flex justify-center items-center p-4 sm:p-6">

        <img
          src="./services5.png"
          alt="Editing 1"
          className="w-full h-48 sm:h-[50vh] rounded object-cover"
   
        />
      </div>

      <div className="container mx-auto py-8 mt-10 px-4 sm:px-6 lg:px-24">
  
        <div className="flex flex-col md:flex-row">
          <QuickLinks />
     
          <div className="md:w-2/3 mt-8 md:mt-4 md:pl-8">
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed">
         
              At RBSH, we know branding is key to business success. Beyond logos, it’s the story, emotion, and connection your audience feels. We offer logo design, brand development, packaging, and print design, all to make your brand cohesive, compelling, and unforgettable.
            </p>
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 sm:mt-8">
              We create impactful visuals that convey your brand’s identity. From digital designs to print materials, our graphic design services ensure each element is tailored to reflect your brand and engage your audience, helping you achieve your goals.
            </p>

          </div>
        </div>
      </div>


      <div className="mb-16 sm:mb-20 px-4 sm:px-6 lg:px-24">
  
        <CardButtonGrid />
      </div>
    </div>
  );
};

export default Branding;
