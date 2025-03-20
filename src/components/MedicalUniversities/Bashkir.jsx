import React from "react";
import { Helmet } from "react-helmet";

const Bashkir = () => {

    const universityData = [
        { label: "Name of the University", value: "Bashkir State Medical University" },
        { label: "Location", value: "Ufa, Russia" },
        { label: "Institute Type", value: "Public" },
        { label: "Year of Establishment", value: "1932" },
        { label: "Intake for MBBS", value: "September" },
        { label: "Hostel Facility", value: "Yes" },
        { label: "Medium of Instruction", value: "English" },
        { label: "IELTS/TOFEL", value: "Not Required" },
        { label: "University Recognition", value: "WHO, NMC, etc" },
        { label: "Category", value: "Medical Colleges in Russia" },
        { label: "Contact Official Representative", value: <a href="https://www.rrecrussia.com/" className="text-blue-600 hover:underline">RREC, website:- www.rrecrussia.com</a> },
    ];


    return (
        <>
            <Helmet>
                <title>Bashkir State Medical University | Fee structure | Admission Procedure</title>
                <meta
                    name="description"
                    content="Fee structure - hostel - benefits - Admission Procedure - Eligibility Criteria - Documents required - duration of MBBS - faculties - Benefits - Historical Overview - affiliation - advantages - Direct Admission"
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://globaladmissionsv2.s3.amazonaws.com/media/school_logos/bashkir-state-medical-university.png"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-24 lg:h-24"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Bashkir State Medical University
                    </h1>

                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Bashkir State Medical University (BSMU) is a distinguished institution that provides exceptional medical education to international students. It is located in Ufa city, Russia. Renowned for its outstanding faculty and high academic standards, BSMU has been a leading name in medical education since its establishment in 1932. The university offers affordable tuition fees compared to the extensive facilities and services provided to students.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">BSMU operates under the authorization of the Russian Federation's Ministry of Education, ensuring a comprehensive curriculum that equips students with both theoretical knowledge and practical skills. Known for its state-of-the-art facilities, the university offers world-class resources readily accessible to all students. It is approved and recognized by the NMC (National Medical Commission) and WHO.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The university boasts an impressive academic structure, offering 56 scientific majors for postgraduate studies and 8 doctoral programs. Supported by a diverse faculty of 615 highly qualified professionals, BSMU currently caters to the educational needs of over 10,000 medical students including 2000 international students across various disciplines with the help of over 700 full-time faculty.</p>
                    </div>

                    <h2 className="text-sm text-red-600 lg:text-lg mt-4">
                        Why Choose RREC for MBBS in Russia?
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">At RREC, we pride ourselves on being one of India’s leading and most trusted education consultants. Backed by an exceptional track record, we offer expertly researched guidance and personalized counseling to help you carve a successful career in medicine. With multiple centers across the subcontinent, we follow a streamlined, results-oriented approach to ensure an excellent and seamless experience for our valued clients.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Our dedicated team of professionals works tirelessly to provide you with all the necessary resources and assistance for securing admission to top global medical universities. At RREC, we treat every applicant as part of our family, supporting you every step of the way. With years of expertise, a committed team, and access to vast resources, we have successfully helped hundreds of Indian students secure admissions to premier medical universities in Russia.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 text-center">
                        Faculties at Bashkir State Medical University
                    </h2>
                    <div className="mt-4 space-y-3 w-full">
                        {[
                            { step: "•", text: `Faculty of General Medicine (MBBS)` },
                            { step: "•", text: `Faculty of Pediatric` },
                            { step: "•", text: `Faculty of Dentistry` },
                            { step: "•", text: `Faculty of Pharmaceutical` },
                            { step: "•", text: `Faculty of Preventive Medicine` },
                            { step: "•", text: `Faculty of Management and Graduate Nurses` },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-2 w-full">
                                <span className="text-red-600 font-semibold text-lg flex-shrink-0">{item.step}</span>
                                <p className="text-gray-700 text-left flex-1">{item.text}</p>
                            </div>
                        ))}
                    </div>
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
                    <h2 className="text-2xl text-red-600 mb-4 mt-8 text-center">
                        Why Study MBBS at Bashkir State Medical University
                    </h2>
                    <ul className="list-disc list-inside space-y-4 text-justify text-md lg:text-lg text-gray-700">
                        <li><strong>Advanced Learning Techniques:</strong> BSMU incorporates cutting-edge technology and modern practices, enabling students to grasp concepts faster and more effectively.</li>
                        <li><strong>English-medium Instruction:</strong> The university conducts classes primarily in English, eliminating language barriers for international students.</li>
                        <li><strong>Globally Recognized Degree:</strong> An MBBS degree from BSMU is acknowledged worldwide, offering graduates extensive career opportunities.</li>
                        <li><strong>Affordable Education:</strong> Students benefit from low tuition fees and economical on-campus accommodation, making it a cost-effective choice for Indian students seeking quality medical education.</li>
                        <li><strong>Supportive Learning Environment:</strong> The university fosters a student-friendly atmosphere that promotes both academic and personal growth.</li>
                        <li><strong>State-of-the-Art Campus:</strong> BSMU facilitates a spacious campus equipped with essential facilities such as clean water, well-maintained restrooms, and well-ventilated classrooms.</li>
                        <li><strong>Balanced Education:</strong> The curriculum emphasizes both theoretical knowledge and practical skills, ensuring students are thoroughly prepared for real-world medical challenges.</li>
                        <li><strong>Cultural Enrichment:</strong> Students can participate in cultural activities that celebrate diversity and foster appreciation for various traditions.</li>
                        <li><strong>Comprehensive Library:</strong> The university's library houses approximately 50,000 volumes, curated and verified by subject matter experts.</li>
                        <li><strong>Expert Faculty:</strong> BSMU is home to 615 highly qualified professors specializing in various fields of medicine.</li>
                        <li><strong>Practical Experience:</strong> The university includes an on-site hospital and clinic, providing students with hands-on training and real-world exposure.</li>
                    </ul>
                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        MBBS Fees in Bashkir State Medical University
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
                                    { label: "Tuition Fee", firstYear: "495,000 RUB", secondYear: "495,000 RUB", },
                                    { label: "Hostel Fee", firstYear: "Excluded", secondYear: "Excluded", },
                                    { label: "Visa Extension & Registration Fee", firstYear: "Excluded", secondYear: "Excluded", },
                                    { label: "Medical Insurance", firstYear: "Excluded", secondYear: "Excluded", },

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
                        Hostel, Food and lifestyle at BMSU
                    </h2>


                    {/* Steps List */}
                    <div className="mt-4 space-y-3 w-full">
                        {[
                            { step: "*", text: `The university provides a total of five well-maintained hostels for its students, each offering a comfortable and secure living environment.  ` },
                            { step: "*", text: `Every hostel room is fully furnished and thoughtfully equipped with essential amenities, including proper bedding.  ` },
                            { step: "*", text: `For recreation and holistic development, the university boasts a dedicated department for extracurricular activities. Students can engage in sports like basketball, soccer, volleyball, chess, powerlifting, and mountain climbing.    ` },
                            { step: "*", text: `Additionally, the university organizes summer sports camps, providing students with opportunities to enhance their athletic skills and bond with peers.  ` },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-2 w-full">
                                <span className="text-red-600 font-semibold text-lg flex-shrink-0">{item.step}</span>
                                <p className="text-gray-700 text-left flex-1">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">
                    Eligibility Criteria for Admission
                </h2>

                <div className="mt-4 space-y-3 px-4 lg:px-8 w-full">
                    {[
                        { step: "*", text: `The candidate must be 17 years of age on or before 31st Dec of the year of admission.  ` },
                        { step: "*", text: `The candidate must have passed class 10th and 12th from a recognized board in India.  ` },
                        { step: "*", text: `The candidate must have cleared the NEET examination  ` },
                        { step: "*", text: `The candidate must secure 50% aggregate marks in Physics, Chemistry & Biology (PCB) with English.  ` },
                    ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-2 w-full">
                            <span className="text-red-600 font-semibold text-lg flex-shrink-0">{item.step}</span>
                            <p className="text-gray-700 text-left flex-1">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-8 mb-4">
                    Admission Procedure
                </h2>

                <div className="mt-4 space-y-3 px-4 lg:px-8 w-full">
                    {[
                        { step: "*", text: `Apply for admission through the online application form.   ` },
                        { step: "*", text: `Fill all the mandatory information carefully and submit it. ` },
                        { step: "*", text: `Fill all the mandatory information carefully and submit it.` },
                        { step: "*", text: `If selected, the confirmation letter will be sent to you ` },
                        { step: "*", text: `Now submit all the admission-related documents. ` },
                        { step: "*", text: `Pay university first-year MBBS fees and get the receipt. ` },
                        { step: "*", text: `Once payment is submitted you can apply for the Visa. ` },
                        { step: "*", text: `After Visa approval, your departure will be arranged by the RREC team. ` },
                    ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-2 w-full">
                            <span className="text-red-600 font-semibold text-lg flex-shrink-0">{item.step}</span>
                            <p className="text-gray-700 text-left flex-1">{item.text}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl text-red-600 font-semibold mb-4 mt-8 text-center">
                    Advantages of Consulting RREC
                </h2>
                <ul className="list-disc list-inside space-y-4 text-justify text-md lg:text-lg text-gray-700">
                    <li><strong>Comprehensive Guidance:</strong> Your one-stop solution for all study MBBS in Russia.</li>
                    <li><strong>Round-the-Clock Support:</strong> 24/7 assistance to address all your queries.</li>
                    <li><strong>Transparent Practices:</strong> We ensure clarity at every step of the process.</li>
                    <li><strong>Expert Team:</strong> Experienced and skilled counselors dedicated to your success.</li>
                    <li><strong>Affordable Services:</strong> Competitive consultation and processing fees.</li>
                    <li><strong>Proven Success:</strong> A strong history of successful MBBS admission in Russia.</li>
                    <li><strong>Reputation and Reliability:</strong> Trusted consultancy with years of experience in overseas education.</li>
                    <li><strong>Official Partnerships:</strong> Authorized representatives for top universities in Russia.</li>
                    <li><strong>Friendly Approach:</strong> A supportive and approachable team to guide you throughout.</li>
                    <li><strong>Highly Recommended:</strong> Trusted by thousands of students now pursuing their dream education abroad.</li>
                    <li><strong>Expert Assistance:</strong> A highly trained team committed to helping you achieve your goals.</li>
                    <li><strong>Quality Assurance:</strong> Adherence to international standards with top-notch services.</li>
                    <li><strong>Extensive Details:</strong> Complete guidance on MBBS admissions, including fee structures for top medical universities in Russia.</li>
                </ul>


                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-6">
                    Call for more details about the university, admission, processing, fees at MBBS in BSMU:
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
                    Call for more details about the university admission, processing, fees at MBBS in BSMU, Russia
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
export default Bashkir;