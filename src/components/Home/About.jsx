import React from "react";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 bg-gray-50">
            {/* Left side: Images */}
            <motion.div 
                className="relative w-full lg:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <img
                    src="https://www.canadaqbank.com/blog/storage/2019/08/medical-students-studying.jpg"
                    alt="Main"
                    className="rounded-2xl shadow-lg w-full"
                />
                <motion.img
                    src="https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student_255667-21448.jpg"
                    alt="Small"
                    className="hidden lg:block absolute lg:-bottom-20 lg:-right-14 lg:w-96 rounded-xl shadow-md border-8 border-white"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                />
            </motion.div>

            {/* Right side: Text */}
            <motion.div 
                className="w-full lg:w-1/2 lg:px-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col md:flex-row items-center w-full -mt-6">
                    <h1 className="text-lg font-bold mt-4 md:mt-0 text-[#f2312d]">{t('aboutUs')}</h1>
                    {/* Broken border line */}
                    <div className="flex items-center lg:ml-4">
                        <div className="w-10 h-[2px] bg-[#f2312d]" />
                        <div className="w-2 h-[2px] bg-transparent" /> {/* Gap between lines */}
                        <div className="w-2 h-[2px] bg-[#f2312d]" />
                        <div className="w-2 h-[2px] bg-transparent" />
                        <div className="w-2 h-[2px] bg-[#f2312d]" />
                    </div>
                </div>
                <h2 className="text-3xl text-center lg:text-left font-roboto font-bold text-gray-800 mt-2">
                    {t('welcomeToRREC')}
                </h2>
                <p className="mt-4 font-roboto text-justify text-gray-600 leading-relaxed">
                    {t('moscowDescription')}
                </p>
                <p className="mt-4 font-roboto text-justify text-gray-600 leading-relaxed">
                    {t('russiaDescription')}
                </p>
                
                {/* Experience Card */}
                <motion.div 
                    className="max-w-sm bg-white mt-4 shadow-lg rounded-lg overflow-hidden flex flex-row"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Left side: Image */}
                    <div className="w-full sm:w-1/3 h-auto">
                        <img
                            className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg"
                            src="https://static.theprint.in/wp-content/uploads/2022/09/ANI-20220925131355.jpg"
                            alt="Placeholder"
                        />
                    </div>

                    {/* Right side: Text */}
                    <div className="flex flex-col justify-center px-4 py-2 w-full sm:w-2/3">
                        <h3 className="text-xl font-roboto font-semibold text-gray-800">{t('experienceYears')}</h3>
                        <p className="font-roboto text-gray-600 mt-2">
                            {t('educationExperience')}
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutSection;
