import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
    const [selectedTab, setSelectedTab] = useState("about");

    const tabContent = {
        about: "RREC Russia is dedicated to assisting students in securing admission to top Russian universities. We provide guidance on university selection, documentation, and visa procedures, ensuring a smooth transition for international students.",
        mission: "Our mission is to simplify the admission process for students aspiring to study in Russia by offering transparent, reliable, and efficient services that bridge the gap between students and top universities.",
        vision: "Our vision is to become the most trusted platform for international students seeking quality education in Russia, ensuring accessibility, affordability, transparency, and excellence in higher education and career development."
    };

    return (
        <motion.div 
            className="container mx-auto px-6 lg:px-20 font-roboto py-14 md:flex md:items-center md:justify-between relative"
            initial={{ opacity: 0, y: 50 }} // Start faded & slightly below
            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity & move up
            viewport={{ once: true }} // Ensures animation happens once per refresh
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        >
            <div className="md:w-1/2 space-y-4">
                <h4 className="text-md font-semibold text-gray-500">ABOUT US</h4>
                <div className="hidden lg:flex items-center">
                    <div className="w-20 h-[2px] bg-[#f2312d]" />
                    <div className="w-2 h-[2px] bg-transparent" />
                    <div className="w-2 h-[2px] bg-[#f2312d]" />
                    <div className="w-2 h-[2px] bg-transparent" />
                    <div className="w-2 h-[2px] bg-[#f2312d]" />
                </div>
                <h2 className="text-3xl font-bold">
                    We Provide Best <span className="text-red-600">Education</span> Services For You
                </h2>
                <div className="flex space-x-6 border-b pb-3">
                    {["about", "mission", "vision"].map((tab) => (
                        <span
                            key={tab}
                            className={`cursor-pointer font-semibold pb-1 ${selectedTab === tab ? "text-red-500 border-b-2 border-red-500" : "text-gray-500"}`}
                            onClick={() => setSelectedTab(tab)}
                        >
                            {tab === "about" ? "About RREC" : tab === "mission" ? "Our Mission" : "Our Vision"}
                        </span>
                    ))}
                </div>
                <p className="text-gray-600 text-md pr-4 text-justify">{tabContent[selectedTab]}</p>
                <ul className="space-y-2">
                    {[
                        "Direct admission to top Russian universities",
                        "No entrance exam required for MBBS admission",
                        "Affordable tuition fees & low living cost",
                        "Assistance with visa & travel arrangements",
                        "English-medium programs available",
                        "Support for hostel & accommodation services"
                    ].map((item, index) => (
                        <li key={index} className="flex items-center text-md text-gray-700">
                            <span className="text-red-500 text-xl mr-2">&#10003;</span> {item}
                        </li>
                    ))}
                </ul>
            </div>
            <motion.div 
                className="md:w-1/2 flex relative mt-6 md:mt-0"
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-200 rounded-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-200 rounded-full opacity-50"></div>
                <img 
                    src="https://cdn.prod.website-files.com/5f035f109555c1787ed64988/61a55b3d92ec5d67ac36e987_bigstock-New-Reality-Lifestyle-And-Peo-395218316.jpg" 
                    alt="Education" 
                    className="w-[90%] rounded-xl shadow-lg relative z-10" 
                />
                <img
                    src="https://www.shutterstock.com/image-photo/smiling-professional-female-doctor-wearing-600nw-1926175403.jpg"
                    alt="Student"
                    className="absolute -bottom-20 right-0 w-1/3 rounded-lg shadow-xl border-4 border-white z-20"
                />
            </motion.div>
        </motion.div>
    );
};

export default About;
