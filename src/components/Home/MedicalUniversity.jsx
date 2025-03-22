import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import img1 from "../../assets/Rostov.jpeg";
import img2 from "../../assets/Kazan.jpeg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const universities = [
    {
        name: "Rostov State Medical University",
        imageUrl: img1,
        path: "/rostov-state-medical-university",
    },
    {
        name: "Ural State Medical University",
        imageUrl: "https://uralstatemedicaluniversity.com/wp-content/uploads/2024/01/ural-state-medical-university-smapse-samll.jpg",
        path: "/ural-state-medical-university",
    },
    {
        name: "Crimea Federal University (Medical Academy)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/%D0%A2%D0%9D%D0%A3_-_panoramio_%284%29.jpg",
        path: "/crimea-federal-university-russia",
    },
    {
        name: "Far Eastern Federal University",
        imageUrl: "https://www.yashoverseas.org/wp-content/uploads/2024/01/Far-Eastern-Federal-University-scaled.jpg",
        path: "/fareastern-federal-university",
    },
    {
        name: "Kazan State Medical University",
        imageUrl: img2,
        path: "/kazan-state-medical-university",
    },
];


const MedicalUniversity = () => {
    const navigate = useNavigate();
    const [selectedUniversity, setSelectedUniversity] = useState(universities[0]);
    const { t } = useTranslation();

    return (
        <div className="w-full py-8 lg:py-16 lg:px-8">
            {/* Top Heading */}
            <div className="mx-auto items-center w-full mt-4 lg:-mt-6">
                <div className="flex items-center justify-center">
                    <div className="flex items-center lg:ml-4">
                        <div className="w-2 lg:w-8 h-[2px] bg-[#f2312d]" />
                        <div className="w-2 lg:w-2 h-[2px] bg-transparent" />
                        <div className="w-2 lg:w-2 h-[2px] bg-[#f2312d]" />
                        <div className="w-2 lg:w-2 h-[2px] bg-transparent" />
                        <div className="w-2 lg:w-2 h-[2px] bg-[#f2312d]" />
                    </div>
                    <div className="w-10 h-[2px] bg-[#f2312d]" />
                    <h1 className="text-lg lg:text-xl font-roboto font-bold mx-4 text-[#f2312d]">
                        {t('topUniversities')}
                    </h1>
                    <div className="flex items-center lg:ml-4">
                        <div className="w-6 lg:w-10 h-[2px] bg-[#f2312d]" />
                        <div className="w-2 h-[2px] bg-transparent" />
                        <div className="w-2 h-[2px] bg-[#f2312d]" />
                        <div className="w-2 h-[2px] bg-transparent" />
                        <div className="w-2 h-[2px] bg-[#f2312d]" />
                    </div>
                </div>

                <div className="flex justify-center items-center mt-4">
                    <h2 className="text-2xl lg:text-3xl text-center lg:ml-8 font-roboto font-bold text-gray-800 mt-2">
                        {t('medicalUniversities')}
                    </h2>
                </div>
            </div>

            {/* University Cards */}
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
                        transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
                    },
                }}
            >
                {universities.map((university, index) => (
                    <motion.div
                        key={index}
                        className="relative group overflow-hidden rounded-2xl shadow-lg border border-transparent"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: index * 0.2,
                                    duration: 0.6,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >
                        {/* University Image */}
                        <motion.img
                            src={university.imageUrl}
                            alt={university.name}
                            className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Desktop SVG */}
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

                        {/* Hover Effect */}
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

            {/* Custom Animation Styles */}
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
        </div>
    );
};

export default MedicalUniversity;
