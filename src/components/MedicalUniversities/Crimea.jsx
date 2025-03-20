import React from "react";
import { Helmet } from "react-helmet";

const Crimea = () => {

    const universityData = [
        { label: "Name of the University", value: "V.I. Vernadsky Crimean Federal University" },
        { label: "Location", value: "Simferopol, Russian Federation" },
        { label: "Popular Name/Abbrev.", value: "Crimean Federal University" },
        { label: "Institute Type", value: "Government" },
        { label: "Year of Establishment", value: "1918" },
        { label: "Number of Faculty", value: "07" },
        { label: "Medium of Instruction", value: "English/Russian" },
        { label: "NEET Required", value: "Yes Required (for Indian Students)" },
        { label: "Courses Offered", value: "General Medicine, Pediatrics, Dentistry, Pharmacy, Clinical Physiology, Preparatory Course" },
        { label: "Minimum percentage required", value: "60% in (Chem+Bio)" },
        { label: "IELTS/TOEFL", value: "Not Required" },
        { label: "Processing Time for MBBS Admission", value: "15-20 days" },
        { label: "Duration of MBBS", value: "6 Years" },
        { label: "University Recognition", value: "WHO, NMC of India Approved" },
        { label: "Total Number of Students", value: "32000 including 3000+ International Students" },
        { label: "Category", value: "Medical Colleges in Russia" },
        { label: "Contact Official Representative", value: <a href="https://www.rrecrussia.com/" className="text-blue-600 hover:underline">RREC, website:- www.rrecrussia.com</a> },
    ];


    return (
        <>
            <Helmet>
                <title>Crimea Federal University | Fee structure | Admission Procedure</title>
                <meta
                    name="description"
                    content="Fee structure - hostel - benefits - Admission Procedure - Eligibility Criteria - Documents required - duration of MBBS - faculties - Benefits - Historical Overview - affiliation - advantages - Direct Admission"
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://media.globaladmissions.com/media/school_logos/crimea-federal-university.png"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Crimea Federal University
                    </h1>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4">
                        Crimea Federal University – A Dream University for Indian MBBS Aspirants
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Get complete information regarding Crimea Federal University admission, fees, hostel, reviews scholarship, and ranking.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Russia, due to its sublime supremacy in science and technology has become the pivotal destination for medical education in the last decade or two. Students not only from Asia but also from the other parts of the world are yearning to get admission in the MBBS course that is offered through direct admission to foreign students. If you really want to study MBBS at one of the top-ranked medical university, you should consider Crimea Federal University, Russia. However, in order to take admission, you need to take the right initiative at the right time to reserve your seat at Crimea Federal University. It is so because it is one of the highly-ranked universities in Russia and a vast number of foreign students apply for this university.</p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Complete your Medical Degree from World-Renowned University in Affordable Fees. Best Results in FMGE.
                    </h2>
                    <h2 className="text-sm text-red-600 lg:text-lg mt-4">
                        About Crimea Federal University
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">CFU has a century-long history of glory and achievement as a prime institution in the field of medical education. Crimea Federal University is founded in 1918. It is also known as V. I. Vernadsky Crimea Federal University, located in Simferopol, Russia. The total number of students studying in this university is 32000. It combines the 3000 international students from more than 54 countries, pursuing MBBS to achieve their dream goal of becoming successful doctors. It has an extensive network of research and training facilities. It has more than 7000 staff members that render their impeccable and incessant services produce sublime consistency and performance.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The university offers a healthy ratio of well-trained and laureate faculty members geared up with all sorts of modern and advanced technology. The team of staff includes professors, doctors of science, associate professors, and so on.  It also has an adequate number of non-technical staff to facilitate an ambiance of self-learning to the students. No wonder, the university is committed to raising the standard of healthcare education and optimum delivery system for the people.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The university consists of highly-qualified professors, academicians, physicians, and staff that dedicatedly work to help students achieving their goals in the medical field. Crimea Federal University ranking 19 in Russian and in the world is supremely placed at 3512 out of 40,000 universities. The university incorporates 60 departments and 7 faculties. The university has 23 academic and non-academic units and 12 branches situated across CFU. Moreover, it has 11 research and science centers and institutions, 10 academies and institutes, and 7 colleges.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Why Choose Crimea Federal University?
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Trusted Institution                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">CFU is serving this field for a long time. Ever since its establishment, the university has done exceptionally well and taken several steps to elevate its quality in medical education and develop a world-class infrastructure to attract students worldwide. Today, there are 3200 students and 7000 staff, numerous research and training centers to facilitate students achieving their goals. Hence, it has emerged as a trusted medical institution in Russia.</p>
                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        University Summary at a Glance
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 shadow-md">
                            <tbody>
                                {universityData.map((item, index) => (
                                    <tr key={index} className={`border-b border-gray-300 ${index === 0 ? "bg-red-600 text-white" : ""}`}>
                                        <td className="px-4 py-2 font-semibold border-r border-gray-300">{item.label}</td>
                                        <td className="px-4 py-2">{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Low Tuition Fees
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Crimea Federal University is a non-profit institution. The purpose of the university is to render world-class education at considerably low Crimea Federal University Fees. It is quite favorable for Indian students who yearn to achieve an MBBS degree at a feasible cost.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        High-Quality Education
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The major reason international students, including the influx of a large number of Indian students, choose to take admission to the MBBS course in CFU is its unparalleled quality of education and selfless dedication from faculty and staff to produce skilled doctors. This leads to colossal Crimea Federal University country ranking as well as world ranking. </p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Direct Admission
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Unlike in India, Crime Federal University offers direct admission to MBBS course for foreign students. In India to grab a seat in the government medical college one has to go through an intensely battled competitive exam. However, here you are getting an opportunity to reserve your seat on a first-come, first-serve basis. All you need to do is to apply online application right in the beginning to avoid deadlines and go through an entrance exam for Biology and Chemistry. </p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Easy Admission Process
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">One of the specialties of a medical university in Russia is that you never have to bother about the process of admission. It is very simple and easy. All you need to do is to apply on time. Because once the deadline is over, your only option remains is to wait for another academic year.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Highly-Qualified Faculty
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">It is the quality of teachers, professors, and staff members that decide the quality of future doctors. Hence, CFU hardly leaves any stone unturned when the career of more than 32000 students is at stake. The university has a range of highly-experienced and eminent professors, academicians, physicians, and administrative staff. They all work in tandem to produce optimum results every year.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        WHO & NMC Recognized
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The university is duly recognized and approved by WHO and NMC of India. It precisely means that after completing MBBS from CFU you can work or pursue your continuous education in all major countries of the world after clearing a medical licensing exam of that particular country. The degree you acquire is also recognized by many renowned organizations and institutions of the world.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Meet High-Level National & Global Standard
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">It is one of the traits of V.I. Vernadsky Crimea Federal University that it indulges in meeting high-level national and global standards in education. That is why Crimea University country ranking and world ranking both places at a sublime position. Over the years, it has also developed into a prominent research and science center that is a matter of pride for the republic of Crimea and the Russian Federation.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Duration of MBBS at Crimea Federal University
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The total course duration at Crimea Federal University is 6 years for the English Medium MBBS course. It is not the same for those who are doing MBBS in the Russian medium. For the Russian medium, it is 7 years. For BDS & Pharmacy 5 years. Russian language course 8-10 months. </p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Online/offline Counseling
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">We have kept all the options wide open for you. We offer both online or offline consultation. You are welcome to our office or can take the online approach to discuss your relevant queries. We will not only help you to find out the best medical university in Russia but also advise you on career goals. Our team will guide you until you are completely satisfied with the information. For us, no deal is final until you are completely satisfied with our service. These are not just any sales pitch but a clear and honest concern because one wrong decision can move your career in the wrong direction and the consequences may impact your whole life.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Preparation for FMGE, NMC Screening Test:
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">As an Official representative of Russian Medical Universities, we put all the information quite vividly for both students and parents. Students pursuing MBBS at Crimea Federal University have to appear and clear the NMC screening test in order to get a license for practicing the medical profession in India. It is mandatory for all foreign return Medical graduates. The students can apply for FMGE registration when they come back to India after the completion of the MBBS course abroad. It is held in December and June (Twice a year). The student has to obtain 150 marks out of 300, there is no negative marking in the FMGE exam (NMC).</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Our team provides online coaching for the FMGE screening exam and visiting professors from India throughout the year. All the topics are properly explained in a detailed manner. It offers a great helping hand to students.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Simferopol city at a Glance:
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Simferopol is the second-largest city on the Crimean Peninsula and the capital of the Republic of Crimea. Simferopol is an important political, economic, and transport hub of the peninsula, and serves as the administrative center of both Simferopol Municipality and the surrounding Simferopol District. Founded on the site of a Crimean Tatar town Aqmescit, the city adopted its current name after the annexation of the Crimean Khanate to the Russian Empire. Simferopol is home to the football club FC TSK Simferopol which plays in the Crimean Premier League. Simferopol International Airport in the city. International students can travel with direct flights of domestic flights from Moscow.</p>

                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Arrival and Immigration at the Airport
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Students who have taken flight for Crimea Federal University will be received by the official representative at the airport in Russia. Further, he/she will be dropped at the accommodation safely from the airport. Since it is considered a very rush time during the beginning of the academic year in Russia, students are recommended to catch the flight as soon as their Visa formality is cleared. In Addition to that, it is obligatory for students to share their traveling dates and flight schedule. All work regarding admission, invitation, visa, ticket, and arrival formalities in the first year will be done by the RREC office only. </p>
                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        MBBS Fees Structure in Crimea Federal University
                    </h2>
                    <p className="text-center text-justify text-md lg:text-lg font-roboto mt-2 mb-4">Crimea Federal University fees are quite budget-friendly for Indian students, as well as for Foreign students. It is one of the top medical universities in Russia that bestows world-class education at a low cost. As an Indian student, you will be delighted to know that you will be charged 4 times lesser as compared to any Indian private medical college or university. That is the reason why it attracts students from all over the world. It will be a delightful opportunity for deserving candidates who want to pursue MBBS abroad.</p>
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
                                    { label: "Tuition Fee", firstYear: "315,000 RUB", secondYear: "315,000 RUB", total: "29000 USD Total" },
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
                        Hostel Facility at CFU
                    </h2>


                    {/* Steps List */}
                    <div className="mt-4 space-y-3 w-full">
                        {[
                            { step: "*", text: `Students who come to CFU from different parts of the world including India can opt for accommodation in the Crimea Federal University hostel. The hostel premises are within the boundary of the university campus. CFU has six hostel buildings to accommodate a large number of foreign students. The allocation of the hostel will be done as per the rule and order of the university. ` },
                            { step: "*", text: `Based on the size of the hostel room, students may have to share a room with 2-3-4 students. Students have options to choose the roommates students to want to share their rooms. All hostel rooms are well-equipped with essential and advanced amenities like hot and cold water, electricity, cooking gas, a heating system for rooms. There is no additional charge for it. There is a fixed exit and entry time for the students living on the hostel campus. The entire hostel campus is secured with CCTV camera to ensure maximum security and safety for the students.` },
                            { step: "*", text: `There are two common kitchens on every floor where students who do not want to use mess or restaurants can cook their own food. However, the university canteen and mess facility are also there available where a variety of Chinese, Indian, Continental and many other types of food readily available. The cost of food in the mess may cost you around $120-160 monthly. ` },

                        ].map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row md:items-start md:space-x-3 w-full">
                                <span className="text-red-600 font-semibold flex-shrink-0">{item.step}</span>
                                <p className="text-gray-700 text-justify md:text-left md:flex-1">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">
                    Affiliation and Accreditation
                </h2>

                <p className="text-gray-700 mt-4 text-justify">
                    The university is approved by NMC, WHO, BMDC, GMC, etc.
                </p>

                <p className="text-gray-700 mt-4 text-justify">
                    The university has accreditation from the Russian Government as well as the Ministry of Science and Education.
                </p>

                <p className="text-gray-700 mt-4 text-justify">
                    World Federation of Medical Education (WFME)
                </p>

                <p className="text-gray-700 mt-4 text-justify">
                    Association of Medical Education of Europe (AMEE)
                </p>

                <p className="text-gray-700 mt-4 text-justify">
                    International Education Society (IES)
                </p>

                <p className="text-gray-700 mt-4 text-justify">
                    European Universities Association (EUA)
                </p>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-6">
                    Call for more details about the university, admission, processing, fees at MBBS in CFU:
                </h2>

                {/* Phone Numbers */}
                <div className="mt-4 space-y-2 text-center">
                    <a href="tel:+917428212236" className="text-gray-700 hover:text-red-600 block">
                        📞 +91-7042284508, 7042284509
                    </a>
                    <a href="tel:18004195827" className="text-gray-700 hover:text-red-600 block">
                        📞 Toll-free 1800-57-5827 (For Indian Students)
                    </a>
                    <a href="tel:+79515190376" className="text-gray-700 hover:text-red-600 block">
                        📞 +7-9515371133 (International Students)
                    </a>
                </div>

                {/* WhatsApp Numbers */}
                <div className="mt-4 space-y-2 text-center">
                    <a href="https://wa.me/917428212236" className="text-gray-700 hover:text-red-600 block">
                        💬 WhatsApp: +91-7042284508
                    </a>
                    <a href="https://wa.me/79515190376" className="text-gray-700 hover:text-red-600 block">
                        💬 WhatsApp: +7-9515371133
                    </a>
                </div>
            </div>

            <div className="bg-red-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Call for more details about the university admission, processing, fees at MBBS in CFU, Russia
                </h2>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    Contact Us: +91-7042284508, 7042284509
                </h3>
                <h6 className="mb-4">Toll-free 1800-57-5827 (For Indian Students), +7-9515371133 (International Students)</h6>
                <h6>Students or parents can write to us at WhatsApp also: +91-7042284508</h6>
            </div>
        </>
    )
}
export default Crimea;