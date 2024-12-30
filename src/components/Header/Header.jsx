import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaXmark, FaChevronDown } from "react-icons/fa6";
import gsap from "gsap";
import _ from "lodash";
import PropTypes from "prop-types";
import logo from './../../../public/logo.png';
import logo2 from './../../../public/logo2.png';
// Navigation Item Component
const NavItem = ({
  link,
  path,
  hasDropdown = null,
  dropdownItems,
  activeDropdown,
  setActiveDropdown,
}) => (
  <li className="relative">
    {hasDropdown ? (
      <div className="relative">
        <button
          onClick={() =>
            setActiveDropdown(
              activeDropdown === hasDropdown ? null : hasDropdown
            )
          }
          className=" text-lg text-black uppercase hover:text-black hover:text-xl hover:font-extrabold cursor-pointer flex items-center w-44"
          aria-expanded={activeDropdown === hasDropdown}
          aria-controls={`${hasDropdown}-menu`}
          aria-haspopup="true"
        >
          {link}
          <FaChevronDown className="ml-1 text-sm" />
        </button>

        {/* Render the dropdown if it's the active one */}
        {activeDropdown === hasDropdown && (
          <ul className="absolute top-full left-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg z-50">
            {dropdownItems[hasDropdown].map(({ link, path }) => (
              <li key={path} className="hover:bg-gray-200 px-4 py-2">
                <Link
                  to={path}
                  className="block text-sm uppercase hover:font-bold "
                  onClick={() => setActiveDropdown(null)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    ) : (
      <Link
        to={path}
        className="block text-lg text-slate-800 uppercase hover:text-black hover:text-xl hover:font-extrabold w-20"
      >
        {link}
      </Link>
    )}
  </li>
);

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  hasDropdown: PropTypes.string,
  dropdownItems: PropTypes.object,
  activeDropdown: PropTypes.string,
  setActiveDropdown: PropTypes.func.isRequired,
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  // Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Sticky Header on Scroll (throttled for performance)
  useEffect(() => {
    const handleScroll = _.debounce(() => {
      setIsSticky(window.scrollY > 100);
    }, 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate mobile menu open and close using GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: isMenuOpen ? 1 : 0,
        ease: "power3.inOut",
      });
      
    });

    return () => ctx.revert();
  }, [isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        activeDropdown
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  // Navigation items with dropdown
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Our Services", path: "/#", hasDropdown: "services" },
    { link: "Blog", path: "/blog" },
    { link: "Career", path: "/career" },

  ];

  // Dropdown items
  const dropdownItems = {
    services: [
      { link: "Brand Strategy", path: "/branding-design" },
      { link: "Video Production", path: "/video-editing" },
      { link: "Lead Optimization", path: "/lead-generation-seo" },
      { link: "Social Media", path: "/social-media-strategy" },
      { link: "Web Development", path: "/web-design-development" },
      {
        link: "Creative Photography",
        path: "/content-marketing-photography",
      },
    ],
  };

  

  return (
    <header className="w-full h-auto bg-white fixed top-0 left-0 z-50 right-0 transition-all ease-in duration-300">
      <nav
        ref={navRef}
        className={`py-3 lg:px-16 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in"
            : "transition-all duration-300 ease-in"
        }`}
        aria-label="Main Navigation"
      >
        <div className="flex justify-between items-center text-base gap-8">
        <Link
        to="/"
        className="text-black text-3xl font-bold flex items-center"
        aria-label="Homepage"
      >
        <img src={logo} alt="Logo" className="h-16 w-52 -ml-6" width="208" height="64" />

      </Link>
          {/* Desktop Menu */}
          <ul className="md:flex space-x-12 hidden navitems font-medium relative z-20">
            {navItems.map(({ link, path, hasDropdown }) => (
              <NavItem
                key={path}
                link={link}
                path={path}
                hasDropdown={hasDropdown}
                dropdownItems={dropdownItems}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-black focus:outline-none"
              aria-label="Mobile menu"
              onClick={toggleMenu}
            >
              <FaAlignJustify className="h-6 w-6" />
            </button>
          </div>

          {/* Responsive Save Changes Button */}
          <div className="hidden lg:flex items-center space-x-12">
  <a href="/contactus">
    <button className="transition ease-in-out px-6 py-3 delay-150 rounded-full bg-black text-white hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300">
      <Link to="/contactus">
      Contact Us
      </Link> 
    </button>
  </a>
</div>
        </div>

        {/* Mobile Menu */}
       {/* Mobile Menu */}
<div
  ref={menuRef}
  className={`fixed top-0 left-0 w-[70%] h-full bg-black px-8 py-8 transform ${
    isMenuOpen
      ? "translate-x-0 opacity-100"
      : "-translate-x-full opacity-0"
  } transition-transform duration-500 ease-in-out`}
  aria-hidden={!isMenuOpen}
>
  {/* Logo at the top of the mobile menu */}
  <div className="flex justify-between items-center mb-12">
    <Link
      to="/"
      className="text-white text-3xl font-bold"
      aria-label="Homepage"
    >
      <img src="./logo2.png" alt="Logo" className="h-18 w-[17rem]" />
    </Link>
    <button
      className="text-white focus:outline-none mb-14"
      aria-label="Close mobile menu"
      onClick={toggleMenu}
    >
      <FaXmark className="h-6 w-6" />
    </button>
  </div>

  {/* Navigation Links */}
  {navItems.map(({ link, path, hasDropdown }) => (
    <div key={path} className="mb-7">
      {hasDropdown ? (
        <div>
          <button
            onClick={() =>
              setActiveDropdown(
                activeDropdown === hasDropdown ? null : hasDropdown
              )
            }
            className="flex items-center text-white uppercase text-lg focus:outline-none"
            aria-expanded={activeDropdown === hasDropdown}
          >
            {link}
            <FaChevronDown className="ml-2" aria-hidden="true" />
          </button>
          {activeDropdown === hasDropdown && (
            <ul className="pl-4 mt-2 space-y-2">
              {dropdownItems[hasDropdown].map(({ link, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="block text-base text-white my-3 hover:text-yellow-500"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <Link
          to={path}
          className="block font-lato text-white uppercase hover:text-yellow-500"
          onClick={() => setIsMenuOpen(false)}
        >
          {link}
        </Link>
      )}
    </div>
  ))}

  {/* Contact Us Button - Mobile Only */}
  <div c>
    <Link to="/contactus">
      <div className=" text-white uppercase  text-base ">
        Contact Us
      </div>
    </Link>
  </div>
</div>

      </nav>
    </header>
  );
};

export default Header;
