import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import arrow from "../assets/down-arrow.png";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import '../118n'; // Import your i18n.js
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
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
      <div className="hidden md:block bg-blue-800 text-white py-1">
        <div className="max-w-screen-2xl mx-auto px-6 flex items-center font-roboto">
          {/* Moving Text on the left */}
          <h1 className="lg:mr-4 font-bold lg:text-xl animate-colorCycle">
            <span className="inline-block animate-colorCycle">{t('breakingNews')}:</span>
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

          {/* Right-side Button Section */}
          <div className="flex justify-end items-center space-x-2 lg:ml-28 bg-white rounded-lg p-0">
            {/* Replace the Google Icon with a PNG image */}
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" // Replace this with the actual path of your PNG image
                alt="Google"
                className="w-6 h-6 ml-2" // Adjust size of image as per your requirement
              />
            </div>

            {/* Language dropdown */}
            <select
              value={i18n.language} // This will bind the current language to the dropdown
              onChange={handleLanguageChange} // Calls the language change function on change
              className="text-black p-1 rounded-md ml-2"
            >
              <option value="en">{t('language')}: English</option>
              <option value="ru">{t('language')}: Russian</option>
              <option value="es">{t('language')}: Spanish</option>
              <option value="fr">{t('language')}: French</option>
              <option value="zh">{t('language')}: Chinese</option>
              <option value="hi">{t('language')}: Hindi</option>
            </select>
          </div>

        </div>
      </div>

      <div className="flex justify-between items-center lg:px-8 bg-[#f2312d] text-white p-2">
        <div className="hidden md:flex space-x-6 items-center">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="h-5 w-5" />
            <span>contact@rrecrussia.com</span>
          </div>
          <div className="border-l border-white h-6"></div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="h-5 w-5" />
            <span>rrec.educonsultants@gmail.com</span>
          </div>
          <div className="border-l border-white h-6"></div>
          <div className="flex items-center space-x-2">
            <FaPhone className="h-5 w-5" />
            <span>+91-7042284508</span>
          </div>
          <div className="border-l border-white h-6"></div>
          <div className="flex items-center space-x-2">
            <FaPhone className="h-5 w-5" />
            <span>+91 7042284509</span>
          </div>
        </div>

        <div className="flex ml-20 lg:-ml-4 items-center space-x-6 lg:space-x-4 ">
          <a href="#" className="hover:text-gray-300">
            <FaFacebookF className="h-4 w-4 lg:h-5 lg:w-5" />
          </a>
          <div className="border-l border-white h-6"></div>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram className="h-4 w-4 lg:h-5 lg:w-5" />
          </a>
          <div className="border-l border-white h-6"></div>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedinIn className="h-4 w-4 lg:h-5 lg:w-5" />
          </a>
          <div className="border-l border-white h-6"></div>
          <a href="#" className="hover:text-gray-300">
            <FaYoutube className="h-4 w-4 lg:h-5 lg:w-5" />
          </a>
        </div>

      </div>

      {/* Navbar */}
      <header className="bg-white shadow-lg text-sm text-black p-2 lg:p-0 font-roboto font-regular sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14 w-auto md:h-24 md:w-full" />
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="hidden lg:flex space-x-5">
              {/* Home */}
              <li><Link to="/" className="hover:text-[#f2312d] uppercase">{t('home')}</Link></li>

              <li
                className="relative group"
                onMouseEnter={() => setOpenAbout(true)}
                onMouseLeave={() => setOpenAbout(false)}
              >
                <div className="flex items-center space-x-2">
                  <button className="hover:text-[#f2312d] focus:outline-none uppercase">
                    {t('aboutUs')}
                  </button>
                  <img
                    src={arrow}
                    alt="Down Arrow"
                    className="w-2 h-2 transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>


                {/* AnimatePresence for About dropdown */}
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
                        {/* Top-right pointing arrow */}
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/about/rrec"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('aboutRussia')} {/* Translate "About Russia" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        {/* Top-right pointing arrow */}
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/about/services"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('servicesForStudents')} {/* Translate "Services for Students" */}
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
                  <button className="hover:text-[#f2312d] focus:outline-none uppercase">
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
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/universities/medical"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('medicalUniversities')} {/* Translation for 'Medical Universities' */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/universities/technical"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('technicalUniversities')} {/* Translation for 'Technical Universities' */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/universities/courses"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('coursesInRussia')} {/* Translation for 'Courses In Russia' */}
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
                  <button className="hover:text-[#f2312d] focus:outline-none uppercase">
                    {t('feeStructure')} {/* Dynamic translation for "Fee Structure 2025" */}
                  </button>
                  <img
                    src={arrow}
                    alt="Down Arrow"
                    className="w-2 h-2 transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>

                {/* AnimatePresence for Fee Structure dropdown */}
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
                          to="/fee-structure/page1"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('mbbsBdsPharmacyFee')} {/* Dynamic translation for MBBS, BDS, Pharmacy Fee */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/fee-structure/page2"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('technicalUniversitiesFee')} {/* Dynamic translation for Technical Universities Fee */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/fee-structure/page3"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('languageCoursesFee')} {/* Dynamic translation for Language Courses Fee */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/fee-structure/page4"
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
                  <button className="hover:text-[#f2312d] focus:outline-none uppercase">
                    {t('usefulInfo')} {/* Dynamic translation for "Useful Info" */}
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
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/useful-info/page1"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('mbbsInRussia')} {/* Dynamic translation for "MBBS In Russia" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/useful-info/page2"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('admissionProcedure')} {/* Dynamic translation for "Admission Procedure" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/useful-info/page3"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('preparatoryFaculty')} {/* Dynamic translation for "Preparatory Faculty" */}
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
                  <button className="hover:text-[#f2312d] focus:outline-none uppercase">
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
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/photo/gallery"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('photoGallery')} {/* Dynamic translation for "Photo Gallery" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/video/gallery"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('videoGallery')} {/* Dynamic translation for "Video Gallery" */}
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
                  <button className="hover:text-[#f2312d] focus:outline-none uppercase">
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
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/blog"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('blog')} {/* Dynamic translation for "Blog" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/neet"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('neet')} {/* Dynamic translation for "NEET" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/faqs"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('faqs')} {/* Dynamic translation for "FAQ's" */}
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <FaArrowRight className="text-[#f2312d] -mr-1 ml-4 -rotate-45" />
                        <Link
                          to="/upcoming-events"
                          className="block px-4 py-2 hover:text-[#f2312d]"
                        >
                          {t('upcomingEvents')} {/* Dynamic translation for "Upcoming Events" */}
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              {/* FAQ */}
              <li>
                <Link to="/faq" className="hover:text-[#f2312d] uppercase">
                  {t('faq')} {/* Dynamic translation for FAQ */}
                </Link>
              </li>

              {/* Contact Us */}
              <li>
                <Link to="/contact-us" className="hover:text-[#f2312d] uppercase">
                  {t('contactUs')} {/* Dynamic translation for Contact Us */}
                </Link>
              </li>
            </ul>

            {/* Mobile Header */}
            <div className="flex justify-between items-center lg:px-4 ml-auto text-black p-2 md:hidden">
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
              className="absolute top-0 right-0 w-4/5 sm:w-2/3 bg-white p-8 rounded-l-lg shadow-lg"
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
                    <Link to="/" onClick={toggleMobileMenu} className="block text-xl py-3 px-4 hover:bg-[#f2312d] hover:text-white transition-all duration-300 uppercase">Home</Link>
                  </li>

                  {/* About Us */}
                  <li>
                    <div className="relative">
                      <button
                        className="w-full text-left text-xl py-3 px-4 hover:bg-[#f2312d] hover:text-white focus:outline-none uppercase flex items-center justify-between"
                        onClick={() => setOpenAbout(!openAbout)}
                      >
                        About Us
                        {/* Add the arrow icon */}
                        <span className={`transform transition-transform ${openAbout ? 'rotate-180' : ''}`}>
                          &#9660; {/* Down arrow for closed state */}
                        </span>
                      </button>
                      {openAbout && (
                        <ul className="bg-white text-black shadow-lg mt-2 py-2 w-full">
                          <li><Link to="/about/rrec" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">About Russia</Link></li>
                          <li><Link to="/about/services" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Services for Students</Link></li>
                        </ul>
                      )}
                    </div>
                  </li>

                  {/* Universities */}
                  <li>
                    <div className="relative">
                      <button
                        className="w-full text-left text-xl py-3 px-4 hover:bg-[#f2312d] hover:text-white focus:outline-none uppercase flex items-center justify-between"
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
                          <li><Link to="/universities/medical" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Medical Universities</Link></li>
                          <li><Link to="/universities/technical" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Technical Universities</Link></li>
                          <li><Link to="/universities/courses" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Courses In Russia</Link></li>
                        </ul>
                      )}
                    </div>
                  </li>

                  {/* Fee Structure */}
                  <li>
                    <div className="relative">
                      <button
                        className="w-full text-left text-xl py-3 px-4 hover:bg-[#f2312d] hover:text-white focus:outline-none uppercase flex items-center justify-between"
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
                          <li><Link to="/fee-structure/page1" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Fee Structure For MBBS, BDS, Pharmacy</Link></li>
                          <li><Link to="/fee-structure/page2" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Fee Structure For Technical Universities</Link></li>
                          <li><Link to="/fee-structure/page3" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Fee Structure For Russian Language Courses</Link></li>
                          <li><Link to="/fee-structure/page4" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">MBA In English Medium</Link></li>
                        </ul>
                      )}
                    </div>
                  </li>

                  {/* Useful Info */}
                  <li>
                    <div className="relative">
                      <button
                        className="w-full text-left text-xl py-3 px-4 hover:bg-[#f2312d] hover:text-white focus:outline-none uppercase flex items-center justify-between"
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
                          <li><Link to="/useful-info/page1" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">MBBS In Russia</Link></li>
                          <li><Link to="/useful-info/page2" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Admission Procedure</Link></li>
                          <li><Link to="/useful-info/page3" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#f2312d]">Preparatory Faculty</Link></li>
                        </ul>
                      )}
                    </div>
                  </li>

                  {/* Gallery */}
                  <li>
                    <div className="relative">
                      <button
                        className="w-full text-left text-xl py-3 px-4 hover:bg-[#f2312d] hover:text-white focus:outline-none uppercase flex items-center justify-between"
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
                        className="w-full text-left text-xl py-3 px-4 hover:bg-[#f2312d] hover:text-white focus:outline-none uppercase flex items-center justify-between"
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
                    <Link to="/faq" onClick={toggleMobileMenu} className="block text-xl py-3 px-4 hover:bg-[#f2312d] hover:text-white transition-all duration-300 uppercase">FAQ</Link>
                  </li>

                  {/* Contact Us */}
                  <li>
                    <Link to="/contact-us" onClick={toggleMobileMenu} className="block text-xl py-3 px-4 hover:bg-[#f2312d] hover:text-white transition-all duration-300 uppercase">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        </div>

      </header>
    </>
  );
};

export default Navbar;
