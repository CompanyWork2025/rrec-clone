import React from "react";
import { motion } from "framer-motion";


const Language = () => {
    return (
        <>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h1 className="text-xl lg:text-3xl font-semibold mt-2">
                        Preparatory Course – Russian Language Course
                    </h1>
                    <h1 className="text-md lg:text-xl text-red-600 font-semibold mt-2">
                        Best Universities to learn the Russian Language
                    </h1>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">
                            For all the students who have not opted for the English language as a medium of instruction, admission to the preparatory faculty in the Russian language is required in the first year. This is where the knowledge of the Russian language is provided along with all the other technical subjects concerned with the final education. The duration of the course termed as the Preparatory is 6-10 months or 8-10 months. After the successful completion of the course, the students are admitted to the first year of the Medical, Stomatology, Pharmacy, Engineering, Law, Economics, etc. all faculties of Russian Medical & Technical Universities of Russia.
                        </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">
                            Students are provided with hostel accommodation, on sharing basis – 2-3 persons in a room, library and sport s facilities on the campus of the university. According to the curriculum lectures are conducted for 20 hours a week, an emphasis is placed on home- and self-study. Excursions and other actions are managed for Russian language learning.
                        </p>
                    </div>
                </motion.div>
                <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                    {[
                        "Russian Language",
                        "Chemistry",
                        "Physics",
                        "Fundamentals of Higher Mathematics",
                        "Biology: General Biology, Botany, Zoology, Anatomy",

                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            className="flex items-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://purepng.com/public/uploads/large/purepng.com-red-starstargeometricallydecagonconcavestardomred-star-1421526501291ivqua.png"
                                alt="icon"
                                className="w-6 h-6 mr-3" />
                            {item}
                        </motion.li>
                    ))}
                </ul>

                <h1 className="text-md lg:text-xl text-red-600 font-semibold mt-10">
                    Top Universities for Preparatory Course (Russian Language Course with Us)
                </h1>
                <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                    {[
                        "Rostov state medical university",
                        "Kazan state medical university",
                        "Crimea federal university",
                        "Kazan federal university",
                        "Southern federal university",
                        "Don state technical university",
                        "Rostov state university of economics",
                        "Udmurt state university",
                        "Ukhta state technical university",
                        "Petrozavodsk state university",
                        "People’s friendship university",
                        "Synergy University Moscow ",
                        "Volgograd State Medical University ",
                        "Moscow Pedagogical State University ",
                        "St. Petersburg polytechnic university ",
                        "Krasnoyarsk State Medical University",
                        "Far Eastern Federal University ",

                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            className="flex items-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://purepng.com/public/uploads/large/purepng.com-red-starstargeometricallydecagonconcavestardomred-star-1421526501291ivqua.png"
                                alt="icon"
                                className="w-6 h-6 mr-3" />
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Language;
