import React from "react";
import { Helmet } from "react-helmet";

const HumanitiesEconomics = () => {
    return (
        <>
            <Helmet>
                <title>Humanities, Classic & Economical Specialties | RREC</title>
                <meta
                    name="description"
                    content="Study humanities and economics in Russia. Explore various specialties including law, journalism, business, and more at top universities."
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                <h2 className="text-2xl text-center font-bold mb-2 text-red-600">Humanities, Classic & Economical Specialties</h2>
                <p className="text-md mt-6">
                    RREC is an advisor about how to apply to Russian universities, choosing an education program, to know the fee structure and many more. RREC welcomes and invites you to study in Russia. For many years we are helping foreign students from around the world to gain a prestigious higher education at state & federal universities in Russia.
                </p>
                
                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Classical and Humanities Specialties</h2>
                <p>
                    There are 100 classical and humanities specialties offered: nanotechnology, mechanics, mathematics, physics, chemistry, biology, zoology, biophysics, geography, cartography, history, ecology, soil science, philosophy, sociology, logistics, psychology, statistics, museum and monument protection, law, philology, international relations, journalism, linguistics, publishing, public relations, advertising, design, translation and translation studies, tourism, hospitality, physical education and sport, pedagogy and psychology, performing arts (acting), theatre direction, cinema and television direction, camera-operating technologies, music, graphics, choreography, conducting, sound engineering, producing and others.
                </p>
                
                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Course Duration</h2>
                <ul className="list-disc pl-5">
                    <li>Bachelor of Science degree - 4 years</li>
                    <li>Master of Science degree - 2 years</li>
                    <li>Specialists - 5 years</li>
                    <li>PhD - 3 years</li>
                </ul>
                <p className="mt-4">Note: Some specialties can be studied in either Russian or English.</p>

                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Best Universities with Best Faculties</h2>
                <ul className="list-disc pl-5">
                    <li>Southern Federal University</li>
                    <li>Rostov State University of Economics</li>
                    <li>Udmurt State University</li>
                    <li>Don State Technical University</li>
                    <li>Ukhta State Technical University</li>
                    <li>Kazan Federal University</li>
                    <li>Peoples’ Friendship University</li>
                </ul>
                
                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Economical Specialties</h2>
                <p>
                    More than 20 economic specialties are offered: management; economy; business information systems; commerce; public and municipal administration; banking management; accounting, analysis, and audit; human resource management, and others.
                </p>
                
                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Course Duration for Economic Specialties</h2>
                <ul className="list-disc pl-5">
                    <li>Bachelor of Science degree - 4 years</li>
                    <li>Master of Science degree - 2 years</li>
                    <li>PhD - 3 years</li>
                </ul>
                <p className="mt-4">Note: Some specialties can be studied in either Russian or English.</p>

                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Best Universities with Best Faculties</h2>
                <ul className="list-disc pl-5">
                    <li>Southern Federal University</li>
                    <li>Don State Technical University</li>
                    <li>Rostov State University of Economics</li>
                    <li>Kazan Federal University</li>
                </ul>
            </div>

            <div className="bg-red-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    A Gateway to Study in Russia
                </h2>
                <p className="text-base lg:text-lg mb-4">
                    Get Direct Admission in Top Universities mentioned above.
                </p>
                <p className="text-base lg:text-lg mb-4">
                    Admission open for the 2025 academic year. Interested students may contact us for admission and fee details.
                </p>
                <h6 className="mb-4">
                    Contact numbers: +79515174507, +7-9515371133 (Rus) | Email: contact@rrecrussia.com
                </h6>
            </div>
        </>
    );
};

export default HumanitiesEconomics;