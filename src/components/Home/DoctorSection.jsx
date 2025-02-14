import React from 'react';
import { FaArrowRight, FaAward, FaCertificate, FaGraduationCap, FaMoneyBill, FaUser, FaUserGraduate } from 'react-icons/fa'; 
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const DoctorSection = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <section className="flex flex-wrap lg:px-20 items-center justify-between p-8 bg-gray-100">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
          alt="Doctor"
          className="w-full h-auto lg:h-[650px] rounded-xl shadow-lg"
        />
      </div>

      {/* Right side: Text */}
      <div className="w-full md:w-1/2 lg:pl-8">
        {/* Expert Care */}
        <div className="mb-6 flex items-start">
          <FaUser className="text-[#f2312d] lg:mt-1 mr-4 text-3xl" />
          <div>
            <h3 className="text-xl mb-1 lg:text-2xl font-roboto font-semibold text-[#f2312d]">{t('aboutRussia')}</h3>
            <p className="text-lg font-roboto text-gray-600">
              {t('aboutRussiaDescription')}
            </p>
            <a href="#readmore" className="text-[#f2312d] hover:underline flex items-center mt-2">
              <span className="mr-2">{t('readMore')}</span>
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* MBBS in Russia */}
        <div className="mb-6 flex items-start">
          <FaUserGraduate className="text-[#f2312d] lg:mt-2 mr-4 text-3xl" />
          <div>
            <h3 className="text-xl mb-1 font-semibold font-roboto text-[#f2312d]">{t('mbbsInRussia')}</h3>
            <p className="text-gray-600 text-lg font-roboto">
              {t('mbbsInRussiaDescription')}
            </p>
            <a href="#readmore" className="text-[#f2312d] hover:underline flex items-center mt-2">
              <span className="mr-2">{t('readMore')}</span>
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Admission Procedure */}
        <div className="mb-6 flex items-start">
          <FaAward className="text-[#f2312d] lg:mt-2 mr-4 text-3xl" />
          <div>
            <h3 className="text-xl mb-1 font-semibold font-roboto text-[#f2312d]">{t('admissionProcedure')}</h3>
            <p className="text-gray-600 text-lg font-roboto">
              {t('admissionProcedureDescription')}
            </p>
            <a href="#readmore" className="text-[#f2312d] hover:underline flex items-center mt-2">
              <span className="mr-2">{t('readMore')}</span>
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Fee Structure */}
        <div className="mb-6 flex items-start">
          <FaMoneyBill className="text-[#f2312d] mr-4 text-3xl" />
          <div>
            <h3 className="text-xl mb-1 font-semibold font-roboto text-[#f2312d]">{t('feeStructure')}</h3>
            <p className="text-gray-600 text-lg font-roboto">
              {t('feeStructureDescription')}
            </p>
            <a href="#readmore" className="text-[#f2312d] hover:underline flex items-center mt-2">
              <span className="mr-2">{t('readMore')}</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
