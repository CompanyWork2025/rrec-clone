import React from "react";
import { Helmet } from "react-helmet";

const FarEastern = () => {

    const universityData = [
        { label: "Name of the Institute", value: "Far Eastern Federal University" },
        { label: "Year of Establishment", value: "1899" },
        { label: "Medical Faculty Estd. Year (EM)", value: "2016" },
        { label: "Recognition", value: "NMC, WHO, etc." },
        { label: "Medium of Instruction", value: "English" },
        { label: "Duration of course", value: "6 years including internship" },
        { label: "Hostel Facility", value: "Yes" },
        { label: "NEET Required", value: "Yes" },
        { label: "IELTS/TOEFL", value: "Not Required" },
        { label: "Contact Official Representative", value: <a href="https://www.rrecrussia.com/" className="text-blue-600 hover:underline">RREC, website:- www.rrecrussia.com</a> },
    ];


    return (
        <>
            <Helmet>
                <title>Far Eastern Federal University | Fee structure | Admission Procedure</title>
                <meta
                    name="description"
                    content="Fee structure - hostel - benefits - Admission Procedure - Eligibility Criteria - Documents required - duration of MBBS - faculties - Benefits - Historical Overview - affiliation - advantages - Direct Admission"
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://study-eu.s3.eu-west-1.amazonaws.com/uploads/university/desktop_far-eastern-federal-university-526-logo.png"
                        alt="university"
                        className="mx-auto w-18 h-10 lg:w-28 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Far Eastern Federal University
                    </h1>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4 font-semibold">
                        (School of Medicine & Life Science)
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Far Eastern Federal University (FEFU) is one of Russia’s leading institutions for medical education, offering an excellent MBBS program for international students. Located in Vladivostok, the university is known for its modern infrastructure, globally recognized curriculum, and highly qualified faculty. </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Established in 1899, FEFU is among the oldest and most prestigious universities in Russia, providing a strong foundation in medical sciences with a focus on practical training and research. The MBBS program at FEFU follows international standards and is recognized by the WHO, NMC, and other global medical councils, making graduates eligible to practice in various countries. With affordable tuition fees and a cost-effective living environment, the university attracts students from around the world. FEFU provides English-medium instruction, ensuring accessibility for Indian students aspiring for MBBS in Russia. However, it also offers opportunities to learn Russian for better interaction with patients during clinical practice. </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The campus features advanced laboratories, simulation centres, and affiliated hospitals where students gain hands-on experience. Additionally, the university fosters a multicultural environment with a diverse student community and various extracurricular activities. Studying MBBS at FEFU presents an opportunity for quality education, international exposure, and a promising medical career in a well-equipped academic setting.</p>
                    </div>
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8">
                        Why Study MBBS at Far Eastern Federal University
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        1. <strong>NMC & WHO Recognition</strong> – The MBBS degree from FEFU is recognized by the National Medical Commission (NMC) of India and the World Health Organization (WHO), allowing graduates to pursue medical practice in India and other countries.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        2. <strong>Affordable Tuition & Living Costs</strong> – Compared to private medical colleges in India, FEFU offers high-quality medical education at a fraction of the cost, making it a budget-friendly option for Indian students.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        3. <strong>English-Medium Instruction</strong> – The entire MBBS course is taught in English, eliminating language barriers and ensuring better understanding for international students.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        4. <strong>High-Quality Education & Modern Infrastructure</strong> – The university features state-of-the-art classrooms, advanced laboratories, and well-equipped hospitals for clinical training.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        5. <strong>FMGE Coaching</strong> – FEFU provides guidance for the FMGE (Foreign Medical Graduate Examination), helping Indian students prepare for medical license in India.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        6. <strong>Safe & Comfortable Environment</strong> – Vladivostok offers a safe and student-friendly atmosphere with well-maintained hostels, Indian food options, and a supportive international community.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        7. <strong>Practical Exposure & Research Opportunities</strong> – Students gain hands-on clinical experience in affiliated hospitals, enhancing their practical skills and medical expertise.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        8. <strong>No Donation or Entrance Exam</strong> – Unlike private colleges in India, admission to FEFU is based on merit without any donation or entrance exam, making it an accessible option for aspiring doctors.
                    </p>
                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8 mb-2">
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
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8">
                        Hostel, Food and Healthcare Facility at FEFU
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The university's hostels are well-maintained, offering fully furnished rooms with modern amenities such as central heating, Wi-Fi, laundry services, and 24/7 security. Students can choose between shared and private accommodations based on their preferences. The hostels are located within the university campus, providing easy access to academic buildings, libraries, and recreational areas. </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Many hostels have shared kitchens where students can cook their own meals, and Indian grocery stores in Vladivostok make it easier to find familiar ingredients. Vegetarian and non-vegetarian options are available, ensuring students can maintain their preferred diet.  </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Healthcare facilities at FEFU are top-notch, with an on-campus medical center providing regular health check-ups and emergency care. The university has tie-ups with local hospitals for advanced medical treatment when needed. </p>
                    <div className="mt-8">
                        <h2 className="text-md text-left font-semibold text-red-600 lg:text-xl">
                            Faculties at Far Eastern Federal University
                        </h2>
                        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                            <ul className="list-disc pl-5 text-left text-md lg:text-lg font-roboto space-y-2">
                                <li><strong>General Medicine (MBBS)</strong></li>
                                <li><strong>Pediatrics</strong></li>
                                <li><strong>Dentistry</strong></li>
                                <li><strong>Biomedicine</strong></li>
                                <li><strong>Pharmaceutical</strong></li>
                                <li><strong>Clinical and Experimental Pharmacy</strong></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8">
                        {/* Eligibility Criteria Section */}
                        <div className="bg-gray-100 p-4 text-left rounded-lg ">
                            <h2 className="text-md text-red-600 font-semibold lg:text-xl">
                                Eligibility Criteria For MBBS at FEFU 2024-25
                            </h2>
                            <ul className="list-disc pl-5 text-md lg:text-lg font-roboto space-y-2 mt-4">
                                <li>The candidate must be 17 years of age on or before 31st Dec of the year of admission.</li>
                                <li>The candidate must have passed class 10th and 12th from a recognized board in India.</li>
                                <li>The candidate must have cleared the NEET examination.</li>
                                <li>The candidate must secure 50% aggregate marks in Physics, Chemistry & Biology (PCB) with English.</li>
                            </ul>
                        </div>

                        {/* Documents Required Section */}
                        <div className="bg-gray-100 p-4 text-left rounded-lg  mt-6">
                            <h2 className="text-md text-red-600 font-semibold lg:text-xl">
                                Documents Required
                            </h2>
                            <ul className="list-disc pl-5 text-md lg:text-lg font-roboto space-y-2 mt-4">
                                <li>Copy of 10th & 12th mark sheets</li>
                                <li>Notarized birth certificate</li>
                                <li>Migration certificate</li>
                                <li>Official invitation letter issued by the university</li>
                                <li>All documents must be notarized by the Ministry of External Affairs, New Delhi</li>
                                <li>Bank receipt of 1st year tuition fees</li>
                                <li>Valid passport with a minimum validity of 2 years</li>
                                <li>NEET Scorecard</li>
                                <li>HIV test documents</li>
                                <li>12 passport size photos</li>
                                <li>Medical or health fitness certificate</li>
                            </ul>
                        </div>
                    </div>


                    <div className="mt-8">
                        {/* Admission Procedure Section */}
                        <div className="bg-gray-100 p-4 text-left rounded-lg">
                            <h2 className="text-md text-red-600 font-semibold lg:text-xl">
                                Admission Procedure
                            </h2>
                            <ol className="list-decimal pl-5 text-md lg:text-lg font-roboto space-y-2 mt-4">
                                <li>Fill out the online application form through an authorized admission consultant.</li>
                                <li>Submit scanned copies of required documents, including passport, academic certificates, NEET scorecard, and passport-sized photographs.</li>
                                <li>The university reviews the application and issues an admission letter upon approval.</li>
                                <li>Apply for an invitation letter from the Russian Ministry of Education after receiving the admission letter.</li>
                                <li>Once the invitation letter is issued, proceed to apply for a student visa at the Russian embassy or consulate in India.</li>
                                <li>Pay university first-year MBBS fees and get the receipt.</li>
                                <li>After visa approval, the departure arrangement will be handled by the RREC team.</li>
                                <li>Upon arrival at FEFU, complete document verification, medical check-ups, and other formalities before starting classes.</li>
                            </ol>
                        </div>

                        {/* Medium of Teaching & About the City Section */}
                        <div className="bg-gray-100 p-4 rounded-lg mt-6">
                            <h2 className="text-md text-red-600 font-semibold lg:text-xl">
                                Medium of Teaching and Duration of MBBS at FEFU
                            </h2>
                            <p className="text-md lg:text-lg font-roboto mt-4 text-justify">
                                The MBBS program at Far Eastern Federal University (FEFU) has a total duration of 6 years, which includes five years of academic study and one year of compulsory internship.
                            </p>
                            <p className="text-md lg:text-lg font-roboto mt-4 text-justify">
                                The university has one intake per year, with admissions generally opening in May-June and closing by September-October. Since there are a limited number of seats, students are advised to apply early to secure their admission.
                            </p>
                            <p className="text-md lg:text-lg font-roboto mt-4 text-justify">
                                The medium of instruction is English, ensuring that international students, including Indian aspirants, can comfortably complete their medical education without any language barrier. However, students also learn basic Russian to interact with patients during their clinical training.
                            </p>

                            <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-6">
                                About the City - Vladivostok
                            </h2>
                            <p className="text-md lg:text-lg font-roboto mt-4 text-justify">
                                Vladivostok, a vibrant port city in Russia, is known for its stunning coastal views, rich cultural heritage, and modern infrastructure. As the administrative center of the Primorsky region, it offers a safe and student-friendly environment. With a blend of Russian and Asian influences, the city provides excellent educational and lifestyle opportunities.
                            </p>
                        </div>
                    </div>


                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8 mb-2">
                        MBBS Fees Structure in Far Eastern Federal University
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
                            <thead>
                                <tr className="bg-red-600 text-white">
                                    <th className="px-4 py-2 border-r border-gray-300">Fees Pattern</th>
                                    <th className="px-4 py-2 border-r border-gray-300">1st Year</th>
                                    <th className="px-4 py-2 border-r border-gray-300">2nd Year to 6th Year</th>

                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: "Tuition Fee", firstYear: "495,000 RUB", secondYear: "495,000 RUB", total: "29000 USD Total" },
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
                <div className="bg-white p-6">
                    <div className="mt-8">
                        {/* Why RREC is a Top Consultant Section */}
                        <div className="bg-gray-100 p-4 rounded-lg ">
                            <h2 className="text-md text-red-600 font-semibold text-center lg:text-xl">
                                Why RREC is a Top Consultant for MBBS in Russia?
                            </h2>
                            <p className="text-md lg:text-lg font-roboto mt-4 text-justify">
                                RREC stands as one of India’s most reliable and experienced education consultants, dedicated to guiding aspiring medical students toward a successful career. With a proven track record, we offer expert counseling, in-depth research, and personalized support to help students secure admission to top medical universities in Russia. Our widespread presence and branches across India ensure a flawless and results-driven approach, fulfilling your dream to study MBBS abroad.
                            </p>
                            <p className="text-md lg:text-lg font-roboto mt-4 text-justify">
                                Our team of dedicated professionals adopts a systematic approach to provide students with comprehensive guidance, from university selection to admission procedures and beyond. At RREC, we believe in building lasting relationships, treating every student as part of our extended family, and ensuring they receive the best possible support at every step. With years of expertise, an unwavering commitment, and access to a vast network of renowned universities in Russia, we have successfully helped countless Indian students achieve their dream of pursuing MBBS in Russia and other leading destinations. Choosing RREC means placing your trust in a team that genuinely cares about your future and works tirelessly to turn your aspirations into reality.
                            </p>
                        </div>

                        {/* Unparalleled Advantages of Consulting RREC Section */}
                        <div className="bg-gray-100 p-4 rounded-lg  mt-6">
                            <h2 className="text-md text-red-600 font-semibold text-center lg:text-xl">
                                Unparalleled Advantages of Consulting RREC
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
                            <p className="text-md lg:text-lg font-roboto mt-4 text-justify">
                                By choosing RREC, students can secure their MBBS admission in Russia smoothly and focus on their medical education without any stress.
                            </p>
                        </div>
                    </div>

                </div>

               
            </div>

            {/* Heading */}
            <div className="bg-red-700 mt-10 mb-6 font-roboto rounded-xl px-8 py-10 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-2xl font-semibold text-white text-center mt-6">
                    Call for more details about the university, admission, processing, fees at MBBS in FFEU:
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
        </>
    )
}
export default FarEastern;