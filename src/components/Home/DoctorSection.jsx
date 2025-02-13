import React from 'react';
import { FaArrowRight, FaAward, FaCertificate, FaGraduationCap, FaMoneyBill, FaUser, FaUserGraduate } from 'react-icons/fa'; // Using react-icons for the right arrow


const DoctorSection = () => {
  return (
    <section className="flex flex-wrap lg:px-20 items-center justify-between p-8 bg-gray-100">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*" // Replace with your image URL
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
            <h3 className="text-xl mb-1 lg:text-2xl font-roboto font-semibold text-[#f2312d]">About Russia</h3>
            <p className="text-lg font-roboto text-gray-600">
             Moscow is the capital of Russia. Within the Republic there are around 1,000 towns, of t
            </p>
            <a href="#readmore" className="text-[#f2312d] hover:underline flex items-center mt-2">
              <span className="mr-2">Read More</span>
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Advanced Technology */}
        <div className="mb-6 flex items-start">
          <FaUserGraduate className="text-[#f2312d] lg:mt-2 mr-4 text-3xl" />
          <div>
            <h3 className="text-xl mb-1 font-semibold font-roboto text-[#f2312d]">MBBS in Russia</h3>
            <p className="text-gray-600 text-lg font-roboto">
               Becoming a doctor is a coveted dream for many aspirants in India. Hence in the pursuit.
            </p>
            <a href="#readmore" className="text-[#f2312d] hover:underline flex items-center mt-2">
              <span className="mr-2">Read More</span>
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Personalized Approach */}
        <div className="mb-6 flex items-start">
          <FaAward className="text-[#f2312d] lg:mt-2 mr-4 text-3xl" />
          <div>
            <h3 className="text-xl mb-1 font-semibold font-roboto text-[#f2312d]">Admission Procedure</h3>
            <p className="text-gray-600 text-lg font-roboto">
              Students arriving to study in Russia must present their original documents personally t
            </p>
            <a href="#readmore" className="text-[#f2312d] hover:underline flex items-center mt-2">
              <span className="mr-2">Read More</span>
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Comprehensive Services */}
        <div className="mb-6 flex items-start">
          <FaMoneyBill className="text-[#f2312d] mr-4 text-3xl" />
          <div>
            <h3 className="text-xl mb-1 font-semibold font-roboto text-[#f2312d]">Fee Structure</h3>
            <p className="text-gray-600 text-lg font-roboto">
              Russia, due to its sublime supremacy in science and technology has become the pivotal d
            </p>
            <a href="#readmore" className="text-[#f2312d] hover:underline flex items-center mt-2">
              <span className="mr-2">Read More</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
