import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Visa = () => {
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
                        Tourist Visa for <span className="text-red-600">Russia</span>
                    </h1>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">
                            Russia, or the Russian Federation, is a European country located in Eastern Europe with a vast expanse of territory that stretches across Northern Asia. Largest & beautiful cities of Russia to visit i.e Moscow, St. Petersburg, Novosibirsk, Yekaterinburg, Nizhny Novgorod, Kazan, Rostov-on-Don, Chelyabinsk, Omsk, Samara.
                        </p>
                    </div>
                </motion.div>
                <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                    {[
                        "Planning your traveling to Russia?",
                        "Don’t know how to get a Russian visa?",
                        "Need assistance in hotel booking in Russia?",
                        "Want to buy a ticket for a Russian train or flight?",
                        "Dreaming of visiting Russian ballet?",
                        "RREC is highly regarded within the industry by universities, parents, and students alike",
                        "Requiring tours and visits to Russia?"
                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            className="flex items-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
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
            </div>
            
            {/* Call to Action */}
            <motion.div
                className="bg-gradient-to-r from-[#f2312d] to-red-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Best Packages offered by the team at RREC: Get a Russian tourist invitation in 2-3 working days or a visa in 4 days.
                </h2>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    Consult RREC at
                </h3>
                <h6 className="mb-4">
                    +91-7042284508 (Indian Office)
                </h6>
            </motion.div>
        </>
    );
};

export default Visa;
