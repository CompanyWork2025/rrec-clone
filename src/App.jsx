import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { I18nextProvider } from 'react-i18next';
import i18n from './118n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import Home from './pages/Home';
import About from './pages/About';
import AboutRussia from './pages/AboutRussia';
import ServicesForStudents from './pages/ServicesForStudents';
import MedicalUniversities from './pages/MedicalUniversities';
import TechnicalUniversities from './pages/TechnicalUniversities';
import CoursesInRussia from './pages/CoursesInRussia';
import FeePage1 from './pages/FeePage1';
import FeePage2 from './pages/FeePage2';
import FeePage3 from './pages/FeePage3';
import FeePage4 from './pages/FeePage4';
import Services from './pages/OurServices';
import Fee from './pages/Payment';
import Visa from './pages/Visa';
import Language from './pages/Language';
import Policy from './pages/Policy';
import PhotoGallery from './pages/PhotoGallery';
import VideoGallery from './pages/VideoGallery';
import FAQ from './pages/FAQSection';
import Career from './pages/Career';
import ContactUs from './pages/ContactUs';
import Mbbs from "./pages/MBBS";
import Admission from './pages/Admission';
import ReferEarn from './pages/ReferEarn';
import Nmc from './pages/Nmc';
import UpcomingEvents from "./pages/Upcoming";
import Neet from './pages/Neet';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Apply from './pages/Apply';
import Partner from './pages/Partner';


const StickyButton = ({ text, link, position }) => {
  return (
    <div className={`fixed ${position === 'left' ? '-left-1' : 'right-0'} top-[60%] transform -translate-y-1/2 z-50`}>
      <Link
        to={link}
        className={`text-white absolute border border-white transform -translate-y-1/2 rotate-[90deg] shadow-lg whitespace-nowrap 
        ${position === 'left' ? 'rounded-t-lg -left-12' : 'rounded-b-lg -right-12'}`}
      >
        <motion.div
          animate={{ backgroundColor: ["#2563eb", "#dc2626", "#f59e0b", "#10b981"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className={`px-4 py-2 ${position === "left" ? "rounded-t-lg" : "rounded-b-lg"}`}
        >
          {text}
        </motion.div>

      </Link>
    </div>
  );
};


// WhatsApp Button with Motion Popup
const WhatsAppSticky = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide after 3 sec
    }, 10000); // Show every 10 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 z-50 flex items-center">
      <a
        href="https://wa.me/+917042284508?text=Hi,%20I%20have%20a%20query"
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
      >
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/024/398/617/small/whatsapp-logo-icon-isolated-on-transparent-background-free-png.png"
          alt="WhatsApp Us"
          className="w-20 h-20 rounded-full"
        />
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 bottom-14 transform -translate-x-1/2 flex items-center justify-center z-50 min-w-[250px]"
          >
            <img
              src="https://media3.giphy.com/media/JRCWaAYIhOi9zV8l9k/giphy.gif?cid=6c09b9523dml7e5p0qntq83bkjmde7rzhazcnh14y7k3r88p&ep=v1_stickers_search&rid=giphy.gif&ct=s"
              alt="Cloud Popup"
              className="w-64 h-auto"  // ✅ Fixed width to prevent shrinking
              loading='lazy'
            />
            <span className="absolute text-black font-bold text-lg p-8 text-center w-full">
              WhatsApp us for any queries!
            </span>
          </motion.div>
        )}
      </a>
    </div>


  );
};


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/russia" element={<AboutRussia />} />
          <Route path="/services-for-students" element={<ServicesForStudents />} />
          <Route path="/medical-universities-in-russia" element={<MedicalUniversities />} />
          <Route path="/technical-universities-in-russia" element={<TechnicalUniversities />} />
          <Route path="/courses-in-russia" element={<CoursesInRussia />} />
          <Route path="/fee-structure" element={<FeePage1 />} />
          <Route path="/fee-for-technical-universities" element={<FeePage2 />} />
          <Route path="/fees-for-russian-language-courses" element={<FeePage3 />} />
          <Route path="/study-mba-in-southern-federal-university-russia-in-english-medium" element={<FeePage4 />} />
          <Route path="/study-mbbs-in-russia" element={<Mbbs />} />
          <Route path="/admission-procedure" element={<Admission />} />
          <Route path="/tourist-visa-for-russia" element={<Visa />} />
          <Route path="/russian-language" element={<Language />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/fee-payment" element={<Fee />} />
          <Route path="/neet" element={<Neet />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/nmc-regulations" element={<Nmc />} />
          <Route path="/refer-earn" element={<ReferEarn />} />
          <Route path="/refund-policy" element={<Policy />} />
          <Route path="/photo/gallery" element={<PhotoGallery />} />
          <Route path="/video/gallery" element={<VideoGallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/partner-with-us" element={<Partner />} />
          <Route path="/apply-now" element={<Apply />} />
        </Routes>
        <Footer />

        {/* Sticky Buttons with Animated Background */}
        <StickyButton text="Partner With Us" link="/partner-with-us" position="left" />
        <StickyButton text="Apply Online" link="/apply-now" position="right" />
        <WhatsAppSticky />

      </Router>
    </I18nextProvider>
  );
}

export default App;
