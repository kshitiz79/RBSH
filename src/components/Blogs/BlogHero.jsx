import React from 'react'
import AnimatedIntro from './AnimatedIntro'
import { NavLink } from 'react-router-dom'

const BlogHero = () => {
    const tabs = [
  { name: "All Articles", icon: "📄", path: "/blog" },
  { name: "Design", icon: "🎨", path: "/design" },
  { name: "Marketing", icon: "📈", path: "/marketing" },
  { name: "Web Design", icon: "💻", path: "/web-development" },
];
  return (
    <>
      <AnimatedIntro />
              <div>
          <section className="bg-gray-200 py-16">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
                Learn, Create, Be Inspired.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                From design and video to marketing and web design, elevate your
                creative skills with our tutorials, trends, expert interviews,
                and guides.
              </p>
            </div>
          </section>
        </div>



      <section className="border-b bg-gray-200 border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 sm:space-x-8">
            {tabs.map((tab) => (
             <NavLink
                key={tab.name}
                to={tab.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 mt-5 px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                  }`
                }
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

    
    </>
  )
}

export default BlogHero