import React from "react";
import { Helmet } from "react-helmet";

const Synergy = () => {

    const universityData = [
        { label: "Name of the Institute", value: "Synergy University" },
        { label: "Year of Establishment", value: "1988" },
        { label: "Location", value: "Moscow, Russia" },
        { label: "Institute Type", value: "Private" },
        { label: "Intake for MBBS", value: "September" },
        { label: "IELTS/TOEFL", value: "Yes" },
        { label: "Medium of Instruction", value: "English / Russian" },
        { label: "NEET Required", value: "Yes (For MBBS)" },
        { label: "Courses Offered", value: "Medicine, IT, Business, Management, Economics, Linguistics, etc." },
        { label: "Minimum Percentage Required", value: "50% in PCB for MBBS" },
        { label: "Duration of MBBS", value: "6 Years (Including 1 Year Internship)" },
        { label: "University Recognition", value: "NMC, Russian Federation" },
        { label: "Hostel Facility", value: "Yes" }
    ];



    return (
        <>
            <Helmet>
                <title>Synergy University Moscow</title>
                <meta
                    name="description"
                    content="Explore admission procedures, eligibility criteria, required documents, advantages, university overview, key highlights, reasons to choose Synergy University Moscow, fee structure, global ranking, academic semesters, healthcare facilities, hostel amenities, and available scholarships."
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELCbvSnqIrm70dMqb7GNnoAV6c9g9wMujRg&s"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Synergy University Moscow
                    </h1>

                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Synergy University is one of the esteemed private universities in Russia that accepts students from all over the world. The university was established in 1988 and it is located in Moscow, the most beautiful city in Russia. It is entitled as one of the cheapest private higher institutions in Russia. The university is extensively known for its high-quality education at low cost in multiple fields including medicine (MBBS). The university facilitates a wide range of undergraduate, graduate and postgraduate programs for local and international students at various levels. It offers both part-time and full-time courses to promote a comprehensive learning environment for students. </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The medical program offered by the university leads to an MBBS degree. The faculty of medicine and Health Science is specifically designed to provide students with an extensive education in medicine. Thus, it becomes a lucrative option for those looking to obtain an MBBS degree abroad at an affordable cost.  </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The university is accredited by the Russian Ministry of Education and Science. It also holds membership in prestigious organizations such as the European Foundation for Management Development (EFMD) and the Association for Advanced Collegiate Schools of Business (AACSB). The university has also earned approval from the National Medical Commission of India (NMC) further validating its excellence in education.  </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Synergy University equally renders a diverse environment for both local and international students. More than 160000 students from different nations have studied at the university so far. It also has 500 teachers, 50 professors, and 200 doctoral candidates. It has more than 100 bachelor's and master's degree programs.</p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        About the city – Moscow
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Moscow, the capital and the largest city of Russia, is situated along the Moskva River in the western region of the country. The population of the city is more than 12 million. It has a vibrant ambiance and robust commercial reach., contributing significantly to both the economy and influence of Russia. </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Renowned for its relatively mild climate compared to other regions, Moscow stands out as a hub of industry and academia, home to prestigious institutions such as Synergy University, a leading business school in the nation. With a notably high standard of living, Moscow ranks among the world's top cities, boasting a considerable number of billionaires and a thriving international community, including a substantial English-speaking population. Moreover, social life in Moscow is one of the best in the world embezzled with an array of bars, pubs, and restaurants that serve delicious cuisine at a reasonable cost.</p>
                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        Key Highlights of Synergy University Moscow
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
                        Synergy University Moscow
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
                        Why Choose Synergy University Moscow?
                    </h2>

                    {/* Benefits List */}
                    <ul className="list-disc list-inside text-justify text-gray-700 space-y-2">
                        <li><span className="font-semibold">Top-notch Quality –</span> The university offers multi-level education to both local and international students at an affordable cost. Ranked among the top private universities in Russia, Synergy University follows a systematic teaching approach with highly qualified professors.</li>
                        <li><span className="font-semibold">MBBS in English –</span> The university provides MBBS courses in English, making it a preferred choice for international students, especially from India.</li>
                        <li><span className="font-semibold">Degree Internationally Recognized –</span> The MBBS degree from Synergy University is globally accepted, with recognition in North America, Asia, and Europe.</li>
                        <li><span className="font-semibold">Personalized Learning –</span> Small class sizes ensure individual attention, allowing students to receive personalized guidance and maximize their academic potential.</li>
                        <li><span className="font-semibold">Vibrant Student Life –</span> The university encourages extracurricular activities, including sports, cultural programs, social events, and entrepreneurial activities, ensuring a well-rounded student experience.</li>
                        <li><span className="font-semibold">Employment Assistance –</span> Synergy University supports students in securing jobs after graduation and provides assistance with work visas for those planning to stay in Russia.</li>
                        <li><span className="font-semibold">Extensive Clinical Experience –</span> The university is equipped with modern laboratories and strong clinical training programs, helping students gain hands-on experience in medical research and patient care.</li>
                    </ul>
                </div>



                <div className="bg-gray-100 p-6 mt-8">
                    {/* Accommodation & Hostel Facility */}
                    <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">
                        Accommodation & Hostel Facility
                    </h2>
                    <p className="text-gray-700 text-justify mb-4">
                        The university offers accommodation for both local and international students in hostel and residence halls. However, these accommodations are not on campus but throughout the city. Additionally, the university collaborates with various accommodation partners to provide affordable housing options to students. The university-owned private hostel features apartment-style layouts, accommodating 2-3 individuals per room on a sharing basis.
                    </p>
                    <p className="text-gray-700 text-justify mb-4">
                        Each room has modern amenities, including a bathroom and a kitchen with central heating, internet access, housekeeping services, and hot water included in the rent. Furthermore, amenities such as refrigerators, furnishings, and bedding are provided. Canteens with Indian food and cafeterias are also available, serving a variety of meals to students at different hours of the day. The average annual cost for accommodation is <span className="font-semibold">$1,500 - $1,800</span>.
                    </p>

                    {/* RREC – A Trusted and Reliable Admission Partner */}
                    <h2 className="text-2xl font-semibold text-red-600 text-center mt-8 mb-4">
                        RREC – A Trusted and Reliable Admission Partner for MBBS in Russia
                    </h2>
                    <p className="text-gray-700 text-justify mb-4">
                        For almost twenty years, RREC has been at the forefront of medical tourism, boasting a flawless track record of securing admissions to prestigious medical universities in Russia. As the authorized admission partner for over 22+ recognized institutions by the National Medical Commission of India, including Synergy University Moscow, RREC is dedicated to providing unwavering support throughout the MBBS journey. Our team's commitment and systematic approach have guided countless medical aspirants to success in securing admission to Russia's top-tier medical universities.
                    </p>
                    <p className="text-gray-700 text-justify mb-4">
                        Reach out to us for an in-depth counseling session, free of charge, tailored for both parents and students, addressing all inquiries and concerns regarding MBBS admissions to NMC-approved Russian Universities.
                    </p>

                    {/* RREC - Roles and Responsibilities */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">RREC - Roles and Responsibilities</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>RREC is the only official and authorized representative for MBBS admission in more than 50 NMC-approved medical universities in Russia, including Synergy University Moscow.</li>
                        <li>Our 16+ years of experience in nurturing the dreams of medical aspirants in India who are looking for MBBS abroad.</li>
                        <li>RREC ensures Indian students seeking admission to MBBS in Russia are provided admission in NMC-recognized and WHO-approved medical universities only.</li>
                        <li>Through counseling, our advisors and experts in medical education abroad provide complete information and guidance to parents and students regarding MBBS admission in Russia.</li>
                        <li>The team at RREC will assist you with documentation, visa application, embassy stamping, and ministry approval.</li>
                        <li>We arrange your travel essentials and tickets to Russia, including travel insurance.</li>
                    </ul>
                </div>





                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-8">
                    Call for more details about the university, admission, processing, and fees at MBBS in  SUM, Russia:
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
                    Call for more details about the university admission, processing, fees at MBBS in  SUM, Russia
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
export default Synergy;