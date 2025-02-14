import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18n from './118n'; // Make sure i18n is configured properly
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer
import Home from './pages/Home';
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
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <I18nextProvider i18n={i18n}> {/* Wrap the app in I18nextProvider */}
      <Router>
        <Navbar /> {/* Add Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/rrec" element={<AboutRussia />} />
          <Route path="/about/services" element={<ServicesForStudents />} />
          <Route path="/universities/medical" element={<MedicalUniversities />} />
          <Route path="/universities/technical" element={<TechnicalUniversities />} />
          <Route path="/universities/courses" element={<CoursesInRussia />} />
          <Route path="/fee-structure/page1" element={<FeePage1 />} />
          <Route path="/fee-structure/page2" element={<FeePage2 />} />
          <Route path="/fee-structure/page3" element={<FeePage3 />} />
          <Route path="/fee-structure/page4" element={<FeePage4 />} />
          <Route path="/useful-info/page1" element={<UsefulInfoPage1 />} />
          <Route path="/useful-info/page2" element={<UsefulInfoPage2 />} />
          <Route path="/useful-info/page3" element={<UsefulInfoPage3 />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer /> {/* Add Footer here */}
      </Router>
    </I18nextProvider>
  );
}

export default App;
