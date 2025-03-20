import React from "react";
import { Helmet } from "react-helmet";

const Immanuel = () => {

    const universityData = [
        { label: "Name of the Institute", value: "Immanuel Kant Baltic Federal University (Institute of Medicine)" },
        { label: "Year of Establishment", value: "2006" },
        { label: "Location", value: "Kaliningrad, Russia" },
        { label: "Institute Type", value: "Public" },
        { label: "Recognition", value: "NMC, WHO, etc." },
        { label: "Duration", value: "May-June" },
        { label: "Hostel Facility", value: "Yes" },
        { label: "Medium of Instruction", value: "English" },
        { label: "NEET Required", value: "YES" },
        { label: "Contact Official Representative", value: <a href="https://www.thedoctorsiea.in/" className="text-blue-600 hover:underline">Doctors-IEA, website:- www.thedoctorsiea.in</a> },
    ];



    return (
        <>
            <Helmet>
                <title>Immanuel Kant Baltic Federal University | Fee structure | Admission Procedure</title>
                <meta
                    name="description"
                    content="Fee structure - hostel - benefits - Admission Procedure - Eligibility Criteria - Documents required - duration of MBBS - faculties - Benefits - Historical Overview - affiliation - advantages - Direct Admission"
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZWaW5Jbcelo9MniUuyrx4TTKaCBZk3IN7w&s"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Immanuel Kant Baltic Federal University
                    </h1>
                    <h2 className="text-md text-green-600 lg:text-xl mt-4">
                        (Institute of Medicine)
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Immanuel Kant Baltic Federal University (IKBFU) is a prestigious medical institution in Kaliningrad, Russia, offering a globally recognized MBBS program. The Institute of Medicine at IKBFU is known for its modern infrastructure, advanced research facilities, and internationally approved curriculum, making it an excellent choice for Indian medical aspirants.  </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The MBBS program at IKBFU is recognized by WHO, NMC, ECFMG, and other global medical councils, allowing Indian aspirants to practice medicine in Russia. The medium of instruction is English, ensuring accessibility for international students. The university emphasizes practical training, with well-equipped laboratories and affiliated hospitals that provide real-time clinical exposure.  </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">IKBFU offers affordable tuition fees compared to Indian private medical colleges, with no donation or entrance exam required. The hostel facilities are well-maintained, with Indian food options available, ensuring a comfortable stay for students. Located in Kaliningrad, a safe and student-friendly city, the university provides an excellent learning environment with European-style infrastructure.  </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Established in 2006, nearly 2000 students study at the Institute of Medicine at the moment. With a strong focus on medical research, FMGE coaching support, and hands-on clinical experience, IKBFU is an ideal destination for Indian students seeking quality medical education in Russia at an affordable price.</p>
                    </div>
                    <h2 className="text-md text-green-600 lg:text-xl mt-8">
                        Why Study MBBS at Immanuel Kant Baltic Federal University
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        1. <strong>Easy Admission Process</strong> – The admission process is simple and direct, with no entrance exam required, making it accessible to aspiring medical students.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        2. <strong>English-Medium Instruction</strong> – The entire course is taught in English, which is considered a preferred option for Indian aspirants.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        3. <strong>No Donation or Entrance Exam</strong> – Unlike private colleges in India, admission to IKBFU is based on merit without any donation or entrance exam, making it an accessible option for aspiring doctors.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        4. <strong>Modern Infrastructure & Advanced Facilities</strong> – The university is equipped with state-of-the-art laboratories, digital classrooms, and well-furnished hostels for a comfortable learning experience.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        5. <strong>Practical & Research-Oriented Learning</strong> – Students receive hands-on clinical exposure in affiliated hospitals, enhancing their medical skills and real-world experience.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        6. <strong>FMGE/NExT Coaching Support</strong> – The university provides guidance for the Foreign Medical Graduate Examination (FMGE) and upcoming NExT exam to help Indian students qualify for medical practice in India.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        7. <strong>Affordable Tuition Fees</strong> – Compared to private medical colleges in India, IKBFU offers high-quality medical education at a much lower cost without any donation or capitation fees.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        8. <strong>Comfortable Hostel & Indian Food Availability</strong> – On-campus accommodation is well-maintained, and Indian food options are available, making it convenient for Indian students.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        9. <strong>Practical Exposure & Research Opportunities</strong> – Students gain hands-on clinical experience in affiliated hospitals, enhancing their practical skills and medical expertise.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        10. <strong>Globally Recognized Degree</strong> – The MBBS program at IKBFU is recognized by WHO, NMC, ECFMG, and other global medical councils, making graduates eligible to practice in multiple countries.
                    </p>

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
                    <h2 className="text-md text-green-600 lg:text-xl mt-8">
                        Accommodation and Food
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The university offers comfortable and well-equipped hostel facilities for international students. The hostels provide furnished rooms with heating, Wi-Fi, laundry, and round-the-clock security, ensuring a safe and convenient living environment.  </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Indian meals are readily available in university cafeterias and nearby restaurants. Additionally, shared kitchen facilities allow students to prepare their own food, with Indian groceries available locally. Both vegetarian and non-vegetarian options are easily accessible.  </p>
                    <div className="mt-8">
                        <h2 className="text-md text-left text-green-600 lg:text-xl">
                            Faculties at IBKFU
                        </h2>
                        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                            <ul className="list-disc pl-5 text-left text-md lg:text-lg font-roboto space-y-2">
                                <li><strong>Medicine</strong></li>
                                <li><strong>Dentistry</strong></li>
                                <li><strong>Surgical Disciplines</strong></li>
                                <li><strong>Pharmaceutical</strong></li>
                                <li><strong>Obstetrics and Gynecology</strong></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8">
                        {/* Eligibility Criteria Section */}
                        <div className="bg-gray-100 p-4 text-left rounded-lg">
                            <h2 className="text-md text-green-600 lg:text-xl">
                                Eligibility Criteria
                            </h2>
                            <ul className="list-disc pl-5 text-md lg:text-lg font-roboto space-y-2 mt-4">
                                <li>The candidate must be 17 years of age on or before 31st Dec of the year of admission.</li>
                                <li>The candidate must have passed class 10th and 12th from a recognized board in India.</li>
                                <li>The candidate must have cleared the NEET examination.</li>
                                <li>The candidate must secure 50% aggregate marks in Physics, Chemistry & Biology (PCB) with English.</li>
                            </ul>
                        </div>

                        {/* Documents Required Section */}
                        <div className="bg-gray-100 p-4 text-left rounded-lg mt-6">
                            <h2 className="text-md text-green-600 lg:text-xl">
                                Documents Required
                            </h2>
                            <ul className="list-disc pl-5 text-md lg:text-lg font-roboto space-y-2 mt-4">
                                <li>Copy of 10th & 12th mark sheets</li>
                                <li>Notarized birth certificate</li>
                                <li>All documents must be notarized by the Ministry of External Affairs, New Delhi</li>
                                <li>Bank receipt of 1st year tuition fees</li>
                                <li>Valid passport with a minimum validity of 2 years</li>
                                <li>NEET Scorecard</li>
                                <li>Migration certificate</li>
                                <li>Official invitation letter issued by the university</li>
                                <li>HIV test documents</li>
                                <li>12 passport size photos</li>
                                <li>Medical or health fitness certificate</li>
                            </ul>
                        </div>

                        {/* Admission Procedure Section */}
                        <div className="bg-gray-100 p-4 text-left rounded-lg mt-6">
                            <h2 className="text-md text-green-600 lg:text-xl">
                                Admission Procedure
                            </h2>
                            <ol className="list-decimal pl-5 text-md lg:text-lg font-roboto space-y-2 mt-4">
                                <li>Fill out the online application form through an authorized admission consultant.</li>
                                <li>Provide scanned copies of essential documents, including a valid passport, academic transcripts, NEET qualification proof, and recent passport-sized photographs.</li>
                                <li>The university evaluates the application and, upon approval, issues an official admission letter.</li>
                                <li>Apply for an official invitation letter from the Russian Ministry of Education after securing the admission letter.</li>
                                <li>Once the invitation letter is received, proceed with the student visa application at the Russian embassy or consulate in India.</li>
                                <li>Submit the first-year MBBS tuition fee payment to IKBFU and obtain the confirmation receipt.</li>
                                <li>After visa approval, the Doctors-IEA team assists in finalizing travel arrangements and departure formalities.</li>
                                <li>Upon arrival at IKBFU, complete necessary procedures, including document verification and medical examinations, before beginning academic sessions.</li>
                            </ol>
                        </div>

                        {/* Medium of Teaching & About the City Section */}
                        <div className="bg-gray-100 p-4 rounded-lg mt-6">
                            <h2 className="text-md text-green-600 lg:text-xl">
                                Medium of Teaching and Duration of MBBS at IKBFU
                            </h2>
                            <p className="text-md lg:text-lg font-roboto mt-4 text-justify">
                                The medium of instruction during MBBS in Russia is English. It is a big boost for Indian students, allowing them to complete their medical education without any language barrier.
                            </p>
                            <p className="text-md lg:text-lg font-roboto mt-4 text-justify">
                                The MBBS program at Immanuel Kant Baltic Federal University has a total duration of 6 years, which includes five years of academic study and one year of compulsory internship.
                            </p>


                            <h2 className="text-md text-green-600 lg:text-xl mt-6">
                                University Intake
                            </h2>
                            <p className="text-md lg:text-lg font-roboto mt-4 text-justify">
                                IKBFU has one intake per year for the MBBS program. The admission process typically begins in May-June, and classes commence by September.
                            </p>
                        </div>
                    </div>


                </div>
                <div className="text-center">
                    <h2 className="text-md text-green-600 lg:text-xl mt-8 mb-2">
                        MBBS Fees Structure in IKBFU
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
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
                <div className="bg-white p-6">
                    <div className="mt-8">
                        {/* Why Choose Doctors-IEA to Study MBBS in Russia? */}
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h2 className="text-md text-green-600 text-center lg:text-xl">
                                Why Choose Doctors-IEA to Study MBBS in Russia?
                            </h2>
                            <p className="text-md lg:text-lg font-roboto mt-4 text-justify">
                                Doctors-IEA is unarguably one of the most reliable and experienced education consultants in India. Our sole ambition is to guide aspiring medical students in India toward a successful medical career. With a proven track record, we offer expert counseling, in-depth research, and personalized support to help students secure admission to top medical universities in Russia. Our expert consultants at multiple branches across India vow a smooth and results-driven approach, converting your dream to study MBBS in Russia into a reality.
                            </p>
                            <p className="text-md lg:text-lg font-roboto mt-4 text-justify">
                                The expert consultants follow a proven approach that provides students with comprehensive guidance, from university selection to admission procedures and beyond. At Doctors-IEA, we believe in building lasting relationships, treating every student as part of our extended family, and ensuring they receive the best possible support at every step. With years of expertise, an unwavering commitment, and access to a vast network of renowned universities in Russia, we have successfully helped thousands of Indian students achieve their dream to become a doctor.
                            </p>
                        </div>

                        {/* Unparalleled Advantages of Consulting Doctors-IEA */}
                        <div className="bg-gray-100 p-4 rounded-lg mt-6">
                            <h2 className="text-md text-green-600 text-center lg:text-xl">
                                Unparalleled Advantages of Consulting Doctors-IEA
                            </h2>
                            <ul className="list-disc pl-5 text-md lg:text-lg font-roboto space-y-2 mt-4">
                                <li><strong>Expert Guidance</strong> – Personalized counseling to help students choose the best medical university in Russia based on academic background and budget.</li>
                                <li><strong>Hassle-Free Admission Process</strong> – Complete support for application submission, document verification, and university admission without complications.</li>
                                <li><strong>Visa Assistance</strong> – Step-by-step guidance for obtaining a student visa, including documentation, appointment scheduling, and embassy procedures.</li>
                                <li><strong>Direct Admission Without Donation</strong> – Transparent and merit-based admission process without any hidden charges or donation requirements.</li>
                                <li><strong>Affordable and Nominal Service Charges</strong></li>
                                <li><strong>Pre-Departure & Post-Arrival Services</strong> – Help with travel arrangements, airport pickup, hostel accommodation, and settling in Russia.</li>
                                <li><strong>Reliable and Trusted Support</strong> – Strong presence across India with dedicated teams ensuring smooth communication for students and parents.</li>
                            </ul>
                        </div>
                    </div>


                </div>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-green-600 text-center mt-6">
                    Call for more details about the university, admission, processing, fees at MBBS in IKBFU:
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

            <div className="bg-green-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Call for more details about the university admission, processing, fees at MBBS in IKBFU, Russia
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
export default Immanuel;