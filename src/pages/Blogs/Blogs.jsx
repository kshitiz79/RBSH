









import {  ArrowRight } from "lucide-react";

import BlogHero from "../../components/Blogs/BlogHero";
const Blog = () => {


const tabs = [
  { name: "All Articles", icon: "📄", path: "/blog" },
  { name: "Design", icon: "🎨", path: "/design" },
  { name: "Marketing", icon: "📈", path: "/marketing" },
  { name: "Web Design", icon: "💻", path: "/web-development" },
];

  return (
    <>
 
      <div className="min-h-screen bg-white">
        {/* Header */}
  
<BlogHero/>
        {/* Hero Section */}

      
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide">
                    DESIGN
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  Twee as can be: The curious charm of the Wes Anderson
                  aesthetic
                </h2>
              </div>

              {/* Right Image (1/2) */}
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg overflow-hidden aspect-[6/4] w-full">
                  <div className="relative h-full flex items-center justify-center text-white">
                    {/* Decorative elements */}
                    <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-pink-300 rounded opacity-80"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="text-6xl font-bold mb-2">WES</div>
                      <div className="text-6xl font-bold text-red-600">
                        ANDERSON
                      </div>
                      <div className="text-lg mt-2 tracking-widest">
                        AESTHETIC WORLD
                      </div>
                    </div>
                    {/* Vintage elements */}
                    <div className="absolute top-6 right-6 w-20 h-24 bg-pink-200 rounded shadow-lg opacity-90">
                      <div className="p-2 text-xs text-gray-800">
                        THE GAL GAZE
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 w-16 h-20 bg-orange-300 rounded shadow-lg opacity-90"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

      <div className="bg-slate-100 py-12">
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4">
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg overflow-hidden aspect-[6/4] w-full">
                <div className="relative h-full flex items-center justify-center text-white">
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-pink-300 rounded opacity-80"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-6xl font-bold mb-2">WES</div>
                    <div className="text-6xl font-bold text-red-600">
                      ANDERSON
                    </div>
                    <div className="text-lg mt-2 tracking-widest">
                      AESTHETIC WORLD
                    </div>
                  </div>
                  {/* Vintage elements */}
                  <div className="absolute top-6 right-6 w-20 h-24 bg-pink-200 rounded shadow-lg opacity-90">
                    <div className="p-2 text-xs text-gray-800">
                      THE GAL GAZE
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 w-16 h-20 bg-orange-300 rounded shadow-lg opacity-90"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide">
                  DESIGN
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Twee as can be: The curious charm of the Wes Anderson aesthetic
              </h2>
            </div>

            {/* Right Image (1/2) */}
          </div>
        </section>
      </div>







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










        <section className="py-16 bg-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className=" overflow-hidden  transition-shadow"
                >
                  <div className="h-48 rounded-t-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
                  <div className=" bg-white py-5">
                    <div className="text-xl px-10 flex gap-2 text-orange-600 font-semibold uppercase tracking-wide  ">
                      DESIGN <ArrowRight/>
                    </div>
                 
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>









      
    </>
  );
};

export default Blog;
