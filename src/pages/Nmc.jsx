import React, { useState } from "react";
import { motion } from "framer-motion";

const Nmc = () => {
    const initialItems = [
        "Eligibility criteria for MBBS in Russia",
        "Internship & licensing exam guidelines",
        "Minimum attendance and academic requirements",
        "Foreign medical graduate examination (FMGE) updates",
        "Important NMC rules every student must follow",
    ];

    const moreItems = [
        "Post-graduation options and pathways",
        "Recognition of Russian medical degrees in India",
        "Clinical rotations and practical exposure requirements",
        "Changes in syllabus as per NMC norms",
        "Latest announcements and amendments",
    ];

    const [items, setItems] = useState(initialItems);
    const [expanded, setExpanded] = useState(false);

    const handleLoadMore = () => {
        setItems([...items, ...moreItems]);
        setExpanded(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center font-roboto"
        >


            <div className="max-w-4xl text-center">
                <motion.h1
                    className="text-4xl font-extrabold text-gray-800 mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    NMC <span className="text-red-600">Regulations</span>
                </motion.h1>
                <motion.p
                    className="text-gray-600 text-lg"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Stay updated with the latest NMC (National Medical Commission) regulations
                    for medical education and licensing in Russia. Below are key points every student should know.
                </motion.p>
            </div>

            <motion.div
                className="mt-8 bg-white rounded-xl p-6 max-w-8xl w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <ul className="space-y-4">
                    {items.map((item, index) => (
                        <motion.li
                            key={index}
                            className="bg-gray-100 p-3 rounded-lg text-gray-700 font-medium flex items-center gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                        >
                            <img
                                src="https://purepng.com/public/uploads/large/purepng.com-red-starstargeometricallydecagonconcavestardomred-star-1421526501291ivqua.png"
                                alt="icon"
                                className="w-6 h-6 mr-3"
                            />
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {!expanded && (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLoadMore}
                    className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 transition"
                >
                    Learn More
                </motion.button>
            )}
        </motion.div>
    );
};

export default Nmc;