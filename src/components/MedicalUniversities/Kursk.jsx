import React from "react";
import { Helmet } from "react-helmet";

const Kursk = () => {

    const universityData = [
        { label: "Name of the University", value: "Kursk State Medical University" },
        { label: "Location", value: "Kursk City, Russia" },
        { label: "Popular Name/Abbrev.", value: "KSMU, KGMU" },
        { label: "Institute Type", value: "Government" },
        { label: "Year of Establishment", value: "1935" },
        { label: "Number of Faculty", value: "10" },
        { label: "Medium of Instruction", value: "English/Russian" },
        { label: "NEET Required", value: "Yes, It is Required & Mandatory" },
        { label: "Courses Offered", value: "General Medicine, Pediatrics, Dentistry, Pharmacy, Clinical Physiology" },
        { label: "Minimum percentage required", value: "50% in Physics, Chemistry, Biology aggregate" },
        { label: "IELTS/TOEFL", value: "Not Required" },
        { label: "Processing Time for MBBS Admission", value: "25-30 days Approx." },
        { label: "Duration of MBBS", value: "6 Years" },
        { label: "University Recognition", value: "WHO, NMC of India Approved" },
        { label: "Total Number of Students", value: "9000 including 3000+ international Students" },
        { label: "Category", value: "Medical Colleges in Russia" },
        { label: "Contact Official Representative", value: <a href="https://www.rrecrussia.com/" className="text-blue-600 hover:underline">RREC, website:- www.rrecrussia.com</a> },
    ];



    return (
        <>
            <Helmet>
                <title>Kursk State Medical University - Admission, Fees Structure, Course Duration</title>
                <meta
                    name="description"
                    content="Kursk State Medical University - Admission, Fees Structure, Course Duration, Infrastructure &amp; faculties, Quick Fact check, History, Accreditation and Recognition, Intake, Faculty at KSMU, Benefits of Doing MBBS, KSMU Ranking, Accommodation &amp; Hostel Facility, Eligibility Criteria, advantages for students"
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/f/f6/Kursk_State_Medical_University_logo.png"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Kursk State Medical University
                    </h1>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4">
                        Kursk State Medical University – Unleashing Great Opportunity to study MBBS.
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Many medical aspirants, who want to accomplish their undergraduate medical education abroad, are looking for a reliable MBBS university in Russia due to its emerging influence and prowess in imparting top-class MBBS education. In this regard Kursk State Medical University, Russia comes on the top of the list. It is one of the leading and most successful medical universities in Russia. It has been the center of attraction for both national and international students seeking top-notch MBBS program. It focuses highly on innovative research and investment in sublime facilities for students including exhaustive infrastructure.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Kursk State Medical University is considered among the top 10 universities in Russia. The major reason for this university to be in the top 10 rankings is its exceptional quality standard and highly adept faculty members. University is well-equipped with state of the art medical facilities that help both students and professors to carry out comprehensive research and training activities. It has been established in 1935 and got its status as a university in 1994. Since then, more than 44000 pharmacists, doctors and healthcare specialists have successfully graduated from this university. It is among the first universities in Russia that started teaching graduate and undergraduate programs in English medium.</p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Infrastructure & faculties
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">More than 9000 students from 54 countries are trained in this university. It incorporates almost 30% of international students including Indians. It comprises students in higher education, graduates, secondary vocational education, interns, and healthcare workers. There are 67 departments and 14 faculties in the university. The total number of academic staff working in KSMU is 752 including 115 D.Sc. 408 Ph.D. The university has a big with adequate reading space within the campus. The library has a compilation of more than 500 books. There are 7 training buildings and 6 Kursk State Medical University hostel buildings.  The university also has an Ecological and Medicinal Research Institute, polyclinic, a canteen, and a cafeteria.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">During the MBBS program, high attention is paid to the practical training of future doctors, pharmacists, and other specialists. With the help of direct contact with patients in clinical departments and practical training, students can develop the necessary skills and professional abilities. For the same purpose global acknowledged virtual simulators and mannequins are utilized.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Every now and then, some excellent Kursk State Medical University reviews by the students doing MBBS draw the attention of the admission seekers in KSMU. It is due to a high standard of education and up-to-date methods of teaching and training adopted by the university.  Moreover, problem-solving classes,  lecture-dialogue, multimedia training tools, computer technologies for training, advanced testing, treatment, and diagnosing system make it more formidable in offering seamless medical education. According to Kursk State Medical University’s official website, it consistently initiates and conducts All-Russian and International Conference on current problems of pharmacy, medicine, psychology, and pedagogical technologies in medical education.     </p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        History of Kursk State Medical University
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Since the day it has been established in 1935, the university has produced an upward graph on development quality measures as far as MBBS teaching is concerned. KSMU was awarded the status of a full-fledged university in 1994. The university is regarded as an esteemed center of education and cultural advancement in Russia. The institution is extensively known for its ground-breaking medical advancement. Kursk State Medical University has constantly evolved and shown tremendous ability to catch up with ever-transforming advancements in technology in science and medicine. The success of KSMU is based on its credibility which has been garnered and thrived over the years by excellent administration and management.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Since 2016, KSMU has been actively and comprehensively working in tandem with three academic clusters – Chemicopharmaceutical, Stomatological, and Western-European. In 2012, the Pharma-Medical College joined KSMU. A major step taken by the university and association of the college, allows more specific measures to improve the quality of training specialists as well as making more rational use of resources in the university which contributed massively to the university steep rise on the international front. In 2004, Kursk State Medical University is listed in the top 100 universities in Russia by the decision of the independent public council “European Council”. In 2012, it broke into the list of most effective universities in Russia.</p>
                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        KSMU – Quick Fact check
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
                        Why Should Students Crave to Get Admission in Kursk State Medical University?
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">There is enough reason that will force you to choose KSMU for the MBBS course such as:</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Sublime education standard
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">This must be the most important factor while considering admission to KSMU. It renders an excellent combination of classroom learning and practical training in hospitals and polyclinics. Many international students crave to grab their seats due to the seamless quality of education provided to students at such a reasonable cost.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        English medium MBBS course
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">KSMU is the first medical institute to start an English medium MBBS course. It is highly beneficial for international students including Indian students. The Russian language is also taught to the student which gives them an opportunity to learn the local language and dialect as well.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Affordable fees
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Reasonable Kursk State Medical University fees structure is much cheaper and reasonable as compared to many Indian private medical colleges and universities. It is almost 4 times lower than Indian medical institutes. Moreover, you are getting many other advantages of studying in the international environment</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Student support and services
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">It is true that studying abroad brings several concerns for parents. Students are provided ample support and services that will help students to do their study with a peaceful mind. There is an “International Student Department” to deal with any issues related to them. Moreover, the RREC team is also with students to lend assistance whenever required.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Reliable education pattern
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The pattern of education is reliable and robust. It makes education quality at par with European and International Standard. The strength of students studying in a group is not more than 15-20 students. The university MBBS program is a part of the European Credit Transfer and Accumulation System (ECTAS). It means students can pursue further education in European countries after doing their MBBS from Kursk State Medical University, Russia.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Mentorship
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The students will get true mentorship and guidance from the eminent faculties. Moreover, students are also frequently followed by peers to evaluate their interests and academic development.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Top ranking
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Kursk State Medical University ranking is among the top medical universities in Russia. Whether it is a global ranking or Kursk State Medical University country it is based on various factors such as quality standard, infrastructure, faculty, management, and so on. KSMU ranks well on all these measures to grab top spots in Russia.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        International exposure
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The university has a healthy ratio of international students which provide great exposure and learning opportunity for the students. They are also exposed to cultural, physical, and sports activities to develop their all-round personality traits.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Accreditation and Recognition
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Kursk State Medical University is accredited and recognized by the National Medical Commission of India (NMC). It has also been accredited by World Health Organization (WHO), United State Medical Licensing Examination (USMLE), FAIMER, American Medical Association (AMA), United Nation Education, Scientific & Cultural Organization (UNESCO), European Credit Transfer and Accumulation System (ECTAS), Department of Education (USA), and the General Medical Council of Britain.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Intake in KSMU
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The university is also a popular choice for Indian students because Kursk State Medical University admission or intake transpires twice a year. The two intakes for foreign students are – September & February respectively. It is a huge advantage for those who could apply during the first intake in the university. It facilitates cutting edge teaching methodologies and eminent faculties offering their services in different specializations.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Why University Hostel is a Good Option for Indian Students?
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Indian students have a number of benefits if they opt for the university hostel. In fact, it is recommended for them in the initial years because as a foreigner to this land they do not know the local language and it might be a challenging task to deal with the people if you live in rented accommodation. You may avail flats or apartments on rent and stay there in later years during their MBBS course in Russia.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The hostel buildings are located very close to or within walking distance to the campus. It usually takes them a few minutes to walk down to the university to attend their class. Moreover, the hostel in KSMU, Russia follows strict norms to ensure 100% safety and security for foreign students whether they are male or female. All kinds of modern surveillance are installed in the Kursk State Medical University hostel building for the safety and wellbeing of the foreign students.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        MBBS Fees Structure and Course Duration in KurskSMU
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Kursk State Medical University fees are below par as compared to the output of quality education. That is the reason why it attracts students from all over the world. Thus, it yields a great opportunity to grab the best medical education at a low price.</p>
                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        Kursk State Medical University MBBS fee structure is given below:
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
                                    { label: "Tuition Fee", firstYear: "6280 USD Dollars", secondYear: "6280 USD Dollars", total: "38280 USD Total" },
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
                        Faculty at KSMU
                    </h2>


                    {/* Steps List */}
                    <div className="mt-4 space-y-3 w-full">
                        {[
                            { step: "*", text: `Faculty at KSMU` },
                            { step: "*", text: `Faculty of Dentistry` },
                            { step: "*", text: `Faculty of Pharmacy` },
                            { step: "*", text: `Faculty of Pediatrics` },
                            { step: "*", text: ` Faculty of Medico Prevention` },
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
                    Why choose RREC for admission to Kursk State Medical University?
                </h2>

                <p className="text-gray-700 mt-4 text-justify">
                    Many students are not equipped with all the requisite information that will lead them to successful admission to Kursk State Medical University, Russia. They eventually have to face rejection which is heartbreaking for them. Moreover, they also unaware of false and enticing promises made by unauthorized agents. Under such circumstances, holding hands with a leading and trusted counselor like RREC is extremely crucial. We capitalize on imparting comprehensive information through counseling, seminars, group invitation, and so on. Parents and students are always welcome to contact us regarding any sort of  Kursk State Medical University queries.
                </p>

                <p className="text-gray-700 mt-4 text-justify">
                    RREC (Doctors-Ideal Educational Advisors) has been guiding young minds and talent as an official representative for KSMU and several other prominent medical universities in Russia for years. We are trusted by thousands of parents and students who are already doing their MBBS in Kursk State Medical University and quite satisfied with our service and approach for them. It is our honesty and transparency in service that have brought true regards and reputation from parents and students. We are always there to offer you the best of our effort to get admission to MBBS, Russia. Moreover, you will get away from the hassle of going through strenuous agents and their harassment.
                </p>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-6">
                    Call for more details about the university, admission, processing, fees at MBBS in KurskSMU, Russia:
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
                    Call for more details about the university admission, processing, fees at MBBS in KurskMU, Russia
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
export default Kursk;