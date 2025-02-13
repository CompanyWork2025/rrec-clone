import React from 'react';
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowRight, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';


function Footer() {
  const location = useLocation();

  // Check if the current page is the homepage
  const isHomepage = location.pathname === "/";


  return (
    <footer className="text-white bg-black md:py-10 py-20 px-6 md:px-10 lg:px-20 w-full relative">
      <div
        className={`container mx-auto font-roboto flex flex-col lg:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 text-center md:text-left ${isHomepage ? "mt-28" : "mt-0"
          }`}
      >

        {/* Logo and Social Links */}
        <div className="space-y-0 md:space-y-8">
          <div className="flex justify-center md:ml-24 lg:ml-0 lg:justify-start items-center">
            <img src={logo} alt="Mercetech Innovations" className="-mt-16 lg:mt-0 lg:h-20 w-full" />
          </div>
          <div className="flex items-center">
            <div className="w-24 h-[2px] bg-[#f2312d]" />
            <div className="w-2 h-[2px] bg-transparent" /> {/* Gap between lines */}
            <div className="w-2 h-[2px] bg-[#f2312d]" />
            <div className="w-2 h-[2px] bg-transparent" />
            <div className="w-2 h-[2px] bg-[#f2312d]" />
          </div>
          <div>
            <div className="text-center mt-6 lg:-mt-4 lg:w-[500px] md:text-left">
              <p className="text-white text-sm md:text-sm text-justify">
                Moscow is the capital of Russia. Within the Republic there are around 1,000 towns, of these, including Moscow, nine cities have a population of over a million (St.Petersburg, Volgograd, Rostov on Don, Nizhny Novgorod, Kazan, Ufa, Novosibirsk, Sverdlovsk, Chelyabinsk, and Omsk).
              </p>
            </div>


            {/* Mobile view only */}
            <div className="lg:hidden container mx-auto flex flex-row justify-between ml-4 md:ml-24 mt-6 space-x-8 md:space-x-48">
              {/* Left Side - Contact Us and Useful URL */}
              <div className="flex flex-col space-y-6 w-1/2 text-left">
                {/* Contact Us Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Category</h2>
                  <ul className="space-y-2 w-48">
                    <li>
                      <a href="#" className="flex items-center group">
                        <FaArrowRight className="mr-2 group-hover:text-red-500" />
                        <span className="group-hover:text-red-500">About Russia</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center group">
                        <FaArrowRight className="mr-2 group-hover:text-red-500" />
                        <span className="group-hover:text-red-500">Services for Students</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center group">
                        <FaArrowRight className="mr-2 group-hover:text-red-500" />
                        <span className="group-hover:text-red-500">Medical Universities</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center group">
                        <FaArrowRight className="mr-2 group-hover:text-red-500" />
                        <span className="group-hover:text-red-500">Technical Universities</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center group">
                        <FaArrowRight className="mr-2 group-hover:text-red-500" />
                        <span className="group-hover:text-red-500">Fee structure for MBBS, BDS, Pharmacy</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center group">
                        <FaArrowRight className="mr-2 group-hover:text-red-500" />
                        <span className="group-hover:text-red-500">Fee structure for Technical Universities</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Mobile view - Contact Us */}
                <div className="lg:hidden container mx-auto flex flex-row justify-between md:ml-24 mt-6 space-x-8 md:space-x-48">
                  <div className="flex flex-col space-y-6 w-1/2 text-left">
                    <div>
                      <h2 className="text-xl w-28 font-semibold mb-4">Contact Us</h2>
                      <ul className="space-y-4 w-56">
                        <li>
                          <a
                            href="https://maps.app.goo.gl/zDLmkaAQJ7S7cFaB8"
                            className="flex items-center group space-x-3"
                          >
                            <div className="p-2 bg-red-100 rounded-full">
                              <FaMapMarkerAlt className="text-red-500" />
                            </div>
                            <span className="group-hover:text-red-500">
                              PP Trade Center, Office 709, 710, Pitampura - 110034 New Delhi, India
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:contact@rrecrussia.com"
                            className="flex items-center group space-x-3"
                          >
                            <div className="p-2 bg-blue-100 rounded-full">
                              <FaEnvelope className="text-blue-500" />
                            </div>
                            <span className="group-hover:text-blue-500">
                              contact@rrecrussia.com
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="mailto:rrec.educonsultants@gmail.com"
                            className="flex items-center group space-x-3"
                          >
                            <div className="p-2 bg-blue-100 rounded-full">
                              <FaEnvelope className="text-blue-500" />
                            </div>
                            <span className="group-hover:text-blue-500">
                              rrec.educonsultants@gmail.com
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+917042284508"
                            className="flex items-center group space-x-3"
                          >
                            <div className="p-2 bg-green-100 rounded-full">
                              <FaPhoneAlt className="text-green-500" />
                            </div>
                            <span className="group-hover:text-green-500">
                              +91-7042284508
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+917042284509"
                            className="flex items-center group space-x-3"
                          >
                            <div className="p-2 bg-green-100 rounded-full">
                              <FaPhoneAlt className="text-green-500" />
                            </div>
                            <span className="group-hover:text-green-500">
                              +91-7042284509
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Side - Navigation */}
              <div className="flex flex-col space-y-6 w-full text-left">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <NavLink
                        to="/"
                        className="text-white flex items-center group"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <FontAwesomeIcon icon={faArrowRight} className="mr-2 group-hover:text-red-500" />
                        <span className="group-hover:text-red-500">Home</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className="text-white flex items-center group"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <FontAwesomeIcon icon={faArrowRight} className="mr-2 group-hover:text-red-500" />
                        <span className="group-hover:text-red-500">About</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className="text-white flex items-center group"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <FontAwesomeIcon icon={faArrowRight} className="mr-2 group-hover:text-red-500" />
                        <span className="group-hover:text-red-500">Contact Us</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products"
                        className="text-white flex items-center group"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <FontAwesomeIcon icon={faArrowRight} className="mr-2 group-hover:text-red-500" />
                        <span className="group-hover:text-red-500">Our Products</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/solutions"
                        className="text-white flex items-center group"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <FontAwesomeIcon icon={faArrowRight} className="mr-2 group-hover:text-red-500" />
                        <span className="group-hover:text-red-500">Solutions</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Email Input and Button */}
            <div className="lg:hidden mt-14 relative w-full max-w-xs md:max-w-lg md:ml-20 mt-14 ml-4 mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 text-white placeholder-white border-b border-l-0 border-t-0 border-r-0 focus:outline-none focus:ring-0 bg-transparent"
              />

              <button className="absolute top-0 right-0 h-full px-4 bg-white rounded-t-lg border-l-2 border-gray-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6l6 6-6 6" />
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex justify-center md:justify-start space-x-6 mt-4 mb-14">
              <a href="#" aria-label="Facebook" className="p-2 bg-[#f2312d] rounded-full transform hover:scale-90 transition duration-300">
                <FaFacebook className="text-white w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 bg-[#f2312d] rounded-full transform hover:scale-90 transition duration-300">
                <FaInstagram className="text-white w-4 h-4" />
              </a>
              <a href="#" aria-label="Youtube" className="p-2 bg-[#f2312d] rounded-full transform hover:scale-90 transition duration-300">
                <FaYoutube className="text-white w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/104643910/admin/dashboard/"
                aria-label="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#f2312d] rounded-full transform hover:scale-90 transition duration-300"
              >
                <FaLinkedin className="text-white w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:block space-y-4 lg:text-md">
          <h2 className="font-semibold text-center lg:text-xl md:text-left">Quick Links</h2>
          <div className="flex items-center">
            <div className="w-14 h-[2px] bg-[#f2312d]" />
            <div className="w-2 h-[2px] bg-transparent" /> {/* Gap between lines */}
            <div className="w-2 h-[2px] bg-[#f2312d]" />
            <div className="w-2 h-[2px] bg-transparent" />
            <div className="w-2 h-[2px] bg-[#f2312d]" />
          </div>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className="text-white flex items-center group"
                onClick={() => window.scrollTo(0, 0)}
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2 group-hover:text-red-500" />
                <span className="group-hover:text-red-500">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-white flex items-center group"
                onClick={() => window.scrollTo(0, 0)}
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2 group-hover:text-red-500" />
                <span className="group-hover:text-red-500">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-white flex items-center group"
                onClick={() => window.scrollTo(0, 0)}
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2 group-hover:text-red-500" />
                <span className="group-hover:text-red-500">Contact Us</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="text-white flex items-center group"
                onClick={() => window.scrollTo(0, 0)}
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2 group-hover:text-red-500" />
                <span className="group-hover:text-red-500">Our Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/solutions"
                className="text-white flex items-center group"
                onClick={() => window.scrollTo(0, 0)}
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2 group-hover:text-red-500" />
                <span className="group-hover:text-red-500">Solutions</span>
              </NavLink>
            </li>
          </ul>


        </div>

        {/* Useful URL Links */}
        <div className="hidden lg:block space-y-4 lg:text-md">
          <h2 className="font-semibold text-center lg:text-xl md:text-left">Category</h2>
          <div className="flex items-center">
            <div className="w-14 h-[2px] bg-[#f2312d]" />
            <div className="w-2 h-[2px] bg-transparent" /> {/* Gap between lines */}
            <div className="w-2 h-[2px] bg-[#f2312d]" />
            <div className="w-2 h-[2px] bg-transparent" />
            <div className="w-2 h-[2px] bg-[#f2312d]" />
          </div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center group">
                <FaArrowRight className="mr-2 group-hover:text-red-500" />
                <span className="group-hover:text-red-500">About Russia</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center group">
                <FaArrowRight className="mr-2 group-hover:text-red-500" />
                <span className="group-hover:text-red-500">Services for Students</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center group">
                <FaArrowRight className="mr-2 group-hover:text-red-500" />
                <span className="group-hover:text-red-500">Medical Universities</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center group">
                <FaArrowRight className="mr-2 group-hover:text-red-500" />
                <span className="group-hover:text-red-500">Technical Universities</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center group">
                <FaArrowRight className="mr-2 group-hover:text-red-500" />
                <span className="group-hover:text-red-500">Fee structure for MBBS, BDS, Pharmacy</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center group">
                <FaArrowRight className="mr-2 group-hover:text-red-500" />
                <span className="group-hover:text-red-500">Fee structure for Technical Universities</span>
              </a>
            </li>
          </ul>

        </div>


        {/* Contact Information */}
        <div className="hidden lg:block space-y-4 lg:text-md">
          <h2 className="font-semibold text-center lg:text-xl md:text-left">Contact Us</h2>
          <div className="flex items-center">
            <div className="w-14 h-[2px] bg-[#f2312d]" />
            <div className="w-2 h-[2px] bg-transparent" /> {/* Gap between lines */}
            <div className="w-2 h-[2px] bg-[#f2312d]" />
            <div className="w-2 h-[2px] bg-transparent" />
            <div className="w-2 h-[2px] bg-[#f2312d]" />
          </div>

          {/* Location */}
          <a href="https://maps.app.goo.gl/zDLmkaAQJ7S7cFaB8" className="block text-white lg:w-80 flex items-center">
            <div className="bg-[#f2312d] p-2 rounded-full mr-3">
              <FaMapMarkerAlt className="text-white" />
            </div>
            <p className="hover:text-red-500">PP Trade Center, Office 709, 710, Pitampura - 110034 New Delhi, India</p>
          </a>

          {/* Email */}
          <a href="mailto:contact@rrecrussia.com" className="block text-white flex items-center">
            <div className="bg-[#f2312d] p-2 rounded-full mr-3">
              <FaEnvelope className="text-white" />
            </div>
            <p className="hover:text-red-500">contact@rrecrussia.com</p>
          </a>

          <a href="mailto:rrec.educonsultants@gmail.com" className="block text-white flex items-center">
            <div className="bg-[#f2312d] p-2 rounded-full mr-3">
              <FaEnvelope className="text-white" />
            </div>
            <p className="hover:text-red-500"> rrec.educonsultants@gmail.com</p>
          </a>

          {/* Phone Number */}
          <a href="tel:+917042284508" className="block text-white flex items-center">
            <div className="bg-[#f2312d] p-2 rounded-full mr-3">
              <FaPhoneAlt className="text-white" />
            </div>
            <p className="hover:text-red-500">+91-7042284508</p>
          </a>

          <a href="tel:+917042284509" className="block text-white flex items-center group">
            <div className="bg-[#f2312d] p-2 rounded-full mr-3">
              <FaPhoneAlt className="text-white" />
            </div>
            <p className="hover:text-red-500">+91-7042284509</p>
          </a>
        </div>

      </div>

      {/* Full-width horizontal line at the bottom (out of container) */}
      <div className="absolute bottom-0 left-0 lg:-bottom-4 w-full bg-gray-800">
        <div className="w-full flex flex-col text-center lg:flex-row justify-center lg:justify-between items-center lg:px-12 px-4 text-sm py-4 text-white">
          <p>Copyright © 2025 | Reliable Russian Educational Consultants. All Rights Reserved.</p>
        </div>
      </div>


    </footer>
  );
}

export default Footer;
