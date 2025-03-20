import React from "react";
import { Helmet } from "react-helmet";

const Krasno = () => {

    const universityData = [
        { label: "Name of the Institute", value: "Krasnoyarsk State Medical University, Russia" },
        { label: "Year of Establishment", value: "1942" },
        { label: "Location", value: "Krasnoyarsk, Russia" },
        { label: "Institute Type", value: "Public" },
        { label: "Recognition", value: "NMC, WHO, etc." },
        { label: "Intake for MBBS", value: "September" },
        { label: "Number of Students", value: "9000+" },
        { label: "Hostel Facility", value: "Yes" },
        { label: "Medium of Instruction", value: "English / Russian" },
        { label: "NEET Required", value: "Yes" },
        { label: "IELTS/TOEFL", value: "Not Required" }
    ];




    return (
        <>
            <Helmet>
                <title>Krasnoyarsk State Medical University – A Hub for Medical Excellence</title>
                <meta
                    name="description"
                    content="Explore admission procedures, eligibility criteria, required documents, advantages, university overview, key highlights, reasons to choose Krasnoyarsk State Medical University, fee structure, global ranking, academic semesters, healthcare facilities, hostel amenities, and available scholarships."
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://medi.education/img/logo/surgut_logo.png"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Krasnoyarsk State Medical University – A Hub for Medical Excellence
                    </h1>

                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Krasnoyarsk State Medical University, a renowned state medical institution in Russia, has been a pillar of medical education and research since its establishment in 1942. As a non-profit public university, it is recognized by India’s Medical Council (NMC), making it a popular choice among international students pursuing an MBBS degree.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The university offers accredited programs across multiple disciplines, awarding bachelor’s, master’s, and doctoral degrees. With a globally-oriented curriculum, it ensures students receive both strong theoretical foundations and extensive practical training, preparing them for the ever-evolving challenges of the medical field.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Located in Krasnoyarsk, the administrative hub of the region, the university provides students with a modern and resourceful learning environment. It offers cutting-edge laboratories, simulation centers, and clinical training facilities, allowing students to refine their medical skills in realistic, hands-on settings.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Medical institutions in Russia are known for their advanced infrastructure, expert faculty, and globally adaptable curriculum. Opting for Krasnoyarsk State Medical University means becoming part of an institution committed to excellence in medical education and research, ensuring students are well-equipped for successful careers in healthcare.</p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        About Krasnoyarsk
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Krasnoyarsk, one of Russia's largest and most significant cities, serves as the administrative center of Krasnoyarsk Krai. Situated along the Yenisei River in Siberia, the city is renowned for its stunning landscapes, rich cultural history, and economic significance.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">As a modern and student-friendly city, Krasnoyarsk offers excellent infrastructure, efficient public transport, and top-tier healthcare services, making it a comfortable destination for international students. The city experiences a continental climate, with cold winters dropping to -30°C and warm summers reaching up to 25°C. Known for its green parks, theaters, museums, and vibrant city life, Krasnoyarsk blends academic excellence with a high quality of life. </p>
                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        Quick Facts about Krasnoyarsk State Medical University
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
                        Why choose RREC for MBBS in Russia?
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Choosing RREC for your MBBS in Russia means partnering with one of India’s most trusted and experienced education consultancies. As an authorized admission partner for over 22+ NMC and WHO-recognized universities in Russia, we provide comprehensive support to help aspiring doctors achieve their dreams. With a strong success rate, we offer expert counseling, in-depth university research, and tailored assistance, ensuring a hassle-free admission process to top Russian medical universities.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">With a pan-India presence, we make the admission journey smooth and result-oriented for students across the country. Our team of highly qualified professionals follows a structured, transparent, and ethical approach, guiding students from university selection and application submission to visa processing and beyond.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">At RREC, we do more than just secure admissions—we build long-term relationships, treating every student as part of our extended family. We also assist with pre-departure guidance, accommodation arrangements, and post-arrival support, ensuring students feel confident and well-prepared for their academic journey. </p>


                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        Krasnoyarsk State Medical University
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
                <div className="bg-gray-100 p-0 mt-8">
                    {/* Heading */}
                    <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">
                        Why Choose Krasnoyarsk State Medical University for MBBS in Russia?
                    </h2>

                    {/* Benefits List */}
                    <ul className="list-disc list-inside text-justify text-gray-700 space-y-2">
                        <li><span className="font-semibold">Globally Recognized Degree –</span> The MBBS program is recognized by the NMC (India), WHO, and other global medical councils, allowing graduates to practice medicine internationally.</li>
                        <li><span className="font-semibold">No Donation or Entrance Exam –</span> Admission is based on merit, without the need for entrance exams or additional donation fees, ensuring a transparent and hassle-free admission process.</li>
                        <li><span className="font-semibold">Affordable Tuition Fees –</span> Compared to private medical colleges in India and Western countries, the university offers high-quality education at a significantly lower cost, making it budget-friendly for international students.</li>
                        <li><span className="font-semibold">English-Medium Instruction –</span> The university conducts its MBBS program entirely in English, ensuring that Indian and other foreign students can study without language barriers.</li>
                        <li><span className="font-semibold">Advanced Learning Facilities –</span> Students benefit from state-of-the-art laboratories, simulation centers, and clinical training facilities, providing hands-on experience in a controlled environment.</li>
                        <li><span className="font-semibold">Highly Qualified Faculty –</span> The university boasts a team of experienced professors, researchers, and medical experts who provide world-class education and mentorship.</li>
                        <li><span className="font-semibold">Safe & Student-Friendly Environment –</span> Located in Krasnoyarsk, a well-developed and secure city, students enjoy a peaceful and conducive atmosphere for learning and personal growth.</li>
                        <li><span className="font-semibold">Focus on Research & Innovation –</span> The university encourages students to engage in research projects and medical advancements, fostering a scientific and analytical approach to healthcare.</li>
                        <li><span className="font-semibold">Cultural Diversity & International Exposure –</span> With students from various countries, the university promotes a multicultural learning environment, helping students develop global perspectives in medicine.</li>
                    </ul>
                </div>

                <div className="bg-gray-100 p-0 mt-8">
                    {/* Hostel and Food Facility */}
                    <h2 className="text-2xl font-semibold text-red-600 text-left mb-4">
                        Hostel and Food Facility for Foreign Students
                    </h2>
                    <p className="text-gray-700 text-justify">
                        The university offers safe and comfortable accommodation to all international students by providing fully furnished and well-equipped hostels. These hostels come with amenities such as central heating, laundry services, and round-the-clock security.
                    </p>
                    <p className="text-gray-700 text-justify mt-2">
                        Hostels provide shared kitchen facilities, enabling students to prepare home-cooked meals using ingredients sourced from local markets and grocery stores.
                    </p>
                </div>

                <div className="bg-gray-100 p-0 mt-8">
                    {/* Eligibility Requirements */}
                    <h2 className="text-2xl font-semibold text-red-600 text-left mb-4">
                        Eligibility Requirements
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Applicants must be at least 17 years old by December 31 of the admission year.</li>
                        <li>Completion of both 10th and 12th grades from a recognized educational board in India is mandatory.</li>
                        <li>Qualifying the NEET exam is a prerequisite for admission.</li>
                        <li>A minimum of 50% aggregate marks in Physics, Chemistry, and Biology (PCB) with English is required.</li>
                    </ul>
                </div>

                <div className="bg-gray-100 p-0 mt-8">
                    {/* Step-by-Step Admission Procedure */}
                    <h2 className="text-2xl font-semibold text-red-600 text-left mb-4">
                        Step-by-Step Admission Procedure
                    </h2>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                        <li>Begin by filling out the online application form.</li>
                        <li>Ensure all necessary details are accurately provided before submission.</li>
                        <li>The university evaluates applications and responds within 10-12 days.</li>
                        <li>Successful candidates receive an official confirmation letter.</li>
                        <li>Submit all required documents for verification.</li>
                        <li>Pay the first-year MBBS tuition fees and obtain the payment receipt.</li>
                        <li>Apply for a student visa upon fee submission.</li>
                        <li>Once the visa is approved, prepare for departure to Russia.</li>
                    </ol>
                </div>

                <div className="bg-gray-100 p-0 mt-8">
                    {/* Necessary Documents for Admission */}
                    <h2 className="text-2xl font-semibold text-red-600 text-left mb-4">
                        Necessary Documents for Admission
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Copies of 10th & 12th-grade mark sheets.</li>
                        <li>Notarized birth certificate.</li>
                        <li>Migration certificate.</li>
                        <li>Official admission invitation letter from the university.</li>
                        <li>Documents attested by the Ministry of External Affairs, New Delhi.</li>
                        <li>Proof of first-year tuition fee payment (bank receipt).</li>
                        <li>A valid passport with at least two years of validity.</li>
                        <li>NEET qualification scorecard.</li>
                        <li>HIV test report.</li>
                        <li>12 recent passport-sized photographs.</li>
                        <li>Medical fitness certificate.</li>
                    </ul>
                </div>



                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-8">
                    Call for more details about the university, admission, processing, and fees at MBBS in  KSMU, Russia:
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
                    Call for more details about the university admission, processing, fees at MBBS in  KSMU, Russia
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
export default Krasno;