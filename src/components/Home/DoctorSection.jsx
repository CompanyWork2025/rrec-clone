import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaAward, FaMoneyBill, FaUser, FaUserGraduate } from 'react-icons/fa'; 
import { useTranslation } from 'react-i18next'; 

const DoctorSection = () => {
  const { t } = useTranslation(); 

  return (
    <motion.section 
      className="flex flex-wrap lg:px-20 items-center justify-between p-8 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Ensures animation runs only when 20% of component is visible
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }}
    >
      {/* Left side: Image */}
      <motion.div 
        className="w-full md:w-1/2 mb-8 md:mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { scale: 0.9, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
        }}
      >
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
          alt="Doctor"
          className="w-full h-auto lg:h-[650px] rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Right side: Text */}
      <motion.div 
        className="w-full md:w-1/2 lg:pl-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        {[
          { icon: <FaUser />, title: t('aboutRussia'), desc: t('aboutRussiaDescription') },
          { icon: <FaUserGraduate />, title: t('mbbsInRussia'), desc: t('mbbsInRussiaDescription') },
          { icon: <FaAward />, title: t('admissionProcedure'), desc: t('admissionProcedureDescription') },
          { icon: <FaMoneyBill />, title: t('feeStructure'), desc: t('feeStructureDescription') },
        ].map((item, index) => (
          <motion.div 
            key={index}
            className="mb-6 flex items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { delay: index * 0.2, duration: 0.6 } }
            }}
          >
            <div className="text-[#f2312d] lg:mt-1 mr-4 text-3xl">{item.icon}</div>
            <div>
              <h3 className="text-xl mb-1 lg:text-2xl font-roboto font-semibold text-[#f2312d]">{item.title}</h3>
              <p className="text-lg font-roboto text-gray-600">{item.desc}</p>
              <a href="#readmore" className="text-[#f2312d] hover:underline flex items-center mt-2">
                <span className="mr-2">{t('readMore')}</span>
                <FaArrowRight />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default DoctorSection;
