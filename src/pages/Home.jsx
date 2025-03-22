import React from 'react';
import Hero from "../components/Home/Hero.jsx";
import About from "../components/Home/About.jsx";
import Banner from "../components/Home/Banner.jsx";
import DoctorSection from '../components/Home/DoctorSection.jsx';
import MedicalUniversity from '../components/Home/MedicalUniversity.jsx';
import Testimonials from '../components/Home/Testimonials.jsx';
import TechnicalUniversity from '../components/Home/TechnicalUniversity.jsx';
import Media from '../components/Home/Media.jsx';
import Subscribe from '../components/Home/Subscribe.jsx';
import Award from '../components/Home/Award.jsx';

function Home() {
  return (
    <>
     <Hero />
     <About />
     <Banner />
     <DoctorSection />
     <Award />
     <MedicalUniversity />
     <Testimonials />
     <TechnicalUniversity />
     <Media />
     <Subscribe />
    </>
  );
}

export default Home;
