import React from "react";
import { Helmet } from "react-helmet";

const Kyrgyzstan = () => {
    return (
        <>
            <Helmet>
                <title>MBBS Colleges in Kyrgyzstan - Top Medical Universities of Kyrgyzstan</title>
                <meta
                    name="description"
                    content="Top Medical Universities of Kyrgyzstan - Osh State Medical University - Asian Medical Institute - Jalal-Abad State University - Benefits - Required documents for Indian students for Admission - Admission procedure."
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Emblem_of_Kyrgyzstan.svg"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        MBBS Colleges in Kyrgyzstan
                    </h1>
                    <h2 className="text-md text-green-600 lg:text-xl mt-4">
                        Top Medical Universities of Kyrgyzstan | MBBS Study in Kyrgyzstan | MBBS Colleges in Kyrgyzstan
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">If you want to study MBBS in Kyrgyzstan, then you need to know which of the universities is right for you. Kyrgyzstan has become one of the popular destinations for medical study abroad among Indian students due to its low University fees and cost of living. Study MBBS in Kyrgyzstan cost is very low as compared to other countries. All the medical universities in Kyrgyzstan are dully recognized by the ministry of education and science Kyrgyzstan, world health organization, medical council of India. MBBS degree from Kyrgyzstan universities are recognized globally, the student has to follow the local rules and regulations of a particular country. From the last 6-8 years, the country has seen a surge in the number of Indian students coming to study MBBS in Kyrgyzstan. Every year hundreds of Indian students graduate from popular Kyrgyzstan medical colleges. Indian students completing their MBBS in Kyrgyzstan universities don’t face a problem while appearing for the screening test, because universities keep up to date with the syllabus of the MCI exam and they prepare Indians students right from the first year of the course itself until last year. A high-quality education in low tuition fees with lots of hands-on experience in the clinical field is the main attraction of aspiring students to study MBBS in Kyrgyzstan. Nowadays, Kyrgyzstan is the top destination for Indian students.</p>
                    </div>

                    <h1 className="text-md text-green-600 lg:text-xl mt-4">
                        A little about Kyrgyzstan:
                    </h1>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Kyrgyzstan is a Central Asian country of incredible natural beauty and proud nomadic traditions. Annexed by Russia in  1876, it achieved independence from the Soviet Union in 1991. So it’s not in Russia, it’s a separate country named officially “Kyrgyzstan”. A favorite place for tourists in Central Asia and one of the more progressive post-Soviet governments in the region. Landlocked and mountainous, it is called Switzerland of central Asia. </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Main regions: Bishkek and the northwest, Issyk Kuk and the Tian Shan, Kyrgyz section of the Ferghana Valley, Naryn Region</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Cities: Bishkek (the capital city of Kyrgyzstan), Arslanbob, Balykchy, Jalal-Abad, Karakol, Kochkor, Naryn, Osh (the second largest city of Kyrgyzstan), Talas.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The main hub for Kyrgyzstan is the Manas airport in Bishkek, but Osh airport is increasingly well linked. Both airports have regular services to international students.</p>
                    </div>
                </div>
                <h2 className="text-md text-center  text-green-600 lg:text-xl mt-10">
                    List of Medical Universities  in Kyrgyzstan:
                </h2>

                <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                    {[
                        "Asian Medical Institute.",
                        "Osh State University, Medical Faculty.",
                        "The international university of Kyrgyzstan, International school of medicine, Bishkek.",
                        "Jalal-Abad State University.",
                        "Kyrgyz Russian Slavic University",
                        "Kyrgyz State Medical Academy"
                    ].map((item, index) => (
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
                <div className="p-6 bg-gray-100 text-gray-900">
                    <h1 className="text-3xl font-bold text-center mb-6">Top Medical Universities in Kyrgyzstan</h1>

                    {/* Osh State Medical University */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Osh State Medical University</h2>
                        <p className="text-gray-700">Osh State Medical University has been training foreign students since 1992. It currently has over 2751 students, including 600 international students. The medium of instruction is English, and the M.D degree is globally recognized.</p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700">
                            <li>Listed in WHO & ECFMG databases</li>
                            <li>Recognized by MCI, PMDC, and other medical councils</li>
                            <li>Faculties: Medical, Dentistry, Nursing, Preparatory course</li>
                            <li>Government hostels available</li>
                        </ul>
                        <p className="mt-2 font-bold">Fee Structure: $7200 (1st year), $3200-$3500 (2nd-5th year)</p>
                    </div>

                    {/* Asian Medical Institute */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Asian Medical Institute (Kant)</h2>
                        <p className="text-gray-700">Established in 2004, this institute trains highly qualified specialists in medicine. It follows European teaching standards and has English-speaking faculty members.</p>
                        <ul className="list-disc pl-6 mt-2 text-gray-700">
                            <li>Recognized by MCI, WHO, IMED</li>
                            <li>Faculties: Medical, Dentistry, Nursing, Preparatory course</li>
                            <li>Three hostels available</li>
                        </ul>
                        <p className="mt-2 font-bold">Fee Structure: $5600 (1st year), $3650 (2nd-5th year), Indian Mess: $103/month</p>
                    </div>

                    {/* Jalal-Abad State University */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Jalal-Abad State University</h2>
                        <p className="text-gray-700">Founded in 1993, Jalal-Abad State University offers courses in medicine, electronics, energy, construction, and agro-industrial fields. MBBS degrees are recognized globally.</p>
                        <p className="mt-2 font-bold">Total Package: $12,000 - $14,000 (excluding food & travel)</p>
                    </div>

                    {/* Benefits of Studying MBBS in Kyrgyzstan */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Benefits of Studying MBBS in Kyrgyzstan</h2>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>No entrance test required</li>
                            <li>Affordable quality education</li>
                            <li>WHO & NMC approved universities</li>
                            <li>English as the medium of instruction</li>
                            <li>Low living costs</li>
                            <li>Indian food availability</li>
                        </ul>
                    </div>

                    {/* Required Documents */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Required Documents for Admission</h2>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>10th & 12th Marksheet</li>
                            <li>Valid Passport</li>
                            <li>NEET Scorecard</li>
                            <li>Birth Certificate</li>
                            <li>Health Checkup Certificate</li>
                        </ul>
                    </div>

                    {/* Admission Procedure */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Admission Procedure</h2>
                        <ol className="list-decimal pl-6 text-gray-700">
                            <li>Fill the online application form</li>
                            <li>Receive an offer letter from the university</li>
                            <li>Submit necessary documents & processing fees</li>
                            <li>Receive the invitation letter & apply for Visa</li>
                            <li>Fly to Kyrgyzstan with a student group</li>
                        </ol>
                    </div>

                    {/* FAQs */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-2xl font-semibold mb-2">FAQs - MBBS in Kyrgyzstan</h2>
                        <h3 className="text-xl font-semibold mt-4">How much does MBBS cost in Kyrgyzstan?</h3>
                        <p className="text-gray-700">The cost ranges from 18-22 Lacs, depending on the selected university.</p>

                        <h3 className="text-xl font-semibold mt-4">Is NEET required for MBBS in Kyrgyzstan?</h3>
                        <p className="text-gray-700">Yes, NEET is mandatory for Indian students.</p>

                        <h3 className="text-xl font-semibold mt-4">What is the duration of MBBS in Kyrgyzstan?</h3>
                        <p className="text-gray-700">The MBBS course duration is 6 years.</p>

                        <h3 className="text-xl font-semibold mt-4">Is Kyrgyzstan safe for Indian students?</h3>
                        <p className="text-gray-700">Yes, Kyrgyzstan has a low crime rate and is safe for Indian students.</p>
                    </div>
                </div>
            </div>

            <div className="bg-green-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Call for more details about university, admission, processing, fees at MBBS in Kyrgyzstan
                </h2>

                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    Contact numbers: +7-9515190376 (Rus) | +917428212236 (Ind)
                </h3>
                <h6 className="mb-4">Email: thedoctors.iea@gmail.com, contact@thedoctorsiea.in</h6>
                <h6>Students or parents can write to us on at WhatsApp also +7-9515190376 (24*7)</h6>
                <h6>Doctors-IEA…always first to make your career!</h6>
            </div>
        </>
    )
}
export default Kyrgyzstan;