import React from "react";
import { Helmet } from "react-helmet";

const Ural = () => {

    const universityData = [
        { label: "Name of the Institute", value: "Ural State Medical University" },
        { label: "Year of Establishment", value: "1930" },
        { label: "Location", value: "Yekaterinburg, Russia" },
        { label: "Abbreviation", value: "USMU" },
        { label: "Institute Type", value: "Government" },
        { label: "Intake for MBBS", value: "September" },
        { label: "Number of Faculty", value: "08" },
        { label: "Medium of Instruction", value: "English & Russian" },
        { label: "NEET Required", value: "Yes" },
        { label: "IELTS/TOEFL", value: "Not Required" },
        { label: "Courses Offered", value: "General Medicine, Preventive Medicine, Dentistry, Pharmacy, Nursing and Clinical Psychology" },
        { label: "Minimum Percentage Required", value: "50% in Physics, Chemistry, Biology with English" },
        { label: "Duration of MBBS", value: "6 Years" },
        { label: "University Recognition", value: "WHO, NMC of India" },
        { label: "Total Number of Students", value: "Above 6000 (Both Russian and International)" },
        { label: "Hostel Facility", value: "Yes (Male and Female)" },
        { label: "Category", value: "Medical Colleges in Russia" },
        { label: "Contact Official Representative", value: <a href="https://www.rrecrussia.com/" className="text-blue-600 hover:underline">RREC, website:- www.rrecrussia.com</a> },
    ];




    return (
        <>
            <Helmet>
                <title>Ural State Medical University | Fee structure | Admission Procedure</title>
                <meta
                    name="description"
                    content="Fee structure - hostel - benefits - Admission Procedure - Eligibility Criteria - Documents required - duration of MBBS - faculties - Benefits - Historical Overview - affiliation - advantages - Direct Admission"
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VaUhrtHURdb1ujLOdM0rphvvdxvont0eUg&s"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Ural State Medical University
                    </h1>
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-4">
                        About the University
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Ural State Medical University (USMU) is a leading institution for medical education in Russia. It was established in 1930. Since then, it has been among the pioneers of medical education in Russia. It offers high-quality medical education at an affordable price, supported by the Russian government. Accredited by the World Health Organization (WHO) and recognized by the Medical Council of India (MCI), USMU is an excellent choice for Indian students seeking medical education. The university also has an Indian Mess facility. With most courses taught in English, it caters to international students, ensuring a smooth learning experience and providing a perfect platform to pursue their dream careers.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">USMU hosts over 7,000 students, including undergraduates, interns, residents, graduate students, and trainees. Across its 58 departments and 8 faculties, the university provides a structured academic environment conducive to learning and growth.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The university collaborates with 40 clinical bases in premier medical institutions and research facilities, including its advanced dental clinic. Equipped with modern facilities and cutting-edge equipment, these partnerships ensure high-quality medical care and facilitate impactful research.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">USMU is renowned for its innovative programs, as a result attracting students worldwide. The degree programs in General Medicine and Paediatrics have accreditation from the Agency of Public Education Quality Management and Career Development. Furthermore, alongside Preventive Medicine and Dentistry, these programs are recognized among the paramount education initiatives in innovative Russia. It also excels in research, with collaborations extending to prestigious institutions both nationally and internationally. Through these partnerships, USMU contributes to advancing medical knowledge globally.</p>
                    </div>

                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-4">
                        Our History
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Ural State Medical University (USMU) is regarded as one of the oldest medical institutions in Russia. Established in 1930, USMU has evolved into a prestigious hub of medical learning over the years. Its rich history is marked by continuous advancements in medical education, fostering innovation, and producing skilled healthcare professionals who contribute significantly to society.</p>
                    </div>

                    <h2 className="text-lg font-semibold text-red-600 mb-4 mt-8 text-center">
                        Why Choose Ural State Medical University for MBBS in 2025?
                    </h2>
                    <ul className="list-disc list-inside space-y-4 text-justify text-md lg:text-lg text-gray-700">
                        <li><strong>No Donation:</strong> No hefty donation or capitation fee is required to secure admission to USMA. Admission is truly based on merit and the previous percentage and grades in your 10+2. For Indian students, NEET eligibility is mandatory. An entrance exam is required for all international students.</li>
                        <li><strong>Low-Cost MBBS:</strong> If you are in search of a top medical institution in Russia at an affordable price, USMA provides an ideal platform. Unlike in India, the quality of education is much higher at Ural State Medical University while the cost is comparatively cheaper.</li>
                        <li><strong>Quality Education:</strong> The level of medical education is on par with some of the high-ranked universities in the world. Moreover, the syllabus at USMU, Russia, emphasizes practical knowledge and hands-on experience in real-life situations.</li>
                        <li><strong>English Medium:</strong> This is the reason why Indian students flock in high numbers to get an MBBS degree from Ural State Medical University in Russia.</li>
                        <li><strong>Global Opportunity:</strong> The MBBS Degree obtained from USMU is globally recognized. Government hospitals provide practical training to medical students in Russia. Students may also apply to several countries for continuous education and can work worldwide as well.</li>
                        <li><strong>Hostel of USMU:</strong> Hostels are available on campus and nearby. Hostels in USMU are fully furnished and well-equipped with all essential modern-day facilities.</li>
                        <li><strong>Faculty & Staff:</strong> The university is blessed with highly qualified faculty and staff to nurture and train students at a global level. Departments, teachers, and staff all work in harmony to ensure proper education, safety, and facilities for the students without any bias.</li>
                    </ul>

                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8 mb-2">
                        Some Quick Facts about Ural State Medical University
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

                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 mb-4 text-justify">
                        Top Features of Ural State Medical Universities
                    </h2>
                    <ul className="list-disc pl-5 text-justify space-y-2">
                        <li>Athateaching faculties have global experience in teaching medical students</li>
                        <li>A modern and updated library with all kinds of medical books, journals, and WHO publications in medicine and healthcare.</li>
                        <li>The infrastructure facilities, research labs and pedagogical methodology are of the highest pedigree.</li>
                        <li>The cost of living is also affordable for foreign students.</li>
                        <li>The medical education system and teaching methodology are equivalent to global standards.</li>
                        <li>The university follows an international standard curriculum s students to practice worldwide after the successful completion of the MBBS program.</li>
                    </ul>

                    <div className="space-y-4 mt-8">
                        <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 text-justify">
                            Accreditation and Recognition
                        </h2>
                        <ul className="list-disc pl-5 text-justify space-y-2">
                            <li>Ministry of Health & Education of the Russian Federation</li>
                            <li>World Health Organization (WHO)</li>
                            <li>National Medical Commission of India (NMC)</li>
                        </ul>

                        {/* Complete Admission Process */}
                        <div className="bg-gray-100 ">
                            <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 text-justify">
                                Faculties of Ural State Medical University
                            </h2>
                            <ul className="list-disc text-justify mt-4 pl-5 space-y-2">
                                <li>General Medicine (MBBS)</li>
                                <li>Dentistry</li>
                                <li>Pediatrics</li>
                                <li>Medical and Preventive</li>
                                <li>Pharmacy</li>
                                <li>Nursing</li>
                                <li>Social Work</li>
                                <li>Clinical Psychology</li>
                            </ul>
                        </div>

                        {/* Document Required */}
                        <div className="bg-gray-100 ">
                            <h2 className="text-md text-red-600 mb-4 lg:text-xl font-semibold mt-8 text-justify">
                                Duration and Medium of Teaching
                            </h2>
                            <p className="text-justify">
                                The duration of MBBS at Ural State Medical University is 6 years for English medium students. It involves 5 years of classroom learning plus 1 year of mandatory internship.
                            </p>
                            <p className="text-justify mt-2">
                                The medium of instruction is English & Russian at Ural State Medical University. Indian students can choose English as their medium of teaching.
                            </p>

                            <h2 className="text-red-700 text-justify mt-4 text-xl font-bold text-center mb-4">
                                Top Features of Ural State Medical University
                            </h2>

                            <ul className="list-disc text-justify list-inside text-gray-700 space-y-2">
                                <li>Teaching faculties have global experience in teaching medical students.</li>
                                <li>A modern and updated library with all kinds of medical books, journals, and WHO publications in medicine and healthcare.</li>
                                <li>The infrastructure facilities, research labs, and pedagogical methodology are of the highest pedigree.</li>
                                <li>The cost of living is also affordable for foreign students.</li>
                                <li>The medical education system and teaching methodology are equivalent to global standards.</li>
                                <li>The university follows an international standard curriculum allowing students to practice worldwide after the successful completion of the MBBS program.</li>
                            </ul>

                            <h3 className="text-red-600 text-xl text-justify font-semibold mt-6 mb-3">Accreditation and Recognition</h3>
                            <ul className="list-disc list-inside text-justify text-gray-700 space-y-2">
                                <li>Ministry of Health & Education of the Russian Federation</li>
                                <li>World Health Organization (WHO)</li>
                                <li>National Medical Commission of India (NMC)</li>
                            </ul>

                            <h3 className="text-red-600 text-xl text-justify font-semibold mt-6 mb-3">Faculties of Ural State Medical University</h3>
                            <ul className="list-disc list-inside text-justify text-gray-700 space-y-2">
                                <li>General Medicine (MBBS)</li>
                                <li>Dentistry</li>
                                <li>Pediatrics</li>
                                <li>Medical and Preventive</li>
                                <li>Pharmacy</li>
                                <li>Nursing</li>
                                <li>Social Work</li>
                                <li>Clinical Psychology</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        Fee Structure for MBBS in Ural State Medical University
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
                                    { label: "Tuition Fee", firstYear: "260,000 RUB", secondYear: "260,000 RUB", total: "29000 USD Total" },
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

                </div>
                <div className="text-gray-700 space-y-6">
                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-0 text-justify">
                        Eligibility Criteria for Admission 2024-25
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>The candidate must be 17 years of age on or before 31st Dec of the year of admission.</li>
                        <li>The candidate must have passed class 10th and 12th from a recognized board in India.</li>
                        <li>The candidate must have cleared the NEET examination.</li>
                        <li>The candidate must secure 50% aggregate marks in Physics, Chemistry & Biology (PCB).</li>
                    </ul>

                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 text-justify">
                        Document Required
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Valid passport with a minimum validity of 3 years at the time of application.</li>
                        <li>Scanned copy of 10th & 12th marksheets.</li>
                        <li>Migration certificate.</li>
                        <li>Scanned copy of your Adhaar Card and PAN Card.</li>
                        <li>Official admission and invitation letter issued by the university.</li>
                        <li>All documents must be notarized by the Ministry of External Affairs, New Delhi.</li>
                        <li>Bank receipt of 1st year Ural State Medical University tuition fees.</li>
                        <li>NEET Scorecard.</li>
                        <li>HIV test documents.</li>
                        <li>20 passport size photos.</li>
                        <li>Medical fitness certificate.</li>
                    </ul>

                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 text-justify">
                        Admission Procedure
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Apply for admission through the online application form.</li>
                        <li>Fill up all the mandatory information carefully and submit it.</li>
                        <li>The university will review the form and revert within 5-7 days.</li>
                        <li>The confirmation letter is sent by the university after selection.</li>
                        <li>Now submit all the admission-related documents.</li>
                        <li>Pay university first-year MBBS fees and get the receipt.</li>
                        <li>Once payment is submitted, you can apply for the Visa.</li>
                        <li>After Visa approval, you are all set to fly to Russia.</li>
                    </ul>

                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 text-justify">
                        Hostel and Indian Food Facility at Ural State Medical University
                    </h2>
                    <p>
                        The rooms are available on a sharing basis. Candidates are supposed to share a room with 2-3 students.
                        The hostel provided to international students may differ in size and facility. All rooms are well-furnished, comfortable, and well-heated.
                        Basic amenities such as a heater and Wi-Fi are available. Round-the-clock internet access is there for the students.
                        The hostel buildings are well-equipped with safety and security measures.
                        Students can cook Indian food in kitchens or can have it in cafés and restaurants available in the city.
                    </p>

                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 text-justify">
                        Education Loan to Study MBBS Abroad
                    </h2>
                    <p>
                        The RREC team provides full support to students looking for an education loan from private or public banks to study MBBS abroad.
                        Our unconditional assistance helps students submit the right set of documents that will make them eligible for an education loan and avoid rejection.
                    </p>

                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 text-justify">
                        About the City – Yekaterinburg
                    </h2>
                    <p>
                        Yekaterinburg, also known as Ekaterinburg, stands as Russia's fourth most populous city.
                        It is situated along the Iset River, a tributary of the Tobol River, and slightly east of the boundary between Europe and Asia,
                        nestled on the eastern slope of the Ural Mountains.
                        It serves as the administrative hub of both Sverdlovsk Oblast and the Ural Federal District,
                        boasting a significant position as a major logistics and transport hub, as well as a pivotal industrial center.
                    </p>
                    <p>
                        According to the census of 2018, the city has a population of approximately 1,483,000, spanning an area of 468 sq. km.
                        Yekaterinburg is considered a key player in Russia's industrial landscape, particularly renowned for heavy engineering.
                    </p>
                    <p>
                        The city’s environment is peaceful and people are friendly. There are numerous hypermarkets in Krasnodar.
                        An active lifestyle and all the modern amenities in the city make living in Krasnodar happy and easy.
                    </p>

                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 text-justify">
                        RREC – A Legitimate Gateway to MBBS Admission in Ural State Medical University
                    </h2>
                    <p>
                        Reliable Russian Education Consultants (RREC) has been operating in this field for over 17 years,
                        demonstrating a proven history of successfully securing admissions to various prestigious medical universities in Russia.
                        We function as a trustworthy and officially authorized intermediary for admission to more than 20 medical universities in the Russian Federation recognized by the National Medical Commission (NMC).
                    </p>
                    <p>
                        We are the authorized representative and admission partner for Ural State Medical University in India for Indians & International students.
                        RREC is fully committed to providing unwavering support throughout the MBBS course.
                        Our guided services and methodical approach have aided numerous medical aspirants in gaining admission to top-tier medical universities in Russia.
                    </p>
                    <p>
                        Reach out to us for an in-depth counseling session, free of charge, tailored for both parents and students,
                        addressing all inquiries and concerns regarding MBBS admissions to NMC-approved Russian Universities.
                    </p>

                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 text-justify">
                        Roles and Responsibilities Performed by RREC
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Being the only official and authorized representative for MBBS admission in more than 20 NMC-approved medical universities in Russia, we owe the responsibility to nurture the dreams of medical aspirants in India.</li>
                        <li>RREC ensures Indian students seeking admission to MBBS in Russia are provided admission in NMC-recognized and WHO-approved medical universities only.</li>
                        <li>Through counseling, our advisors and experts for medical education abroad provide complete information and guidance to parents and students regarding MBBS admission in Russia.</li>
                        <li>We apply for admission to Ural State Medical University on your behalf and make sure you make the merit list.</li>
                        <li>The team of RREC will assist you with documentation and visa application as well as Embassy stamping and Ministry approval.</li>
                        <li>We arrange your travel essentials and ticket to Russia, including travel insurance.</li>
                    </ul>

                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 text-justify">
                        Why RREC is the Best Choice for MBBS Abroad
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Provide a one-stop solution to study MBBS in Russia.</li>
                        <li>Transparent policy and approach.</li>
                        <li>Comprehensive admission guidance and support.</li>
                        <li>Admission as per international norms and standards.</li>
                        <li>Minimum service cost.</li>
                        <li>No hidden charges.</li>
                        <li>Zero rejection of Visa approval.</li>
                        <li>Team of renowned and top education advisors and experts.</li>
                        <li>Free consultation for parents/students.</li>
                        <li>Complete support until MBBS is completed.</li>
                        <li>100% dedicated and committed services.</li>
                        <li>100% admission placement ratio so far.</li>
                    </ul>
                </div>

                <div className="text-gray-700 space-y-6">
                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 text-justify">
                        Frequently Asked Questions (FAQs)
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">1. Is USMU affiliated with any international organizations?</h3>
                            <p className="text-gray-700">Yes, the university is duly affiliated with organizations such as the Ministry of Health of the Russian Federation, WHO, and NMC of India.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">2. What is the language of instruction at USMU?</h3>
                            <p className="text-gray-700">General Medicine & Dentistry at USMU are taught in English, making it accessible for international students.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">3. Are there separate hostels for male and female students?</h3>
                            <p className="text-gray-700">There is a common government hostel for students, ensuring comfortable accommodation for all.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">4. What are the key features of USMU's curriculum?</h3>
                            <p className="text-gray-700">USMU follows an international standard curriculum, emphasizing practical knowledge and hands-on experience, preparing students for global medical practice.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">5. Are there opportunities for research collaboration at USMU?</h3>
                            <p className="text-gray-700">Yes, USMU collaborates with prestigious institutions nationally and internationally, providing ample research opportunities for students.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">6. How is the living standard in Yekaterinburg?</h3>
                            <p className="text-gray-700">Yekaterinburg offers a high living standard with modern amenities, well-developed infrastructure, and a diverse cultural scene.</p>
                        </div>
                    </div>
                </div>



                {/* Heading */}
                <div className="bg-red-700 mt-10 mb-6 font-roboto rounded-xl px-8 py-10 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                    <h2 className="text-2xl font-semibold text-white text-center mt-6">
                        Call for more details about the university, admission, processing, fees at MBBS in USMU:
                    </h2>

                    {/* Phone Numbers */}
                    <div className="mt-4 space-y-2 text-center">
                        <a href="tel:+917042284508" className="text-white hover:text-blue-600 block">
                            📞 +91-7042284508, 7042284509
                        </a>
                        <a href="tel:18005725872" className="text-white hover:text-blue-600 block">
                            📞 Toll-free 1800-572-5827 (For Indian Students)
                        </a>
                        <a href="tel:+79515371133" className="text-white hover:text-blue-600 block">
                            📞 +7-9515371133 (International Students)
                        </a>
                    </div>

                    {/* WhatsApp Numbers */}
                    <div className="mt-4 space-y-2 text-center">
                        <a href="https://wa.me/917042284508" className="text-white hover:text-blue-600 block">
                            💬 WhatsApp: +91-7042284508
                        </a>
                        <a href="https://wa.me/79515371133" className="text-white hover:text-blue-600 block">
                            💬 WhatsApp: +7-9515371133
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Ural;