import React from "react";
import { Helmet } from "react-helmet";

const Pitirim = () => {

    const universityData = [
        { label: "Name of the Institute", value: "Pitirim Sorokin Syktyvkar State Medical University, Russia" },
        { label: "Year of Establishment", value: "1957" },
        { label: "Location", value: "Syktyvkar, Russia" },
        { label: "Institute Type", value: "Public" },
        { label: "Recognition", value: "NMC, WHO, etc." },
        { label: "Intake for MBBS", value: "September" },
        { label: "Hostel Facility", value: "Yes" },
        { label: "Medium of Instruction", value: "English / Russian" },
        { label: "NEET Required", value: "Yes" },
        { label: "IELTS/TOEFL", value: "Not Required" }
    ];



    return (
        <>
            <Helmet>
                <title>Pitirim Sorokin Syktyvkar State Medical University</title>
                <meta
                    name="description"
                    content="Explore admission procedures, eligibility criteria, required documents, advantages, university overview, key highlights, reasons to choose Pitirim Sorokin Syktyvkar State Medical University, fee structure, global ranking, academic semesters, healthcare facilities, hostel amenities, and available scholarships."
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://www.artlebedev.com/syktsu/syktsu-pattern-upd.png"
                        alt="university"
                        className="mx-auto w-20 h-10 lg:w-40 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Pitirim Sorokin Syktyvkar State University – A Leading Choice for MBBS in Russia
                    </h1>

                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Established in 1972, Pitirim Sorokin Syktyvkar State University (SyktSU) is a distinguished institution located in the Komi Republic and stands as the largest university in the region. Recognized for its high academic standards and commitment to innovation, the university has grown into a hub for higher education and scientific research. In 2017, SyktSU achieved flagship university status, joining an elite group of 33 universities across Russia.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">With a distinguished faculty of 286 experienced professionals, the university ensures exceptional academic training. Around 65% of its teaching staff hold Ph.D. degrees, while 12% possess a D.Sc. qualification, highlighting the university’s commitment to high-quality education. The institution currently educates over 7,400 students across a broad spectrum of bachelor’s and master’s programs, while its 38,000 alumni have excelled in diverse professional fields worldwide. </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The university offers an excellent environment for MBBS aspirants, equipped with modern infrastructure, advanced research facilities, and a strong emphasis on scientific innovation. For students unable to secure admission in Indian government medical colleges, pursuing MBBS abroad at SyktSU provides an outstanding alternative, combining affordability, world-class education, and international career prospects.</p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        About the City - Syktyvkar
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Syktyvkar, the capital of the Komi Republic in Russia, is a vibrant and well-developed city known for its rich cultural heritage, educational institutions, and modern infrastructure. Located in northwestern Russia, it serves as the administrative, economic, and cultural hub of the region.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The city offers a safe and student-friendly environment, making it an ideal destination for international students. With well-connected transport systems, healthcare facilities, and recreational centers, Syktyvkar provides a comfortable living experience. The climate in Syktyvkar is cold in winters, with temperatures dropping to -20°C, while summers are mild, averaging around 20°C. </p>
                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        Highlighting Features of Pitirim Sorokin Syktyvkar State Medical University
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
                        Pitirim Sorokin Syktyvkar State Medical University
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
                        Why Choose Pitirim Sorokin Syktyvkar State Medical University for MBBS in Russia?
                    </h2>

                    {/* Benefits List */}
                    <ul className="list-disc list-inside text-justify text-gray-700 space-y-2">
                        <li><span className="font-semibold">Globally Recognized Degree –</span> Accredited by the National Medical Commission (NMC) of India and the World Health Organization (WHO), ensuring worldwide career opportunities.</li>
                        <li><span className="font-semibold">Affordable Tuition Fees –</span> Offers a cost-effective MBBS program with lower tuition and living expenses compared to private medical colleges in India.</li>
                        <li><span className="font-semibold">English-Medium Instruction –</span> Classes are conducted in English, eliminating language barriers for international students.</li>
                        <li><span className="font-semibold">Comprehensive Practical Training –</span> Equipped with state-of-the-art laboratories, simulation centers, and clinical facilities for hands-on medical training.</li>
                        <li><span className="font-semibold">Highly Qualified Faculty –</span> Experienced professors and medical experts provide top-notch education and mentorship.</li>
                        <li><span className="font-semibold">Modern Campus & Infrastructure –</span> Advanced medical research centers, digital libraries, and well-maintained hostels ensure a comfortable study environment.</li>
                        <li><span className="font-semibold">Safe & Student-Friendly City –</span> The university is known for its safety, affordable living, and a vibrant cultural scene, making it an ideal place for international students.</li>
                        <li><span className="font-semibold">No Donation –</span> Admission is based on merit, with entrance exams required, but no additional donation fees, ensuring a transparent and hassle-free process.</li>
                        <li><span className="font-semibold">Post-Graduation Opportunities –</span> Strong academic reputation with options for further specialization and career advancement in Russia.</li>
                    </ul>
                </div>



                <div className="bg-gray-100 p-6 mt-8 rounded-lg shadow-md">
                    {/* Accommodation and Food Facility */}
                    <h2 className="text-2xl font-semibold text-red-600 text-left mb-4">
                        Accommodation and Food Facility at Pitirim Sorokin Syktyvkar State Medical University
                    </h2>
                    <p className="text-gray-700 text-justify">
                        The university provides a fully furnished, well-equipped hostel with modern amenities, including central heating, high-speed Wi-Fi, laundry services, and 24/7 security monitoring. The hostels are conveniently located near academic buildings, allowing students easy access to university facilities.
                    </p>
                    <p className="text-gray-700 text-justify mt-2">
                        For Indian students, typical Indian food is readily available at the university canteen and nearby restaurants, catering to both vegetarian and non-vegetarian preferences. Additionally, hostels are equipped with shared kitchen spaces, enabling students to cook their own meals with fresh ingredients from local grocery stores and markets.
                    </p>

                    {/* Scholarship & Loan for MBBS Aspirants */}
                    <h2 className="text-2xl font-semibold text-red-600 text-left mt-6 mb-4">
                        Scholarship & Loan for MBBS Aspirants
                    </h2>
                    <p className="text-gray-700 text-justify">
                        The university provides both merit-based and need-based scholarships to support academically exceptional students, with special grants for high achievers. At RREC, we assist students in securing education loans from Indian banks, guiding them through the application and documentation process. These financial support options help make MBBS at Krasnoyarsk State Medical University more accessible and affordable for deserving international candidates.
                    </p>

                    {/* Exclusive Benefits Offered by RREC */}
                    <h2 className="text-2xl font-semibold text-red-600 text-left mt-6 mb-4">
                        Exclusive Benefits Offered by RREC to Study MBBS in Russia
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><span className="font-semibold">Expert Counseling & University Selection –</span> Personalized guidance to help students identify the most suitable medical university based on their academic qualifications, financial situation, and career goals.</li>
                        <li><span className="font-semibold">Smooth & Transparent Admission Process –</span> End-to-end assistance with application submission, document verification, and securing university admission, ensuring a stress-free experience.</li>
                        <li><span className="font-semibold">Affordable & Value-Driven Services –</span> High-quality consultancy at reasonable charges, providing students with exceptional support without unnecessary costs.</li>
                        <li><span className="font-semibold">Comprehensive Visa Assistance –</span> Step-by-step support in document preparation, embassy appointments, and visa approvals, streamlining the process for students.</li>
                        <li><span className="font-semibold">Full Travel & Settlement Support –</span> Guidance in flight bookings, airport pickups, and hostel accommodations, ensuring students have a smooth transition upon arrival in Russia.</li>
                        <li><span className="font-semibold">Reliable & Strong Support Network –</span> A well-connected team that offers continuous communication and guidance to students and their parents throughout the study period.</li>
                        <li><span className="font-semibold">Cultural & Academic Orientation –</span> Pre-departure briefings to help students adapt to Russian culture, education systems, and lifestyle, making their transition easier.</li>
                        <li><span className="font-semibold">Post-Arrival Assistance & Local Support –</span> Dedicated on-ground assistance in Russia, helping students with university registration, local documentation, and initial settling-in process.</li>
                    </ul>
                </div>





                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-8">
                    Call for more details about the university, admission, processing, and fees at MBBS in  PSSSMU, Russia:
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
                    Call for more details about the university admission, processing, fees at MBBS in PSSSMU, Russia
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
export default Pitirim;