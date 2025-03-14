import React, { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const universities = [
    { name: 'Rostov State Medical University', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1801933868147775.jpg.webp' },
    { name: 'Kazan Federal University – IFMB', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1801933915075593.jpg.webp' },
    { name: 'Crimea Federal University (Medical Academy)', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1801933961847881.jpg.webp' },
    { name: 'Volgograd State Medical University, Russia', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1801934007720643.webp.webp' },
    { name: 'Lobachevsky State University Of Nizhny Novgorod', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1801934069924719.jpg.webp' },
];

const MedicalUniversity = () => {
    const [selectedUniversity, setSelectedUniversity] = useState(universities[0]);
    const { t } = useTranslation();

    return (
        <motion.div
            className="w-full py-6 lg:py-12 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
        >
            {/* Top Heading */}
            <div className="mx-auto items-center w-full -mt-6">
                <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
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
                </motion.div>

                <motion.div
                    className="flex justify-center items-center mt-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl lg:text-3xl text-center font-roboto font-bold text-gray-800 mt-2">
                        {t('medicalUniversities')}
                    </h2>
                </motion.div>
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
                        transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
                    },
                }}
            >
                {universities.map((university, index) => (
                    <motion.div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { delay: index * 0.2, duration: 0.6 },
                            },
                        }}
                    >
                        {/* University Image */}
                        <motion.img
                            src={university.imageUrl}
                            alt={university.name}
                            className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Hover Effect */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <FiMapPin className="text-2xl text-white mb-2" />
                            <p className="text-white text-lg px-4 font-semibold text-center">
                                {university.name}
                            </p>

                            <motion.button
                                className="relative mt-4 px-4 py-2 text-lg font-semibold text-white border-2 border-white rounded-md bg-transparent overflow-hidden transition-all duration-300 group-hover:bg-[#f2312d]"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t("readMore")}
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default MedicalUniversity;