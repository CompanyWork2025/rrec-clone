import React from "react";
import { Helmet } from "react-helmet";

const Belarus = () => {
    return (
        <div className="px-4 lg:px-20 py-8 font-roboto">
            <Helmet>
                <title>Study MBBS in Belarus - MBBS in Belarus for Indian Students</title>
                <meta
                    name="description"
                    content="Study MBBS in Belarus - MBBS in Belarus for Indian Students - Top Medical Universities of Belarus - Duration - BENEFITS - REQUIRED DOCUMENTS - ADMISSION PROCEDURE"
                />
            </Helmet>

            {/* Header */}
            <div className="text-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Emblem_of_Belarus.svg"
                    alt="Belarus Emblem"
                    className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                />
                <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                    MBBS Colleges in Belarus
                </h1>
                <h2 className="text-md text-green-600 lg:text-xl mt-4">
                    Top Medical Universities of Belarus | Study MBBS in Belarus | MBBS Colleges in Belarus
                </h2>
                <div className="mt-4 space-y-6">
                    <p className="text-left text-justify text-md lg:text-lg font-roboto">MBBS in Belarus: Belarus is proving to be a paradise for medical aspirants who want to Study MBBS in Belarus. Medical degree from Belarus Medical Universities is recognized worldwide. Hundreds of graduates are working in India and overseas after their completion of course. MBBS in Belarus is becoming one of the notable choices for pursuing medical courses across students from different countries.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto">If you want to study MBBS in Belarus then you need to know which of the universities is a good choice for you. Belarus is a good option for medical students or Indian students who wish to join MBBS abroad, due to its low University fees and cost of living. Study MBBS in Belarus cost is very low as compared to other countries. All the medical universities in Belarus are dully recognized by the ministry of education and health of Belarus, world health organization, medical council of India. From the last 6-8 years, the country has seen a surge in the number of Indian students coming to study MBBS in Belarus. Every year hundreds of Indian students graduate from popular Belarus medical colleges. Indian students completing their MBBS in Belarus medical universities don’t face a problem while appearing for the screening test, because universities keep up to date with the syllabus of the MCI exam and they prepare Indians students right from the first year of the course itself up to last year. A high-quality education in low tuition fees with lots of hands-on experience in the clinical field is the main attraction of aspiring students to study MBBS in Belarus. Nowadays, Belarus is a good and selective destination for Indian students. Belarus:</p>
                </div>

                <h1 className="text-md text-green-600 lg:text-xl mt-4">
                    Belarus:
                </h1>
                <div className="mt-4 space-y-6">
                    <p className="text-left text-justify text-md lg:text-lg font-roboto">A landlocked country in Eastern Europe is known for its Stalinist architecture, grand fortifications, and primeval forests. In the modern capital, Minsk, the monumental KGB Headquarters loom over Independence Square, while the Museum of the Great Patriotic War commemorates the country’s role in WWII. The capital is also home to many churches, including the neo-Romanesque Church of Saints Simon and Helena. Currency: Belarusian Ruble. </p>
                </div>

                <h1 className="text-md text-green-600 lg:text-xl mt-8">
                    Why Belarus?
                </h1>
                <div className="mt-4 space-y-6">
                    <p className="text-left text-justify text-md lg:text-lg font-roboto">The Republic of Belarus is located in the Eastern part of Europe. In the West, it borders on Poland, North-West Lithuania, in North Latvia, in the North East & East Russia, in South Ukraine. The Capital city of Belarus is Minsk, which is the biggest political, Economic, Scientific, and cultural center of the country. The people of Belarus are very kind and friendly. </p>
                </div>
            </div>

            {/* Why Choose Doctors-IEA */}
            <h1 className="text-md text-green-600 lg:text-xl mt-8">Why Choose Doctors-IEA?</h1>
            <ul className="mt-4 text-md lg:text-lg text-gray-700 space-y-4">
                {["We collaborate with top medical universities in Belarus.",
                    "Experienced professionals providing consultation for MBBS admissions.",
                    "Regular visits to affiliated universities to ensure smooth processing.",
                    "Updated information on courses, application requirements, and admission procedures.",
                    "Recognized for reliability by universities, students, and parents."]
                    .map((item, index) => (
                        <li key={index} className="flex items-center">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/036/626/964/small_2x/ai-generated-gold-star-on-transparent-background-png.png"
                                alt="icon"
                                className="w-8 h-6 mr-3"
                            />
                            {item}
                        </li>
                    ))}
            </ul>

            {/* Leading Medical Universities in Belarus */}
            <h1 className="text-md text-green-600 lg:text-xl mt-8">Leading Medical Universities in Belarus</h1>
            <ul className="mt-4 text-md lg:text-lg text-gray-700 space-y-2">
                {["Vitebsk State Order of Peoples’ Friendship Medical University",
                    "Gomel State Medical University",
                    "Belarusian State Medical University",
                    "Grodno State Medical University"]
                    .map((university, index) => (
                        <li key={index} className="list-disc ml-6">{university}</li>
                    ))}
            </ul>

            {/* Benefits of Studying MBBS in Belarus */}
            <h1 className="text-md text-green-600 lg:text-xl mt-8">Benefits of Studying MBBS in Belarus</h1>
            <ul className="mt-4 text-md lg:text-lg text-gray-700 space-y-2">
                {["No entrance test required, direct admission.",
                    "Quality education at an affordable cost.",
                    "NMC-recognized medical universities.",
                    "English-medium courses available.",
                    "WHO & NMC approved universities.",
                    "Highly qualified faculty.",
                    "No donation required.",
                    "Low cost of living in Belarus.",
                    "Indian food available."]
                    .map((benefit, index) => (
                        <li key={index} className="list-disc ml-6">{benefit}</li>
                    ))}
            </ul>

            {/* Required Documents */}
            <h1 className="text-md text-green-600 lg:text-xl mt-8">Required Documents for Admission</h1>
            <ul className="mt-4 text-md lg:text-lg text-gray-700 space-y-2">
                {["Duly filled university application form.",
                    "10th and 12th-grade mark sheets.",
                    "Valid passport (minimum 2 years validity).",
                    "Offer letter from the university.",
                    "Visa support letter from the university.",
                    "School leaving certificate.",
                    "NEET scorecard.",
                    "Twenty passport-size photos.",
                    "Birth certificate.",
                    "Health checkup certificate.",
                    "University fee guarantee letter from parents."]
                    .map((document, index) => (
                        <li key={index} className="list-disc ml-6">{document}</li>
                    ))}
            </ul>

            {/* Admission Procedure */}
            <h1 className="text-md text-green-600 lg:text-xl mt-8">Admission Procedure</h1>
            <ol className="mt-4 text-md lg:text-lg text-gray-700 space-y-2">
                {["Call or visit Doctors-IEA, representatives of Medical Studies in Belarus.",
                    "Fill the online application form at www.thedoctorsiea.in.",
                    "Receive an offer letter from the university.",
                    "Pay processing fees and submit required documents.",
                    "Doctors-IEA applies for an invitation letter and visa documentation.",
                    "After obtaining a visa, travel arrangements are made with representatives and students."]
                    .map((step, index) => (
                        <li key={index} className="list-decimal ml-6">{step}</li>
                    ))}
            </ol>

            <div className="bg-green-700 mt-8 mb-2 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Call for more details about university, admission, processing, fees at MBBS in Belarus
                </h2>

                <h6 className="mb-4">Doctors-IEA Team: +91-7428212236, 7428203118 | Toll-free 1800-419-5827 (For Indian Students)</h6>
                <h6>Students or parents can write to us at WhatsApp also: +7-9515190376</h6>
            </div>
        </div>
    );
};

export default Belarus;