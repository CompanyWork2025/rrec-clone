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
                        Document required for admission in RostSMU 2025/25
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
                        The most essential factor you should remember regarding RostSMU admission in 2025 is the deadline. If you apply for admission within the deadline, there will be no problem at all in accomplishing the admission process online. Here are the steps to follow for admission.
                    </p>
                    <ul className="text-left text-justify text-md lg:text-lg font-roboto mt-4 list-decimal pl-6">
                        <li>Fill the online application form correctly. You can visit the online portal of the university for this. You can visit the authorized and official representative of the RostSMU – RREC team as well where you will be duly guided regarding a complete online form application.</li>
                        <li>Submit all relevant documents related to the admission online. The team of RREC will help students in submitting all relevant documents online.</li>
                        <li>The applicant will receive the invitation letter within 10-12 days if selected, after the final list of university.</li>
                        <li>Once you receive the invitation letter from the Rostov State Medical University, the next step is to pay the tuition fees in the university account.</li>
                        <li>After getting the original payment receipt and invitation letter from the University, you can apply for the Visa.  After getting a visa you are now ready to fly to study MBBS in RostSMU. </li>
                    </ul>

                    <h2 className="text-md text-red-600 text-justify font-semibold lg:text-lg mt-8">
                        Rostov State Medical University admission cost & duration
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        Duration for the MBBS course in RostSMU is 6 years to complete MBBS for those who have chosen English as their medium of study. It includes 1 year of compulsory internship as well.
                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">
                        Undoubtedly, Rostov State Medical University fees structure is quite reasonable and affordable for Indian students as RostSMU or RostSMU as compared to several western universities. Though the Rostov State Medical University tuition fee may rarely change 10-15% every year according to the annual rate of inflation.
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
                                    { label: "Tuition Fee", firstYear: "326000 RUB", secondYear: "326000 RUB", },
                                    { label: "Hostel Fee", firstYear: "21720 RUB", secondYear: "21720 RUB", },
                                    { label: "Visa Extension & Registration Fee", firstYear: "1920 RUB", secondYear: "1920 RUB", },
                                    { label: "Medical Insurance", firstYear: "5800-7000 RUB", secondYear: "5800-7000 RUB", },

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
                    <h2 className="text-xl font-semibold text-red-600 mb-4 mt-8 text-center">
                        How to Distinguish Fake Agents or Middlemen
                    </h2>
                    <p className="text-justify text-md lg:text-lg text-gray-700">
                        Undoubtedly, over the years, many unauthorized or unofficial agents have surged who try to take maximum advantage of the reputation and popularity of Rostov State Medical University. During the consultation for MBBS in Russia, you may confront several agents who claim to be an official representative of RostSMU; however, they are just creating false assumptions to trap you in.
                    </p>
                    <p className="text-justify text-md lg:text-lg text-gray-700 mt-4">
                        Under such circumstances, both students and parents must be aware of the fact that such agents or middlemen may try to distract you with attractive schemes or several other misleading and unauthorized information regarding Rostov State Medical University admission. Here you need to be wise and clever. You should consult the appointed and official representative of RostSMU, which is RREC Pvt. Ltd.
                    </p>
                    <h3 className="text-xl font-semibold text-red-600 mb-4 mt-8 text-center">
                        Some points to remember to avoid any misleading event:
                    </h3>
                    <ul className="list-disc list-inside space-y-4 text-justify text-md lg:text-lg text-gray-700 mt-4">
                        <li><strong>Agent may ask for the whole 6-year amount or fees.</strong> You should not do this. The reason being, RostSMU asks you to pay fees yearly only. Moreover, you should always get written assurance for whatever promises they make regarding the fees. Remember, agents can’t force you to pay them in person.</li>
                        <li><strong>The Rostov State Medical fee structure</strong> of the English medium MBBS program and the Russian medium MBBS program may vary considerably. However, often some agents offer you a fee structure that is Russian-based, which is comparatively cheaper than the English medium. Stay away from such misleading information often used by them to trap you.</li>
                        <li><strong>They may ask you to pay them directly.</strong> The fact is that you are supposed to pay the fees in the RostSMU account directly and get the payment receipt, or you can pay through the official appointed representative.</li>
                        <li><strong>They may also ask you to pay some sort of miscellaneous charges</strong> which they will not clarify upfront. They may provide excuses for several expenses or charges that incurred till the departure of the students to RostSMU, Russia. The fact is that the fees of the course generally include both tuition and hostel. If you do not want to avail of a hostel, then the amount will not be charged by the university.</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-red-600 mb-4 mt-8 text-center">
                        The medium of Instruction in RostSMU
                    </h3>
                    <p className="text-justify text-md lg:text-lg text-gray-700 mt-4">
                        The medium of teaching RostSMU is English and Russian. Hence as an Indian student, you can choose English as your primary and preferred language for doing MBBS in Russia. It should be in your knowledge that the cost of English medium is higher than that of Russian. However, Russian is taught to all students in the first three years (As per medical curriculum of RF) so that they can get a handy knowledge of the mother tongue of Russia. Having knowledge of Russian will be quite handy to deals with people and situations both inside and outside the campus.
                    </p>
                    <p className="text-justify text-md lg:text-lg text-gray-700 mt-4">
                        By and large, as a student or parent, you need to be smart enough to avoid getting trapped in any baffling assurances, misleading Rostov State Medical University fee structures, or floating schemes used by such agents. Most of the information regarding RostSMU or RostGMU is available at the Rostov State Medical University representative website
                        <a href="https://www.rrecrostov.com" className="text-blue-600 underline"> www.rrecrostov.com</a>. Hence, you should make decisions wisely based on genuine and valid information provided by the agent and not settle for anything until you are completely convinced and satisfied by their identity as an official representative of RostSMU.
                    </p>
                    <p className="text-justify text-md lg:text-lg text-gray-700 mt-4">
                        <strong>RREC Pvt. Ltd</strong> is the official and authorized representative of RostSMU. Parents and students are heartily welcome and invited for consultation and doubt clearance regarding admission in RostSMU, which is entirely free of cost.
                    </p>
                    <div className="bg-gray-100 font-roboto">
                        <h2 className="text-xl font-semibold text-red-600 mb-4 mt-8 text-center">
                            Clearing NEXT Exam or Screening Test
                        </h2>
                        <p className="text-justify text-md lg:text-lg text-gray-700">
                            Foreign Medical Graduate Examination (FMGE) screening test was an indispensable exam that needed to be cracked if you wanted to pursue your career or practice medicine in India after taking Rostov State Medical University admission and completing MBBS from RostSMU or any other Russian University. However, the FMGE screening test is abolished now by the regulatory authorities. This test was essential and mandatory to pass in order to get the provisional or permanent registration licensing from the National Medical Commission of India. You will also be considered eligible for a one-year internship in India after clearing this exam.
                        </p>

                        <h3 className="text-xl font-semibold text-red-600 mb-4 mt-8 text-center">
                            Important Information Regarding FMGE / NEXT (National Exit Test) Screening
                        </h3>
                        <ul className="list-disc list-inside space-y-4 text-justify text-md lg:text-lg text-gray-700 mt-4">
                            <li>Just appearing in the FMGE/NEXT exam does not mean you are qualified to get provisional or permanent registration from NMC in India; you need to pass it as well.</li>
                            <li>You should always provide correct or legitimate information while filing the form. Any wrong or misleading information will not only cancel your appearance but also bar you from appearing in any exam conducted by NBE in the future.</li>
                            <li>You must be well-informed and aware of the eligibility criteria, scheme, and pattern of the examination before filling out the application form.</li>
                            <li>To appear in the FMGE/NEXT exam, the candidate must complete their primary medical qualification (MBBS) from an NMC-approved university in Russia.</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-red-600 mb-4 mt-8 text-center">
                            Opportunity After Completing MBBS/Medicine from RostSMU
                        </h2>
                        <p className="text-justify text-md lg:text-lg text-gray-700">
                            After completing MBBS from RostSMU, you can opt for a variety of career options both in Russia as well as other parts of the world. Some of the best career options for you are listed below:
                        </p>
                        <ul className="list-disc list-inside space-y-4 text-justify text-md lg:text-lg text-gray-700 mt-4">
                            <li>Students can prefer to continue practicing MBBS in Russia, also need to follow the local norms as per RF.</li>
                            <li>You may come back to India and practice MBBS after passing a relevant exam (FMGE screening test).</li>
                            <li>Students can prepare for the USMLE (USA) test.</li>
                            <li>He/She can choose to practice in the USA after clearing the USMLE.</li>
                            <li>He/She can apply for a Postgraduate course from Germany, the USA, or any other country, but must follow the local norms of the selected country.</li>
                            <li>You can prepare for PLAB.</li>
                            <li>The RostSMU MBBS degree is recognized worldwide. Hence, you have an opportunity to study and work in several prominent parts of the world.</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-red-600 mb-4 mt-8 text-center">
                            RostSMU Reviews
                        </h2>
                        <p className="text-justify text-md lg:text-lg text-gray-700">
                            Needless to mention that honest and fair Rostov State Medical University reviews always come in handy when it comes to making the right decision and knowing about the firsthand experience of those who have already been to RostSMU. Several students who are pursuing or have completed their medical studies from the university provide their insight in the form of reviews, some of which are mentioned below:
                        </p>
                        <div className="bg-gradient-to-r from-red-600 to-red-800 p-8 mt-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl text-white mb-6 text-center font-bold">
                                RostSMU Students Feedback
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "How to Get Direct Admission?", videoId: "aWRUegjs4N8" },
                                    { title: "RostSMU Hostels", videoId: "Nm-Iox9uDdE" },
                                    { title: "Final Year Student", videoId: "WXsS5xa3ELw" },
                                    { title: "Few Words for RostSMU", videoId: "3XORUckYcsE" },
                                    { title: "Fresher's Party 2024", videoId: "dliKGMOentA" },
                                    { title: "Simulation Center", videoId: "kw4m5uRpygk" },
                                    { title: "Admission Open for 2025 - Rostov State Medical University Call 1800-572-5827", videoId: "WNn4v0qb574" },
                                    { title: "Choose to study MBBS at RSMU today and grow into the best professional doctor you have been dreaming to become.", videoId: "cn1LvbvhNvU" },
                                    { title: "Rostov City at a Glance", videoId: "k463U6miofA" }
                                ].map((video, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                                        <iframe
                                            className="w-full h-48 rounded-lg"
                                            src={`https://www.youtube.com/embed/${video.videoId}`}
                                            title={video.title}
                                            allowFullScreen
                                        ></iframe>
                                        <h3 className="text-md text-gray-800 font-semibold mt-3 text-center">{video.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white mt-8">
                            <h2 className="text-xl text-red-600 font-bold text-gray-900 mb-4">
                                Overall Environment, Safety and Security
                            </h2>
                            <p className="text-gray-700 mb-4">
                                RostSMU offers soothing campus environment. Apart from the academic exposure, students get an opportunity to mix and learn from other students that belongs to different part of the globe. Usually, the RostSMU campus encourages and promotes cultural and extracurricular activities to get the best out of them. In this way, students get variety of exposure for both academic and non-academic activities.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Safety and security is another major issue that may grow serious concern for parents and students. The inside environment of the RostSMU is peaceful. Moreover, the city of Rostov-on-Don also has an impressive record on safety and security measures, particularly for foreign students. The people, police and administration are quite cooperative and friendly. They deal with foreigners with polite and tender behavior. However, there are some notable and extra safety tips you may follow to avoid any inconvenient event include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Always carry some sort of identification or essential documents like passport, identity card, registration paper etc. with you.</li>
                                <li>Always be aware and alert of your surroundings.</li>
                                <li>Avoid travelling late at night until it is essential.</li>
                                <li>Always keep an emergency contact or helpline number with you to refer in need.</li>
                                <li>Avoid talking to or mingle with strangers.</li>
                                <li>The policemen may ask you often for identification as foreigners in the city are easily spotted due to their vivid appearance. Take it easy it is normal and natural.</li>
                                <li>Stay away from any bad habits or addiction.</li>
                                <li>Avoid late-night parties and clubbing.</li>
                                <li>Focus on your aim and goal.</li>
                            </ul>

                            <h2 className="text-xl text-red-600 font-bold text-gray-900 mb-4">
                                Advantages Students Destined for While Choosing RostSMU for MBBS
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Some prominent advantages at Rostov State Medical University, Rostov comprise:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Equipped with on-campus Central Scientific Research Laboratory (CSRL).</li>
                                <li>Comprehensive scientific-investigation activities.</li>
                                <li>Own Military Training Center.</li>
                                <li>Having Medical University Clinic with 860 beds.</li>
                                <li>17+ clinical department and 20+ specialized departments in the clinic.</li>
                                <li>Five dedicated buildings, including hostel, gym, library, etc.</li>
                                <li>Rostov State Medical University hostel facilities are quite affordable.</li>
                                <li>Member of the North Caucasus Research Center High School.</li>
                                <li>Rostov State Medical University reviews are highly satisfying so far.</li>
                            </ul>
                            <p className="text-gray-700">
                                In brief, RostSMU will be the right choice and wise option for medical education in Russia. RREC Pvt. Ltd the official representative of RostSMU will always be there to provide all assistance and consultation for the admission in RostSMU. Feel a free to contact us for free consultation, visit <a href="https://www.rrecrussia.com" className="text-blue-600 hover:underline">www.rrecrussia.com</a>.
                            </p>
                        </div>
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
                    <a href="tel:+917042284508" className="text-gray-700 hover:text-red-600 block">
                        📞 +91-7042284508, 7042284509
                    </a>
                    <a href="tel:18005725872" className="text-gray-700 hover:text-red-600 block">
                        📞 Toll-free 1800-572-5827 (For Indian Students)
                    </a>
                    <a href="tel:+79515371133" className="text-gray-700 hover:text-red-600 block">
                        📞 +7-9515371133 (International Students)
                    </a>
                </div>

                {/* WhatsApp Numbers */}
                <div className="mt-4 space-y-2 text-center">
                    <a href="https://wa.me/917042284508" className="text-gray-700 hover:text-red-600 block">
                        💬 WhatsApp: +91-7042284508
                    </a>
                    <a href="https://wa.me/79515371133" className="text-gray-700 hover:text-red-600 block">
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