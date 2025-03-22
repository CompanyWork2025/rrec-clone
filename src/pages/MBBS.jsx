import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const MBBS = () => {

    const bannerRef = useRef(null);
    const isInView = useInView(bannerRef, { once: true });

    const courses = [
        { name: "Medicine (MBBS)", duration: "6 years" },
        { name: "Preparatory course", duration: "8-10 months" },
        { name: "Pharmacy", duration: "4 years" },
        { name: "Dentistry", duration: "5 years" },
        { name: "Nursing", duration: "4 years" },
    ];

    const universities = [
        "Rostov State Medical University",
        "Lobachevsky University",
        "Crimea Federal University – Medical Academy",
        "Volgograd State Medical University",
        "IFMB-Kazan Federal University",
        "North-Western State Medical University named I.I. Mechnikov",
        "Kazan State Medical University",
        "Peoples’ Friendship University",
        "Kursk State Medical University",
        "North Ossetian State Medical Academy",
        "Far Eastern Federal University",
        "Yaroslavl State Medical University",
    ];

    const advantages = [
        "World-class and advanced medical education system combined with adequate infrastructure that offers impeccable and reliable practical and research-based training.",
        "There are plenty of seats for International students and sufficient doctor-patient ratio to practice medicine in Russia.",
        "Among the top 100 medical universities in the world, 30 belongs to Russian medical universities.",
        "The degree acquired after the completion of the MBBS course is recognized all over the world and it is accredited by the NMC of India and WHO.",
        "IELTS, TOEFL is not mandatory for admission. It also saves the cost of appearing for such tests.",
        "The course curriculum of medical universities in Russia is very similar to Indian medical colleges.",
        "Students can return to India and pursue post-graduation or continuous education without any extra cost.",
        "Students are eligible to practice a medical career anywhere in the world after clearing medical licensing exam of the respective country.",
        "Russia and India share a pleasant economic, political and social relationship, hence students will study in a peaceful environment.",
        "The cost of doing MBBS in Russia for Indian students is reasonably low and affordable as compared to private medical colleges in India.",
        "Both English and Russian program is available, Indian students can choose English as a language of instruction for MBBS course in Russia.",
        "Accommodation is easily available to Indian students in the form of a campus hostel or accommodation outside the campus.",
        "Majority of medical universities facilitate coaching centers to prepare NEXT/FMGE screening tests.",
        "Russia is not too expensive, hence the cost of living is quite affordable.",
        "The cost of living will be $120-150 depending on their lifestyle.",
        "Variety of Indian, Chinese, Malaysian, European and Continental food is also available in hostel mess or in city restaurants & Cafes.",
        "Students can make their own food because adequate provision is available in the hostel."
    ];


    return (
        <>
            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Study <span className="text-red-600">MBBS</span> in Russia
                    </h1>
                    <h1 className="text-md lg:text-xl text-red-600 font-semibold mt-4">
                        Study MBBS in Russia – Top Rank Russian Universities
                    </h1>
                    <p className="text-gray-800 mt-4 text-justify text-md lg:text-lg font-roboto">
                        Becoming a doctor is a coveted dream for many aspirants in India. Hence in the pursuit of your dream career, if the selection of the best medical university is not given due consideration, your dream might end-up in a nightmare. Especially when you are searching for MBBS abroad, your admission to a top-grade NMC recognized medical university can play a vital role in a successful medical career and goal achievement. Study MBBS in Russia can be a great option when you are searching for MBBS registration 2025. The current data reveals that students all over the world are immensely passionate and enthusiastic about doing MBBS courses due to certain advantage of study MBBS in Russia. The MBBS admission process is very simple and hassle-free. Indian students can get direct admission and there is no need to appear for any additional country-wise entrance examination such as MCAT to get admission in the MBBS course.
                    </p>
                    <p className="text-gray-800 mt-4 text-justify text-md lg:text-lg font-roboto">
                        Russia is not only the largest country in the world but has a very advanced and updated education system as well. It has established a pristine infrastructure that is best to none and paralleled to many USA, Canada and European top-grade medical universities and institutions. Experienced faculty member and teaching staff that comprises professors, scientists, academicians, lab experts of eminent-pedigree provide their services in medical universities in Russia. However, the prime reason to be part of a proud list of students who are already completed their MBBS in Russia and practicing their medical careers in worldwide is its world-class medical education at low-cost fees. This is simply unbeatable because the cost of living is quite affordable and MBBS fees in Russia are unarguable 3 times lesser than many top private colleges in India and it is less than other countries like the USA, UK, Canada, etc.
                    </p>
                    <h1 className="text-md lg:text-xl text-red-600 font-semibold mt-4">
                        About Russia
                    </h1>
                    <p className="text-gray-800 mt-4 text-justify text-md lg:text-lg font-roboto">
                        Russia is a beautiful and also the largest country in the world. The country is extended in 17.1 million sq.km area which is almost 1/8th area of the earth. The territory of Russia occupies the East of Europe and the North of Asia. Moscow and St. Petersburg (also known as Northern Capital) are the two major and largest cities in the country. Due to the large expansion of its territory, the country has multiple climatic conditions. It has a very dry to hot summer whereas in winter experiencing snowfall is very common. The country is covered with 13 seas, thousands of rivers and millions of lakes. Russia has is divided into as many as 11 time zones. It shares its boundaries with several neighboring nations such as China, Finland, Mongolia, Belarus, Kazakhstan and Ukraine.
                    </p>
                    <p className="text-gray-800 mt-4 text-justify text-md lg:text-lg font-roboto">
                        Russia has many world heritage sites and monumental structures. There are many tourist attractions such as Moscow Kremlin, Hermitage Museum, Saint Basil’s Cathedral, Trans-Siberian Railways, Kizhi Island, Suzdal, Mount Elbrus, Lake Baikal, Valley Geysers etc. Russia is the land of exotic and beautiful cities that attract tourists from all over the world such as Rostov-on-Don, Kazan, St. Petersburg, Moscow, Yekaterinburg, Novosibirsk, Samara, Omsk, Nizhny Novgorod, etc. Russia also has an advanced local transport system that facilitates people in smooth traveling. It takes less than 7 hours flight from Delhi to reach Moscow.
                    </p>
                </motion.div>

                <div className="mt-6 font-roboto bg-white rounded-lg my-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold text-center mb-6"
                    >
                        Why RREC <span className="text-red-600">(Reliable Russian Educational Consultants) </span>
                        is so Reliable and Popular in India?
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-4 text-lg text-justify"
                    >
                        To study MBBS in Russia in a top-ranked medical university is a matter of pride. Hence taking any risk to go through unknown or unreliable agents will risk not only your hard-earned money but students’ career as well. Hence, choosing the best educational consultant abroad like RREC who is the best in the business and have more than 16 years of exceptional and flawless experience not only enhance your chances of getting admission to a top-grade medical university of your choice through direct admission but provide you a stellar opportunity to get an internationally recognized MBBS degree as well.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-4 text-lg text-justify"
                    >
                        The RREC team is the official representative and an authorized admission partner of all the NMC recognized medical universities in Russia that are listed on our website. We assure that you will never feel alone and isolated in your journey towards your dream destination. We discharge all the responsibility and work related to direct admission in NMC recognized Russian Medical University that starts from providing honest opinion and information to empower you to choose the best medical university in Russia. If you are interested and contact us for MBBS abroad, we never let you down and that’s our promise.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-4 text-lg text-justify"
                    >
                        Unlike others, we are a true and authorized admission partner in Russia and other prominent universities in the world. Even if students find themselves in any sort of trouble after admission our university representative will always be there to listen to their issues during the entire duration of MBBS in Russia for Indian students. Absolute transparency, trustworthy advice and quality services are our motto and aspiration that drives us apart and in a different league than others. Contact us without any hesitation, even if you want to drop-in for just formal advice and suggestion regarding MBBS education or MBBS registration 2025.
                    </motion.p>

                    <div className="py-4 font-roboto">
                        <div className="py-4 font-roboto">
                            <h2 className="text-2xl font-bold mb-4">
                                Remarkable Achievement and Services by RREC for Indian Students
                            </h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    Have been helping students and parents all over the country achieving
                                    their MBBS goal.
                                </li>
                                <li>Provide the best educational consultancy for MBBS abroad in Russia.</li>
                                <li>
                                    Awarded for reliable, trusted, and performance-driven results in
                                    MBBS admission abroad.
                                </li>
                                <li>
                                    Valuable and irreplaceable guidance for appearing screening test
                                    (NEXT/FMGE) and getting NMC registration.
                                </li>
                                <li>Affordable charges without any hidden cost.</li>
                                <li>
                                    Hassle-free admission, travel, accommodation arrangement in Russia.
                                </li>
                                <li>
                                    Official admission partner for more than 22+ universities in Russia.
                                </li>
                                <li>
                                    Our contact number is mentioned on the university official website.
                                </li>
                                <li>History of successful MBBS admission and zero rejection.</li>
                                <li>24×7 services and expert support.</li>
                                <li>100% successful admission in MBBS.</li>
                                <li>Tie-up with top-notch medical universities in Russia.</li>
                                <li>Highly efficient consultant team and support staff.</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                Reasons that attract students doing MBBS in Russia
                            </h2>
                            <h3 className="text-xl font-semibold mb-2">Get Direct Admission in MBBS Course</h3>
                            <p>
                                If doing MBBS is the only thing in your mind, then a direct admission in MBBS in the top medical universities in Russia through RREC will be the most appropriate solution in 2025. Trustful guidance is another crucial thing to direct admission in the top medical university. RREC is an official admission partner to study MBBS in Russia (Check our contact number for personal satisfaction on the official website of NMC recognized Medical Universities in Russia) provide all assistance, guidance and complete information to get you through in MBBS admission with entrance exams required by Russian Universities.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">Subsidized MBBS Education</h3>
                            <p>
                                Indian students have to go through immense extortion and mental stress when pursuing MBBS in Indian private medical colleges are concerned as the cost of MBBS in India is not everybody’s cup of tea to afford. On the other hand, Russian Government Medical Universities offer low-cost MBBS through direct admission for Indian students. The reason for the extremely low-cost MBBS program is the subsidized education policy from the Russian Government. Thus, the fees of MBBS in Russia are almost three times cheaper as compared to India. Mind you, medical education is simply world-class, thus there is no compromise with the quality at any cost.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                Admission 100% through Authorized Admission Partner
                            </h3>
                            <p>
                                Russian Medical Colleges accept admission applications through official representative and an authorized admission partner only to trample any form of fraud and fake efforts. RREC the official partner in India facilitates all kinds of support and assistance to get hassle-free direct admission to the NMC recognized medical university of your choice.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                Loan Assistance to Study MBBS in Russia
                            </h3>
                            <p>
                                If you are looking for an education loan to pursue the MBBS program in Russia, the RREC team does help you with the relevant information to get the education loan. Moreover, Students can apply in public or private banks for education loans. If they furnish all essential and requisite documents to the university, the bank will sanction the loan without any hiccup. If students want to acquire a loan of more than 7.5 lakh, they have to give collateral for that. However, a repayment loan option is readily there to grab.
                            </p>
                            <p className="mt-4">
                                Many universities also provide semester wise MBBS fees if you are not able to deposit the yearly tuition fees at once. The RREC team also helps parents and students to know all details to pursue MBBS in Russia. Our team of education consultants helps you until you get final enrollment and MBBS registration in 2025 in the Medical University of your choice and throughout your 6-year MBBS tenure in Russia.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                MBBS Course in English Medium for International Students
                            </h3>
                            <p>
                                This is an ideally suitable advantage of study MBBS in Russia for Indian and international students. There are plenty of NMC recognized Russian medical universities that offer MBBS in English medium. The duration of the English medium MBBS course is 6 years while the Russian medium MBBS program’s duration is 7 years. However, the Russian language is taught in the first-three years to all international students so that they don’t have to confront any issue while dealing with the patients in the hospital during their training and day-to-day issues outside the campus.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                Sophisticated Infrastructure
                            </h3>
                            <p>
                                Without adequate infrastructure facilities for training and research purpose, it is almost impossible to render world-class medical education. That is why the Russian Government pays considerable attention in developing advanced infrastructure students interested in doing MBBS abroad. The campus buildings, scientific laboratories, hostels, research centres, sports & leisure halls and so on are well-equipped with the latest types of equipment and state of the art facilities. Moreover, global standards and measures are followed in all established and top-grade medical universities.
                            </p>


                            <h3 className="text-xl font-semibold mt-6 mb-2">Globally Recognized Degree</h3>
                            <p>
                                The degree obtained after the completion of the MBBS course in Russia is accepted, acknowledged and recognized all over the world. RREC assures you to overcome and dissolve all sorts of doubts and apprehensions regarding all relevant aspects to study MBBS in Russia so that you can make your decision confidently and conveniently.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">Experienced and Globally Renowned Faculty</h3>
                            <p>
                                “To be the best you have got to be trained by the best”. Getting the best medical education is almost impossible without the best faculties. Since many Russian medical universities are listed in the WHO top 100 medical universities in the world, the professors, teachers and academicians teaching in the university have strong international influence and experience to teach international students. They have scientific backgrounds and hold doctorate degrees.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">Benefits of doing MBBS in Russia</h3>
                            <p>
                                Russian Medical Universities are renowned all over the world for their unparalleled and unique teaching methods that are primarily focused on practical learning and training. The emergence of Russia in the last 2 decades is extremely fruitful for MBBS in Russia for Indian students as it is the best option for them because it offers exceptional medical education at an affordable and low-cost. The advantage of study MBBS in Russia is abundant such as:
                            </p>
                            <ul className="list-disc pl-4 mt-4 text-md font-roboto space-y-2">
                                {advantages.map((advantage, index) => (
                                    <li key={index} className="text-black">{advantage}</li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-semibold mt-6 mb-2">Disadvantages to study MBBS in Russia for Indian Students</h3>
                            <p>
                                Though Russia is reckoned as one of the appropriate destinations for the MBBS program, yet there are few areas where Indian students have to negotiate with challenging conditions, such as:
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>The climate of Russia can be challenging to adapt initially.</li>
                                <li>In winter, the temperature is very cold condition.</li>
                                <li>The temperature goes below zero-degree. Snowfall is very common in winter.</li>
                                <li>Initially, students have to face homesickness as they have to stay away from family and home.</li>
                                <li>Students may get in contact with the indigenous diseases found in Russia.</li>
                                <li>They will find themselves in an entirely new culture and tradition and it takes time to mix with them.</li>
                                <li>The local language is Russian, so students will have some issues dealing with locals until they learn the Russian language which is taught in the first year of MBBS.</li>
                                <li>Russia has a modern lifestyle that may distract students from their goal.</li>
                                <li>It will be difficult to adapt to a new place, weather, culture, and unfamiliar language.</li>
                            </ul>

                            <h2 className="text-lg font-semibold mt-4">Quality Benchmark & Duration for MBBS</h2>
                            <p>
                                Sans doubt, Russian medical universities have set a quality benchmark in the education industry. It also consistently focuses on technically upgraded classrooms and advanced scientific labs. For this reason, the medical university in Russia is on boom like never before, attracting medical aspirants from all over the world.
                            </p>
                            <p>
                                The MBBS duration in Russia is 6 years for English medium and 7 years for Russian medium. It includes one-year internship in Russia.
                            </p>

                            <h2 className="text-lg font-semibold mt-4">Fees/Low-cost MBBS in Russia</h2>
                            <p>
                                Russia is an affordable place for MBBS course. The education is subsidized by the Russian Government. Hence the cost of MBBS in Russia is comparatively cheaper and low as compared to India and other parts of the world including the USA, UK, Canada, etc. The cost of the English-taught MBBS course normally ranges between $3800-9000$ yearly depending on the university. Hence to study MBBS in Russia for Indian Students is preferably better than paying huge donation in India
                            </p>
                        </div>

                        <div className="p-0">
                            <h2 className="text-xl text-center font-bold mb-4">Medical Courses in Russia</h2>
                            <table className="w-full border border-gray-300">
                                <thead>
                                    <tr className="bg-red-600 text-white">
                                        <th className="border p-2">Name of Course</th>
                                        <th className="border p-2">Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.map((course, index) => (
                                        <tr key={index} className="border">
                                            <td className="border p-2">{course.name}</td>
                                            <td className="border p-2">{course.duration}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <h2 className="text-xl font-bold mt-6">Accreditation & Recognition of Medical Universities</h2>
                            <p className="mt-2">
                                Russian medical universities are duly accredited and recognized by the National Medical Commission of India (NMC). It has also been accredited by World Health Organization (WHO), United State Medical Licensing Examination (USMLE), FAIMER, American Medical Association (AMA), United Nation Education, Scientific & Cultural Organization (UNESCO), European Credit Transfer and Accumulation system (ECTAS), Department of Education (USA), and the General Medical Council of Britain.
                            </p>
                        </div>
                    </div>
                    <div className="text-gray-800 mx-auto">
                        <h2 className="text-xl font-bold mb-4">Hostel & Accommodation for Indian Students</h2>
                        <p className="mb-4">
                            International students are offered hostels facility at affordable cost. The hostel buildings and rooms are well-furnished with all modern and essential necessities such as central heating system, water, electricity, Wi-fi, laundry, bedsheet, study-table, etc. The hostel building comprises double and triple bedded arrangements. Common Kitchen is also available for those who want to cook their own food. Moreover, plenty of restaurants and cafeterias are also available at nearby distance serving delicious Indian, European, Chinese, Malaysian and more food.
                        </p>
                        <p className="mb-4">
                            Students can also reside in a rented apartment in Russia, nevertheless, it is recommended to seek the university hostel during the initial years until students do not get familiar with the local language and environment. There is a separate arrangement for boys and girls. Hostel buildings and university campus are quite safe and secure for both girls and boys. All modern safety arrangements are duly applied in universities to ensure safe and peaceful environment for medical education. RREC representative will also help students to find suitable accommodation in Russia.
                        </p>

                        <h2 className="text-xl font-bold mt-4 mb-4">Admission Intake and Deadline</h2>
                        <p className="mb-4">
                            To get hassle-free admission students should know about intake, deadline and beginning of the academic session. The admission process starts by June. However, the appropriate time to apply for admission is before October. The intake begins in September. It is advisable get the admission procedure and MBBS registration 2025 completed well before the deadline.
                        </p>
                        <p className="mb-4">
                            The academic year for MBBS study in Russia consists of 2 semesters of 18 weeks each. The first semester begins in September till January and the second semester in February till June. Students can relish a vacation of 2 weeks in January and 6 weeks in July-August. Students should reach there before 10 September every year.
                        </p>

                        <h2 className="text-xl font-bold mt-4 mb-4">English medium MBBS course</h2>
                        <p className="mb-4">
                            The medium of instruction in abundant of NMC recognized medical is English. It is highly beneficial for international students including Indians. The Russian language is also taught to students which facilitate them to learn the local language and dialect as well. Teaching and training for the English-medium MBBS course are provided by professors highly experienced and expert in teaching foreign universities.
                        </p>
                        <p className="mb-4">
                            Here RREC would like to inform parents and students that agents who are neither authorized representative not have direct access to university admission, often exhibit tuition fees for Russian taught MBBS program or falsely promoting a bilingual MBBS course as a fully English-taught course. The fees for such program are cheaper than complete English medium course but they take you fees of English-taught course. Hence you should be very careful about this. Get in touch with our education consultant for free counseling to understand everything about the medium of instruction and other doubts.
                        </p>

                        <h2 className="text-xl font-bold mt-4 mb-4">Cost of living in Russia</h2>
                        <p className="mb-4">
                            Despite having a lavish lifestyle and culture the cost of living in Russia is relatively cheaper than in many western countries like Canada, USA, UK, etc. For Indian students, the average monthly expense on living will be around $120-160. St. Petersburg and Moscow are top cities in Russia hence the cost of living during the MBBS in Russia for Indian students will be higher.
                        </p>

                        <h2 className="text-xl font-bold mt-4 mb-4">Who is eligible to Pursue MBBS in Russia?</h2>
                        <p className="mb-4">
                            If you have made up your mind to follow your dream MBBS course in Russia you should know who can get admission to the medical university without any issue. Indian students can apply through the online admission procedure which is hassle-free and trouble-free as well. The age of the candidate interested in doing MBBS in a reputed medical university should be 17 years in the year in which the admission is applied for. He/she must have completed his/her higher secondary education from a recognized institution or board in India. The student must have cleared higher secondary with subjects like Physics, Chemistry and Biology including English and secured a minimum of 50% marks in accumulation. MBBS without NEET is not permissible, so you should also clear NEET as we. Moreover, if you want to pursue a postgraduate program you should have a bachelor degree from a recognized university.
                        </p>

                        <h3 className="text-xl font-semibold mt-6">Eligibility for Admission</h3>
                        <ul className="list-disc pl-5 mt-4 mb-4">
                            <li>The candidate must attain 17 years of age on or before 31 December of the year in which the admission is sought.</li>
                            <li>The candidate must have completed Higher Secondary School (12th) from a reputed board. Candidate must have scored at least 50% aggregate marks in Physics, Chemistry & Biology.</li>
                            <li>NEET scorecard with qualifying marks.</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6">List of Documents Required</h3>
                        <ul className="list-disc pl-5 mt-4 mb-4">
                            <li>12th & 10th mark sheet and certificate</li>
                            <li>Notarized birth certificate</li>
                            <li>Official invitation letter from the university</li>
                            <li>NEET scorecard</li>
                            <li>A Valid Passport with 18 months minimum validity</li>
                            <li>Valid visa</li>
                            <li>First-year tuition fee’s bank receipt</li>
                            <li>HIV test document (negative test results)</li>
                            <li>6 months bank statement of father or mother</li>
                            <li>Migration card</li>
                            <li>10 passport size photos</li>
                            <li>Embassy legalization of all documents</li>
                            <li>All documents must be authorized from the Ministry of External Affairs, New Delhi</li>
                        </ul>


                        <h3 className="text-xl font-semibold mt-6">Scope and Opportunity after Doing MBBS in Russia</h3>
                        <p className="mt-4 mb-4">
                            There is deluge of options for Indian students if they complete their MBBS from the Russian medical university. Many Indian students prefer to return to the homeland to continue their career in medical fields whereas many of them opt to continue their education or career in Russia or some other countries like the USA, UK and Canada.
                        </p>
                        <p className="mb-4">
                            Indian students have to go through NEXT (National Exit Test), formerly known as Foreign Medical Graduates Examination (FMGE) screening exam to practice in India. The FMGE screening exam is conducted twice a year in which candidates are required to secure 50% marks to clear the test.
                        </p>
                        <p className="mb-4">
                            Students can continue their medical practice in Russia also after the completion of MBBS after following the local norms. As a physician, doctors’ average earning is near about 6-8 lakhs Russian Ruble per annum. In India, the average earning of an MBBS doctor is 8-10 lakhs per annum.
                        </p>
                        <p className="mb-4">
                            International students who have completed their MBBS in Russia can also continue 2 years residency to acquire specialization in particular medical domains like gynecology, cardiology, neurology, pediatrics and so on.
                        </p>

                        <h3 className="text-xl font-semibold mt-6">Study MBBS in Russia without NEET</h3>
                        <p className="mb-4">
                            NEET (National Eligibility cum Entrance Test) qualification is compulsory for students who are looking for admission in private or government medical colleges in India or MBBS abroad. Moreover, NEET qualification is also required to sit in the NEXT/FMGE screening test when students come back to India. Hence Study MBBS in Russia without NEET is not recommended as all major and top Russian medical universities ask for NEET scorecard for admission eligibility.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-4">NEET Eligibility for MBBS in Russia 2025</h3>
                        <p className="mt-4 mb-4">
                            The minimum age to appear in the NEET exam is 17 years at the time of admission or by December 31, 2025. There is no upper age limit. Candidates must have passed in qualifying subjects Physics, Chemistry, Biology, and English. The validity of the NEET 2025 results will be three years from the date of its announcement. The minimum qualifying mark as per NEET 2025 is as such below:
                        </p>
                        <table className="table-auto w-full border border-gray-300 mb-4">
                            <thead>
                                <tr className="bg-red-600 text-white">
                                    <th className="border px-4 py-2">Category</th>
                                    <th className="border px-4 py-2">Minimum aggregate percentage in PCB</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">General</td>
                                    <td className="border px-4 py-2">50%</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">General – PWD</td>
                                    <td className="border px-4 py-2">45%</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">SC/ST/OBC/Reserved-PWD</td>
                                    <td className="border px-4 py-2">40%</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="text-xl font-semibold mt-6">How RREC Team Plays a Pivotal Role for MBBS in Russia for Indian Students in 2025?</h3>
                        <p className="mb-4">
                            RREC (Russian Reliable Educational Consultants) is the official representative or partner for many NMC recognized medical universities in Russia which makes us the number one educational consultant for MBBS abroad. Parents and students can see our contact number as an authorized representative for admission in 2025 for their satisfaction.
                        </p>
                        <p className="mb-4">
                            We are in this domain for many years, helped thousands of medical aspirants reaching their medical goals. Young students and their parents are not aware of the procedure involved in MBBS admission in Russia. As a result, they often get into the hand of unauthorized agents who easily befool them by fishing several attractive and floating schemes which hardly exist.
                        </p>
                        <p className="mb-4">
                            Such agents often ask to pay 6 years fees altogether which the university does not ask for. They may also bait students by offering them 60% subsidized education in Russia if they get admission through them. However, the fact is that the Russian Government provide subsidy on education that reduces the cost of doing MBBS in Russia by 50-60 percent and it is available for all without paying anything to agents. Indian students will benefit from this subsidy naturally without giving anything to agents. There are various similar fake tricks and fake promises made by agents who are neither authorized not have direct contact with the medical university in Russia. They are simply middlemen and not any education consultant. Hence, consulting them can be vulnerable for your career and money as well.
                        </p>

                        <div className="space-y-6 text-gray-700">
                            <h3 className="text-xl font-semibold">What should students and parents do then?</h3>
                            <p>
                                Candidates who are interested to study MBBS in Russia should always consult the most experienced and authentic official representative for MBBS admission in Russia. Here are some essential points that will help you to avoid fake agents and become a victim of forgery:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Always consult the official representative of the MBBS admission to a top medical university in Russia.</li>
                                <li>Do not believe the educational advisor you are consulting until you are fully satisfied with their approach, true intent, and identity as an official representative.</li>
                                <li>The relation of the Educational advisor or consultant does not end once you are placed into the medical university of your choice, but it goes along through the entire course and up to the completion of your study, stay in RF.</li>
                            </ul>

                            <h3 className="text-xl font-semibold">Advantages to Study MBBS in Russia for Indian students through RREC</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>A one-stop solution for MBBS admission in Russia in 2025.</li>
                                <li>Direct admission in MBBS for Indian students.</li>
                                <li>RREC is a registered educational consultant in India & in Russia.</li>
                                <li>Students are safe from all kinds of fraud and fake work.</li>
                                <li>We are an Official representative and authorized consultant for admission in all NMC recognized medical universities in Russia mentioned on our website.</li>
                                <li>Students and parents can check and see RREC contact number on the university official website for their satisfaction.</li>
                                <li>All information under one roof, from selecting a university to getting admission.</li>
                                <li>Authentic information provided to parents and students at every step.</li>
                                <li>Never hides any facts and truths, sheer transparency guaranteed.</li>
                                <li>Trusted by parents and students across the country.</li>
                                <li>100% admission placement in the top medical universities in Russia.</li>
                                <li>Provide 100% assurance for direct admission, including visa and travel arrangements.</li>
                                <li>Excellent support system for Indian students.</li>
                                <li>Opportunity to connect with students already pursuing MBBS in top Russian universities.</li>
                                <li>True commitment, transparent policy, and unconditional assistance throughout the MBBS course.</li>
                                <li>Complete advice and information on MBBS admission, fees, accommodation, scholarship, and loan application.</li>
                                <li>The RREC team handles everything from pre-admission till arrival in the university and accommodation to settlement.</li>
                                <li>Even students can contact our official representative present in the university whenever they are in need.</li>
                                <li>History of successful MBBS admission and zero rejection.</li>
                                <li>24x7 services and expert support.</li>
                                <li>100% assurance for admission in MBBS.</li>
                                <li>Tie-up with top-notch medical universities in Russia.</li>
                                <li>Highly efficient team of consultants and support staff.</li>
                                <li>Continuous support and assistance until the completion of course in Russia.</li>
                                <li>The RREC team is a popular choice of students in India because of our sheer reliable and honest dealing.</li>
                                <li>Minimum charges and fees with no hidden cost.</li>
                            </ul>
                        </div>

                        <div className="space-y-6 mt-6 text-gray-700">
                            <h3 className="text-xl font-semibold">Admission Procedure for Russian Universities</h3>
                            <p>The online admission procedure for MBBS in Russia is convenient and transparent. It involves the following steps:</p>

                            <h4 className="text-lg font-semibold">Step 1: Application Form</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Fill in the application form online.</li>
                                <li>Upload all the relevant scanned documents such as:</li>
                                <ul className="list-disc pl-10 space-y-2">
                                    <li>Notarized translation of document supporting identity and citizenship proof (Passport).</li>
                                    <li>All educational documents and certificates with notarized translation (legalization of documents, if necessary).</li>
                                    <li>Consent letter to the processing of personal data of the candidate.</li>
                                </ul>
                            </ul>

                            <h4 className="text-lg font-semibold">Step 2: Approval of Application</h4>
                            <p>The university authority will notify the candidate about the approval of the application after reviewing the online application form and documents. It may take 10-15 days.</p>

                            <h4 className="text-lg font-semibold">Step 3: University Invitation</h4>
                            <p>Once the candidate’s online admission application is approved, the selected candidates are sent an invitation letter from the university.</p>

                            <h4 className="text-lg font-semibold">Step 4: Visa Process</h4>
                            <p>Once the invitation letter and visa invitation are issued (by the university officials), the Embassy of the Russian Federation is contacted to acquire a student visa. Documents required:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Passport (minimum validity – 18 months).</li>
                                <li>Original invitation letter.</li>
                                <li>Date of Birth certificate.</li>
                                <li>Original 12th certificate and standard mark sheet.</li>
                                <li>10 passport size photos (35*45 mm).</li>
                                <li>First-year tuition fees payment receipt.</li>
                                <li>Visa fees.</li>
                                <li>Medical certificate issued by a reputed private clinic with a blood report of HIV specimen attached.</li>
                                <li>Original Signed authority letter for visa collection.</li>
                                <li>Minor Affidavit on Rs100 stamp paper from parents if the student is below 18 years.</li>
                                <li>Photocopy of ID of parents.</li>
                            </ul>

                            <h4 className="text-lg font-semibold">Step 5: Arrival in Russia</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Candidates should get a migration card on arrival to the Russian Federation at the airport. The stamp on the migration card will signify their entry into the Russian Federation.</li>
                                <li>A representative from the RREC team will receive the student at the airport and assist with further formalities.</li>
                            </ul>

                            <h4 className="text-lg font-semibold">Step 6: University Formalities</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Upon arrival at the university, students must visit the Department of Visa Support and Migration Registration to submit the migration card, which is proof of entry into Russia.</li>
                                <li>Indian students must submit their documents for registration to the Dean’s office for international students within 3 days of arrival in Russia.</li>
                                <li>Students will undergo a thorough medical check-up.</li>
                            </ul>

                            <h4 className="text-lg font-semibold">Step 7: Agreement and Payment</h4>
                            <p>Students will have to sign an education agreement for studying MBBS in Russia to become legitimate students of the university and make any due payments if required.</p>
                        </div>


                        <div className="space-y-6 mt-6 text-gray-700">
                            <h3 className="text-xl font-semibold">What RREC Team Do For You?</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Online application form submission for admission.</li>
                                <li>Receiving university invitation letter on student’s behalf.</li>
                                <li>Provide 100% assurance and assistance for visa.</li>
                                <li>Meeting with the Embassy of the Russian Federation.</li>
                                <li>Flight arrangement from Delhi to Moscow.</li>
                                <li>Receiving students at Moscow Airport.</li>
                                <li>Pre-departure briefing and tips and guidance for comfortable settlement for MBBS in Russia.</li>
                                <li>Procuring appropriate hostel or accommodation arrangement in Russia.</li>
                                <li>Providing all sorts of assistance to students to settle down in Russia.</li>
                                <li>Arrangement of food/mess for Indian students.</li>
                                <li>Assistance after admission whenever needed.</li>
                            </ul>

                            <p>
                                We believe all the relevant and valuable information has been delivered here, which will be adequate for your search for MBBS in Russia. For any further information on MBBS admission in an NMC-recognized medical university in Russia, you can directly contact us at the head office in Delhi and branches in India. You will find us a true companion and a trustworthy representative for admission to the MBBS program in Russia.
                            </p>
                        </div>
                        <div className="space-y-6 mt-6 text-gray-700">
                            <h3 className="text-xl font-semibold">Universities for 2025 with Us</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                {[
                                    { name: "Rostov State Medical University", route: "/rostov-state-medical-university" },
                                    { name: "Ural State Medical University", route: "/ural-state-medical-university" },
                                    { name: "Crimea Federal University", route: "/crimea-federal-university-russia" },
                                    { name: "Kemerovo State Medical University", route: "/kemerova-state-medical-university" },
                                    { name: "Far Eastern Federal University", route: "/fareastern-federal-university" },
                                    { name: "Kazan State Medical University", route: "/kazan-state-medical-university" },
                                    { name: "Bashkir State Medical University", route: "/bashkir-state-medical-university" },
                                    { name: "Volgograd State Medical University", route: "/volgograd-state-medical-university-russia" },
                                    { name: "Kursk State Medical University", route: "/kursk-state-medical-university-russia" },
                                    { name: "Synergy University Moscow", route: "/synergy-university-moscow" },
                                    { name: "NWSMU named after I.I Mechnikov", route: "/north-ossetian-state-medical-academy-russia" },
                                    { name: "Krasnoyarsk State Medical University", route: "/krasnoyarsk-state-medical-university" },                        
                                    { name: "Ivanovo State Medical University", route: "/ivanovo-state-medical-university" },
                                    { name: "Pitirim Sorokin Syktyvkar State University", route: "/pitirim-sorokin-syktyvkar-state-university" },
                                    { name: "PFUR Moscow", route: "/peoples-friendship-university-russia" },
                                    { name: "Maikop State Technical University", route: "" },
                                    { name: "Immanuel Kant Baltic Federal University", route: "" },
                                    { name: "Samara State Medical University", route: "" },
                                    { name: "Novosibirsk State University", route: "" },
                                    { name: "Saint Luka Lugansk State Medical University", route: "" },
                                    { name: "Donestsk State Medical University named after M. Gorky", route: "" },
                                ].map((university, index) => (
                                    <li key={index}>
                                        <a href={university.route} className="text-blue-600 hover:underline">
                                            {university.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>

                <motion.div
                    ref={bannerRef}
                    className="bg-white mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-[#f2312d] py-12 px-4 mt-8 rounded-xl">
                        <div className="max-w-4xl mx-auto text-center font-roboto text-white">
                            <h2 className="text-2xl lg:text-md mb-4 font-semibold">Welcome to study MBBS in Russia with RREC Team</h2>
                            <h3 className="text-md font-semibold">Get MBBS Direct Admission, Join Reliable Russian Educational Consultants (RREC</h3>
                            <h3 className="text-md font-semibold">Admission open , interesting students may contact us</h3>
                            <h3 className="text-md font-semibold">Contact numbers: +917042284508, 509 (Indian office)</h3>
                            <p className="mt-4 text-lg lg:text-md">
                                Email: contact@rrecrussia.com, rrec.educonsultants@gmail.com
                            </p>
                            <p className="mt-4 text-lg lg:text-md">
                                Students or parents can write to us on at WhatsApp also +7-9515371133
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
export default MBBS;