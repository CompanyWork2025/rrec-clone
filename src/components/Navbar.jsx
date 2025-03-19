import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import arrow from "../assets/down-arrow.png";
import { AnimatePresence, motion } from "framer-motion";
import LiveChatPopup from "./LiveChatPopup";
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [openFeeStructure, setOpenFeeStructure] = useState(false);
  const [openUsefulInfo, setOpenUsefulInfo] = useState(false);
  const [openUniversities, setOpenUniversities] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Function to handle language change
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Slider Menu */}
      <div className="hidden lg:block bg-gray-800 text-white py-1">
        <div className="max-w-screen-2xl mx-auto px-6 flex items-center font-roboto">
          {/* Moving Text on the left */}
          <h1 className="lg:mr-4 font-bold lg:text-xl animate-colorCycle">
            <span className="inline-block animate-colorCycle">Breaking News:</span>
          </h1>
          <div className="overflow-hidden ml-24 w-[60%]">
            <p
              className="hidden lg:block cursor-pointer lg:text-sm font-semibold moving-text inline-block whitespace-nowrap pr-[10%] opacity-100 text-changing-color animate-ticker"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              <span className="inline-block animate-colorCycle mr-2">
                {t('admissionOpenFor2025')}
              </span>
              <span className="inline-block mr-2">
                {t('bookYourSeatTodayWith')}
              </span>
              <span className="inline-block animate-colorCycle mr-2 text-red-500 font-bold">
                {t('rrecTeam')}
              </span>
              <span className="lg:text-md inline-block">
                {t('officialAdmissionPartner')}
              </span>
            </p>
          </div>

          {/* Admission Helpline on the right */}
          <p className="bg-white px-2 text-sm py-1 font-semibold rounded-md -ml-52 md:ml-auto animate-colorCycle">
            Admission Helpline: +91-7669533991
          </p>
        </div>
      </div>

      <div className="hidden lg:block relative w-full border-t mx-auto">
        {/* Parent container with diagonal split */}
        <div className="relative flex items-center justify-between w-full h-8 overflow-hidden">
          <div className="relative w-[60%] h-full bg-black flex items-center justify-center space-x-10 p-5 z-20" >
            {/* First Item */}
            <Link to="/apply-now" className="flex items-center space-x-3 border-r border-gray-600 pr-5 z-20">
              <img src="https://cdn-icons-png.flaticon.com/512/3119/3119214.png" alt="Apply Online" className="w-6 h-6 object-contain" />
              <span className="text-white font-roboto text-sm">Apply Online</span>
            </Link>

            {/* Second Item */}
            <Link to="/about-us" className="flex items-center space-x-3 border-r border-gray-600 pr-5">
              <img src="https://www.freeiconspng.com/uploads/about-us-icon-29.png" alt="About Us" className="w-6 h-6 object-contain" />
              <span className="text-white font-roboto text-sm">About Us</span>
            </Link>

            {/* Third Item (No border on last item) */}
            <a href="tel:+917042284508" className="flex items-center space-x-3">
              <img src="https://cdn0.iconfinder.com/data/icons/phone-call-3/400/Calls-04-512.png" alt="Request A Call" className="w-6 h-6 object-contain" />
              <span className="text-white font-roboto text-sm">Request A Call</span>
            </a>

          </div>

          {/* Right side (Green Background - 30%) */}
          <div className="relative w-[50%] h-full bg-red-600 flex items-center justify-center text-white font-semibold text-lg">
            <span className="flex pl-64 space-x-6">
              <a href="https://www.facebook.com/RRECTeamOfficialpage/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/rrecrussia_officials/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
              </a>
              <a href="https://ru.linkedin.com/in/rrecrussiaofficials" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/channel/UChb_aZlyYRcUqmsZsEs_tIA" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
              </a>
            </span>
          </div>

          {/* Fixed Diagonal Cut Effect */}
          <div className="absolute left-0 w-[70%] h-full bg-black transform -skew-x-[20deg] origin-left"></div>
        </div>
      </div>

      <div className="hidden lg:flex justify-between items-center sticky lg:px-28 bg-white border border-1 p-0">
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14 w-auto md:h-24 md:w-full" />
          </Link>
        </div>

        {/* Right Side - WhatsApp & Call Buttons */}
        <div className="flex space-x-4 items-center">

          {/* Right Side - WhatsApp & Call Buttons */}
          <div className="flex space-x-4 items-center">
            {/* Live Counseling Button */}
            <div onClick={() => setIsChatOpen(true)} className="cursor-pointer">
              <div className="relative flex items-center h-14 space-x-3 bg-white border border-red-600 shadow-lg rounded-md px-4 py-1">
                {/* Glowing Animated Effect Outside */}
                <div className="absolute inset-0 rounded-md border-1 border-yellow-400 animate-customPulse"></div>
                <img
                  src="https://www.pngarts.com/files/3/Red-Headphone-PNG-Transparent-Image.png"
                  alt="Live Counseling"
                  className="h-8 w-8"
                />
                <span className="text-red-600 font-roboto font-semibold">Live Counseling</span>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="h-10 border-l-2 border-gray-300"></div>
          </div>

          {/* Popup should be placed outside the flex container */}
          <div className="relative z-[1000]">
            {isChatOpen && <LiveChatPopup isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />}
          </div>



          {/* Call Button */}
          <a href="tel:+917042284508">
            <div className="flex items-center bg-white text-gray-800 px-4 py-2 rounded-md space-x-4 hover:animate-vibrate">
              {/* Phone Icon */}
              <img src="https://www.pngarts.com/files/8/Red-Call-Button-Free-PNG-Image.png" alt="Call Icon" className="h-10 w-10 object-contain vibrate-on-hover" />

              {/* Text Content */}
              <div className="flex flex-col text-left">
                <span className="text-sm text-gray-600 font-roboto">Call us Now</span>
                <span className="font-semibold text-lg text-red-600">+91 7042284508</span>
              </div>
            </div>
          </a>

          {/* Vertical Divider */}
          <div className="h-10 border-l-2 border-gray-300"></div>

          {/* Mail Us Button */}
          <a href="mailto:contact@rrecrussia.com" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center bg-white text-gray-800 px-4 py-2 rounded-md space-x-4 hover:animate-vibrate">
              {/* WhatsApp Icon */}
              <img
                src="https://pngimg.com/d/email_PNG11.png"
                alt="WhatsApp Icon"
                className="h-14 w-14 object-contain vibrate-on-hover"
              />

              {/* Text Content */}
              <div className="flex flex-col text-left">
                <span className="text-sm text-gray-600 font-roboto">Mail Us</span>
                <span className="font-semibold text-lg text-red-600">contact@rrecrussia.com</span>
              </div>
            </div>
          </a>


          {/* Custom Animation */}
          <style>
            {`
      @keyframes greenPulse {
        0% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
        50% { box-shadow: 0 0 15px rgba(34, 197, 94, 0.8); }
        100% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
      }
      .animate-custom-pulse {
        animation: greenPulse 1.5s infinite;
      }

      @keyframes vibrate {
        0% { transform: translateX(0); }
        25% { transform: translateX(-2px); }
        50% { transform: translateX(2px); }
        75% { transform: translateX(-2px); }
        100% { transform: translateX(2px); }
      }
      .vibrate-on-hover {
        transition: transform 0.2s ease-in-out;
      }
      .hover\\:animate-vibrate:hover .vibrate-on-hover {
        animation: vibrate 0.2s ease-in-out infinite;
      }
    `}
          </style>

          {/* Pay Registration Fee Button */}
          <div className="flex justify-center pl-6 relative">
            <Link to="/fee-payment">
              <button className="relative px-4 py-3 font-roboto text-yellow-400 font-bold text-lg rounded-full bg-blue-700 animate-blink border-none shadow-lg transition-transform duration-200 hover:scale-105">
                Pay Registration Fee
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 240 60">
                  <rect
                    x="2" y="2" width="236" height="56" rx="30" ry="30"
                    fill="none" stroke="#FCD34D" stroke-width="3"
                    stroke-dasharray="10 10" stroke-dashoffset="0"
                    className="animate-border"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* Custom Animation Styles */}
          <style>
            {`
  
    
    .animate-blink {
      animation: blink 2.5s infinite alternate;
      animation-fill-mode: both;
    }

    @keyframes borderAnimation {
      0% { stroke-dashoffset: 100; }
      100% { stroke-dashoffset: 0; }
    }

    .animate-border {
      animation: borderAnimation 2s linear infinite;
    }
  `}
          </style>






        </div>



      </div >

      {/* Navbar */}
      <header className="bg-white space-x-8 shadow-lg text-sm text-black p-2 py-0 lg:p-0 lg:px-16 font-roboto sticky top-0 z-50" >
        <div className="container mx-auto flex justify-between items-center">


          {/* Navigation */}
          <nav className="flex-1">
            <ul className="hidden lg:flex p-2 space-x-5 justify-center">
              {/* Home */}
              <li><Link to="/" className="hover:text-red-600 uppercase">{t('home')}</Link></li>

              <li
                className="relative group"
                onMouseEnter={() => setOpenAbout(true)}
                onMouseLeave={() => setOpenAbout(false)}
              >
                <div className="flex items-center space-x-2">
                  {/* "ABOUT US" is now a clickable link */}
                  <Link to="/about-us" className="hover:text-red-600 focus:outline-none uppercase">
                    ABOUT US
                  </Link>
                  <img
                    src={arrow}
                    alt="Down Arrow"
                    className="w-2 h-2 transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>

                {/* Dropdown appears on hover */}
                <AnimatePresence>
                  {openAbout && (
                    <motion.ul
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute bg-white text-black shadow-lg mt-0 py-2 w-56 origin-top transform z-50"
                    >
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/russia"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          About Russia
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/services-for-students"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Services For Students
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>


              <li
                className="relative group"
                onMouseEnter={() => setOpenUniversities(true)}
                onMouseLeave={() => setOpenUniversities(false)}
              >
                <div className="flex items-center space-x-2">
                  <button className="hover:text-red-600 focus:outline-none uppercase">
                    {t('universities')} {/* Translation for 'Universities' */}
                  </button>
                  <img
                    src={arrow}
                    alt="Down Arrow"
                    className="w-2 h-2 transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>

                {/* AnimatePresence for Universities dropdown */}
                <AnimatePresence>
                  {openUniversities && (
                    <motion.ul
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute bg-white text-black shadow-lg mt-0 py-2 w-56 origin-top transform z-50"
                    >
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/medical-universities-in-russia"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Medical Universities{/* Translation for 'Medical Universities' */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/technical-universities-in-russia"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Technical Universities {/* Translation for 'Technical Universities' */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/courses-in-russia"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Courses In Russia{/* Translation for 'Courses In Russia' */}
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li
                className="relative group"
                onMouseEnter={() => setOpenFeeStructure(true)}
                onMouseLeave={() => setOpenFeeStructure(false)}
              >
                <div className="flex items-center space-x-2">
                  <button className="hover:text-red-600 focus:outline-none uppercase">
                    Fee Structure 2025 {/* Translation for 'Universities' */}
                  </button>
                  <img
                    src={arrow}
                    alt="Down Arrow"
                    className="w-2 h-2 transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>

                {/* AnimatePresence for Universities dropdown */}
                <AnimatePresence>
                  {openFeeStructure && (
                    <motion.ul
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute bg-white text-black shadow-lg mt-0 py-2 w-80 origin-top transform z-50"
                    >
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/fee-structure"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('mbbsBdsPharmacyFee')} {/* Dynamic translation for MBBS, BDS, Pharmacy Fee */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/fee-for-technical-universities"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('technicalUniversitiesFee')} {/* Dynamic translation for Technical Universities Fee */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/fees-for-russian-language-courses"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('languageCoursesFee')} {/* Dynamic translation for Language Courses Fee */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/study-mba-in-southern-federal-university-russia-in-english-medium"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('mbaInEnglishFee')} {/* Dynamic translation for MBA Fee */}
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li
                className="relative group"
                onMouseEnter={() => setOpenUsefulInfo(true)}
                onMouseLeave={() => setOpenUsefulInfo(false)}
              >
                <div className="flex items-center space-x-2">
                  <button className="hover:text-red-600 focus:outline-none uppercase">
                    USEFUL LINKS {/* Dynamic translation for "Useful Info" */}
                  </button>
                  <img
                    src={arrow}
                    alt="Down Arrow"
                    className="w-2 h-2 transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>

                {/* AnimatePresence for Useful Info dropdown */}
                <AnimatePresence>
                  {openUsefulInfo && (
                    <motion.ul
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute bg-white text-black shadow-lg mt-0 py-2 w-56 origin-top transform z-50"
                    >
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/admission-procedure"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Admission Procedure {/* Dynamic translation for "MBBS In Russia" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/tourist-visa-for-russia"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Tourist Visa For Russia {/* Dynamic translation for "Preparatory Faculty" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/russian-language"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Russian Language Course {/* Dynamic translation for "Preparatory Faculty" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/our-services"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Our Services {/* Dynamic translation for "Preparatory Faculty" */}
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li
                className="relative group"
                onMouseEnter={() => setOpenResources(true)}
                onMouseLeave={() => setOpenResources(false)}
              >
                <div className="flex items-center space-x-2">
                  <button className="hover:text-red-600 focus:outline-none uppercase">
                    {t('resources')} {/* Dynamic translation for "Resources" */}
                  </button>
                  {/* Dropdown button */}
                  <img
                    src={arrow}
                    alt="Down Arrow"
                    className="w-2 h-2 transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>

                {/* AnimatePresence for Resources dropdown */}
                <AnimatePresence>
                  {openResources && (
                    <motion.ul
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute bg-white text-black shadow-lg mt-0 py-2 w-56 origin-top transform z-50"
                    >
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/blog"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Blog {/* Dynamic translation for "Blog" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/neet"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Neet Updates {/* Dynamic translation for "NEET" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/upcoming-events"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Upcoming Events {/* Dynamic translation for "Upcoming Events" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/nmc-regulations"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          NMC Regulations {/* Dynamic translation for "Upcoming Events" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/refer-earn"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Refer & Earn {/* Dynamic translation for "NEET" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/refund-policy"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Refund Policy {/* Dynamic translation for "NEET" */}
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li
                className="relative group"
                onMouseEnter={() => setOpenGallery(true)}
                onMouseLeave={() => setOpenGallery(false)}
              >
                <div className="flex items-center space-x-2">
                  <button className="hover:text-red-600 focus:outline-none uppercase">
                    {t('gallery')} {/* Dynamic translation for "Gallery" */}
                  </button>
                  {/* Dropdown button */}
                  <img
                    src={arrow}
                    alt="Down Arrow"
                    className="w-2 h-2 transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>

                {/* AnimatePresence for Gallery dropdown */}
                <AnimatePresence>
                  {openGallery && (
                    <motion.ul
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute bg-white text-black shadow-lg mt-0 py-2 w-56 origin-top transform z-50"
                    >
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/photo/gallery"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Photo Gallery {/* Dynamic translation for "Photo Gallery" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-red-600 -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/video/gallery"
                          className="block px-4 py-2 hover:text-red-600"
                        >
                          Video Gallery {/* Dynamic translation for "Video Gallery" */}
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* FAQ */}
              <li>
                <Link to="/faq" className="hover:text-red-600 uppercase">
                  {t('faq')} {/* Dynamic translation for FAQ */}
                </Link>
              </li>

              {/* Career */}
              <li>
                <Link to="/career" className="hover:text-red-600 uppercase">
                  Career {/* Dynamic translation for FAQ */}
                </Link>
              </li>

              {/* Contact Us */}
              <li>
                <Link to="/contact-us" className="hover:text-red-600 uppercase">
                  CONTACT US {/* Dynamic translation for Contact Us */}
                </Link>
              </li>
            </ul>

            {/* Mobile Header */}
            <div className="flex justify-between items-center lg:px-4 ml-auto text-black p-1 md:hidden">
              <div className="flex items-left space-x-4">
                <Link to="/">
                  <img src={logo} alt="Logo" className="lg:hidden h-14 w-auto md:h-16 md:w-full" />
                </Link>
              </div>
              <button onClick={toggleMobileMenu} className="text-2xl">
                <FaBars />
              </button>
            </div>
          </nav>
        </div>
        {/* Mobile menu */}
        <div>
          <motion.div
            className={`fixed inset-0 bg-black bg-opacity-60 z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="absolute top-0 h-full right-0 w-4/5 sm:w-2/3 bg-black bg-opacity-80 p-8 rounded-l-lg shadow-lg"
              initial={{ x: '100%' }}
              animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
              transition={{ duration: 0.4 }}
            >

              <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-3xl text-[#f2312d]">
                <FaTimes />
              </button>

              <nav>
                <ul>
                  {/* Home */}
                  <li>
                    <Link to="/" onClick={toggleMobileMenu} className="block text-white text-xl py-3 px-4 hover:bg-[#f2312d] hover:text-white transition-all duration-300 uppercase">Home</Link>
                  </li>

                  {/* About Us */}
                  <li>
                    <div className="relative">
                      <button
                        className="w-full text-left text-xl py-3 px-4 text-white hover:bg-[#f2312d] hover:text-white focus:outline-none uppercase flex items-center justify-between"
                        onClick={() => setOpenAbout(!openAbout)}
                      >
                        <Link to="/about-us" className="flex items-center w-full"  onClick={toggleMobileMenu} >
                          About Us
                        </Link>
                        {/* Add the arrow icon */}
                        <span className={`transform transition-transform ${openAbout ? 'rotate-180' : ''}`}>
                          &#9660; {/* Down arrow for closed state */}
                        </span>
                      </button>
                      {openAbout && (
                        <ul className="bg-white text-black shadow-lg mt-2 py-2 w-full">
                          <li><Link to="/russia" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">About Russia</Link></li>
                          <li><Link to="/services-for-students" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Services for Students</Link></li>
                        </ul>
                      )}
                    </div>
                  </li>


                  {/* Universities */}
                  <li>
                    <div className="relative">
                      <button
                        className="w-full text-left text-xl text-white py-3 px-4 hover:bg-[#f2312d] hover:text-white focus:outline-none uppercase flex items-center justify-between"
                        onClick={() => setOpenUniversities(!openUniversities)}
                      >
                        Universities
                        {/* Add the arrow icon */}
                        <span className={`transform transition-transform ${openUniversities ? 'rotate-180' : ''}`}>
                          &#9660; {/* Down arrow for closed state */}
                        </span>
                      </button>
                      {openUniversities && (
                        <ul className="bg-white text-black shadow-lg mt-2 py-2 w-full">
                          <li><Link to="/medical-universities-in-russia" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Medical Universities</Link></li>
                          <li><Link to="/technical-universities-in-russia" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Technical Universities</Link></li>
                          <li><Link to="/courses-in-russia" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Courses In Russia</Link></li>
                        </ul>
                      )}
                    </div>
                  </li>

                  {/* Fee Structure */}
                  <li>
                    <div className="relative">
                      <button
                        className="w-full text-left text-xl py-3 text-white px-4 hover:bg-[#f2312d] hover:text-white focus:outline-none uppercase flex items-center justify-between"
                        onClick={() => setOpenFeeStructure(!openFeeStructure)}
                      >
                        Fee Structure 2025
                        {/* Add the arrow icon */}
                        <span className={`transform transition-transform ${openFeeStructure ? 'rotate-180' : ''}`}>
                          &#9660; {/* Down arrow for closed state */}
                        </span>
                      </button>
                      {openFeeStructure && (
                        <ul className="bg-white text-black shadow-lg mt-2 py-2 w-full">
                          <li><Link to="/fee-structure" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Fee Structure For MBBS, BDS, Pharmacy</Link></li>
                          <li><Link to="/fee-for-technical-universities" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Fee Structure For Technical Universities</Link></li>
                          <li><Link to="/fees-for-russian-language-courses" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Fee Structure For Russian Language Courses</Link></li>
                          <li><Link to="/study-mba-in-southern-federal-university-russia-in-english-medium" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">MBA In English Medium</Link></li>
                        </ul>
                      )}
                    </div>
                  </li>

                  {/* Useful Info */}
                  <li>
                    <div className="relative">
                      <button
                        className="w-full text-left text-xl py-3 px-4 text-white hover:bg-[#f2312d] hover:text-white focus:outline-none uppercase flex items-center justify-between"
                        onClick={() => setOpenUsefulInfo(!openUsefulInfo)}
                      >
                        Useful Info
                        {/* Add the arrow icon */}
                        <span className={`transform transition-transform ${openUsefulInfo ? 'rotate-180' : ''}`}>
                          &#9660; {/* Down arrow for closed state */}
                        </span>
                      </button>
                      {openUsefulInfo && (
                        <ul className="bg-white text-black shadow-lg mt-2 py-2 w-full">
                          <li><Link to="/" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">MBBS In Russia</Link></li>
                          <li><Link to="/admission-procedure" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Admission Procedure</Link></li>
                          <li><Link to="/useful-info/page3" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Preparatory Faculty</Link></li>
                        </ul>
                      )}
                    </div>
                  </li>

                  {/* Gallery */}
                  <li>
                    <div className="relative">
                      <button
                        className="w-full text-left text-xl py-3 px-4 text-white hover:bg-[#f2312d] hover:text-white focus:outline-none uppercase flex items-center justify-between"
                        onClick={() => setOpenGallery(!openGallery)}
                      >
                        Gallery
                        {/* Add the arrow icon */}
                        <span className={`transform transition-transform ${openGallery ? 'rotate-180' : ''}`}>
                          &#9660; {/* Down arrow for closed state */}
                        </span>
                      </button>
                      {openGallery && (
                        <ul className="bg-white text-black shadow-lg mt-2 py-2 w-full">
                          <li><Link to="/photo/gallery" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Photo Gallery</Link></li>
                          <li><Link to="/video/gallery" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Video Gallery</Link></li>
                        </ul>
                      )}
                    </div>
                  </li>

                  {/* Resources */}
                  <li>
                    <div className="relative">
                      <button
                        className="w-full text-left text-xl py-3 px-4 text-white hover:bg-[#f2312d] hover:text-white focus:outline-none uppercase flex items-center justify-between"
                        onClick={() => setOpenResources(!openResources)}
                      >
                        Resources
                        {/* Add the arrow icon */}
                        <span className={`transform transition-transform ${openResources ? 'rotate-180' : ''}`}>
                          &#9660; {/* Down arrow for closed state */}
                        </span>
                      </button>
                      {openResources && (
                        <ul className="bg-white text-black shadow-lg mt-2 py-2 w-full">
                          <li><Link to="/resources/blog" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Blog</Link></li>
                          <li><Link to="/resources/neet" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">NEET</Link></li>
                          <li><Link to="/resources/faqs" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">FAQ's</Link></li>
                          <li><Link to="/resources/upcoming-events" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Upcoming Events</Link></li>
                        </ul>
                      )}
                    </div>
                  </li>

                  {/* FAQ */}
                  <li>
                    <Link to="/faq" onClick={toggleMobileMenu} className="block text-xl py-3 px-4 hover:bg-[#f2312d] text-white hover:text-white transition-all duration-300 uppercase">FAQ</Link>
                  </li>

                  {/* Contact Us */}
                  <li>
                    <Link to="/contact-us" onClick={toggleMobileMenu} className="block text-xl text-white  py-3 px-4 hover:bg-[#f2312d] hover:text-white transition-all duration-300 uppercase">Contact Us</Link>
                  </li>




                  {/* Mobile-Friendly Floating Buttons (Visible on Mobile) */}
                  <div className="fixed bottom-4 right-4 md:static flex flex-col space-y-3 items-center md:items-start z-50">

                    {/* Live Counseling Button */}
                    <div onClick={() => setIsChatOpen(true)} className="w-auto">
                      <div className="relative flex items-center justify-center h-12 md:h-14 space-x-3 bg-white border border-green-500 shadow-lg rounded-md px-3 md:px-4 py-1 hover:animate-vibrate">
                        {/* Glowing Animated Effect Outside */}
                        <div className="absolute inset-0 rounded-md border-2 border-green-500 animate-custom-pulse"></div>

                        {/* Icon */}
                        <img src="https://png.pngtree.com/png-vector/20240104/ourmid/pngtree-green-headphone-graphic-vector-png-image_11387270.png"
                          alt="Live Counseling"
                          className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 vibrate-on-hover" />

                        {/* Text */}
                        <span className="text-red-600 font-semibold text-xs sm:text-sm md:text-base relative">Live Counseling</span>
                      </div>
                    </div>

                    <div className="flex justify-center pl-6 relative">
                      <Link to="/fee-payment">
                        <button onClick={toggleMobileMenu} className="relative px-4 py-3 text-white font-bold text-lg rounded-full bg-red-600 animate-blink border-none shadow-lg transition-transform duration-200 hover:scale-105">
                          Pay Registration Fee
                          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 240 60">
                            <rect
                              x="2" y="2" width="236" height="56" rx="30" ry="30"
                              fill="none" stroke="#facc15" stroke-width="3"
                              stroke-dasharray="10 10" stroke-dashoffset="0"
                              className="animate-border"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>

                    {/* Custom Animation Styles */}
                    <style>
                      {`

    
    .animate-blink {
      animation: blink 2.5s infinite alternate;
      animation-fill-mode: both;
    }

    @keyframes borderAnimation {
      0% { stroke-dashoffset: 100; }
      100% { stroke-dashoffset: 0; }
    }

    .animate-border {
      animation: borderAnimation 2s linear infinite;
    }
  `}
                    </style>

                    {/* Call Button */}
                    <a href="tel:+917042284508" className="w-full md:w-auto">
                      <div className="flex items-center bg-white text-gray-800 px-3 md:px-4 py-2 rounded-md space-x-3 md:space-x-4 border border-green-500 shadow-lg rounded-md hover:animate-vibrate">
                        {/* Icon */}
                        <img src="https://cdn-icons-png.flaticon.com/256/7222/7222563.png"
                          alt="Call Icon"
                          className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 vibrate-on-hover" />

                        {/* Text */}
                        <div className="flex flex-col text-left">
                          <span className="text-xs sm:text-sm md:text-base text-gray-600">Call us Now</span>
                          <span className="font-semibold text-sm sm:text-lg text-red-600">+91 7669533991</span>
                        </div>
                      </div>
                    </a>


                    {/* WhatsApp Button */}
                    <a href="https://wa.me/917428212236?text=Hi" target="_blank" rel="noopener noreferrer" className="w-full border border-green-500 shadow-lg rounded-md md:w-auto">
                      <div className="flex items-center bg-white text-gray-800 px-3 md:px-4 py-2 rounded-md space-x-3 md:space-x-4 hover:animate-vibrate">
                        {/* Icon */}
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/024/398/617/small/whatsapp-logo-icon-isolated-on-transparent-background-free-png.png"
                          alt="WhatsApp Icon"
                          className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 vibrate-on-hover" />

                        {/* Text */}
                        <div className="flex flex-col text-left">
                          <span className="text-xs sm:text-sm md:text-base text-gray-600">WhatsApp Us</span>
                          <span className="font-semibold text-sm sm:text-lg text-red-600">7428212236</span>
                        </div>
                      </div>
                    </a>

                    {/* Custom Animation */}
                    <style>
                      {`
    @keyframes greenPulse {
      0% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
      50% { box-shadow: 0 0 15px rgba(34, 197, 94, 0.8); }
      100% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
    }
    .animate-custom-pulse {
      animation: greenPulse 1.5s infinite;
    }

    @keyframes vibrate {
      0% { transform: translateX(0); }
      25% { transform: translateX(-2px); }
      50% { transform: translateX(2px); }
      75% { transform: translateX(-2px); }
      100% { transform: translateX(2px); }
    }
    .vibrate-on-hover {
      transition: transform 0.2s ease-in-out;
    }
    .hover\\:animate-vibrate:hover .vibrate-on-hover {
      animation: vibrate 0.2s ease-in-out infinite;
    }
  `}
                    </style>

                  </div>

                </ul>
              </nav>
            </motion.div>
          </motion.div>
        </div>

      </header >
    </>
  );
};

export default Navbar;
