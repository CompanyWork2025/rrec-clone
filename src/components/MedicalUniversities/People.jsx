import React from "react";
import { Helmet } from "react-helmet";

const People = () => {

    const universityData = [
        { label: "Name of the University", value: "People’s Friendship University" },
        { label: "Location", value: "Moscow, Russia" },
        { label: "Popular Name/Abbrev.", value: "PFUR, RUDN" },
        { label: "Institute Type", value: "Government" },
        { label: "Year of Establishment", value: "1960" },
        { label: "Number of Faculty & Academic Institute", value: "14" },
        { label: "Medium of Instruction", value: "English/Russian" },
        { label: "NEET Required", value: "Yes, It is Required & Mandatory" },
        { label: "Courses Offered", value: "General Medicine, Dentistry, Pediatrics, Pharmacy" },
        { label: "Minimum percentage required", value: "65% in English, Chemistry, Biology per each subject" },
        { label: "IELTS/TOEFL", value: "Not Required" },
        { label: "Duration of MBBS", value: "6 Years" },
        { label: "University Recognition", value: "WHO, NMC of India Approved" },
        { label: "Category", value: "Medical Colleges in Russia" },
        { label: "Contact Official Representative", value: <a href="https://www.rrecrussia.com/" className="text-blue-600 hover:underline">RREC, website:- www.rrecrussia.com</a> },
    ];



    return (
        <>
            <Helmet>
                <title>Peoples Friendship University | MBBS, Fees, Admission</title>
                <meta
                    name="description"
                    content="Admission Procedure, Eligibility Criteria, Documents required, Advantage, Overview, Fact Check, Highlights, Compelling Reasons that Attract Students to PFUR, Why Choose PFUR, People’s Friendship University fee structure, Ranking, Academic Semester, Medical and Health care facility, Hostel Facility and Scholarship."
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/9/94/RUDN_emblem.png"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Peoples’ Friendship University
                    </h1>
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-4">
                        People’s Friendship University – Study MBBS from The Best Medical University in Russia
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">People’s Friendship University is formed in 1960 and the Institute for Medicine is integrated in the same year. Students from all over the world seek admission in this high-profile and immensely facilitated medical institution in Moscow, Russia to pursue a high-quality MBBS program. Get 100% assistance and support for admission from RREC Team.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">If being an Indian student, you are perplexed about where and which university to choose to pursue your medical education abroad, then the solution is galore in Russia. People’s Friendship University in Russia is contemplated as one of the top universities in Russia, offering superlative graduate and post-graduate medical courses that too at affordable People’s Friendship University MBBS fees. The university is also known as RUDN University.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Over the years, Russia has emerged as a hot destination for affordable yet quality-led MBBS program for many Indians and international students across the globe. Russia at present is the hub of medical tourism in Asia and the leading choice for students who are looking to pursue a top-rated MBBS program abroad. There are a large number of world-class medical universities ready to accommodate thousands and thousands of medical aspirants every year. </p>
                    </div>
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8">
                        Overview People’ Friendship University, Moscow
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">People’s Friendship University, Russia (PFUR) was established in 1960 by a special regulation of the USSR government. Earlier it was named Patrice Lumumba University of People’s University. The university is a state university that comes under the Government of the Russian Federation. The People’s Friendship University ranking is not only good globally but it has also occupied one of the top ranks among classical universities in Russia and leading status in training international students. The university is equipped with a scientific research program based upon several research laboratories and centers.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The PFUR has 14 faculties and Academic Institutes. The number of teaching staff is 2200 that comprises highly experienced and adept lecturers and professors (more than 1300 Ph.D., D.Sc, and academicians). The university has 29 thousand students including 6000 international students from 145 countries. All these students are organized in students association and by country and region. More than 80 thousand foreign students from 170 countries have completed their education from PFUR which combines the classical structure of higher education. PFUR also promotes the objectives of true education and bringing up youth in the spirit of humane tolerance, and mutual respect. A massive number of graduates and post-graduates from this university, including 5500 Ph.D. and Doctorate degree holders from this university, working in more than 170 countries.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The university offers a wide range of professional courses that covers all fields in fundamental Sciences, Medical Science, Humanities, Engineering, IT, and so on. Almost 75 majors specialties are there to gran on the graduate and undergraduate level.</p>

                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8 mb-2">
                        Fact Check in Brief:
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
                        University Ranking at a Glance
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The PFUR is one of the top and highly acclaimed universities in Russia that acquires high rankings both in the country and global university rankings. People’s Friendship University ranking in the world is 370 according to QS Global World University Rankings. As far as is People’s Friendship University country ranking concerned it is a top ten universities in Russia. It is ranked 17 according to Russian University Ranking.  </p>
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8">
                        People’s Friendship University – “Institute for Medicine”
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The Institute for Medicine was formed in People’s Friendship University in 1960. Since then, it has been an integral department of PFUR. Students from all over the world seek People’s Friendship University admission to pursue MBBS because of the quality of education and its degree both are acknowledged and accepted worldwide. It has more than 2600 students and 43 departments. There are more than 500 lecturers in the university that include academicians, eminent professors, Ph.Ds., honored scientists of the Russian Federation, laureates of the Russian Federation state prize, laureates of the government state prize, corresponding member of the Russian academy of the medical science and social academies. The Institute for Medicine at PFUR is quite popular and has a top-rated reputation both in Russia and worldwide. In the present scenario, more than 6600 professionals who have taken their degrees from the Institute for Medicine at PFUR are working in more than 120 countries around the world.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The university focuses enormously on the practical learning and clinical training of the students during the MBBS program. It has several laboratories with the latest and advanced diagnostic and research equipment. It allows medical students to penetrate the mystery of structure and functioning of the human anatomy and physiology and also helps them to know how to diagnose diseases and introduce an innovative method of prevention and treatment. At present, the Institute for Medical PFUR is well-equipped with 14 novel clinical laboratories. In addition to it, during the training process, TV broadcasting and computer testing are widely utilized and for further improvement and upliftment of practical training liver fiber scanning, andrology, and subdivision of computer Tomography have been established.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Over the years, PFUR has gained global popularity in terms of rendering top-notch medical education to international students, hence got People’s Friendship University reviews from current students and former alumni.</p>

                    <h2 className="text-md text-red-600 lg:text-xl mt-8 font-semibold">
                        Medical and Health care facility at PFUR
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">People’s Friendship University, Russia bestows ample provision for students’ and teachers’ health and care. If any students fall ill, the administration takes notice of him/her and provides high-level healthcare assistance at the university’s polyclinic. Moreover, the medical and rehabilitation centers are well-furnished with state of the art provisions. It is obligatory for every staff and student to go through the annual health check-up. A regular health care facility is also provided by University’s Medical Centre on the basis of medical insurance policy that levies the cost of around $270 per year. Hence, all kinds of medical and health facilities are duly available within the campus itself.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 font-semibold">
                        Sports and Leisure Facility for Students at PFUR
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Apart from study, students are encouraged to take part in sports and leisure activities as well. The university offers sports facilities like basketball, football, handball, halls for gymnastics, and several other games and leisure activities free of charge. In addition to it, a shopping center, international post-office, telephone center, a restaurant serving delicious food, computer, and cultural center and so on. The sports complex extends in the area of 6500 sq. There are 15 tennis courts, 4 football grounds, 2 indoor grounds, and other 36 sports categories. </p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 font-semibold">
                        Hostel Facility at PFUR
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The People’s Friendship University hostel facilities are one of the best. It is available for all foreign students. The hostels are 5-stories and 16-stories building. The building consists of self-contained rooms having double bedded and triple bedded arrangements. The hostel is well-furnished with all kinds of amenities such as water, electricity, furniture, bed, washing, and cooking facilities. The common kitchen is available for those who want to cook their own food. There is a separate provision of accommodation for girls and boys. The cost of the hostel may range from around $750 to $2500 per year.
                        Both university and hostel campus is safe and secured for students regardless of their gender. The university campus is strongly fenced. Proper discipline and security are strictly maintained. Electronic entry and exit systems prevail. Visitors are only allowed after identification. A modern and up-to-date fire prevention system is also installed in all the premises of the universities and hostel buildings.  The whole hostel building and university campus remain under the surveillance of CCTV cameras and special security guards. </p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 font-semibold">
                        Scholarship for Students
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The Russian government offers scholarships to foreign students who are financially underprivileged but have a strong desire and aspiration for MBBS in Russia. Russian universities generally officially proclaimed quotas for scholarship and admission process on Russia Day. Foreign or Indian students who are willing to do MBBS from PFUR are eligible to avail of this scholarship opportunity.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The eligibility of the scholarship must be attained in order to avail People’s Friendship University scholarship concerned, students must have secured 65-70% and above in 12th in the general category. The update can be procured from the People’s Friendship University official website.</p>

                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 font-semibold mb-2">
                        People’s Friendship University fee structure is given below:
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
                <div className="bg-gray-100 p-6">
                    {/* Heading */}
                    <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">
                        Admission Procedure to Study MBBS in PFUR, Moscow in Simple Steps:
                    </h2>


                    {/* Steps List */}
                    <div className="mt-4 space-y-3 w-full">
                        {[
                            { step: "*", text: `STEP-1: Call or Visit RREC Team Official representative of University.` },
                            { step: "*", text: `STEP-2: Properly fill the online application form of the Peoples’ Friendship University.` },
                            { step: "*", text: `STEP-3: After filling the online application form, the candidate will receive an offer letter from the university.` },
                            { step: "*", text: `STEP-4: Pay processing fees and then submit all essential documents required to get admission to NMC recognized medical college-PFUR Moscow.` },
                            { step: "*", text: `STEP-5: After receiving processing fees and original documents, the RREC team will apply for an invitation letter and visa documentation.` },
                            { step: "*", text: `STEP-6: After getting the Visa, the RREC team will arrange tickets and all a proper set of documents to fly for a particular university with a group of students and their representatives.` },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row md:items-start md:space-x-3 w-full">
                                <span className="text-red-600 font-semibold flex-shrink-0">{item.step}</span>
                                <p className="text-gray-700 text-justify md:text-left md:flex-1">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-red-700 mt-10 mb-6 font-roboto rounded-xl px-8 py-10 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-2xl font-semibold text-white text-center mt-6">
                    Call for more details about the university, admission, processing, fees at MBBS in PFU:
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
export default People;