import { useState } from "react";

import AnimatedIntro from "../../components/Blogs/AnimatedIntro";

const Blog = () => {
  const [activeTab, setActiveTab] = useState("All Articles");

  const tabs = [
    { name: "All Articles", icon: "📄" },
    { name: "Video & Music", icon: "🎵" },
    { name: "Design", icon: "🎨" },
    { name: "Marketing", icon: "📈" },
    { name: "Web Design", icon: "💻" },
  ];

  return (
    <>
    <AnimatedIntro/>
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Navigation */}
    

          {/* Main Navigation */}
        
        </div>
      </header>

      {/* Hero Section */}
      <div
      //  style={{
      //   backgroundImage: "url('https://img.freepik.com/premium-photo/light-purple-paper-texture-high-resolution-photo_463999-525.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   opacity :10,
      // }}
      >
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Learn, Create, Be Inspired.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From design and video to marketing and web design, elevate your creative skills
            with our tutorials, trends, expert interviews, and guides.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.name
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* Featured Article Section */}
      <section className="py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content (1/2) */}
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
      <div className="relative">
        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg overflow-hidden aspect-[6/4] w-full">
          <div className="relative h-full flex items-center justify-center text-white">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-pink-300 rounded opacity-80"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-6xl font-bold mb-2">WES</div>
              <div className="text-6xl font-bold text-red-600">ANDERSON</div>
              <div className="text-lg mt-2 tracking-widest">AESTHETIC WORLD</div>
            </div>
            {/* Vintage elements */}
            <div className="absolute top-6 right-6 w-20 h-24 bg-pink-200 rounded shadow-lg opacity-90">
              <div className="p-2 text-xs text-gray-800">THE GAL GAZE</div>
            </div>
            <div className="absolute bottom-6 left-6 w-16 h-20 bg-orange-300 rounded shadow-lg opacity-90"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Additional Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <span className="text-xs text-orange-600 font-semibold uppercase tracking-wide">DESIGN</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3">
                    Creative Design Trends for 2024
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover the latest design trends that are shaping the creative industry.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Blog;
