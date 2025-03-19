import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import UsefulInfoPage1 from './pages/UsefulInfoPage1';
import UsefulInfoPage2 from './pages/UsefulInfoPage2';
import UsefulInfoPage3 from './pages/UsefulInfoPage3';
import PhotoGallery from './pages/PhotoGallery';
import FAQ from './pages/FAQSection';
import ContactUs from './pages/ContactUs';
import Admission from './pages/Admission';

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
          <Route path="/admission-procedure" element={<Admission />} />
          <Route path="/useful-info/page2" element={<UsefulInfoPage2 />} />
          <Route path="/useful-info/page3" element={<UsefulInfoPage3 />} />
          <Route path="/photo/gallery" element={<PhotoGallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </I18nextProvider>
  );
}

export default App;
