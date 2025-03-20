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
                <title>Rostov State Medical University | MBBS Fee Structure</title>
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
                    <h2 className="text-md text-red-600 lg:text-xl mt-4">
                        Rostov State Medical University, Russia – A Gateway For An Extraordinary Medical Education
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Russia is reckoned as one of the highly popular destinations to study medicine. It is consistently preferred as one of the frontline choices to pursue medical education for many aspirants in India. Well, there are many NMC (National Medical Commission) recognize and government-affiliated medical universities in Russia, however, Rostov State Medical University is irresistibly a supreme choice for those who want to be assured of grabbing world-class medical education at affordable cost and willing to complete their MBBS with complete knowledge in their profession. Consult RREC (Doctors-Ideal Educational Advisors) a leading and official representative of Rostov State Medical University. Students and parents are welcome to www.thedoctorsiea.in for all sorts of inquiries regarding admission in MBBS in RostSMU. RostSMU is one of the oldest medical universities in Russia after Moscow, St. Petersburg, and Kazan. The only university in Rostov-on-Don, recognized by leading Medical councils viz. NMC, WHO, ECFMG, etc. Medical degrees obtained from the Rostov State Medical University are acceptable to the provincial/territorial medical regulatory authorities in Canada, and therefore acceptable to all medical organizations in Canada.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">A large number of Indian students who dream of pursuing MBBS abroad are opting for Rostov Medical University, Russia due to certain advantages that include direct admission, no donation, convenient accommodation, affordable fee structure, safety, and security as well as optimum education quality. Do not forget that clearing the medical entrance exam in India is one of the toughest jobs for even many exceptionally capable aspirants. As a result, many parents and students keep looking for the best Medical University in Russia that is not only budget-friendly but emanates quality medical education programs.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Rostov State Medical University ticks most of the boxes when it comes to choosing a trustworthy medical university in Russia. Thousands of international and Indian students enrolled in faculties like General Medicines, Pediatrics, Dentistry, and Pharmacy. RostSMU offers a degree that is recognized and acknowledged by WHO, NMC, GMC, ECFMG, USMLE, IMED, and other organizations worldwide. Students from more than 30 countries come here to pursue medical education such as Africa, Europe, UAE, Asia, etc. Students may also be benefitted from the Rostov State Medical University scholarship program. You need to check the eligibility on the official website of the University.</p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Overview of Rostov State Medical University
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Rostov is among one of the oldest and first medical universities in Russia. Rostov University came into existence in 1930. It is also known as RostSMU or RostGMU. This is a non-profit medical education institute that is located in Rostov-on-Don City, Russia and it is the largest Government Medical University in South Russian Federation. For more detail, you can visit Rostov State Medical University’s official website.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Accreditation and affiliation
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">RostSMU is duly accredited by the Ministry of Health and Education of the Russian Federation. It is also approved and recognized by NMC (National Medical Commission) and WHO (World Health Organization). The Rostov State Medical University, offers a wide range of pre-bachelor degrees, bachelor degrees, master degrees, and doctorate degrees in medical education and other areas of study. It is one of the esteemed choices for MBBS in Russia.</p>
                    <div className="w-full text-justify text-left">
                        <h2 className="text-md text-red-600 lg:text-xl mt-8">
                            Some other programmatic accreditations and recognitions include below:
                        </h2>
                        <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                            {[
                                "Canadian Medical Council",
                                "Ministry of Health & Education, Russian Federation",
                                "German Science and Humanities Council",
                                "Pakistan Medical and Dental Council",
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
                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        RostSMU – Quick Fact check
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
                        Rostov State Medical University Ranking
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Rostov State Medical University’s ranking has significantly improved which was already on a higher note. The current Rostov State Medical University country ranking and world ranking is given below: Country ranking – 248, World ranking – 5344 (As per Indian Embassy Listed in Top 20 in Russian Federation)</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Courses, Faculties & Infrastructure
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">All students enrolling in RostSMU will have to go through the preparatory course in physics, chemistry, and biology in their first year. Once this course is over, students will be enrolled in various faculties such as medicine, pediatrics, pharmacy, dentistry, and so on. RostSMU has 6 faculties (General Medicine, Dentistry, Pediatrics, Pharmacy, preparatory course, Post Graduate and Continuous Education) and 91 departments, a Military Training Center, a Clinic, and Medical College. Moreover, there is a Central Scientific Research Laboratory that carries out studies and research on microbiology, genetics, etc.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">As a student, you will be glad to know that RostSMU is among one of the oldest universities in Russia. Over the years it has produced a bulk of alumni that are working in various corners of the world in reputed organizations, hospitals, and institutions. What makes it different from others is its core values and state of the art infrastructure that is essential to carry out an assortment of practical and theoretical medical education. This is the reason why it is considered one of the best places to pursue medical education.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">RostSMU or RostGMU is the largest medical research, training, and treatment center in southern Russia. No wonder it consistently involves cooperation and joint researches with many scientific institutions in Russia and also on the global front. Rostov State Medical University, Rostov, is also well equipped with advanced and high-tech academic buildings, lecture halls, comprehensive laboratories, latest diagnostic and medical equipment.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Why choose Rostov State Medical University?
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">San doubt, Rostov State Medical University is a globally renowned medical institute and it is the hub for international students including a massive number of Indian aspirants.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Quality education at affordable fees
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">One of the substantial advantages of pushing yourself to take admission in RostSMU is that there is already an esteemed number of Indian graduates from this university working in various top-notch government organizations across the globe. Despite a remarkable teaching standard and unparalleled education state of the art infrastructure, the Rostov State Medical University fees are considerably affordable for Indian students as it is a non-profit and government-affiliated university.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        No donation
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">When you think of pursuing a medical course from a reputed foreign university, the concern of hefty donation is the first thing that looms in most of our minds. As far as RostSMU is concerned, you need not pay any donation. The admission process in RostSMU is purely based on merit. Hence, there is a total absence of donations for taking admission to the MBBS course.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        No competitive exam
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Cracking the medical entrance exam is still a cumbersome and insurmountable task for many aspirants in India. A bulk of aspirants appears in Medical Entrance Exam in India to compete for very selective seats. RostSMU will be a wiser as well as a greater option for those who are looking to overleap the hurdle of tiresome exams and follow their dream of achieving a globally renowned medical degree. RostSMU has a selective admission policy based on higher secondary percentages or grades and entrance exams.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Listed in top 20 universities in Russia
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">No wonder, as an aspirant of MBBS from abroad, you would like to get into a top-notch medical university in Russia. RostSMU is listed in the top twenty medical universities in Russia. Hence, you can expect to achieve most of your education goals in a higher way. Rostov State Medical University’s ranking always helps aspirants to know about its quality of medical education and impeccable infrastructure. Currently, Rostov State Medical University’s country ranking is 248, which is quite healthy from all perspectives.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Experienced and subject expert faculties
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Rostov State Medical University consists of more than 100 departments. It includes above 600 faculties and experts imparting their services with sheer dedication, contributing to its innovation and interactive forms of learning. The team of highly experienced teaching staff includes subject-expert professors, medical practitioners, and scientists, another reason why Rostov State Medical University, Russia is regarded extremely higher on students and parents’ choice for MBBS course.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Sophisticated infrastructure and technology
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">If you want to compete with the best in this world you can hardly afford to ignore the use of the latest technology and advance teaching methodology, are you? RostSMU is well-equipped with the most refined and revised infrastructure necessary to render top medical education. It also pioneers in using the latest technology to leverage your effort and maximize optimum productivity.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Subsidized medical education
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Since RostSMU or RostGMU comes under government regulation and the Ministry of Health and Education of the Russian Federation students can pursue medical education at a subsidized cost. The government provides a subsidy that helps both aspirants to avail high- quality education at a lower cost. This further reduces a load of expense during the whole course of MBBS. Thus, pursuing medicine from Rostov State Medical University is highly beneficial for Indian students.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        The medium of teaching in RostSMU
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The medium of teaching RostSMU is English and Russian. Hence as an Indian student, you can choose English as your primary and preferred language for doing MBBS in Russia. Nevertheless, Russian is also taught to all students in the first year so that they can get a handy knowledge of the mother tongue of Russia. Though you will pursue your medicine course in English, however, having knowledge of Russian will be quite handy to deals with people and situations both inside and outside the campus.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Cost and duration for MBBS in Rostov State Medical University
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">As far as the duration of the MBBS course in RostSMU is concerned, it takes 6 years to complete MBBS for those who have chosen English as their medium of study and 7 years for Russian Medium. Rostov State Medical University fees or cost is fairly cheap and affordable for Indian students as RostSMU or RostSMU is a government university.</p>
                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
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
                                    { label: "Tuition Fee", firstYear: "326,000 RUB", secondYear: "326,000 RUB", },
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
                    <a href="https://wa.me/917428212236" className="text-gray-700 hover:text-red-600 block">
                        💬 WhatsApp: +91-7428212236
                    </a>
                    <a href="https://wa.me/79515190376" className="text-gray-700 hover:text-red-600 block">
                        💬 WhatsApp: +7-9515190376
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