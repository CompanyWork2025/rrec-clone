import React from "react";
import { Helmet } from "react-helmet";

const Kabardino = () => {

    const universityData = [
        { label: "Name of the Institute", value: "Kabardino-Balkarian State University named after H.M. Berbekov" },
        { label: "Year of Establishment", value: "1957" },
        { label: "Location", value: "Nalchik, South Russia" },
        { label: "Institute Type", value: "Public" },
        { label: "Intake for MBBS", value: "September" },
        { label: "Number of Faculty", value: "05" },
        { label: "Medium of Instruction", value: "English" },
        { label: "NEET Required", value: "Yes" },
        { label: "IELTS/TOEFL", value: "Not Required" },
        { label: "Courses Offered", value: "General Medicine, Pediatrics, Dentistry, Pharmacy & Nursing" },
        { label: "Minimum Percentage Required", value: "50% in PCB (aggregate)" },
        { label: "Duration of MBBS", value: "6 Years (Including 1 Year Internship)" },
        { label: "University Recognition", value: "WHO, NMC of India" },
        { label: "University Ranking", value: "Country Ranking – 87, World Ranking – 3716" },
        { label: "Hostel Facility", value: "Yes" },
        { label: "Contact Official Representative", value: <a href="https://www.thedoctorsiea.in/" className="text-blue-600 hover:underline">Doctors-IEA, website:- www.thedoctorsiea.in</a> },
    ];



    return (
        <>
            <Helmet>
                <title>Kabardino-Balkarian State University named after H.M. Berbekov | Fee structure | Admission Procedure</title>
                <meta
                    name="description"
                    content="Fee structure - hostel - benefits - Admission Procedure - Eligibility Criteria - Documents required - duration of MBBS - faculties - Benefits - Historical Overview - affiliation - advantages - Direct Admission"
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZWEcQbS2QvpdrHQFEVX3CsnnjD3Kq3slB8nFcQr_4MyDYDmAwsB7_JzupGHKs-0Adg0&usqp=CAU"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Kabardino-Balkarian State University named after H.M. Berbekov
                    </h1>
                    <h2 className="text-md text-green-600 lg:text-xl mt-4">
                        About the University
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Kabardino-Balkarian State University, named in honor of the esteemed H.M. Berbekov (KBSU), was founded in 1957. It is the largest university in Kabardino-Balkarina, Russia. It is also the largest and highly reputed university in the North Caucasus region. The medical section of Kabardino-Balkarian State University facilitates a range of academic programs designed to prepare students for successful careers in healthcare. The six-year undergraduate degree in General Medicine (MD equivalent), provides students with a solid foundation in basic medical sciences, clinical skills, and patient care. The curriculum integrates theoretical instruction with practical training, ensuring that graduates are well-equipped to meet the challenges of modern healthcare.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">In addition to the General Medicine program, the university offers specialized medical programs in various disciplines such as Pediatrics, Dentistry, Pharmacy, and Nursing. These programs allow students to pursue their interests and develop expertise in specific areas of healthcare. The university has almost 67 years of experience in the medical arena. Since its establishment, the university has been playing a significant role in medical science education and training of medical students and scientists. The medical section of KBSU is widely popular for its seamless contribution to medical scientific works, cultural, informational, and social medical institute owing to its highly educated teaching faculties, laboratory base and large-scale clinical research.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The university is approved and recognized by the Ministry of Science and Higher Education of the Russian Federation, WHO, NMC, UNESCO, PLAB (UK), USMLE (USA) and other international organizations around the world. </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Russia is one of the favorite medical destinations for many Indians as well as international students due to its advanced positions in the medical education system. The MBBS study in Russia is inexpensive compared to many Indian medical institutions. Moreover, the approved list of the National Medical Commission of India also comprises Kabardino-Balkarian State University, named after H.M. Berbekov, easy admission process and English medium MBBS program makes it a further alluring option for MBBS in Russia.</p>
                    </div>

                    <h2 className="text-2xl text-green-600 mb-4 mt-8 text-center">
                        Why Choose Kabardino-Balkarian State University named after H.M. Berbekov for MBBS?
                    </h2>
                    <ul className="list-disc list-inside space-y-4 text-justify text-md lg:text-lg text-gray-700">
                        <li><strong>Direct Admission, No Entrance:</strong> It is a distinctive factor at Kabardino-Balkarian State University named after H.M. Berbekov. Indian students have to grind hard to clear competitive exams to qualify for top-grade institutes in India. Inversely, you can get direct admission without going through any entrance exam at KBSU, only NEET qualifying marks are required.</li>
                        <li><strong>International Standards:</strong> The university has a proven track record of high-quality medical education. The university follows all the norms and benchmarks of international standards of teaching methods and a systematic approach to gain favorable academic results.</li>
                        <li><strong>English Medium:</strong> The language of teaching is always a point of concern for Indian students in Russia. For all international students, English is the language of training during the entire MBBS program. Thus, it automatically becomes a natural choice for Indian students.</li>
                        <li><strong>Library Service:</strong> KBSU facilitates an enormous base of knowledge for medical students. The library at KBSU is a modern source of information supporting educational and research processes both on paper and electronic media.</li>
                        <li><strong>MBBS at Low-Cost Fees:</strong> The cost of MBBS in most Russian universities is significantly low compared to medical institutions in India, and KBSU is no exception. The university offers a world-class medical education at an affordable cost. Thus, it creates a great opportunity for Indian students to pursue their dream career in medicine here.</li>
                        <li><strong>Hostel for all Foreign Students:</strong> All foreign students are provided comfortable and hygienic accommodation. Rooms in the hostel are shared between 2-3 people. Separate kitchen, bathroom, balcony, and all necessities are duly furnished.</li>
                        <li><strong>Scholarship:</strong> The university grants and scholarships are also available to help economically weaker students to pursue their MBBS degree.</li>
                    </ul>

                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-green-600 lg:text-xl mt-8 mb-2">
                        University Summary at a Glance
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 shadow-md">
                            <tbody>
                                {universityData.map((item, index) => (
                                    <tr key={index} className={`border-b border-gray-300 ${index === 0 ? "bg-green-600 text-white" : ""}`}>
                                        <td className="px-4 py-2 font-semibold border-r border-gray-300">{item.label}</td>
                                        <td className="px-4 py-2">{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-md text-green-600 lg:text-xl font-semibold mt-8 text-center">
                        Faculties of KBSU
                    </h2>
                    <div className="mt-4 space-y-3 w-full">
                        {[
                            { step: "•", text: `General Medicine (MBBS)` },
                            { step: "•", text: `Dentistry` },
                            { step: "•", text: `Pediatrics` },
                            { step: "•", text: `Pharmacy` },
                            { step: "•", text: `Nursing` },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-2 w-full">
                                <span className="text-green-600 font-semibold text-lg flex-shrink-0">{item.step}</span>
                                <p className="text-gray-700 text-left flex-1">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-10 mt-8">
                        {/* Eligibility Criteria for Admission */}
                        <div className="bg-gray-100 ">
                            <h3 className="text-xl font-semibold text-green-600 mb-4">Eligibility Criteria for Admission</h3>
                            <ul className="list-disc text-justify list-inside text-gray-700 space-y-2">
                                <li>The candidate must be 17 years of age on or before 31st Dec of the year of admission.</li>
                                <li>The candidate must have passed class 10th and 12th from a recognized board in India.</li>
                                <li>The candidate must have cleared the NEET examination.</li>
                                <li>The candidate must secure 50% aggregate marks in Physics, Chemistry & Biology (PCB) with English.</li>
                            </ul>
                        </div>

                        {/* Complete Admission Process */}
                        <div className="bg-gray-100 ">
                            <h3 className="text-xl font-semibold text-green-600 mb-4">Complete Admission Process</h3>
                            <ul className="list-disc text-justify list-inside text-gray-700 space-y-2">
                                <li>Apply for admission through the online application form.</li>
                                <li>Fill up all the mandatory information carefully and submit it.</li>
                                <li>The university will review the form and revert within 10-15 days.</li>
                                <li>The confirmation letter is sent by the university after selection.</li>
                                <li>Now submit all the admission-related documents.</li>
                                <li>Pay university first-year MBBS fees and get the receipt.</li>
                                <li>Once payment is submitted you can apply for the Visa.</li>
                                <li>After Visa approval, you are all set to fly to Russia.</li>
                            </ul>
                        </div>

                        {/* Document Required */}
                        <div className="bg-gray-100 ">
                            <h3 className="text-xl font-semibold text-green-600 mb-4">Documents Required</h3>
                            <ul className="list-disc text-justify list-inside text-gray-700 space-y-2">
                                <li>Copy of 10th & 12th mark sheets</li>
                                <li>Notarized birth certificate</li>
                                <li>Migration certificate</li>
                                <li>Official invitation letter issued by the university</li>
                                <li>All documents must be notarized by the Ministry of External Affairs, New Delhi</li>
                                <li>Bank receipt of 1st year Kemerovo State Medical University tuition fees</li>
                                <li>Valid passport with a minimum validity of 2 years</li>
                                <li>NEET Scorecard</li>
                                <li>HIV test documents</li>
                                <li>12 passport size photos</li>
                                <li>Medical certificate</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="text-center">
                    <h2 className="text-md text-green-600 lg:text-xl mt-8 mb-2">
                        Fee Structure for MBBS in Kemerovo State Medical University
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 shadow-md">
                            <thead>
                                <tr className="bg-green-600 text-white">
                                    <th className="px-4 py-2 border-r border-gray-300">Fees Pattern</th>
                                    <th className="px-4 py-2 border-r border-gray-300">1st Year</th>
                                    <th className="px-4 py-2 border-r border-gray-300">2nd Year to 6th Year</th>

                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: "Tuition Fee", firstYear: "-", secondYear: "-", total: "23600 USD Total" },
                                    { label: "Hostel Fee", firstYear: "Excluded", secondYear: "Excluded", total: "–" },
                                    { label: "Visa Extension & Registration Fee", firstYear: "Excluded", secondYear: "Excluded", total: "–" },
                                    { label: "Medical Insurance", firstYear: "Excluded", secondYear: "Excluded", total: "–" },
                                ].map((item, index) => (
                                    <tr key={index} className="border-b border-gray-300 text-gray-700">
                                        <td className="px-4 py-2 border-r border-gray-300 font-semibold bg-gray-100">{item.label}</td>
                                        <td className="px-4 py-2 border-r border-gray-300">{item.firstYear}</td>
                                        <td className="px-4 py-2 border-r border-gray-300">{item.secondYear}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <p className="text-left text-justify text-md lg:text-lg text-green-600 font-roboto mt-4">Note:
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
                        <p className="text-red-600 font-semibold text-justify font-roboto mt-4 bg-yellow-300 p-2">Doctors-IEA team would like to inform you that the exchange rate is extremely volatile and is subjected to change. Candidates are requested to check the current exchange rate and your budget before initiating the admission process.</p>
                    </div>
                </div>
                <div className="bg-gray-100 p-6">
                    {/* Heading */}
                    <h2 className="text-2xl font-semibold text-green-600 text-center mb-4">
                        Roles and Responsibilities performed by Doctors-IEA
                    </h2>


                    {/* Steps List */}
                    <div className="mt-4 space-y-8 w-full">
                        {[
                            { step: "*", text: `Doctors-IEA is the only official and authorized representative for MBBS admission in more than 22+ NMC-approved medical universities in Russia including Kabardino-Balkarian State University named after H.M. Berbekov .` },
                            { step: "*", text: `Our 18  years of experience nurturing the dream of medical aspirants in India who are looking for MBBS abroad.` },
                            { step: "*", text: `Doctors-IEA ensures Indian students seeking admission to MBBS in Russian are provided admission in NMC-recognized and WHO-approved medical universities only` },
                            { step: "*", text: `Through counseling our advisor and expert for medical education abroad provide complete information and guidance to parents and students regarding MBBS admission in Russia.  ` },
                            { step: "*", text: `The team of Doctors-IEA will assist you with the documentation and visa application as well as Embassy stamping and Ministry approval.` },
                            { step: "*", text: `We arrange your travel essentials and ticket to Russia, including travel insurance. ` },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-2 w-full">
                                <span className="text-green-600 font-semibold text-lg flex-shrink-0">{item.step}</span>
                                <p className="text-gray-700 text-left flex-1">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Heading */}
                <h2 className="text-2xl font-semibold text-green-600 text-center mb-4">
                    Hostel Facility at Kabardino-Balkarian State University named after H.M. Berbekov
                </h2>

                <p className="text-gray-700 mt-4 text-justify">
                    The university hostel accommodates 2-3 students per room on a sharing basis. The hostel buildings for foreign students are located near the campus of KBSU.  There is a separate floor for male and female students. Indian mess with a variety of vegetarian, and non-vegetarian meals is also available. Furthermore, hostel rooms are equipped with 24-hour internet access and include basic amenities such as heater, bedding, blankets, cupboards, tables, etc. The hostel premises are under 24-hour surveillance for security. Additionally, students have access to a common kitchen where they can prepare their meals to suit their preferences.
                </p>


                {/* Heading */}
                <h2 className="text-2xl font-semibold text-green-600 text-center mb-4">
                    About the City
                </h2>

                <p className="text-gray-700 mt-4 text-justify">
                    Nalchik is the capital city of the Kabardino-Balkarian Republic in Russia, situated at an altitude of 550 meters in the foothills of the Caucasus Mountains. With a population of approximately 239,000 residents, Nalchik offers a dynamic urban environment enriched by its diverse economic activities. It also serves as an industrial center of the city. Industries thriving in the city include machine-building, electronics, metalworking and waterproof clothing.
                </p>

                <p className="text-gray-700 mt-4 text-justify">
                    The city has a pleasant climate throughout the year. In January, temperatures average around minus 3 degrees Celsius, while July sees temperatures rise to a comfortable plus 22 degrees Celsius. The city has 6 artificial lakes, 3 amusement parks and mineral springs. The aesthetic mountains are favorable for hiking, camping and mountaineering.
                </p>



                {/* Heading */}
                <h2 className="text-2xl font-semibold text-green-600 text-center mt-6">
                    Call for more details about the university, admission, processing, fees at MBBS in KBSU:
                </h2>

                {/* Phone Numbers */}
                <div className="mt-4 space-y-2 text-center">
                    <a href="tel:+917428212236" className="text-gray-700 hover:text-green-600 block">
                        📞 +91-7428212236, 7428203118
                    </a>
                    <a href="tel:18004195827" className="text-gray-700 hover:text-green-600 block">
                        📞 Toll-free 1800-419-5827 (For Indian Students)
                    </a>
                    <a href="tel:+79515190376" className="text-gray-700 hover:text-green-600 block">
                        📞 +7-9515190376 (International Students)
                    </a>
                </div>

                {/* WhatsApp Numbers */}
                <div className="mt-4 space-y-2 text-center">
                    <a href="https://wa.me/79515190376" className="text-gray-700 hover:text-green-600 block">
                        💬 WhatsApp: +7-9515190376
                    </a>
                </div>
            </div>

            <div className="bg-green-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Call for more details about the university admission, processing, fees at MBBS in KBSU, Russia
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
export default Kabardino;