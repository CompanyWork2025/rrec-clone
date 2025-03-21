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
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Ural State Medical University (USMU) stands as a leading institution for medical education in Russia. Established back in 1930, it has remained at the forefront of medical education in the country. The university offers top-tier medical education at a reasonable cost, backed by government support. Accredited by the World Health Organization (WHO) and endorsed by the Medical Council of India (MCI), USMU emerges as a prime destination for Indian students aspiring for medical education. Additionally, the university provides Indian Mess facilities, making it a comfortable choice for Indian students. With the majority of courses delivered in English, USMU ensures a seamless learning experience for international students, laying a strong foundation for their future careers.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">USMU hosts a diverse student body of over 7,000 individuals, spanning undergraduates, interns, residents, graduate students, and trainees. Across its 58 departments and 8 faculties, the university offers a structured academic environment conducive to holistic learning and development.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The university boasts collaborations with 40 clinical bases located in prominent medical institutions and research facilities, including its state-of-the-art dental clinic. Equipped with modern amenities and cutting-edge equipment, these partnerships guarantee high-quality medical care and support. </p>
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

                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 text-center">
                        Top Features of Ural State Medical Universities
                    </h2>
                    <div className="mt-4 space-y-3 w-full">
                        {[
                            { step: "•", text: `Experienced global teaching faculty` },
                            { step: "•", text: `Modern library facilities` },
                            { step: "•", text: `High-quality infrastructure and research labs` },
                            { step: "•", text: `Affordable cost of living for foreign students` },
                            { step: "•", text: `International standard curriculum` },
                            { step: "•", text: `High FMGE/NEXT passing percentage ` },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-2 w-full">
                                <span className="text-red-600 font-semibold text-lg flex-shrink-0">{item.step}</span>
                                <p className="text-gray-700 text-left flex-1">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-10 mt-8">
                        {/* Eligibility Criteria for Admission */}
                        <div className="bg-gray-100 ">
                            <h3 className="text-xl font-semibold text-red-600 mb-4">Eligibility Criteria for Admission</h3>
                            <ul className="list-disc text-justify list-inside text-gray-700 space-y-2">
                                <li>The candidate must be 17 years of age on or before 31st Dec of the year of admission.</li>
                                <li>The candidate must have passed class 10th and 12th from a recognized board in India.</li>
                                <li>The candidate must have cleared the NEET examination.</li>
                                <li>The candidate must secure 50% aggregate marks in Physics, Chemistry & Biology (PCB) with English.</li>
                            </ul>
                        </div>

                        {/* Complete Admission Process */}
                        <div className="bg-gray-100 ">
                            <h3 className="text-xl font-semibold text-red-600 mb-4">Complete Admission Process</h3>
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
                            <h3 className="text-xl font-semibold text-red-600 mb-4">Documents Required</h3>
                            <ul className="list-disc text-justify list-inside text-gray-700 space-y-2">
                                <li>Copy of 10th & 12th mark sheets</li>
                                <li>Notarized birth certificate</li>
                                <li>Migration certificate</li>
                                <li>Official invitation letter issued by the university</li>
                                <li>All documents must be notarized by the Ministry of External Affairs, New Delhi</li>
                                <li>Bank receipt of 1st year Ural State Medical University tuition fees</li>
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
                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">
                    RREC – An Authorized Pathway to MBBS Admission in Russia
                </h2>

                <p className="text-gray-700 mt-4 text-justify">
                    RREC has been working in this field for more than 18 years. We are robustly backed with a proven history of successful admissions to various top-notch medical universities in Russia. We function as a reliable and officially authorized intermediary for admission to more than 22+ medical universities in the Russian Federation recognized by the National Medical Commission (NMC). RREC is fully committed to providing seamless support throughout the MBBS journey in Russia. Our guided services and methodical approach have aided thousands of medical aspirants in India in securing admission to top-tier medical universities in Russia.
                </p>

                <p className="text-gray-700 mt-4 text-justify">
                    Reach out to us for an in-depth counseling session, free of charge, tailored for both parents and students. We entertain all inquiries and concerns regarding MBBS admissions to NMC-approved Russian Universities.
                </p>


                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">
                    About the City
                </h2>

                <p className="text-gray-700 mt-4 text-justify">
                    Yekaterinburg, the administrative center of Sverdlovsk Oblast and the Ural Federal District, stands as the largest city in Russia's Volga-Ural region. Situated on the banks of the Iset River, it boasts a population of approximately 1.5 million residents, with up to 2.2 million in its urban agglomeration. Renowned as the fourth-largest city in Russia, Yekaterinburg holds prominence as a cultural and industrial hub, earning it the moniker "Third capital of Russia" due to its significant economy, cultural influence, transportation networks, and tourism. Serving as a vital transportation nexus, Yekaterinburg features an international airport, well-developed road systems, and extensive rail connections, including the Trans-Siberian Railway, which links Moscow to the Russian Far East.
                </p>

                <p className="text-gray-700 mt-4 text-justify">
                    Yekaterinburg experiences a continental climate with cold winters and warm summers. Average temperatures range from -15°C in winter to 20°C in summer. The city offers a high living standard with modern amenities, well-developed infrastructure, and a diverse cultural scene, making it a desirable place to reside.
                </p>



                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-6">
                    Call for more details about the university, admission, processing, fees at MBBS in USMU:
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
                    Call for more details about the university admission, processing, fees at MBBS in USMU, Russia
                </h2>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    Contact Us: +91-7042284508, 7042284509
                </h3>
                <h6 className="mb-4">Toll-free 1800-419-5827 (For Indian Students), +7-9515371133 (International Students)</h6>
                <h6>Students or parents can write to us at WhatsApp also: +91-7042284508</h6>
            </div>
        </>
    )
}
export default Ural;