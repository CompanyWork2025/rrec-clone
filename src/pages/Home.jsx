import React from 'react';
import Hero from "../components/Home/Hero.jsx";
import About from "../components/Home/About.jsx";
import Banner from "../components/Home/Banner.jsx";
import UniversityScrollSection from '../components/Home/UniversityScrollSection.jsx';
import DoctorSection from '../components/Home/DoctorSection.jsx';
import MedicalUniversity from '../components/Home/MedicalUniversity.jsx';
import Testimonials from '../components/Home/Testimonials.jsx';
import TechnicalUniversity from '../components/Home/TechnicalUniversity.jsx';
import Subscribe from '../components/Home/Subscribe.jsx';

function Home() {
  return (
    <>
     <Hero />
     <About />
     <Banner />
     <DoctorSection />
     <UniversityScrollSection />
     <MedicalUniversity />
     <Testimonials />
     <TechnicalUniversity />
     <Subscribe />
    </>
  );
}

export default Home;
