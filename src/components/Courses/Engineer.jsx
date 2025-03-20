import React from "react";
import { Helmet } from "react-helmet";

const Engineer = () => {
    return (
        <>
            <Helmet>
                <title>Engineering & Technical Specialties | RREC</title>
                <meta
                    name="description"
                    content="Study Engineering in Russia - Russian Technical Universities offer various engineering programs including automotive, control systems, electrical, radio, and civil engineering."
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Introduction */}
                <h2 className="text-2xl text-center font-bold mb-2 text-red-600">Engineering & Technical Specialties</h2>
                <p className="text-md mt-6">Study Engineering in Russia: Russian Technical Universities are among the fastest-growing institutions, offering diverse engineering programs, including automotive engineering, control systems engineering (I.T.), electrical, radio, and civil engineering. Russia has long been a pioneer in engineering, historically focused on defense and research. Today, with globalization, Russia has opened its doors to international students.</p>

                {/* Specialties */}
                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Russian Technical Universities and Federal Universities Specialties:</h2>
                <ul className="list-disc pl-5">
                    <li>50 specialties in mining, oil and gas engineering, exploration, and prospecting of subterranean waters, oil, and minerals.</li>
                    <li>30 specialties in architecture, civil and industrial engineering, project design, water and heat supply engineering.</li>
                    <li>50 specialties in aviation, piloting, airport management, aircraft engines, and power generating systems.</li>
                    <li>50 specialties in computer technologies, information systems, security, electronics, robotics, and communication systems.</li>
                    <li>30 specialties in ship navigation, shipbuilding, cargo equipment operation at ports, and transport terminals.</li>
                    <li>30 specialties in electrical engineering, electrotechnologies, electric power supply.</li>
                    <li>50 specialties in agronomy, agricultural engineering, agricultural production, forestry, and ecology.</li>
                    <li>30 specialties in refrigeration, food technology, nutrition, biotechnology, dairy, fish, and meat production.</li>
                </ul>

                {/* Course Duration */}
                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Course Duration for Engineering and Technical Specialties:</h2>
                <ul className="list-disc pl-5">
                    <li>Bachelor of Science (B.Sc) - 4 years</li>
                    <li>Master of Science (M.Sc) - 2 years</li>
                    <li>Specialists - 5 years</li>
                    <li>PhD - 3 years</li>
                </ul>
                <p className="text-md mt-6">Note: Some specialties can be studied in either Russian or English.</p>

                {/* Top Universities */}
                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Top Universities with RREC Team:</h2>
                <ul className="list-disc pl-5">
                    <li>Southern Federal University</li>
                    <li>Taganrog State University of Radio Engineering (SfedU campus)</li>
                    <li>Don State Technical University</li>
                    <li>Rostov State University of Economics</li>
                    <li>Kazan Federal University</li>
                    <li>Ukhta State Technical University</li>
                    <li>Udmurt State University, Izhevsk</li>
                    <li>St. Petersburg State University</li>
                    <li>Petrozavodsk State University</li>
                </ul>
            </div>

            <div className="bg-red-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Gateway to Russia - RREC (Reliable Russian Educational Consultants)
                </h2>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    (Authorized Official Representative of Indian & Foreign Students)
                </h3>
                <p className="text-base lg:text-lg mb-4">
                    Admission open for the 2025 academic year. Interested students may contact us.
                </p>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    Contact Numbers: +7-9515174507, +7-9515371133 (Russia)
                </h3>
                <h6 className="mb-4">
                    Email: contact@rrecrussia.com
                </h6>
                <h6>
                    Students or parents can write to us on WhatsApp: +7-9515371133 (24x7)
                </h6>
            </div>
        </>
    );
};

export default Engineer;
