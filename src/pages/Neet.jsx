import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Neet = () => {
    const neetUpdates = [
        {
            text: "NEET 2025 exam pattern revised: Optional questions removed.",
            gif: "https://icon-library.com/images/new-icon-gif/new-icon-gif-0.jpg"
        },
        {
            text: "Hybrid mode examination introduced for enhanced security.",
        },
        {
            text: "Increased competency-based questions in NEET 2025.",
            gif: "https://icon-library.com/images/new-icon-gif/new-icon-gif-0.jpg"
        },
        {
            text: "NEET tie-breaking rule updated for identical scores.",
            gif: "https://icon-library.com/images/new-icon-gif/new-icon-gif-0.jpg"
        },
        {
            text: "Extended reporting time: Exam centers open 3 hours prior to the exam.",
            gif: "https://icon-library.com/images/new-icon-gif/new-icon-gif-0.jpg"
        },
        {
            text: "Syllabus remains unchanged for NEET 2025.",
        },
        {
            text: "New exam centers added for better accessibility.",
        },
        {
            text: "Special provisions introduced for differently-abled candidates.",
        },
        {
            text: "Registration deadline extended to March 15, 2025.",
            gif: "https://icon-library.com/images/new-icon-gif/new-icon-gif-0.jpg"
        },
        {
            text: "Mock test series launched by NTA for NEET preparation.",
            gif: "https://icon-library.com/images/new-icon-gif/new-icon-gif-0.jpg"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Helmet>
                <title>NEET Updates - Latest News & Guidelines for MBBS Aspirants</title>
                <meta
                    name="description"
                    content="Get the latest NEET updates, exam guidelines, important dates, and eligibility criteria for MBBS admissions in India and abroad. Stay informed with Doctors-IEA."
                />
            </Helmet>

            {/* NEET Updates Section */}
            <div className="bg-gray-50 px-4 lg:px-24 py-12">
                <div className="max-w-5xl mx-auto font-roboto text-center text-gray-800">
                    {/* Heading */}
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-6">
                        Latest <span className="text-red-600">NEET</span> Updates
                    </h2>

                    {/* Description */}
                    <p className="text-md lg:text-lg font-light leading-relaxed mb-8">
                        Stay informed with the latest updates on NEET for the academic year 2025-26.
                        Find all the information you need about eligibility, changes in the exam pattern, and more.
                    </p>
                </div>

                {/* Scrollable Grid Section */}
                <div className="flex justify-center">
                    <motion.div
                        className="w-full max-w-7xl h-96 font-roboto overflow-y-auto border border-gray-300 rounded-lg shadow-lg bg-white p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="grid grid-cols-1 gap-4">
                            {neetUpdates.map((update, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-100 p-2 rounded-lg shadow-md flex items-start gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <p className="text-gray-600 text-sm lg:text-lg flex-1">{update.text}</p>
                                    {update.gif && (
                                        <img
                                            src={update.gif}
                                            alt={`Update ${index + 1}`}
                                            className="w-8 h-8 lg:w-10 lg:h-10 object-cover rounded-lg"
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Contact Information */}
                <motion.div
                    className="mt-12 font-roboto text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h3 className="text-lg font-semibold text-gray-800">
                        For more information, contact our Indian office:
                    </h3>
                    <p className="text-gray-600 mt-6">
                        <strong>Phone:</strong> +91-7042284508, +91-7669533991<br /><br/>
                        <strong>Email:</strong> contact@rrecrussia.in,  rrec.educonsultants@gmail.com
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Neet;
