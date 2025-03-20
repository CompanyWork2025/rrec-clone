import React from "react";
import { Helmet } from "react-helmet";

const Ivanovo = () => {

    const universityData = [
        { label: "Name of the Institute", value: "Ivanovo State Medical University" },
        { label: "Year of Establishment", value: "1930" },
        { label: "Department of Medicine", value: "1991" },
        { label: "Location", value: "Ivanovo, Russia" },
        { label: "Institute Type", value: "Public" },
        { label: "Recognition", value: "NMC, WHO, etc." },
        { label: "Hostel Facility", value: "Yes" },
        { label: "Medium of Instruction", value: "English" },
        { label: "NEET Required", value: "Yes" },
        { label: "IELTS/TOEFL", value: "Not Required" },
        { label: "Nearest Airport", value: "Ivanovo Yuzhny Airport" }
    ];


    return (
        <>
            <Helmet>
                <title>Ivanovo State Medical University</title>
                <meta
                    name="description"
                    content="Explore admission procedures, eligibility criteria, required documents, advantages, university overview, key highlights, reasons to choose Ivanovo State Medical University, fee structure, global ranking, academic semesters, healthcare facilities, hostel amenities, and available scholarships."
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://edurank.org/assets/img/uni-logos/ivanovo-state-medical-academy-logo.png"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Ivanovo State Medical University
                    </h1>

                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Ivanovo State Medical University (ISMU), established in 1930, is a leading medical institution in Russia, located just three hours from Moscow. The university is known for its high-quality medical education and modern teaching methodologies. Recognized by the Medical Council of India (MCI) and other global medical bodies, ISMU offers a six-year MBBS program taught in English, making it a preferred choice for Indian medical aspirants.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Over the years, ISMU has trained more than 25,000 doctors and continues to provide high-quality medical education to nearly 3,000 students, including over 150 international students from 28+ countries. The university offers MBBS programs in both English and Russian, making it a preferred choice for foreign students. With a highly experienced faculty of more than 400 instructors, including 70 Doctors of Science and over 270 Candidates of Science, ISMU ensures an advanced learning environment. The university provides modern facilities, including three libraries, three well-equipped student hostels, and a sports center, ensuring a comfortable and enriching experience. </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">ISMU emphasizes academic excellence, research, and holistic development, encouraging students to engage in extracurricular activities and cultural exchange programs. The university provides affordable tuition fees, well-equipped hostels, and hands-on clinical training in reputed hospitals. With a strong focus on practical learning, advanced research opportunities, and a student-friendly environment, ISMU remains one of the top choices for students pursuing an MBBS in Russia</p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        About the City – Ivanovo
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Ivanovo, known as the "Textile Capital of Russia," is a historic city located 250 km northeast of Moscow. It is famous for its rich cultural heritage, textile industry, and educational institutions like Ivanovo State Medical University. The city has a temperate continental climate, with cold, snowy winters and mild, pleasant summers. It is also enriched with museums, theatres and green spaces.</p>
                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        Quick Facts about Ivanovo State Medical University
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
                        Ivanovo State Medical University
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
                        Why Choose Ivanovo State Medical University (ISMU) for MBBS?
                    </h2>

                    {/* Benefits List */}
                    <ul className="list-disc list-inside text-justify text-gray-700 space-y-2">
                        <li><span className="font-semibold">No Entrance Test or Donation Required –</span> ISMU follows a transparent and merit-based admission process, ensuring that students do not have to pay hefty donations or take entrance exams. It makes high-quality medical education affordable and accessible for deserving students.</li>
                        <li><span className="font-semibold">Internationally Recognized MBBS Degree –</span> The medical degree from ISMU holds accreditation from WHO, NMC (India), and ECFMG (USA), allowing graduates to pursue medical careers in India, the USA, the UK, and other countries without any hurdles.</li>
                        <li><span className="font-semibold">Affordable Fee & Living Costs –</span> ISMU provides cost-effective medical education, making it a budget-friendly alternative to private medical colleges in India. The university offers quality education at lower tuition fees, and the cost of living is also economical for international students.</li>
                        <li><span className="font-semibold">English-Medium MBBS Program –</span> To accommodate international students, ISMU offers MBBS courses in both English and Russian. The English-taught curriculum ensures clarity in learning and removes language barriers for foreign students.</li>
                        <li><span className="font-semibold">State-of-the-Art Facilities & Academic Excellence –</span> ISMU boasts modern classrooms, fully-equipped laboratories, and top hospitals for clinical exposure. Practical training is a core focus, enabling students to gain essential hands-on experience throughout their education.</li>
                        <li><span className="font-semibold">Safe and Supportive Student Environment –</span> The university ensures a secure and inclusive campus atmosphere, offering well-furnished hostels, hygienic dining options, and a welcoming international community to make students feel at home.</li>
                        <li><span className="font-semibold">Extensive Clinical & Research Exposure –</span> Students receive real-world medical experience in affiliated hospitals, where they interact with patients and engage in research-based learning. This hands-on training prepares them for global medical careers.</li>
                    </ul>
                </div>


                <div className="bg-gray-100 p-0 mt-8">
                    {/* Hostel Facility */}
                    <h2 className="text-2xl font-semibold text-red-600 text-left mb-4">
                        Hostel Facility
                    </h2>
                    <p className="text-gray-700 text-justify">
                        Ivanovo State Medical University provides well-furnished hostel accommodations with modern amenities to ensure a comfortable stay for students. The rooms are well-equipped with beds, study tables, heating systems, Wi-Fi, and 24/7 security and surveillance. The hostels also include laundry services, common kitchens, and recreational areas.
                    </p>
                </div>

                <div className="bg-gray-100 p-0 mt-8">
                    {/* Eligibility Criteria for MBBS at ISMU */}
                    <h2 className="text-2xl font-semibold text-red-600 text-left mb-4">
                        Eligibility Criteria for MBBS at ISMU
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>The applicant must be 17 years or older by December 31st of the admission year.</li>
                        <li>Completion of Class 10th and 12th from a recognized education board in India.</li>
                        <li>A qualifying NEET score is mandatory for admission.</li>
                        <li>A minimum of 50% aggregate marks in Physics, Chemistry, and Biology (PCB) with English in 12th grade is required.</li>
                    </ul>
                </div>

                <div className="bg-gray-100 p-0 mt-8">
                    {/* Required Documents */}
                    <h2 className="text-2xl font-semibold text-red-600 text-left mb-4">
                        Required Documents
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Copies of 10th & 12th mark sheets.</li>
                        <li>Notarized birth certificate.</li>
                        <li>Migration certificate from the previous institution.</li>
                        <li>Official admission letter issued by ISMU.</li>
                        <li>Documents must be attested by the Ministry of External Affairs, New Delhi.</li>
                        <li>Bank receipt of the first-year tuition fees.</li>
                        <li>Valid passport with at least two years of validity.</li>
                        <li>NEET scorecard as proof of qualification.</li>
                        <li>HIV test report and a medical fitness certificate.</li>
                        <li>12 passport-size photographs (recent).</li>
                    </ul>
                </div>

                <div className="bg-gray-100 p-0 mt-8">
                    {/* Admission Process */}
                    <h2 className="text-2xl font-semibold text-red-600 text-left mb-4">
                        Admission Process
                    </h2>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                        <li>Apply through an authorized admission consultant for ISMU.</li>
                        <li>Provide scanned copies of necessary documents, including passport, academic certificates, NEET scorecard, and photographs.</li>
                        <li>The university evaluates the application and, upon approval, issues an official admission letter.</li>
                        <li>After securing admission, apply for the official invitation letter from the Russian Ministry of Education.</li>
                        <li>With the invitation letter, apply for a student visa at the Russian Embassy or Consulate in India.</li>
                        <li>Pay the first-year MBBS tuition fee and obtain the payment receipt.</li>
                        <li>Travel & Arrival – Once the visa is approved, travel arrangements will be made with the assistance of the RREC team.</li>
                        <li>Upon arrival at ISMU, complete document verification, medical check-ups, and other enrollment procedures before starting classes.</li>
                    </ol>
                </div>




                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-8">
                    Call for more details about the university, admission, processing, and fees at MBBS in  ISMU, Russia:
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
                    Call for more details about the university admission, processing, fees at MBBS in ISMU, Russia
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
export default Ivanovo;