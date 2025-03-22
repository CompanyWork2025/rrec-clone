import React, { useRef } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

const universities = [
  { name: 'Don State Technical University Russia', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1807195337679660.jpg.webp', path: "/don-state-technical-university-russia" },
  { name: 'Southern Federal University', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1807238704018233.webp.webp', path: "/southern-federal-university-russia" },
  { name: 'Study MBA In Southern Federal University, Russia', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1807238757258044.webp.webp', path: "/study-mba-in-southern-federal-university-russia-in-english-medium" },
  { name: 'Rostov State University Of Economics, Russia', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1807239202191095.webp.webp', path: "/rostov-state-university-economics-russia" },
  { name: 'Veterinary Medicine – Don State Technical University', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1807239271823550.webp.webp', path: "/veterinary-medicine-don-state-technical-university" },
];

const TechnicalUniversity = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full py-6 lg:py-16 lg:px-8"
    >
      <div className="mx-auto items-center w-full mt-4 lg:-mt-6">
        <div className="flex items-center justify-center">
          <div className="w-10 h-[2px] bg-[#f2312d]" />
          <h1 className="text-md lg:text-xl font-roboto font-bold mx-4 text-[#f2312d]">
            {t('technicalUniversities')}
          </h1>
          <div className="w-10 h-[2px] bg-[#f2312d]" />
        </div>
        <div className="flex justify-center items-center mt-4">
          <h2 className="text-2xl lg:text-3xl text-center font-roboto font-bold text-gray-800 mt-2">
            {t('topUniversities')}
          </h2>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
          },
        }}
      >
        {universities.map((university, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg border border-transparent animate-border"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.2, duration: 0.6 },
              },
            }}
          >
            <motion.img
              src={university.imageUrl}
              alt={university.name}
              className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 240 324"
              preserveAspectRatio="none"
            >
              <rect
                x="2"
                y="2"
                width="236"
                height="320"
                rx="15"
                ry="15"
                fill="none"
                stroke="#DC2626"
                strokeWidth="3"
                strokeDasharray="10 10"
                strokeDashoffset="0"
                className="animate-border"
              />
            </svg>


            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <FiMapPin className="text-2xl text-white mb-2" />
              <p className="text-white text-lg px-4 mb-4 font-semibold text-center">
                {university.name}
              </p>
              {/* Read More Button */}
              <motion.button
                className="relative inline-flex items-center justify-start overflow-hidden px-3 py-2 text-lg font-semibold text-white border-2 border-white rounded-md bg-transparent transition-all duration-300 ease-in-out group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(university.path)}
              >
                <span className="w-0 h-0 rounded bg-[#f2312d] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  Read More
                </span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>
        {`
          @keyframes borderAnimation {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-border {
            animation: borderAnimation 2s linear infinite;
          }
        `}
      </style>
    </motion.div>
  );
};

export default TechnicalUniversity;
