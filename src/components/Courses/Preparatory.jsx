import React from "react";
import { Helmet } from "react-helmet";

const Preparatory = () => {
    return (
        <>
            <Helmet>
                <title>Preparatory Faculty | RREC</title>
                <meta
                    name="description"
                    content="Best Universities to learn the Russian Language. Preparatory Course – Russian Language Course for students pursuing higher education in Russia."
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Introduction */}
                <h2 className="text-2xl text-center font-bold mb-2 text-red-600">Preparatory Faculty</h2>
                <p className="text-center font-semibold text-red-600">Best Universities to Learn the Russian Language</p>
                <p className="text-md mt-6">
                    For all the students who have not opted for the English language as a medium of instruction, admission to the preparatory faculty in the Russian language is required in the first year. This is where knowledge of the Russian language is provided along with all the other technical subjects concerned with the final education. 
                </p>
                <p className="text-md mt-6">
                    The duration of the course, termed as the Preparatory Course, is 6-10 months or 8-10 months. After successful completion, students are admitted to the first year of Medical, Stomatology, Pharmacy, Engineering, Law, Economics, and all faculties of Russian Medical & Technical Universities of Russia.
                </p>
                
                {/* Accommodation & Facilities */}
                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Accommodation & Facilities</h2>
                <p>
                    Students are provided with hostel accommodation on a sharing basis (2-3 persons per room), library access, and sports facilities on the university campus. According to the curriculum, lectures are conducted for 20 hours a week, with an emphasis on home and self-study. Excursions and other activities are organized to enhance Russian language learning.
                </p>
                
                {/* Subjects Covered */}
                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Subjects Covered</h2>
                <ul className="list-disc pl-5">
                    <li>Russian Language</li>
                    <li>Chemistry</li>
                    <li>Physics</li>
                    <li>Fundamentals of Higher Mathematics</li>
                    <li>Biology: General Biology, Botany, Zoology, Anatomy</li>
                </ul>
                
                {/* Universities Offering Preparatory Courses */}
                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Universities Offering Preparatory Courses</h2>
                <ul className="list-disc pl-5">
                    <li>Rostov State Medical University</li>
                    <li>Crimea Federal University</li>
                    <li>Far Eastern Federal University</li>
                    <li>Kazan State Medical University</li>
                    <li>Volgograd State Medical University</li>
                    <li>North-Western State Medical University named after I.I. Mechnikov</li>
                    <li>Don State Technical University</li>
                    <li>Southern Federal University</li>
                    <li>Rostov State University of Economics</li>
                    <li>Peoples’ Friendship University</li>
                    <li>Yaroslavl State Medical University</li>
                    <li>Ukhta State Technical University</li>
                    <li>Udmurt State University</li>
                    <li>Kazan Federal University</li>
                </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-red-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    A Gateway to Study in Russia & Learn the Russian Language
                </h2>
                <p className="text-base lg:text-lg mb-4">
                    Get Direct Admission in Top Universities mentioned above.
                </p>
                <p className="text-base lg:text-lg mb-4">
                    Admission open for the 2023 academic year. Interested students may contact us for admission and fee details.
                </p>
                <h6 className="mb-4">
                    Email: contact@rrecrussia.com, rrec.educonsultants@gmail.com
                </h6>
                <p className="text-base lg:text-lg">
                    Apply online at <a href="https://www.rrecrussia.com" className="underline">www.rrecrussia.com</a>, <a href="https://www.rrecrostov.com" className="underline">www.rrecrostov.com</a>
                </p>
            </div>
        </>
    );
};

export default Preparatory;
