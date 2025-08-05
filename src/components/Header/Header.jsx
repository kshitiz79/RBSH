import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaXmark } from "react-icons/fa6";
import gsap from "gsap";
import _ from "lodash";
import PropTypes from "prop-types";
import logo from './../../../public/logo.png';

// Navigation Item Component
const NavItem = ({ link, path }) => (
  <li className="relative">
    <Link
      to={path}
      className="block text-lg  text-slate-800 uppercase hover:text-black hover:text-xl hover:font-extrabold whitespace-normal"
    >
      {link}
    </Link>
  </li>
);

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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

  // Navigation items (no dropdown anymore)
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Our Services", path: "/service" },
    { link: "Blog", path: "/blog" },
    { link: "Career", path: "/career" },
  ];

  return (
    <header className="w-full h-auto bg-[#e5e8ea] fixed top-0 left-0 z-50 right-0 transition-all ease-in duration-300 border-b border-black">
      <nav
        ref={navRef}
        className={`py-3 lg:px-8 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 bg-[#e5e8ea]  shadow-lg transition-all duration-300 ease-in"
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
            <img src={logo} alt="Logo" className="h-16 w-52 -ml-8" width="208" height="64" />
          </Link>

          {/* Desktop Menu */}
          <ul className="md:flex space-x-12   hidden navitems font-medium relative z-20">

            {navItems.map(({ link, path }) => (
              <NavItem
                key={path}
                link={link}
                path={path}
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

          {/* Responsive Contact Us Button */}
          <div className="hidden lg:flex items-center space-x-12">
            <Link to="/contactus">
              <button className="transition ease-in-out px-6 py-3 delay-150 rounded-full bg-black text-white hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 w-[70%] h-full bg-black px-8 py-8 transform ${
            isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } transition-transform duration-500 ease-in-out`}
          aria-hidden={!isMenuOpen}
        >
          {/* Logo at the top of the mobile menu */}
          <div className="flex justify-between items-center mb-12">
            <Link to="/" className="text-white text-3xl font-bold" aria-label="Homepage">
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
          {navItems.map(({ link, path }) => (
            <div key={path} className="mb-7 p-12">
              <Link
                to={path}
                className="block font-lato p-12 text-white uppercase hover:text-yellow-500 whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            </div>
          ))}

          {/* Contact Us Button - Mobile Only */}
          <div>
            <Link to="/contactus">
              <div className="text-white uppercase text-base">Contact Us</div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
