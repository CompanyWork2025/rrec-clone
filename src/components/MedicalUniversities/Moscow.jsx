import React from "react";
import { Helmet } from "react-helmet";

const Moscow = () => {


    return (
        <>
            <Helmet>
                <title>Moscow Pedagogical State University</title>
                <meta
                    name="description"
                    content="Explore admission procedures, eligibility criteria, required documents, advantages, university overview, key highlights, reasons to choose Moscow Pedagogical State University, fee structure, global ranking, academic semesters, healthcare facilities, hostel amenities, and available scholarships."
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_Yb2edD7UFGesfD9C5z6S0smz8nOK6GHVg&s"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Moscow Pedagogical State University
                    </h1>

                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Moscow Pedagogical State University (MPGU) is a leading institution in Russian pedagogy. It is widely renowned for its commitment to teacher training and academic research. It is also one of the oldest universities in Russia, established in 1872, dedicated to educators. MPGU upholds traditional values while embracing innovative approaches to pedagogical education. The university is regarded as a benchmark for educational excellence. It has also set the standard that other pedagogical universities across the country aspire to match. Over the years, thousands of Russian and international students have graduated from MPGU, emerging as accomplished specialists in various scientific and educational domains. The university provides a friendly and accessible educational environment for each student. </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The university provides extensive opportunities for students at undergraduate, graduate, and postgraduate levels tailored to their individual interests and overall development. Key focuses include:
                            •	Cultivating highly skilled and well-rounded individuals.
                            •	Offering forward-thinking training and professional development for specialists, incorporating modern advancements in psychology and education.
                            •	Facilitating faculty research in both fundamental and applied sciences.
                        </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">With a rich heritage spanning 150 years, the university excels in training highly skilled educators and specialists across various educational domains. Incorporating 14 institutes, 2 faculties, 103 departments, and a student body of more than 24,000, including over 3100 full-time international students from 54 nations, the institution is renowned for its experienced and dynamic faculty. Comprising 349 Professors, 331 Doctors, 902 Assistant Professors, 1700 teachers and 879 Masters of Science, along with 17 esteemed members of the Russian Academy of Education and the Russian Academy of Sciences.  </p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Our History
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Established on November 1, 1872 by Russian historian V. Guerrier, the "Women's Courses of Higher Education" marked the inaugural educational institution in Russia dedicated to women, authorized by Emperor Alexander II. Previously, women seeking higher education were obliged to study abroad. </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The Pedagogical Department was established in 1921 and 1930 Second MSU became the first Pedagogical institute in the Soviet Union. In 1934, the Moscow State Pedagogical Institute consisted of 7 departments – Pedagogical, History, Language & Literature, Physics & Mathematics, Natural Studies, Geography, and Defectology.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">In 1990, MSPI underwent a transformation, becoming MPGU — Moscow Pedagogical State University. Presently, it comprises 14 Institutes, 3 Faculties, 59 Research Schools, 1 Secondary School, and 10 Research Centers. The university boasts a distinguished faculty, including 4 academicians, 10 members of the Russian Academy of Education, 4 members of the Russian Academy of Science, and 13 honorary professors. A pioneer in higher education, MPGU was among the first institutions in Russia to implement bachelor and master programs following the Bologna declaration standards. Since 2007, the university has received government support and funding to develop innovative educational programs as part of the esteemed National Project "Education".</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Currently, MPGU is actively engaged in training future specialists for the digital economy, particularly in the realm of digital education. Combining Russian traditions with global and national values, the university emphasizes the personal and cultural aspects of innovation in this field.</p>
                </div>


                {/* Middle Section */}
                <div className="text-center">

                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Student Life at MPGU
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">At MPGU, student life thrives with vibrant events, providing a platform for individuals to showcase their talents and creativity. The Student Council of the university actively welcomes enthusiastic students across diverse domains, including media, event management, tutoring, ecology, and sports. Together, they organize a multitude of events, contribute to environmental initiatives, facilitate scientific conferences, and embrace their larger community within MPGU's student body.</p>


                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        Moscow Pedagogical State University
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


                <div className="mx-auto bg-white mt-8 rounded-lg">
                    {/* Hostel Facility Section */}
                    <div className="mb-6">
                        <h2 className="text-lg font-bold mb-2">Hostel Facility</h2>
                        <p>Hostel facility is available for foreign students at Moscow Pedagogical State University in Russia. The university campus offers a safe and convenient living environment for students.</p>
                        <ul className="list-disc pl-5 mt-2">
                            <li><strong>Room:</strong> Apartment-style layout accommodating 2-3 individuals per room on a sharing basis. Separate provisions for girls and boys.</li>
                            <li><strong>Facilities:</strong> Includes a bathroom, kitchen with central heating, housekeeping services, and hot water. Also, refrigerators, furnishings, and bedding are provided.</li>
                            <li><strong>Food:</strong> Canteens with Indian cuisine serving a variety of meals at different hours.</li>
                        </ul>
                    </div>

                    {/* Scholarship Program Section */}
                    <div className="mb-6">
                        <h2 className="text-lg font-bold mb-2">Scholarship Program</h2>
                        <p>Moscow Pedagogical State University provides financial support and scholarships to students through various programs, both internally and externally funded. Exceptional students receive scholarships ranging from full tuition coverage to partial funding for their entire studies.</p>
                    </div>

                    {/* Student Life Section */}
                    <div className="mb-6">
                        <h2 className="text-lg font-bold mb-2">Student Life at MPGU</h2>
                        <p>Student life at MPGU thrives with vibrant events, providing a platform for individuals to showcase their talents and creativity. The Student Council actively welcomes enthusiastic students across diverse domains such as media, event management, tutoring, ecology, and sports.</p>
                        <p>They organize numerous events, contribute to environmental initiatives, facilitate scientific conferences, and foster a strong student community.</p>
                    </div>

                    {/* RREC Section */}
                    <div className="mb-6">
                        <h2 className="text-lg font-bold mb-2">RREC – A Trusted and Reliable Admission Partner</h2>
                        <p>For centuries, Russia has been a popular destination for many foreign students, including Indians. RREC has been offering reliable services in medical tourism and foreign studies in Russia for over 16 years.</p>
                        <p>As an authorized admission partner for Moscow Pedagogical State University and over 25+ universities in Russia, RREC provides an ideal platform to kickstart your bachelor's, master's, or continuous education programs at MPGU.</p>
                    </div>

                </div>


                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-8">
                    Call for more details about the university, admission, processing, and fees in  MPSU, Russia:
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
                    Call for more details about the university admission, processing, fees in MPSU, Russia
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
export default Moscow;