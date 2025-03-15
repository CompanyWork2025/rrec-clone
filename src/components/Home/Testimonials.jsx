import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useInView } from 'framer-motion';
import { Autoplay } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';

const testimonialsData = [
  {
    name: 'Dr. Mbali Sindi',
    university: 'RSMU',
    rating: 4.8,
    text: 'Studying at Rostov State Medical University has been a transformative experience. The medical curriculum is comprehensive, and the city’s vibrant culture has made my educational journey even more enjoyable.'
  },
  {
    name: 'Dr. Harsh',
    university: 'PFUR',
    rating: 4.7,
    text: 'At PFUR, I received invaluable practical experience. The faculty encouraged critical thinking, helping me grow academically and personally. I have developed lifelong connections with my peers and professors.'
  },
  {
    name: 'Dr. Rakesh',
    university: 'RSMU',
    rating: 5,
    text: 'Ural State Medical University has provided a robust medical education, with a strong focus on practical learning. The campus is inclusive, and the faculty offers excellent support to international students.'
  },
  {
    name: 'Irina Sokolova',
    university: 'Crimea Federal University',
    rating: 4.9,
    text: 'Studying at Crimea Federal University has been a life-changing experience. The high-quality education, combined with the university’s exceptional support for international students, made it an ideal place for both study and relaxation.'
  }
];

const TestimonialCard = ({ name, university, rating, text }) => {
  const truncatedText = text.length > 150 ? text.slice(0, 150) + '...' : text;

  return (
    <div className="relative bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-105 h-[450px]">
      <svg className="absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path fill="#e0e7ff" d="M0,50 C30,10 70,10 100,50 L100,100 L0,100 Z" />
      </svg>
      <div className="relative z-10 mt-16 p-6 h-full">
        <img
          className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white"
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt={name}
        />
        <p className="text-md font-roboto text-center mt-16">{university}</p>
        <p className="text-lg font-bold text-center mt-2">{name}</p>
        <p className="text-center text-yellow-400">{'⭐'.repeat(Math.round(rating))}</p>
        <p className="mt-4 text-gray-700 text-justify">{truncatedText}</p>
        <a href="#readmore" className="text-[#f2312d] hover:underline flex items-center justify-center mt-2">
          <span className="mr-2">Read More</span>
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col lg:flex-row justify-between bg-[#f2312d] py-8 lg:py-16 lg:px-24 px-4"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-2/5 lg:mt-8 text-white"
      >
        <h1 className="text-xl font-bold font-roboto text-center lg:text-start">{t('whyUs')}</h1>
        <h2 className="mt-1 text-xl font-roboto text-center lg:text-start">{t('whatOurStudentsSay')}</h2>
        <p className="mt-6 text-md text-left text-justify font-roboto">
          {t('testimonialText')}
        </p>
        <p className="mt-6 text-md text-left text-justify font-roboto">
          {t('testimonialText2')}
        </p>
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
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  university={testimonial.university}
                  rating={testimonial.rating}
                  text={testimonial.text}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;