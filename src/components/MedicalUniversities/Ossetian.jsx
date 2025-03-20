import React from "react";
import { Helmet } from "react-helmet";

const Ossetian = () => {

    const universityData = [
        { label: "Name of the University", value: "Kazan Federal University (Institute of Fundamental Medicine and Biology)" },
        { label: "Location", value: "Volga Region, Republic of Tatarstan, Russia" },
        { label: "Popular Name/Abbrev.", value: "Kazan (Volga region) Federal University, IFMB Kazan Federal" },
        { label: "Institute Type", value: "Government" },
        { label: "Year of Establishment", value: "1804" },
        { label: "Number of Faculties in IFMB", value: "3" },
        { label: "Medium of Instruction", value: "English/Russian" },
        { label: "NEET Required", value: "Yes, It is Required & Mandatory" },
        { label: "Courses Offered", value: "General Medicine, Dentistry, Pharmacy" },
        { label: "Minimum percentage required", value: "50% in Physics, Chemistry, Biology aggregate" },
        { label: "IELTS/TOEFL", value: "Accepted, not mandatory" },
        { label: "Duration of MBBS", value: "6 Years" },
        { label: "University Recognition", value: "WHO, NMC of India Approved" },
        { label: "University World Ranking", value: "World Ranking – #370 (Sources: QS World Rankings)" },
        { label: "Category", value: "Medical Colleges in Russia" },
        { label: "Contact Official Representative", value: <a href="https://www.rrecrussia.com/" className="text-blue-600 hover:underline">RREC, website:- www.rrecrussia.com</a> },
    ];


    return (
        <>
            <Helmet>
                <title>North Ossetian State Medical Academy | Fee structure - Admission procedure</title>
                <meta
                    name="description"
                    content="North Ossetia State Medical Academy is the center of higher medical and pharmaceutical education in Vladikavkaz region of Noth Ossetia. Every year North Ossetian State Medical Academy trains more than 3000 students. Call RREC official representative NOSMA. Why people choose NOSMA - Faculties - Ranking - Recognition - Accommodation - Fee structure - Admission procedure - Vladikavkaz City."
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://mbbsadmissioninrussia.in/wp-content/uploads/2021/01/nosma-logo.png"
                        alt="university"
                        className="mx-auto w-14 h-14 lg:w-24 lg:h-24"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        North Ossetian State Medical Academy, Russia
                    </h1>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4">
                        Северо-Осетинская государственная медицинская академия
                    </h2>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4">
                        Acronym NOSMA | Founded 1939
                    </h2>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4">
                        Address: Pushkinskaya Ulitsa, 40, Vladikavkaz, North Ossetia–Alania Republic, Russia, 362025
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">North – Ossetian State Medical Academy is located in the town Vladikavkaz one of the most beautiful towns of the Large Caucasian Mountains. The nature of the North – Ossetia is picturesque and original. Here we can see magnificent mountains, capped with snow and glaciers, red alpine meadows, and impetuous rivers. The climate of North – Ossetia is temporally continental. The winter here is mild, but summer sometimes is dry due to the influence of the hot middle east desert’s air. Vladikavkaz is a large densely populated town with a multinational population. Various cultures are integrated here. There are many possibilities for sport and cultural rest with convenient transport communication. NOSMA is one of the best ones in the North Caucasus. The international activity was put in use from 1991, for these periods many specialists have been prepared for foreign countries such as Syria, India, Lebanon, Morocco, Sudan, Djibouti, Greece, Baltic States, etc.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">NOSMA was founded in 1939. For the period of its existence, over 21 000 highly qualified specialists have graduated from it. The graduates of NOSMA successfully work not only in the republic but in all regions of the Russian Federation and abroad too. At the 41 chairs of the academy work 384 professors and teachers: 53 Doctors of Medical Sciences, 34 Professors, 242 Candidates of Medical Sciences, and 62 Assistant Doctors.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">NOSMA has its own clinic and stomatological polyclinic with modern equipment. Clinical chairs of the academy are based in large healthcare institutions of the republic, the bed space of which is more than 6300 locations. Along with the professional training we have all the conditions for research work. There is a research laboratory in the Academy and Institute of biomedical research of Vladikavkaz scientific center of the Russian Academy of Sciences and of RNO-Alania Government. The Academy operates Students’ Scientific Society and association of young scientists. Students of the Academy take part in international conferences and workshops. Students have access to a library with a rich fund of special literature and fiction numbering more than 428000 copies of publications. The library operates an electronic reading room equipped with computers with Internet access. </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The Academy has four sports and fitness centers: shooting gallery, a sports ground. There are museums: of Health Organization of North-Alania, biological and anatomical museums at the territory of the Academy.</p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Vladikavkaz City, Russia
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">City Day‎: ‎25th September, Country‎: ‎Russia, Founded: May 6, 1784</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Vladikavkaz is the capital city of the Republic of North Ossetia-Alania, Russia. It is located in the southeast of the republic at the foothills of the Caucasus Mountains, situated on the Terek River. Vladikavkaz is one of the most populous cities in the North Caucasus. The city is an industrial and transportation center. Manufactured products include processed zinc and lead, machinery, chemicals, clothing, and food products.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The city was founded in 1784 as a fortress during the Russian conquest of the Caucasus and was for many years the main Russian military base in the region. The Georgian Military Highway, crossing the mountains, was constructed in 1799 to link the city with Georgia to the south, and in 1875 a railway was built to connect it to Rostov-on-Don and Baku in Azerbaijan. Vladikavkaz has become an important industrial center for the region, with smelting, refining, chemicals and manufacturing industries.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The city is one of the largest in the Russian-controlled Caucasus, along with Grozny, and was the capital of the Mountain Autonomous Soviet Socialist Republic, the Soviet Republic established after the annexation of the Mountainous Republic of the North Caucasus. The puppet state existed from 1921 to 1924 and was part of, and in some cases incorporated, the modern-day territories of Chechnya, North Ossetia, and Kabardino-Balkaria.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">International students can take direct flights from Moscow or can travel by train. Vladikavkaz International Airport is located in the city. (Every day flights are available from Moscow)</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Why people choose NOSMA?
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Unique teaching system </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Specialized university</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Good value for money</p>
                </div>


                {/* Middle Section */}
                <div className="text-center">

                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        North Ossetian State Medical Academy Faculties:
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">There are 6 faculties in the academy: medical, pediatric, stomatological, pharmaceutical, medico – preventive and the faculty of post-graduate education (internship, residency, postgraduate course). The faculty of postgraduate education is preparing to graduate in 15 specialties, clinical residency in 31 specialties. Annually specialization and advanced training in 25 specialties is conducted in the academy. NOSMA operates the department of pre-university training and further education for foreigners.</p>

                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        North Ossetian State Medical Academy Ranking:
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">NOSMA Country Rank: 351 and world Ranking 9793</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        North Ossetian State Medical Academy Accommodation:
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">NOSMA government hostels are available in a five-minute walk from the Academy building. But because of more students, NOSMA foreign student representative has to provide private hostels or flats for incoming students which will be nearby University campus. It’s very good and comfortable as compared to the government hostels. </p>

                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        North Ossetian State Medical Academy | Fee structure:
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 shadow-md">
                            <thead>
                                <tr className="bg-red-600 text-white">
                                    <th className="px-4 py-2 border-r border-gray-300">Fees Pattern</th>
                                    <th className="px-4 py-2 border-r border-gray-300">1st Year</th>
                                    <th className="px-4 py-2 border-r border-gray-300">2nd Year to 6th Year</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: "Per Year	", firstYear: "-", secondYear: "-", total: "29000 USD" },

                                ].map((item, index) => (
                                    <tr key={index} className="border-b border-gray-300 text-gray-700">
                                        <td className="px-4 py-2 border-r border-gray-300 font-semibold bg-gray-100">{item.label}</td>
                                        <td className="px-4 py-2 border-r border-gray-300">{item.firstYear}</td>
                                        <td className="px-4 py-2 border-r border-gray-300">{item.secondYear}</td>
                                      
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <p className="text-left text-justify text-md lg:text-lg text-red-600 font-roboto mt-4">Note:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-left text-gray-700 space-y-2">
                            <li>
                               Medical and biometrics charges are additional; students must pay for themselves from the first to the sixth year. Every city's cost for this procedure is different, but it is on average <strong>7500-11000 </strong>Rubles.
                            </li>
                            <li>
                               Tuition Fees can increase by <strong>8-12% per year</strong> according to the annual rate of inflation.
                            </li>
                            <li>
                               Hostel fee typically can increase by <strong>5-7% per year</strong> according to the current prices for electricity, gas, water, heating, etc.
                            </li>
                            <li>
                               Medical Insurance fee can increase by <strong>3-5% per year</strong> according to the annual rate of inflation.
                            </li>
                        </ul>
                        <p className="text-red-600 font-semibold text-justify font-roboto mt-4 bg-yellow-300 p-2">RREC team would like to inform you that the exchange rate is extremely volatile and is subjected to change. Candidates are requested to check the current exchange rate and your budget before initiating the admission process.</p>
                    </div>
                </div>
                <div className="bg-gray-100 p-6">
                    {/* Heading */}
                    <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">
                        The admission process begins by you sending us the scanned copy of the documents listed below, for more details or free counseling consult RREC.
                    </h2>


                    {/* Steps List */}
                    <div className="mt-4 space-y-3 w-full">
                        {[
                            { step: "*", text: `STEP-1: Filled application form` },
                            { step: "*", text: `STEP-2: Passport` },
                            { step: "*", text: `STEP-3: Secondary school certificate or transcript` },
                            { step: "*", text: `STEP-4: Medical fitness certificate` },
                            { step: "*", text: `STEP-5: Photos (passport size 35*45mm at the matte paper)` },


                        ].map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row md:items-start md:space-x-3 w-full">
                                <span className="text-red-600 font-semibold flex-shrink-0">{item.step}</span>
                                <p className="text-gray-700 text-justify md:text-left md:flex-1">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-6">
                    Call for more details about the university, admission, processing, fees at MBBS in NOSMA, Russia:
                </h2>

                {/* Phone Numbers */}
                <div className="mt-4 space-y-2 text-center">
                    <a href="tel:+917428212236" className="text-gray-700 hover:text-red-600 block">
                        📞 +91-7428212236, 7428203118
                    </a>
                    <a href="tel:18004195827" className="text-gray-700 hover:text-red-600 block">
                        📞 Toll-free 1800-419-5827 (For Indian Students)
                    </a>
                    <a href="tel:+79515190376" className="text-gray-700 hover:text-red-600 block">
                        📞 +7-9515190376 (International Students)
                    </a>
                </div>

                {/* WhatsApp Numbers */}
                <div className="mt-4 space-y-2 text-center">
                    <a href="https://wa.me/79515190376" className="text-gray-700 hover:text-red-600 block">
                        💬 WhatsApp: +7-9515190376
                    </a>
                </div>
            </div>

            <div className="bg-red-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Call for more details about the university admission, processing, fees at MBBS in NOSMA, Russia
                </h2>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    Contact Us: +91-7428212236, 7428203118
                </h3>
                <h6 className="mb-4">Toll-free 1800-419-5827 (For Indian Students), +7-9515190376 (International Students)</h6>
                <h6>Students or parents can write to us at WhatsApp also: +7-9515190376</h6>
            </div>
        </>
    )
}
export default Ossetian;