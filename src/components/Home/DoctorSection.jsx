import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaAward, FaMoneyBill, FaUser, FaUserGraduate } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const DoctorSection = () => {
  const { t } = useTranslation();

  const links = {
    aboutRussia: "/russia",
    mbbsInRussia: "/study-mbbs-in-russia",
    admissionProcedure: "/admission-procedure",
    feeStructure: "/fee-structure",
  };

  return (
    <motion.section
      className="flex flex-wrap items-center justify-center lg:px-20 px-8 py-12 lg:py-4 bg-gradient-to-r from-red-100 to-gray-100 shadow-xl rounded-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
    >
      {/* Left Side - Image */}
      <motion.div
        className="relative w-full md:w-1/2 lg:pr-12 h-[90%] lg:p-20 mb-8 lg:-ml-20 md:mb-0 group overflow-hidden flex items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
          alt="Doctor"
          className="w-full h-full lg:h-[700px] rounded-xl transition-transform duration-500 group-hover:scale-105 border-4 border-white shadow-2xl object-cover"
        />
      </motion.div>

      {/* Right Side - Information */}
      <motion.div
        className="w-full md:w-1/2 space-y-4 flex font-roboto flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          { icon: <FaUser />, title: t('aboutRussia'), desc: t('aboutRussiaDescription'), link: links.aboutRussia },
          { icon: <FaUserGraduate />, title: t('mbbsInRussia'), desc: t('mbbsInRussiaDescription'), link: links.mbbsInRussia },
          { icon: <FaAward />, title: t('admissionProcedure'), desc: t('admissionProcedureDescription'), link: links.admissionProcedure },
          { icon: <FaMoneyBill />, title: t('feeStructure'), desc: t('feeStructureDescription'), link: links.feeStructure },
        ].map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0, transition: { delay: index * 0.2, duration: 0.6 } }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-[#f2312d] mr-4 text-4xl flex-shrink-0 animate-pulse">{item.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-[#f2312d] mb-1">{item.title}</h3>
              <p className="text-gray-600 text-md lg:text-lg">{item.desc}</p>
              <Link to={item.link} className="text-[#f2312d] flex items-center mt-3 font-medium hover:underline">
                <span className="mr-2">{t('readMore')}</span>
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default DoctorSection;
