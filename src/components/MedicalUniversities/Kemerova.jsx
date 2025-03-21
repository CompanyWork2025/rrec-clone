import React from "react";
import { Helmet } from "react-helmet";

const Kemerova = () => {

    const universityData = [
        { label: "Name of the Institute", value: "Kemerovo State Medical University" },
        { label: "Year of Establishment", value: "1974" },
        { label: "Location", value: "Kemerovo, Russia" },
        { label: "Institute Type", value: "Public" },
        { label: "Intake for MBBS", value: "September" },
        { label: "Number of Faculty", value: "07" },
        { label: "Medium of Instruction", value: "English" },
        { label: "NEET Required", value: "Yes" },
        { label: "IELTS/TOEFL", value: "Not Required" },
        { label: "Courses Offered", value: "General Medicine, Pediatrics, Dentistry, Pharmacy, Nursing" },
        { label: "Minimum Percentage Required", value: "50% in Physics, Chemistry & Biology (aggregate)" },
        { label: "Duration of MBBS", value: "6 Years (Including 1 Year Internship)" },
        { label: "University Recognition", value: "WHO, NMC of India" },
        { label: "Hostel Facility", value: "Yes (Male and Female)" },
        { label: "Contact Official Representative", value: <a href="https://www.rrecrussia.com/" className="text-blue-600 hover:underline">RREC, website:- www.rrecrussia.com</a> },
    ];



    return (
        <>
            <Helmet>
                <title>Kemerovo State Medical University | Fee structure | Admission Procedure</title>
                <meta
                    name="description"
                    content="Fee structure - hostel - benefits - Admission Procedure - Eligibility Criteria - Documents required - duration of MBBS - faculties - Benefits - Historical Overview - affiliation - advantages - Direct Admission"
                />
            </Helmet>


            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://hedclub.com/data/universities/364/logo/Zo13oIxf7aTUwEqlr65B.png"
                        alt="university"
                        className="mx-auto w-16 h-10 lg:w-28 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Kemerovo State Medical University
                    </h1>
                    <h2 className="text-md font-semibold text-red-600 lg:text-xl mt-4">
                        About the University
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Kemerovo State Medical University is regarded as one of the frontline medical destinations for international students. It is located in the city of Kemerovo Oblast in Russia. The foundation of this medical institution was laid down in 1974. Since then, the institution has produced thousands of medical professionals and experts through its seamless approach to education and standard training programs in the department of medicine. It follows practical and systematic training programs to nurture high-quality medical professionals and specialists.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The medical programs offered at Kemerovo State Medical University hold official approval from the Ministry of Science and Higher Education of the Russian Federation. Additionally, the university is accredited by the World Health Organization (WHO) and holds recognition from the NMC India. Hence, it serves as a suitable option for Indian students seeking medical education opportunities abroad.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Currently, the university has 17 education laboratories and an organizational building with a total space of 12000m2. Moreover, Kemerovo State Medical University is also equipped with state-of-the-art facilities. It has 7 faculties with 3500+ students, 20 departments and 70 chairs. The university has become a popular scientific, education and medical research center in Siberia and Russia.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Kemerovo State Medical University is widely known for its quality education, affordable fees, experienced faculty, delicious cuisine, budget-friendly accommodations, and pragmatic clinical internships. For these reasons, it is reckoned among the top medical colleges in Russia.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The Faculty of Medicine at Kemerovo State Medical University provides a 6-year MBBS program which is thoroughly conducted in English. It imparts a robust grounding in medical science aligned with hands-on training in the real-world medical arena. The university furnishes ultra-modern and advanced research facilities and practical educational resources, including access to research labs and medical facilities for experimentation. </p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Furthermore, students reap benefits from a diverse library collection to enrich their studies. Graduates of Kemerovo State Medical University are employed worldwide in renowned healthcare institutions, enjoying competitive salary packages.</p>
                    </div>

                    <h2 className="text-xl text-red-600 font-semibold mb-4 mt-8 text-center">
                        Why Choose Kemerovo State Medical University for MBBS?
                    </h2>
                    <ul className="list-disc list-inside space-y-4 text-justify text-md lg:text-lg text-gray-700">
                        <li><strong>High-Quality Education:</strong> Kemerovo State Medical University is known for providing top-notch education in the field of medicine, ensuring that students receive a comprehensive and rigorous academic experience.</li>
                        <li><strong>English-Medium Program:</strong> The university offers an MBBS program conducted entirely in English, making it accessible to international students who may not be proficient in Russian.</li>
                        <li><strong>Practical Training:</strong> Students receive extensive practical training in hospitals and clinics, allowing them to gain hands-on experience and develop essential clinical skills under the guidance of experienced professionals.</li>
                        <li><strong>Research Opportunities:</strong> With access to advanced research laboratories and experimental medical facilities, students have the opportunity to engage in cutting-edge research and contribute to advancements in the field of medicine.</li>
                        <li><strong>Multinational Library:</strong> The university provides students with access to a diverse range of resources in its library, including textbooks, journals, and online databases, enhancing their learning and research capabilities.</li>
                        <li><strong>Affordable Fees:</strong> Kemerovo State Medical University offers a high standard of education at relatively low tuition fees compared to many other medical universities, making it an attractive option for students seeking quality education at an affordable cost.</li>
                        <li><strong>Excellent Faculty:</strong> The university boasts a team of highly qualified and experienced faculty members who are dedicated to providing students with the knowledge, skills, and support they need to succeed in their medical careers.</li>
                        <li><strong>Global Recognition:</strong> Graduates of Kemerovo State Medical University are highly sought after worldwide, with many alumni securing positions in prestigious healthcare institutions globally, reflecting the university's reputation for producing competent healthcare professionals.</li>
                        <li><strong>Comfortable Accommodation:</strong> The university offers affordable accommodation options for students, ensuring a comfortable and convenient living environment conducive to studying and personal development.</li>
                        <li><strong>Outstanding Clinical Internship:</strong> Students benefit from outstanding clinical internship opportunities, gaining valuable practical experience in various medical specialties and preparing them for successful careers in healthcare.</li>
                    </ul>
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

                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 text-justify">
                        Faculties of Kemerovo State Medical University
                    </h2>
                    <div className="mt-4 space-y-3 w-full">
                        {[
                            { step: "•", text: `General Medicine (MBBS)` },
                            { step: "•", text: `Dentistry` },
                            { step: "•", text: `Pediatrics` },
                            { step: "•", text: `Pharmacy` },
                            { step: "•", text: `Nursing` },
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
                            <h3 className="text-xl font-semibold text-red-600 text-justify mb-4">Eligibility Criteria for Admission</h3>
                            <ul className="list-disc text-justify list-inside text-gray-700 space-y-2">
                                <li>The candidate must be 17 years of age on or before 31st Dec of the year of admission.</li>
                                <li>The candidate must have passed class 10th and 12th from a recognized board in India.</li>
                                <li>The candidate must have cleared the NEET examination.</li>
                                <li>The candidate must secure 50% aggregate marks in Physics, Chemistry & Biology (PCB) with English.</li>
                            </ul>
                        </div>

                        {/* Complete Admission Process */}
                        <div className="bg-gray-100 ">
                            <h3 className="text-xl font-semibold text-red-600 text-justify mb-4">Complete Admission Process</h3>
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
                            <h3 className="text-xl font-semibold text-red-600 text-justify mb-4">Documents Required</h3>
                            <ul className="list-disc text-justify list-inside text-gray-700 space-y-2">
                                <li>Copy of 10th & 12th mark sheets</li>
                                <li>Notarized birth certificate</li>
                                <li>Migration certificate</li>
                                <li>Official invitation letter issued by the university</li>
                                <li>All documents must be notarized by the Ministry of External Affairs, New Delhi</li>
                                <li>Bank receipt of 1st year Kemerovo State Medical University tuition fees</li>
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
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8 mb-2">
                        Fee Structure for MBBS in Kemerovo State Medical University
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
                                    { label: "Tuition Fee", firstYear: "295,000 RUB", secondYear: "295,000 RUB", total: "29000 USD Total" },
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
                    {/* Heading */}
                    <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">
                        Hostel Facility at Kemerovo State Medical University
                    </h2>


                    {/* Steps List */}
                    <div className="mt-4 space-y-8 w-full">
                        {[
                            { step: "*", text: `Shared accommodation: Rooms are shared between 2-4 students, fostering a sense of community among residents.` },
                            { step: "*", text: `Well-furnished and heated rooms: All rooms are comfortable and equipped with basic amenities.` },
                            { step: "*", text: `Common Kitchen and bathroom facilities.` },
                            { step: "*", text: `Safety and security: Hostel buildings are equipped with safety measures to ensure the well-being of residents.` },

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
                    About the City – Kemerovo
                </h2>

                <p className="text-gray-700 mt-4 text-justify">
                    Kemerovo, situated in southwestern Siberia along the banks of the Tom River, serves as the administrative center of Kemerovo Oblast in Russia. With a population of around 600,000 residents, it stands as a prominent city in the region. Renowned for its industrial prowess, particularly in coal mining and heavy machinery production. Despite its industrial roots, Kemerovo offers a variety of recreational activities for residents and visitors alike. The city features numerous theatres, museums, and art galleries, reflecting its vibrant scene. Moreover, Kemerovo is surrounded by picturesque landscapes.
                </p>

                <p className="text-gray-700 mt-4 text-justify">
                    Kemerovo boasts a well-developed transportation network, including an international airport and extensive road and rail connections. The city experiences a continental climate with cold winters and warm summers, with average temperatures ranging from -15°C in winter to 20°C in summer. Overall, Kemerovo provides a comfortable living environment with a blend of industrial heritage, richness, and beauty.
                </p>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">
                    RREC – A Trustworthy Admission Partner for Kemerovo State Medical University, Russia
                </h2>

                <p className="text-gray-700 mt-4 text-justify">
                    RREC has been catering the industry of medical tourism for nearly two decades. We are blessed to have 100% success in securing admissions to various prestigious medical universities in Russia. We function as a trustworthy and officially authorized admission partner of 50+ medical universities in the Russian Federation, recognized by the National Medical Commission of India (NMC). The team RREC is fully committed to providing unconditional support throughout the MBBS course. Our guided services and methodical approach have aided numerous medical aspirants in gaining admission to top-tier medical universities in Russia. Reach out to us for an in-depth counseling session, free of charge, tailored for both parents and students, addressing all inquiries and concerns regarding MBBS admissions to NMC-approved Russian Universities.
                </p>              
            </div>

            {/* Heading */}
            <div className="bg-red-700 mt-10 mb-6 font-roboto rounded-xl px-8 py-10 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-2xl font-semibold text-white text-center mt-6">
                    Call for more details about the university, admission, processing, fees at MBBS in KSMU:
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
export default Kemerova;