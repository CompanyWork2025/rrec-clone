import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaTimes } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';

const testimonialsData = [
  {
    name: 'Dr. Vikram B.',
    university: 'RSMU, Russia',
    rating: 4.8,
    text: 'I had an amazing experience with Reliable Russian Educational Consultants From the very beginning, their team provided expert guidance on university selection, application processes, and visa assistance. They were always responsive, professional, and genuinely cared about my success. Thanks to their support, I was able to secure admission to a top Russian university without any hassle. I highly recommend their services to anyone looking for a smooth and trustworthy study-abroad journey in Russia!"'
  },
  {
    name: 'Zainab Syed',
    university: 'UAE',
    rating: 4.7,
    text: 'Dr. A.K. supported me and my brother throughout the process in the United Arab Emirates (Dubai) while clearing all our doubts about studying in Russia. He provided a very quick and amazing service specifically to us. It’s commendable how he handled everything from the start to the end. Thanks a lot 🙏 🤩'
  },
  {
    name: 'Er. Usman D.',
    university: 'Nigeria',
    rating: 5,
    text: 'Excellent experience from the support I got from Dr. Abhineet in getting admission for my two daughters from Nigeria. His availability and professionalism in prompt response to my queries and provision of guidance are highly commendable. Thanks and keep it up please!!'
  },
  {
    name: 'Dr. Vikrant Suran',
    university: 'KSMU, Kazan',
    rating: 4.9,
    text: 'Reliable Russian Education Consultants made my dream of studying MBBS in Russia a reality! Their team handled everything with professionalism and care, from choosing the right university to visa processing. What stood out the most was their personalized approach—they were always available to answer my questions and guide me through every step. Thanks to them; I am a graduate of KSMU Kazan. If you’re looking for a trustworthy education service, this is the one to choose!"'
  },
  {
    name: 'Singh Kapidwaj',
    university: 'Cfu, Crimea',
    rating: 4.9,
    text: 'Choosing Reliable Russian Educational Consultants was the best decision for my study-abroad journey! Their team provided clear guidance, handled all the paperwork seamlessly, and ensured a hassle-free admission process. I never felt lost or overwhelmed because they were always there to support me. Now, I’m studying in CFU Russia with confidence, knowing I made the right choice. Highly recommended for anyone looking for a smooth and reliable education service!'
  },
  {
    name: 'Jadhav Atharva Harish ',
    university: 'Usmu, Yekaterinburg',
    rating: 4.9,
    text: 'RREC truly transformed my study MBBS abroad journey. Their expert guidance and attention to detail made the entire application process smooth and stress-free. I am currently studying MBBS in Ural state medical university, Russia. Thanks to their help, I wholeheartedly recommend their service to anyone looking to study medicine in Russia. '
  },
];

const TestimonialCard = ({ name, university, rating, text, onClick }) => {
  const truncatedText = text.length > 150 ? text.slice(0, 150) + '...' : text;

  return (
    <div
      className="relative bg-white rounded-2xl shadow-xl p-6 mt-10 max-w-md mx-auto text-center min-h-[200px] cursor-pointer hover:shadow-2xl transition-all duration-300"
      onClick={onClick} // Open modal when clicked
    >
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg">
        <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt={name} className="w-full h-full object-cover" />
      </div>

      <FaQuoteRight className="text-white p-2 bg-gray-400 text-5xl rounded-full absolute left-4 -top-4 scale-x-[-1]" />

      <div className="mt-12">
        <p className="text-gray-700 text-md leading-relaxed mt-6">{truncatedText}</p>
      </div>

      <FaQuoteLeft className="text-white p-2 bg-gray-400 rounded-full text-5xl absolute right-4 bottom-[-24px] scale-x-[-1]" />

      <div className="flex justify-between items-center mt-4">
        <div className="text-left">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-500 text-sm">{university}</p>
        </div>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={index < Math.round(rating) ? "text-yellow-400" : "text-gray-300"} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Modal Component with Framer Motion Animation
const TestimonialModal = ({ testimonial, onClose }) => {
  return (
    <AnimatePresence>
      {testimonial && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative flex flex-col items-center text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="absolute top-3 right-3 text-red-600 hover:text-black" onClick={onClose}>
              <FaTimes size={24} />
            </button>

            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt={testimonial.name} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-bold mt-4">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.university}</p>

            <div className="flex justify-center space-x-1 mt-2">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className={index < Math.round(testimonial.rating) ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>

            <p className="mt-4 text-gray-700">{testimonial.text}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col lg:flex-row font-roboto   justify-between bg-[#f2312d] py-8 lg:py-16 lg:px-24 px-4 overflow-visible"
      >

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-2/5 lg:mt-4 text-white"
        >
          <h1 className="text-xl lg:text-2xl font-roboto font-bold font-roboto text-center lg:text-start">{t('whyUs')}</h1>
          <h2 className="mt-1 text-xl font-roboto text-center lg:text-start">{t('whatOurStudentsSay')}</h2>
          <p className="mt-6 text-sm text-left text-justify font-roboto">{t('testimonialText')}</p>
          <p className="mt-6 text-sm text-left text-justify font-roboto">{t('testimonialText2')}</p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-3/5 mt-10 lg:mt-0 lg:ml-8"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            grabCursor={true}
            className="min-h-[350px]"
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index} className="!overflow-visible flex justify-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <TestimonialCard
                    {...testimonial}
                    onClick={() => setSelectedTestimonial(testimonial)} // Open modal on click
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>

      <TestimonialModal testimonial={selectedTestimonial} onClose={() => setSelectedTestimonial(null)} />
    </>
  );
};

export default Testimonials;
