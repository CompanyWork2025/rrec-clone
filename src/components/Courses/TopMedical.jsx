import React from "react";
import { Helmet } from "react-helmet";

const TopMedicalUniversities = () => {
    return (
        <>
            <Helmet>
                <title>Top Medical Universities Of Russia By WHO | RREC</title>
                <meta
                    name="description"
                    content="Explore the top medical universities in Russia recognized by WHO. Study medicine in Russia with Reliable Russian Educational Consultants (RREC)."
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 text-justify font-roboto">
                <h2 className="text-2xl text-center font-bold mb-2 text-red-600">Top Medical Universities Of Russia By WHO</h2>
                <p className="text-md mt-6">
                    Russia is the largest country in the world. It is located in Eastern Europe and Northern Asia. Its capital is Moscow. Russia also possesses a well-developed learning system with a strong school system. Russia has always been ahead in the field of education and more specifically medicine. Russian degrees are recognized worldwide and are very affordable too. Reliable Russian Educational Consultants (RREC) are the leading consulting organization offering comprehensive education consultancy to study Medicine in Russia. RREC has more than 15 years of experience in the field of education, helping students from Asia, Africa, Europe, and the Arab continent.
                </p>

                {/* List of Top Medical Universities */}
                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Top Famous Medical Universities of Russia</h2>
                <ul className="list-disc pl-5">
                    <li>Rostov State Medical University</li>
                    <li>Kazan State Medical University</li>
                    <li>Kazan Federal University (Institute of Fundamental Medicine & Biology)</li>
                    <li>Crimea Federal University (Medical Academy)</li>
                    <li>Volgograd State Medical University</li>
                    <li>North-Ossetian State Medical Academy</li>
                    <li>Kursk State Medical University</li>
                    <li>Stavropol State Medical University</li>
                    <li>Peoples’ Friendship University of Russia</li>
                    <li>Yaroslavl State Medical University</li>
                    <li>Tyumen State Medical University</li>
                    <li>Izhevsk State Medical Academy</li>
                    <li>Petrozavodsk State University: Faculty of Medicine</li>
                </ul>

                {/* Postgraduate Studies */}
                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Master Degrees: MD/MS/MDS/PhD</h2>
                <p>
                    Postgraduate studies in more than 100 medical specialties (MD/MS/MDS/PhD) are available, with a duration of 2 to 3 years. Clinical residency is available in both Russian and English, with course durations ranging from 2 to 5 years depending on the specialty. A Ph.D. program has a duration of 3 years.
                </p>
                <p className="mt-4">
                    Note: Master’s degree courses are available in both English and Russian. However, for a master’s degree, a language course of at least 3-6 months is necessary for admission as the first year of post-graduation.
                </p>

                {/* Universities Offering Medical Specialties */}
                <h2 className="text-xl text-red-600 font-bold mt-6 mb-2">Top Universities Offering Medical Specialties</h2>
                <ul className="list-disc pl-5">
                    <li>Rostov State Medical University</li>
                    <li>Kazan State Medical University</li>
                    <li>Volgograd State Medical University</li>
                    <li>Crimea Federal University (Medical Academy)</li>
                    <li>Peoples’ Friendship University (Medical Faculty)</li>
                    <li>Yaroslavl State Medical University</li>
                    <li>Kursk State Medical University</li>
                </ul>
            </div>

            {/* Embedded YouTube Video */}
            <div className="px-4 lg:px-20 py-8 font-roboto text-center">
                <h2 className="text-xl text-red-600 font-bold mb-4">Study Medicine in Russia | Admission Is Open | Medical</h2>
                <div className="flex justify-center">
                    <iframe
                        width="800"
                        height="450"
                        src="https://www.youtube.com/embed/houb4rMm0YQ"
                        title="Study Medicine in Russia"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Contact Information */}
            <div className="bg-red-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">A Gateway to Study in Russia - RREC</h2>
                <p className="text-base lg:text-lg mb-4">
                    Admission open for the 2025 academic year. Interested students may contact us for admission and fee details.
                </p>
                <h6 className="mb-4">Email: contact@rrecrussia.com, rrec.educonsultants@gmail.com</h6>
                <p className="text-base lg:text-lg">
                    Contact numbers: +79515174507, +7-9515371133 (Russia)
                </p>
            </div>
        </>
    );
};

export default TopMedicalUniversities;