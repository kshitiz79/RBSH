import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const QuickLinks = () => {
  const location = useLocation();

  return (
    <div className="md:w-1/3 bg-white  rounded-lg p-6 ">
      <h2 className="text-4xl font-semibold mb-6 uppercase">
        <span> Our </span>services
        <hr className="w-9/12 border-t-2 mt-2 border-black" />
      </h2>

      <ul className="space-y-8 text-xl">
        {/* Links with Conditional Bold Style */}
        <li className="hover:underline cursor-pointer uppercase mt-8">
          <Link
            to="/branding-design"
            className={location.pathname === "/branding-design" ? "font-bold text-2xl underline" : ""}
          >
            Brand Strategy
          </Link>
        </li>
        <li className="hover:underline cursor-pointer uppercase">
          <Link
            to="/video-editing"
            className={location.pathname === "/video-editing" ? "font-bold text-2xl underline" : ""}
          >
            Video Production
          </Link>
        </li>
        <li className="hover:underline cursor-pointer uppercase">
          <Link
            to="/lead-generation-seo"
            className={location.pathname === "/lead-generation-seo" ? "font-bold text-2xl underline" : ""}
          >
            Lead Optimization
          </Link>
        </li>
        <li className="hover:underline cursor-pointer uppercase">
          <Link
            to="/social-media-strategy"
            className={location.pathname === "/social-media-strategy" ? "font-bold text-2xl underline" : ""}
          >
            Social Media
          </Link>
        </li>
        <li className="hover:underline cursor-pointer uppercase">
          <Link
            to="/web-design-development"
            className={location.pathname === "/web-design-development" ? "font-bold text-2xl underline" : ""}
          >
            Web Development
          </Link>
        </li>
        <li className="hover:underline cursor-pointer uppercase">
          <Link
            to="/content-marketing-photography"
            className={location.pathname === "/content-marketing-photography" ? "font-semibold text-2xl underline" : ""}
          >
            Creative Photography
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
