
import CardButtonGrid from '../../components/CardGrid/CardGrid';

import QuickLinks from '../../components/QuickLinks/QuickLinks';

const WebDesign = () => {
  return (
    <div className="bg-white text-black">

      <div className="relative flex justify-center items-center p-4 sm:p-6">
    
        <img
          src="./service.png"
          alt="Web Design Services"
          className="w-full h-48 sm:h-[50vh] rounded object-cover"
          loading="lazy"
        />
      </div>


      <div className="container mx-auto py-8 mt-10 px-4 sm:px-6 lg:px-24">
       
        <div className="flex flex-col md:flex-row">
          <QuickLinks />
         
          <div className="md:w-2/3 mt-8 md:mt-4 md:pl-8">
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed text-justify">
              Our web design and development services are focused on creating visually stunning, user-friendly websites that drive results. We start by understanding your brand, audience, and goals, allowing us to craft a website that not only looks great but also functions seamlessly. Our design process prioritizes intuitive navigation, responsive layouts, and engaging visuals, ensuring that your website provides an exceptional user experience across all devices.
            </p>
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 sm:mt-8 text-justify">
              Our holistic approach to web design and development ensures that your website is not only an extension of your brand but also a powerful tool for achieving your business objectives. With our services, you’ll have a website that attracts visitors, engages them, and converts them into loyal customers.
            </p>
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 sm:mt-8 text-justify">
              Contact us today to learn more about how we can help your business succeed online.
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

export default WebDesign;
