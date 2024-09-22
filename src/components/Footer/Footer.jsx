import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { RxArrowTopRight } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 lg:py-16 z-20 relative">
      <div className="container mx-auto px-4 lg:px-24 z-20">
        {/* Top Section with "Connect us" */}
        <div className="flex flex-col items-center text-center z-10">
          <h2 className="text-4xl md:text-5xl lg:text-[170px] font-bold leading-none">
          <a href="#" className="flex items-center justify-center space-x-2">
  <span className="text-3xl md:text-5xl lg:text-[165px] z-10">Connect us</span>
  <RxArrowTopRight className="text-yellow-500 text-[2.5rem] md:text-[6rem] lg:text-[11rem] mt-0 md:mt-7" />
</a>

          </h2>
        </div>

        {/* Middle Section with links and contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-16 lg:mt-28 text-center lg:text-left z-20">

          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center lg:items-start">
            <img
              src="https://rbshstudio.com/wp-content/uploads/2024/07/RBSH-Studio-logo-white-e1723136206416-300x142.png"
              alt="RBSH Studio Logo"
              className="mb-4"
              width="203"
              height="96"
            />
            <div className="flex space-x-4 md:space-x-11 mt-4">
              <a href="https://www.facebook.com/rbshstudio" target="_blank" rel="noopener noreferrer" title="Follow us on Facebook" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/company/rbshstudio/" target="_blank" rel="noopener noreferrer" title="Connect with us on LinkedIn" className="text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/rbshstudio" target="_blank" rel="noopener noreferrer" title="Follow us on Instagram" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@rbshstudio" target="_blank" rel="noopener noreferrer" title="Subscribe to our YouTube channel" className="text-gray-400 hover:text-white">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Our Links */}
          <div className="z-10">
            <h5 className="text-lg font-semibold mb-4 z-10">Our Links</h5>
            <ul className="space-y-2 z-10">
              <li><a href="#" className="hover:text-yellow-500">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-500">FAQ</a></li>
              <li><a href="/blog" className="hover:text-yellow-500">Latest Blogs</a></li>
              <li><a href="/career" className="hover:text-yellow-500">Career</a></li>
            </ul>
          </div>

          {/* Find It Fast */}
          <div className="z-10">
            <h5 className="text-lg font-semibold mb-4 z-20">Find It Fast</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-500 z-10">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-500">Services</a></li>
              <li><a href="#" className="hover:text-yellow-500">Portfolio</a></li>
              <li><a href="#" className="hover:text-yellow-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="z-10">
            <p className="text-base md:text-lg">
              T3-236, Golden-I, Techzone IV, Greater Noida West,<br /> UP - 201308
            </p>
            <a href="mailto:info@rbshstudio.com" className="block hover:text-yellow-500 mt-5" title="Email us at info@rbshstudio.com">
              info@rbshstudio.com
            </a>
            <a href="tel:+919204309173" className="block hover:text-yellow-500 mt-5" title="Call us at +91 92043 09173">
              +91 92043 09173
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center z-10">
          <p className="text-gray-400">© 2024 Copyright rbshstudio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
