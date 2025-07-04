









import {  ArrowRight } from "lucide-react";

import BlogHero from "../../components/Blogs/BlogHero";


const iconItems = [
  { icon: "/icons/photoshop.png", label: "Photoshop" },
  { icon: "/icons/illustrator.png", label: "Illustrator" },
  { icon: "/icons/indesign.png", label: "InDesign" },
  { icon: "/icons/fonts.png", label: "Fonts" },
  { icon: "/icons/graphic.png", label: "Graphic Design" },
  { icon: "/icons/photos.png", label: "Photos" },
];


const  WebDevelopment = () => {




  return (
    <>
 
      <div className="min-h-screen bg-white">
        {/* Header */}
  
<BlogHero/>
        {/* Hero Section */}

      

        {/* Additional Articles Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white overflow-hidden  transition-shadow"
                >
                  <div className="h-48 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500"></div>
                  <div className="">
                    <div className="text-xs text-orange-600 font-semibold uppercase tracking-wide mt-3">
                      DESIGN
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ">
                      Creative Design Trends : it is good to fill for 2 024
                      Creative Design Trends for 2024
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>



      <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-500 mb-5 ">Latest</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white overflow-hidden  transition-shadow"
                >
                  <div className="h-48 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500"></div>
                  <div className="">
                    <div className="text-xs text-orange-600 font-semibold uppercase tracking-wide mt-3">
                      DESIGN
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ">
                      Creative Design Trends : it is good to fill for 2 024
                      Creative Design Trends for 2024
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>














<div className="flex max-w-7xl space-x-36 overflow-x-auto mx-auto px-4 py-6 ">
      {iconItems.map((item, index) => (
        <div key={index} className="flex flex-col justify-between max-w-7xl items-center">
          <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center">
            <img src={item.icon} alt={item.label} className="w-7 h-7" />
          </div>
          <span className="text-sm mt-2 text-gray-700">{item.label}</span>
        </div>
      ))}

      {/* Right arrow button */}
      {/* <button className="ml-4 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center">
        <span className="text-xl">{'>'}</span>
      </button> */}
    </div>


      







   {/* Additional Articles Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">

         <h1 className="text-4xl font-bold text-gray-500 mb-5 ">More in Design</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white overflow-hidden  transition-shadow"
                >
                  <div className="h-48 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500"></div>
                  <div className="">
                    <div className="text-xs text-orange-600 font-semibold uppercase tracking-wide mt-3">
                      DESIGN
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ">
                      Creative Design Trends : it is good to fill for 2 024
                      Creative Design Trends for 2024
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>















      
    </>
  );
};





export default WebDevelopment