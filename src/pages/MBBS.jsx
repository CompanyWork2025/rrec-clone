import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const MBBS = () => {

    const bannerRef = useRef(null);
    const isInView = useInView(bannerRef, { once: true });

    const courses = [
        { name: "Medicine (MBBS)", duration: "6 years" },
        { name: "Pediatrics", duration: "5 years" },
        { name: "Pharmacy", duration: "5 years" },
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
                        Becoming a doctor is a coveted dream for many aspirants in India. Hence in the pursuit of your dream career, if the selection of the best medical university is not given due consideration, your dream might end-up in a nightmare. Especially when you are searching for MBBS abroad, your admission to a top-grade NMC recognized medical university can play a vital role in a successful medical career and goal achievement. Study MBBS in Russia can be a great option when you are searching for MBBS registration 2024. The current data reveals that students all over the world are immensely passionate and enthusiastic about doing MBBS courses due to certain advantages of study MBBS in Russia. The MBBS admission process is very simple and hassle-free. Indian students can get direct admission after NEET qualified marks; as NEET is mandatory for all Indians students to take admission in India or abroad.
                    </p>
                    <p className="text-gray-800 mt-4 text-justify text-md lg:text-lg font-roboto">
                        Russia is not only the largest country in the world but has a very advanced and updated education system as well. It has established a pristine infrastructure that is best to none and paralleled to many USA, Canada, and European top-grade medical universities and institutions. Experienced faculty members and teaching staff that comprises professors, scientists, academicians, lab experts of eminent-pedigree provide their services in medical universities in Russia. However, the prime reason to be part of a proud list of students who are already completed their MBBS in Russia and practicing their medical careers worldwide is its world-class medical education at low-cost fees. This is simply unbeatable because the cost of living is quite affordable and MBBS fees in Russia are unarguable 3 times lesser than many top private colleges in India and it is less than other countries like the USA, UK, Canada, etc.
                    </p>
                    <h1 className="text-md lg:text-xl text-red-600 font-semibold mt-4">
                        About Russia
                    </h1>
                    <p className="text-gray-800 mt-4 text-justify text-md lg:text-lg font-roboto">
                        Russia is a beautiful and also the largest country in the world. The country is extended in 17.1 million sq. km area which is almost 1/8th area of the earth. The territory of Russia occupies the East of Europe and the North of Asia. Moscow and St. Petersburg (also known as Northern Capital) are the two major and largest cities in the country. Due to the large expansion of its territory, the country has multiple climatic conditions. It has a very dry to hot summer whereas in winter experiencing snowfall is very common. The country is covered with 13 seas, thousands of rivers, and millions of lakes. Russia has is divided into as many as 11 time zones. It shares its boundaries with several neighboring nations such as China, Finland, Mongolia, Belarus, Kazakhstan, and Ukraine.
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
                        The RREC team is the official representative and an authorized admission partner of all the NMC recognized medical universities in Russia that are listed on our website. We assure you that you will never feel alone and isolated in your journey towards your dream destination. We discharge all the responsibility and work related to direct admission in NMC recognized Russian Medical University that starts from providing honest opinion and information to empower you to choose the best medical university in Russia. If you are interested and contact us for MBBS abroad, we never let you down and that’s our promise.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-4 text-lg text-justify"
                    >
                        Unlike others, we are a true and authorized admission partner in Russia and other prominent universities in the world. Even if students find themselves in any sort of trouble after admission our university representative will always be there to listen to their issues during the entire duration of MBBS in Russia for Indian students. Absolute transparency, trustworthy advice, and quality services are our motto and aspiration that drives us apart and in a different league than others. Contact us without any hesitation, even if you want to drop-in for just formal advice and suggestion regarding MBBS education or MBBS registration 2024.
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
                                    Official admission partner for more than 20 universities in Russia.
                                </li>
                                <li>
                                    Our contact number is mentioned on the university’s official website.
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
                                If doing MBBS is the only thing in your mind, then a direct admission in
                                MBBS in the top medical universities in Russia through RREC will be the
                                most appropriate solution in 2024. Trustful guidance is another crucial
                                thing to direct admission to the top medical university. RREC is an
                                official admission partner to study MBBS in Russia (Check our contact
                                number for personal satisfaction on the official website of NMC
                                recognized Medical Universities in Russia) provide all assistance,
                                guidance, and complete information to get you through in MBBS admission
                                without entrance exam.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">Subsidized MBBS Education</h3>
                            <p>
                                Indian students have to go through immense extortion and mental stress
                                when pursuing MBBS in Indian private medical colleges are concerned as
                                the cost of MBBS in India is not everybody’s cup of tea to afford. On
                                the other hand, Russian Medical Universities offer low-cost MBBS through
                                direct admission for Indian students. The reason for the extremely
                                low-cost MBBS program is the subsidized education policy from the
                                Russian Government. Thus, the fees of MBBS in Russia are almost three
                                times cheaper as compared to India. Mind you, medical education is
                                simply world-class, thus there is no compromise with the quality at any
                                cost.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                Admission 100% through Authorized Admission Partner
                            </h3>
                            <p>
                                Russian Medical Colleges accept admission applications through an
                                official representative and an authorized admission partner only to
                                trample any form of fraud and fake efforts. RREC the only official
                                partner in India facilitates all kinds of support and assistance to get
                                hassle-free direct admission to the NMC recognized medical university of
                                your choice.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                MBBS Course in English Medium for International Students
                            </h3>
                            <p>
                                This is an ideally suitable advantage of study MBBS in Russia for Indian
                                and international students. There are plenty of NMC recognized Russian
                                medical universities that offer MBBS in English medium. The duration of
                                the English medium MBBS course is 6 years while the Russian medium MBBS
                                program’s duration is 7 years. However, the Russian language is taught
                                in the first-year to all international students so that they don’t have
                                to confront any issue while dealing with the patients in the hospital
                                during their training and day-to-day issues outside the campus.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">Globally Recognized Degree</h3>
                            <p>
                                The degree obtained after the completion of the MBBS course in Russia is
                                accepted, acknowledged, and recognized all over the world. RREC assures
                                you to overcome and dissolve all sorts of doubts and apprehensions
                                regarding all relevant aspects to study MBBS in Russia so that you can
                                make your decision confidently and conveniently.
                            </p>
                        </div>

                        <div className="p-0">
                            <h2 className="text-2xl font-bold mb-4">Medical Courses in Russia</h2>
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

                            <h2 className="text-2xl font-bold mt-6">Accreditation & Recognition</h2>
                            <p className="mt-2">
                                Russian medical universities are duly accredited and recognized by
                                various international organizations such as NMC (India), WHO, USMLE,
                                FAIMER, AMA, UNESCO, ECTAS, and GMC (Britain).
                            </p>

                            <h2 className="text-2xl font-bold mt-6">Top Medical & Federal Universities</h2>
                            <ul className="list-disc ml-6 mt-2">
                                {universities.map((uni, index) => (
                                    <li key={index}>{uni}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="text-gray-800 mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Hostel & Accommodation for Indian Students</h2>
                        <p className="mb-4">
                            International students are offered hostel facilities at an affordable cost. The hostel buildings and rooms
                            are well-furnished with modern necessities such as a central heating system, water, electricity, Wi-Fi,
                            telephone, laundry, bedsheet, study-table, etc. The hostel includes single, double, and triple-bedded
                            arrangements. A common kitchen is also available for students who want to cook their own food. Various
                            nearby restaurants serve Indian, European, Chinese, Malaysian, and Russian food.
                        </p>

                        <h3 className="text-xl font-semibold mt-6">Eligibility Requirement</h3>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Applicants must be at least 17 years old by December 31 of the admission year.</li>
                            <li>Must have passed higher secondary school with Physics, Chemistry, Biology, and English.</li>
                            <li>Minimum 50% marks in PCB; some universities require 65% in PCB.</li>
                            <li>NEET is mandatory for Indian students.</li>
                            <li>IELTS and TOEFL are not required.</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6">Documents Required</h3>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Valid passport (minimum 2 years).</li>
                            <li>10th and 12th class certificates and mark sheets.</li>
                            <li>NEET scorecard with qualified marks.</li>
                            <li>Fees guarantee letter for 6 years from parents.</li>
                            <li>Notarized birth certificate if under 18 years old.</li>
                            <li>20 passport-sized photos (4.5 x 3.5 cm).</li>
                            <li>Documents apostilled by Ministry of HRD & External Affairs, India.</li>
                            <li>Medical fitness certificate & HIV negative report.</li>
                            <li>Documents must be translated & legalized by the Russian Embassy.</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6">Scope & Opportunity after MBBS in Russia</h3>
                        <p className="mb-4">
                            Graduates have multiple career options: practicing in India after clearing NEXT/FMGE, continuing higher
                            studies in Russia, or pursuing opportunities in the USA, UK, and Canada. Specialization in various medical
                            fields is also an option.
                        </p>

                        <h3 className="text-xl font-semibold mt-6">NEXT/FMGE/USMLE/PLAB Preparation</h3>
                        <p className="mb-4">
                            Russian medical universities offer coaching for NEXT/FMGE exams from the first year. Students can also
                            prepare for USMLE (USA) and PLAB (UK) alongside their studies.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-4">NEET Eligibility for MBBS in Russia 2024</h3>
                        <table className="table-auto w-full border border-gray-300 mb-4">
                            <thead>
                                <tr className="bg-red-600 text-white">
                                    <th className="border px-4 py-2">Category</th>
                                    <th className="border px-4 py-2">Minimum PCB Percentage</th>
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

                        <h3 className="text-xl font-semibold mt-6">Admission Intake & Deadline</h3>
                        <p className="mb-4">
                            Admissions begin in June, with the deadline in October. Intake starts in September, and students should
                            arrive by September 10. The academic year consists of two semesters: September-January and February-June.
                        </p>

                        <h3 className="text-xl font-semibold mt-6">English Medium MBBS Course</h3>
                        <p>
                            Many universities offer MBBS programs in English. However, students are also taught Russian to help them
                            communicate locally. Be cautious of unauthorized agents promoting bilingual courses as fully English-taught.
                            Contact RREC for free consultation and verification.
                        </p>
                    </div>

                    <div className="text-gray-800">
                        <h2 className="text-2xl font-bold">Cost of living in Russia</h2>
                        <p>Despite having a lavish lifestyle and culture the cost of living in Russia is relatively cheaper than in many western countries like Canada, the USA, the UK, etc. For Indian students, the average monthly expense on living will be around $120-160. St. Petersburg and Moscow are top cities in Russia hence the cost of living during the MBBS in Russia for Indian students will be higher.</p>

                        <h2 className="text-2xl font-bold mt-4">Who is eligible to Pursue MBBS in Russia?</h2>
                        <p>If you have made up your mind to follow your dream MBBS course in Russia you should know who can get admission to the medical university without any issue. Indian students can apply through the online admission procedure which is hassle-free and trouble-free as well.</p>

                        <p>The age of the candidate interested in doing MBBS in a reputed medical university should be 17 years in the year in which the admission is applied for. He/she must have completed his/her higher secondary education from a recognized institution or board in India. The student must have cleared higher secondary with subjects like Physics, Chemistry, and Biology including English and secured a minimum of 50% marks in accumulation. MBBS without NEET is not permissible, so you should also clear NEET as well. Moreover, if you want to pursue a postgraduate program you should have a bachelor’s degree from a recognized university.</p>

                        <h2 className="text-2xl font-bold mt-4">Admission Procedure for Russian Universities</h2>
                        <p>The online admission procedure for MBBS in Russia is convenient and transparent. It involves the following steps:</p>

                        <h3 className="text-xl font-semibold mt-3">Step 1: Application Form</h3>
                        <p>Fill in the application form online or visit the RREC head office or any local branch in your state. Upload all the relevant scanned documents online to our website such as; passport, school certificates, NEET result.</p>

                        <h3 className="text-xl font-semibold mt-3">Step 2: Approval of Application & Admission letter</h3>
                        <p>RREC team will check all documents properly and will apply for you to your selected university. University will take 4-5 working days for application approval and then they will issue an admission letter or provisional letter.</p>

                        <h3 className="text-xl font-semibold mt-3">Step 3: University Invitation</h3>
                        <p>The invitation letter will take 7-10 days in some universities and in some 22-28 working days (as per electronic invitation).</p>

                        <h3 className="text-xl font-semibold mt-3">Step 4: Visa Process</h3>
                        <p>Once the invitation letter is received by RREC officials, they will prepare all documents for the visa and apply for your student visa. Documents that will be required for the visa process include:</p>

                        <ul className="list-disc list-inside">
                            <li>Filled visa application of Russian Embassy</li>
                            <li>Passport</li>
                            <li>Original invitation letter</li>
                            <li>HIV test report</li>
                            <li>12th class mark sheet</li>
                            <li>6 photos on matte paper</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-3">Step 5: Arrival in Russia</h3>
                        <p>The candidate should fill a migration card on arrival to the Russian Federation at the airport after Moscow. One of the representatives from the RREC team will receive the student at the airport and help in discharging further formalities.</p>

                        <h3 className="text-xl font-semibold mt-3">Step 6: University Formalities</h3>
                        <p>Once you arrive at the university or a particular city, our representative will do all the formalities at the Department of visa support and registration room at the university. (Documents submission for registration & visa extension). Students must submit their documents for registration to the Dean’s office for international students within 3 days of arrival in Russia. Students will have a thorough medical check-up too.</p>

                        <h2 className="text-2xl font-bold mt-4">How RREC Team Plays a Pivotal Role for MBBS in Russia for Indian Students in 2024</h2>
                        <p>RREC is the official representative or admission partner for Top NMC recognized medical universities in Russia...</p>

                        <h2 className="text-2xl font-bold mt-4">What should students and parents do then?</h2>
                        <p>Candidates who are interested to study MBBS in Russia should always consult the most experienced and authentic official representative for MBBS admission in Russia.</p>

                        <h2 className="text-2xl font-bold mt-4">Advantages to Study MBBS in Russia for Indian students through RREC</h2>
                        <ul className="list-disc list-inside">
                            <li>A one-stop solution for MBBS admission in Russia in 2024</li>
                            <li>Direct admission in MBBS for Indian students in Top Medical Universities of Russia.</li>
                            <li>RREC is a registered educational consultant overseas.</li>
                            <li>Students are safe from all kinds of fraud and fake work.</li>
                            <li>We are an Official representative for admission to NMC recognized medical universities in Russia.</li>
                            <li>All information under one roof, from selecting a university to getting admission, visa, ticket, etc.</li>
                            <li>Authentic information provided to parents and students at every step up to the completion of your MBBS Course.</li>
                            <li>Never hides any facts and truths, sheer transparency guaranteed, Trusted by parents and students across the country.</li>
                            <li>100% admission guarantee in the top medical universities in Russia.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-4">What RREC Team Do For You?</h2>
                        <ul className="list-disc list-inside">
                            <li>Application form submission for admission.</li>
                            <li>Receiving university admission & invitation letter on student’s behalf.</li>
                            <li>Provide 100% assurance and assistance for visa.</li>
                            <li>Meeting with the Embassy of the Russian Federation.</li>
                            <li>Flight arrangement from Delhi to Moscow or a particular city.</li>
                            <li>Receiving students at Moscow Airport.</li>
                            <li>Pre-departure briefing and tips and guidance for comfortable settlement for MBBS in Russia.</li>
                            <li>Procuring appropriate hostel or accommodation arrangements in Russia.</li>
                            <li>Providing all sorts of assistance to students to settle down in Russia.</li>
                            <li>Arrangement of food/mess for Indian students.</li>
                            <li>Assistance after admission whenever needed.</li>
                        </ul>

                        <p className="font-semibold mt-8">We believe all the relevant and valuable information has been delivered here which will be adequate for your search for MBBS in Russia. For any further information on MBBS admission in NMC recognized medical university in Russia, you can directly contact us at the head office in Delhi and branches all over India. You will find us a true companion and a trustworthy representative for admission to the MBBS program in Russia.</p>
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