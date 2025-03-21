import React from "react";
import { Helmet } from "react-helmet";


const Rostov = () => {
    const universityData = [
        { label: "Name of the University", value: "Rostov State Medical University" },
        { label: "Location", value: "Rostov-on-Don, Russia" },
        { label: "Popular Name/Abbrev.", value: "RSMU, RostSMU, RostGMU, RGMU" },
        { label: "Institute Type", value: "Government" },
        { label: "Year of Establishment", value: "1915" },
        { label: "Number of Faculty", value: "7" },
        { label: "Medium of Instruction", value: "English/Russian" },
        { label: "NEET Required", value: "Yes, It is Required & Mandatory" },
        { label: "Courses Offered", value: "General Medicine, Pediatrics, Dentistry, Pharmacy, Preparatory Course" },
        { label: "Minimum percentage required", value: "65-70% in Physics, Chemistry, Biology aggregate" },
        { label: "IELTS/TOEFL", value: "Not Required" },
        { label: "Processing Time for MBBS Admission", value: "25-30 days Approx." },
        { label: "Duration of MBBS", value: "6 Years" },
        { label: "University Recognition", value: "WHO, NMC of India Approved" },
        { label: "Total Number of Students", value: "9000 including 1500+ international Students" },
        { label: "Category", value: "Medical Colleges in Russia" },
        { label: "Contact Official Representative", value: <a href="https://www.rrecrussia.com/" className="text-blue-600 hover:underline">RREC, website:- www.rrecrussia.com</a> },
    ];


    return (
        <>
            <Helmet>
                <title>Rostov State Medical University | Russia - fee Structure</title>
                <meta
                    name="description"
                    content="Rostov State Medical University, Overview, accreditation and affiliation, ranking, courses, faculties &amp; Infrastructure, cost and duration for MBBS, fees, accommodation and hostel facility, admission procedure, document required and eligibility."
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://www.rostgmu.com/logo.png?v=2"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                        loading="lazy"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Rostov State Medical University, Russia
                    </h1>
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-4">
                        Rostov State Medical University – A Place To Be For Medical Education
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">A massive number of Indian students who dream of pursuing MBBS abroad are opting for <span className="text-red-600 font-semibold">Rostov Medical University</span>, Russia due to several advantages that include direct admission with entrance exams, no donation, feasible accommodation, affordable fee structure, safety and security. However the most exciting trait is its top quality and standard in medical education. </p>
                        <p className="text-left text-justify text-md lg:text-lg mt-4 font-roboto">San doubt, more than 20 lacs students appear for MBBS exam in India every year for just 40-60 thousands seats. It depicts the whole scenario of fierce competition in India for MBBS. This leads many capable students looking for MBBS course in Russia. Rostov State Medical University is great option for such aspirants who have high aspiration for MBBS. If you want to take admission in RostSMU, consult The RREC (Reliable Russian Education Consultants) team. We are the official authorized representative of RostSMU that can help you to sail through to the entire admission procedure.</p>
                        <p className="text-left text-justify text-md lg:text-lg mt-4 font-roboto">
                            Visit our website <a href="https://www.rrecrussia.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.rrecrussia.com</a> now to fix the consultation.
                        </p>
                    </div>
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8">
                        About Rostov State Medical University
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Rostov State Medical University is among one of the oldest medical universities in Russia. It is also known as RostSMU or RostGMU. It is established in 1930. This is a non-profit medical education institute that is located in Rostov-on-Don City, Russia and it is the largest Government Medical University in South Russian Federation. You can visit Rostov State Medical University website for more information related to University admission, fee, faculties, etc.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Russia is highly popular destinations to study medicine due to several reasons and affordability is one of them. It is a frontline choice to pursue medical education for many aspirants in India due to its flexible and student friendly admission policy. There are many medical universities in Russia that are NMC (National Medical Commission) recognized and government-affiliated as well. Consult RREC, the most reliable consultant for who offer a complete service for MBBS admission in Russia and the official representative of RostSMU.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Rostov State Medical University ticks most of the boxes when it comes to choosing a trustworthy medical university in Russia. A large number of international and Indian students enrolled in faculties like General Medicines, Pediatrics, Dentistry and Pharmacy. RostSMU offers degree that is recognized and approved by WHO, ECFMG, GMC, NMC, IMED, USMLE and other organization worldwide. Students from more than 30 countries come here to pursue medical education such as Africa, Europe, UAE, Asia, etc. </p>
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8">
                        Accreditation
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">RostSMU is duly accredited by the Ministry of Health and Education of the Russian Federation. It is also approved and recognized by NMC (National Medical Commission) and WHO (World Health Organization). The Rostov State Medical University, offers a wide range of pre-bachelor degrees, bachelor degrees, master degrees and doctorate degrees in medical education and other areas of study. It is one of the esteemed choices for MBBS in Russia.</p>
                    <div className="w-full text-justify text-left">
                        <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8">
                            Other programmatic accreditations include:
                        </h2>
                        <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                            {[
                                "Canadian Medical Council",
                                "Ministry of Public Health and Social Medicine, Russian Federation",
                                "German Science and Humanities Council",
                                "Bangladesh Medical and Dental Council",
                                "Thailand Medical and Dental Council",
                                "American Osteopathic Association",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/thumbnails/036/626/964/small_2x/ai-generated-gold-star-on-transparent-background-png.png"
                                        alt="icon"
                                        className="w-8 h-6 mr-3"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-4">
                        Rostov State Medical University Ranking
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        Rostov State Medical University ranking has significantly improved recently. It only signifies consistency and productivity of the University. As per uniranking website: country rank  225, world rank  6106.
                    </p>
                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">
                        Rostov State Medical University: Rankings Updated: March 02, 2025 EduRank
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        Rostov State Medical University ranked 121st in Russia, 4918th in the global 2025 rating, and scored in 87 research topics. Rostov State Medical University ranking is based on 3 factors: research output (EduRank's index has 3,457 academic publications and 8,980 citations attributed to the university), non-academic reputation, and the impact of 3 notable alumni.
                    </p>
                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">
                        Medicine rankings
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        Rostov State Medical University ranked 24th for Medicine in Russia and 2657th in the World with 3,045 publications made and 7,925 citations received. Main research topics: Pathology, Surgery, Psychiatry, Immunology, Radiology and Nuclear medicine.
                    </p>


                    <div className="bg-gradient-to-r from-red-600 to-red-800 mt-8 text-white p-6 rounded-2xl flex justify-between items-center">
                        {/* Left Side - Text Content */}
                        <div className="text-left">
                            <h2 className="text-xl lg:text-2xl font-semibold">
                                Rating lists of Medical Institutions in the Russian Federation
                            </h2>
                        </div>

                        {/* Right Side - Image and Button */}
                        <div className="flex items-center space-x-4">
                            <img src="https://symbl-world.akamaized.net/i/webp/21/08f7ccb39112ff90082acf32e8406e.webp" alt="Arrow Right" className="w-12 h-12" />
                            <a href="https://cgispburg.gov.in/rating-lists-of-medical-institutions-in-the-russian-federation.php" target="_blank" rel="noopener noreferrer">
                                <button className="bg-white text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
                                    See Rating
                                </button>
                            </a>
                        </div>
                    </div>



                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">
                        Courses and faculties
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        Students can enroll in various faculties such as medicine, pediatrics, pharmacy, dentistry and so on. RostSMU has 6 faculties (General Medicine, Dentistry, Pediatrics, Pharmacy, Preparatory course, Post Graduate and Continuous Education) and 91 departments, a Military Training Center, a Clinic and Medical College. Moreover, there is a Central Scientific Research Laboratory that carries out studies and research on microbiology, genetics, etc.
                    </p>
                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">
                        Infrastructure
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        RostSMU is among one of the reputed and oldest universities in Russia. It has produced a bulk of alumni that are working worldwide in reputed organizations, hospitals and institutions. What makes the university special and indispensable is its core values and state of the art infrastructure that is essential to bring forth best from the students during their MBBS Program. This is the reason why it is considered one of the highly-rated universities to pursue medical education.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        RostSMU or RostGMU is the largest medical research, training and treatment center in southern Russia. No wonder it consistently involves in cooperation and joint researches with many scientific institutions in Russia and also on the global front. Rostov State Medical University, Rostov, is also well equipped with advanced and high-tech academic buildings, lecture halls, comprehensive laboratories, latest diagnostic and medical equipment.
                    </p>
                    <h1 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">
                        Accommodation and Hostel Facility
                    </h1>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        Accommodation or hostel facility is offered at RostSMU for foreign students. Owing to a government institution you can expect an affordable hostel facility. The accommodation is based on a sharing basis where students are supposed to accommodate 3 students in a large room. However, students will be provided a separate bed, wardrobe, study table. Some of the highlights of Rostov State Medical University hostel are as follows:
                    </p>
                    <ul className="text-left text-justify text-md lg:text-lg font-roboto mt-4 list-disc list-inside">
                        <li>Vast rooms with 3 beds sharing facility.</li>
                        <li>All essentials and necessities such as a bedsheet, pillow, blanket, chair, study table, etc. are duly provided to the students.</li>
                        <li>A proper canteen facility is available for students.</li>
                        <li>Those students who love to cook themselves are provided a common kitchen where they can cook their own food.</li>
                        <li>Indian restaurants and messes are densely available in the vicinity.</li>
                        <li>Students may also avail the facility like a recreation room, laundry room, gym nearby, library, etc.</li>
                    </ul>

                    <h1 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">
                        Why Choose Rostov State Medical University
                    </h1>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        There is more than enough reason to rely on Rostov State Medical University for doing an MBBS in Russia. It is a globally renowned medical institute and it is the hub for international students including a large number from India. Some of the prominent reasons are listed below:
                    </p>

                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">No Donation</h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        Pursuing the MBBS program from a reputed foreign university may not be everybody’s cup of tea, especially when a donation is one of the factors to deal with. As far as RostSMU is concerned, you need not pay any donation. The admission process in RostSMU is purely based on merit. Hence, you need not pay any kind of donation for taking admission to the MBBS course. It makes getting medical education quite feasible for many striving aspirants.
                    </p>

                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">Quality Education at a Low Cost</h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        One of the substantial benefits of taking admission in RostSMU is that there are already a healthy number of Indian graduates who have already completed Medicine from this university and working in various top-notch private and public sector health organizations across the globe. Despite a remarkable teaching standard and unparalleled education state-of-the-art infrastructure, the Rostov State Medical University fees are considerably affordable for Indian students as it is a non-profit and government-affiliated university.
                    </p>

                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">Direct Admission</h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        Cracking the medical entrance exam in India is reckoned as the next big thing to achieve, isn’t it? Every year a high number of candidates appear in Medical Entrance Exam in India, however, only a limited number of students can go through a due limited number of seats. RostSMU will be a wiser as well as a greater option for those who are looking to overleap the hurdle of tiresome entrance exams and follow their dream of achieving a globally renowned medical degree. RostSMU has a selective admission policy based on higher secondary percentages or grades and entrance exams of two subjects: Biology & Chemistry.
                    </p>

                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">Listed in Top 20 Universities in Russia</h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        No wonder, as an aspirant of MBBS from abroad, you would like to get into a top-notch medical university in Russia. RostSMU is listed in the top twenty medical universities in Russia. Hence, you can expect to achieve most of your education goals in a higher way. Rostov State Medical University’s ranking always helps aspirants to know about its quality of medical education and impeccable infrastructure. Currently, Rostov State Medical University’s country ranking is 248, which is quite healthy from all perspectives.
                    </p>

                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">Eminent Teachers and Professors</h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        Rostov State Medical University consists of more than 100 departments. It includes above 600 faculties and experts facilitating their services with sheer dedication, contributing to its innovation and interactive forms of learning. The team of highly experienced teaching staff includes subject-expert professors, medical practitioners, and scientists, another reason why Rostov State Medical University, Russia is regarded extremely higher on students and parents’ choice for MBBS course.
                    </p>

                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">Sophisticated Technology</h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        If you want to compete with the best in this world you can hardly afford to ignore the use of the latest technology and advanced teaching methodology, are you? RostSMU is well-equipped with the most refined and revised infrastructure necessary to render top medical education. It also pioneers in using the latest technology to leverage your effort and maximize optimum productivity.
                    </p>

                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">Subsidized Medical Education</h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        Students can pursue medical education at a subsidized cost. The government provides a subsidy that helps both aspirants to avail high-quality education at a lower cost. This further reduces a load of expense during the whole course of MBBS. Thus, pursuing medicine from Rostov State Medical University is highly beneficial for Indian students. RostSMU is a non-profit institution hence cost of education is always going to be comparatively cheaper than others.
                    </p>
                    <h2 className="txt-md text-gray-800 text-justify font-semibold lg:text-2xl mt-8">
                        Rostov State Medical University admission eligibility & documents:
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        In order to avoid the cancellation of your application for admission, you should be well informed of the eligibility as well as the whole Rostov State Medical University admission procedure.
                    </p>

                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">
                        Eligibility for admission
                    </h2>
                    <ul className="list-disc text-left text-justify text-md lg:text-lg font-roboto mt-4 ml-6">
                        <li>The age of the applicants must be 17 years on or before 31st Dec of the year of admission to MBBS in RostSMU.</li>
                        <li>The applicant must have passed the higher secondary school.</li>
                        <li>The subjects in 12th must comprise Physics, Chemistry, Biology, and English.</li>
                        <li>The percentage must be 60% per subject in ECB.</li>
                        <li>NEET is mandatory for Indian students.</li>
                        <li>IELTS and TOEFL are not required.</li>
                    </ul>


                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">
                        Document required for admission in RostSMU 2024/25
                    </h2>
                    <ul className="text-left text-justify text-md lg:text-lg font-roboto mt-4 list-disc pl-6">
                        <li>A passport with at least 2 years of validity.</li>
                        <li>Certificate and mark sheet of 10th class. (Higher school)</li>
                        <li>Certificate and mark sheet of 12th class. (Secondary school)</li>
                        <li>The NEET Scorecard. (with Qualified marks)</li>
                        <li>Fees Guarantee letter for 6 years. from parents.</li>
                        <li>Notarized birth certificate if the student is not 18 years old.</li>
                        <li>20 passport size photo – 4.5 x 3.5 cm with 80% face at the matte paper.</li>
                        <li>Documents apostille from the Ministry of HRD & External Affairs, India.</li>
                        <li>Medical fitness certificate.</li>
                        <li>Report of HIV test (Negative).</li>
                        <li>Documents should be translated & legalized by the Russian Embassy.</li>
                    </ul>

                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">
                        Know admission process step by step
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        The most essential factor you should remember regarding RostSMU admission in 2024 is the deadline. If you apply for admission within the deadline, there will be no problem at all in accomplishing the admission process online. Here are the steps to follow for admission.
                    </p>
                    <ul className="text-left text-justify text-md lg:text-lg font-roboto mt-4 list-decimal pl-6">
                        <li>Fill the online application form correctly. You can visit the online portal of the university for this. You can visit the authorized and official representative of the RostSMU – RREC team as well where you will be duly guided regarding a complete online form application.</li>
                        <li>Submit all relevant documents related to the admission online. The team of RREC will help students in submitting all relevant documents online.</li>
                        <li>The applicant will receive a provisional admission letter in 2-3 working days if selected, the invitation letter within 5-7 working days for Indian students, and for others 28-30 working days.</li>
                        <li>Once you receive the invitation letter from the Rostov State Medical University. RREC Team will help you with documentation, visa, and ticket. After getting a visa you are now ready to fly to study MBBS in RostSMU. Note please: The student must pay full fees for the first year before 5 days to departure.</li>
                        <li>On arrival to university, the student has to pass the entrance exam of biology & chemistry successfully.</li>
                    </ul>

                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">
                        Rostov State Medical University admission cost & duration
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        Duration for the MBBS course in RostSMU is 6 years to complete MBBS for those who have chosen English as their medium of study.<br />
                        Undoubtedly, Rostov State Medical University’s fee structure is quite reasonable and affordable for Indian students as compared to several western universities. Though the Rostov State Medical University fee structure remains the same for six years, however, it may rarely change 3-4% every year.
                    </p>

                </div>


                {/* Middle Section */}
                <div className="text-center">

                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8 mb-2">
                        Fees for Medicine (MBBS)
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
                                    { label: "Tuition Fee", firstYear: "6100 USD", secondYear: "4550 USD", },
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
                        The Admission Process Explained Step by Step
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-700 text-justify">
                        The RostSMU admission process for MBBS study has been made quite simple and straightforward.
                        However, you need to be aware of the deadline. If you apply for admission within the deadline,
                        there will be no problem at all in completing the admission process online. Here are the steps
                        to follow for admission:
                    </p>


                    {/* Steps List */}
                    <div className="mt-4 space-y-3 w-full">
                        {[
                            { step: "Step 1:", text: `Fill the online application form correctly. You can visit the online portal of the website for this. Alternatively, you can visit the authorized and official representative of RostSMU – RREC, where you will be duly guided regarding a complete online form application.` },
                            { step: "Step 2:", text: `Submit all relevant documents related to the admission online. Alternatively, you may once again visit the RREC office.` },
                            { step: "Step 3:", text: `The applicant will receive the admission letter in 3-5 working days and an invitation letter within 4 weeks after applying if selected.` },
                            { step: "Step 4:", text: `Once you receive the invitation letter from the Rostov State Medical University, Russia, you would need to pay the tuition fee for the MBBS course.` },
                            { step: "Step 5:", text: `After getting the original payment receipt of fees and invitation letter from the University, you can proceed with the student visa process. Once you obtain the visa, you are now ready to fly and study MBBS in RostSMU. RREC will assist in managing all processes in both India & Russia.` },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row md:items-start md:space-x-3 w-full">
                                <span className="text-red-600 font-semibold flex-shrink-0">{item.step}</span>
                                <p className="text-gray-700 text-justify md:text-left md:flex-1">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">
                    Beware of the fake or unofficial representative of Rostov State Medical University
                </h2>

                {/* Paragraph */}
                <p className="text-gray-700 text-justify">
                    As a matter of fact, it is quite true that many unauthorized or unofficial agents try to take maximum advantage of the reputation and popularity of Rostov State Medical University. During the consultation for MBBS in Russia, you may confront several agents who claim to be an official representative of RostSMU, however, they are not.
                </p>
                <p className="text-gray-700 mt-4 text-justify">
                    In such a scenario, you need to be aware of the fact that such agents or middlemen may try to lure you with attractive schemes or several other misleading and unauthorized information regarding Rostov State Medical University admission. Here you need to be clever and considerate and only give your final consent to the only official representative of RostSMU.
                </p>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-6">
                    Call for more details about the university, admission, processing, and fees at MBBS in RostSMU, Russia:
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
                    International Students can take direct flights from their native country to Platov International Airport Rostov.
                </h2>
                <h3 className="text-lg lg:text-2xl font-semibold">
                    It's located in the city (Every day flights are available)
                </h3>
            </div>
        </>
    )
}
export default Rostov;