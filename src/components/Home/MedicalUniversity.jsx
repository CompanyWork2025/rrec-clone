import React, { useState } from 'react';
import { FiMapPin } from 'react-icons/fi'; // For location icon
import { motion } from 'framer-motion';

const universities = [
    { name: 'Rostov State Medical University', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1801933868147775.jpg.webp' },
    { name: 'Kazan Federal University – IFMB', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1801933915075593.jpg.webp' },
    { name: 'Crimea Federal University (Medical Academy)', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1801933961847881.jpg.webp' },
    { name: 'Volgograd State Medical University, Russia', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1801934007720643.webp.webp' },
    { name: 'Lobachevsky State University Of Nizhny Novgorod', imageUrl: 'https://rrecrussia.com/public/upload/home-block/1801934069924719.jpg.webp' },
];

const MedicalUniversity = () => {
    const [selectedUniversity, setSelectedUniversity] = useState(universities[0]);

    return (
        <div className="w-full py-6 lg:py-12 lg:px-8">
            <div className="mx-auto items-center w-full -mt-6">
                {/* Top Heading with Border Lines and Location Icon */}
                <div className="flex items-center justify-center">
                    <div className="flex items-center lg:ml-4">
                        <div className="w-4 lg:w-8 h-[2px] bg-[#f2312d]" />
                        <div className="w-2 lg:w-2 h-[2px] bg-transparent" />
                        <div className="w-2 lg:w-2 h-[2px] bg-[#f2312d]" />
                        <div className="w-2 lg:w-2 h-[2px] bg-transparent" />
                        <div className="w-2 lg:w-2 h-[2px] bg-[#f2312d]" />
                    </div>
                    <div className="w-10 h-[2px] bg-[#f2312d]" />
                    <h1 className="text-lg lg:text-xl font-roboto font-bold mx-4 text-[#f2312d]">
                        Top Universities Of Russia
                    </h1>
                    <div className="flex items-center lg:ml-4">
                        <div className="w-10 h-[2px] bg-[#f2312d]" />
                        <div className="w-2 h-[2px] bg-transparent" />
                        <div className="w-2 h-[2px] bg-[#f2312d]" />
                        <div className="w-2 h-[2px] bg-transparent" />
                        <div className="w-2 h-[2px] bg-[#f2312d]" />
                    </div>
                </div>
                <div className="flex justify-center items-center mt-4">
                    <h2 className="text-2xl lg:text-3xl text-center font-roboto font-bold text-gray-800 mt-2">
                        Medical Universities Of Russia
                    </h2>
                </div>
            </div>

            {/* University Images with Hover Effect and Name with Read More Button */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 px-4">
                {universities.map((university, index) => (
                    <div key={index} className="relative group">
                        <img
                            src={university.imageUrl}
                            alt={university.name}
                            className="w-full h-64 lg:h-96 object-cover shadow-lg rounded-lg transition-all duration-300 group-hover:opacity-80"
                        />

                        {/* Name and Location and Read More button on hover */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-50 rounded-lg">
                            <div className="flex justify-center items-center mb-4 mt-2">
                                <FiMapPin className="text-xl text-white mr-2" />
                            </div>
                            <p className="text-white text-xl font-semibold">{university.name}</p>
                            <motion.div
                                className="mt-6"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.8 }}
                            >
                                <motion.button
                                    className="relative inline-flex items-center justify-start overflow-hidden px-3 py-2 text-lg font-semibold text-white border-2 border-white rounded-md bg-transparent transition-all duration-300 ease-in-out group"
                                    whileHover={{ scale: 1.1 }} // Button hover animation
                                    whileTap={{ scale: 0.95 }} // Button tap animation
                                >
                                    {/* Background expansion */}
                                    <span className="w-0 h-0 rounded bg-[#f2312d] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>

                                    {/* Button text */}
                                    <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Read More
                                    </span>
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MedicalUniversity;
