import React from "react";
import { Helmet } from "react-helmet";

const Samara = () => {

    const universityData = [
        { label: "Name of the University", value: "Samara State Medical University" },
        { label: "Year of Establishment", value: "1919" },
        { label: "Type", value: "Public" },
        { label: "Location", value: "Chapaevskaya (Samara)" },
        { label: "Eligibility", value: "50% in HSC or Equivalent (PCB)" },
        { label: "Recognition", value: "NMC & WHO" },
        { label: "Medium of Teaching", value: "English & Russian" },
        { label: "Duration of MBBS", value: "6 years" },
        { label: "Number of Students", value: "6000 (+200 foreign students)" },
        { label: "Medium of Teaching", value: "English" },
        { label: "NEET", value: "Qualifying Marks Required" },
        { label: "Contact Official Representative", value: <a href="https://www.rrecrussia.com/" className="text-blue-600 hover:underline">RREC, website:- www.rrecrussia.com</a> },
    ];


    return (
        <>
            <Helmet>
                <title>MBBS from Samara State Medical University, Russia | RREC</title>
                <meta
                    name="description"
                    content="Samara State Medical University is enriched with a century-old history and is located in Chapaevskaya (Samara), Russia."
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34pn0ue_WDXZPdbJYWjBY9HqHcKvO0noIRw&s"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Samara State Medical University
                    </h1>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4">
                        About the University
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Samara State Medical University is enriched with a century-old history and is located in Chapaevskaya (Samara), Russia. It was founded in 1919. The SamSMU is highly reputed and among one of the largest medical universities in Russia. The university is known for its knack for training medical specialists, psychologists and pharmacists to top-level professionals in medicine and optimizing their medical skills and efficiency as per international standards and grades. This is the reason why the scientific and innovative activities of the university touch beyond the theoretical and experimental limits, thus producing unparalleled medical professionals and researchers.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The university has come a long way ever since its establishment. With its unique teaching methodology and continuous development approach, it has become one of the most trusted medical universities in Russia. The entire medical education structure, as well as the infrastructure, is technically sound and seamless as compared to other medical universities abroad. The ultra-modern medical education system comprises advanced classrooms, multimedia lecture halls, electronic teaching and learning materials, clinical laboratories, quality teaching and research programs and vastly experienced faculties.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">It consists of 10 faculties, 80 departments and clinics with 1015 beds. The faculties and teaching staff of the university offer high-quality teaching methodology and approach. Apart from above-par medical education, it has built many partnerships with more than 40 Russian and international organizations. Over 30,000 students have been trained and graduated from the university.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">It is one of the highly sought-after medical universities in Central Asia for Indian as well as global students. It is reckoned as a top-ranked medical university in Russia. The university is duly recognized by the Ministry of Higher and Secondary Specialized Education, Russia. It is also approved by WHO and NMC of India, which further enhanced its credibility as a top-grade medical university in Russia for Indian students.</p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        RREC – Official & Authorized Admission Partner of Samara State Medical University
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">RREC is the officially nominated representative and authorized admission partner of SamSMU. Our team has already assisted a large chunk of Indian students in getting successful enrollment to the MBBS program at this university over the years. Many of them have completed their MBBS qualification, and today they are well-placed in leading and reputed medical organizations and institutions in India and abroad. Hence we provide the best chance to qualify and get admission to Samara State Medical University, Russia to those aspirants who have dreams to study MBBS abroad.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Hostel Facility for Foreign Students
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Samara State Medical University provides decent and well-furnished hostel facilities to foreign students. There is a separate accommodation facility for boys and girls. The hostel has all types of essential amenities that comprise a study room, Wi-Fi network, hot and cold water, electricity and a kitchen on each floor. Apart from these, they are also provided separate wardrobes, tables, chairs, pillows, bedsheets and blankets. A mess facility is also available where students can enjoy a variety of Indian, Chinese, and continental foods. There is a provision for a common kitchen for those who love to cook themselves. Safety and security provisions are up to the mark so that parents have peace of mind too when they send their wards abroad.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Admission Procedure at Samara State Medical University, Russia
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The admission procedure at Samara State Medical University is more and less the same as in many Russian Universities. It includes the admitting process, required set of documents, signing contract with the university, completion of medical checkups, payment of tuition fees and more. We have put the entire procedure in a crisp and clear manner for a better understanding.</p>
                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        Quick Information & Stats about Samara State Medical University
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
                        About the City
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The City is located in Chapaevskaya, Samara which is a beautiful city in Russia. The city represents the exotic culture and traditions and it has been the epicenter of economic, political and cultural development. You can explore ancient monuments, art & craft museum and spellbound landscapes. The city has its history and glory that draws the attention of tourists from across the globe. The city is safe and peaceful. The climate is cold in winter and moderate in summer.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Why Choose RREC for MBBS in Samara State Medical University
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">RREC has been an established name operating in medical tourism for more than 17 years. We have a proven track record of successful admissions to various top-grade medical universities in Russia. Moreover, our systematic approach and guidance make it easy for medical aspirants to get admission to top-notch medical universities abroad. We have earned appreciation and respect from one and all for our years of selfless and dedicated services. Our branches are located all over India with head office in Delhi. You can visit our website to know more about the encouraging and overwhelming stories and responses from students who are doing or have completed MBBS from major medical universities abroad.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">We are committed to providing complete and unconditional support and assistance throughout the MBBS course. We also held periodical counseling through seminars and group invitations to aware parents and students and solve their doubts regarding MBBS admission in NMC-approved Universities in Russia.</p>
                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        Samara State Medical University Fees for MBBS 2024-25
                    </h2>
                    <p className="mt-4 mb-2">The fees for MBBS at Samara State Medical University are relatively affordable and low for Indian Students. However, the quality of teaching and infrastructure are simply world-class.</p>
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
                        Admission Procedure at Samara State Medical University, Russia
                    </h2>


                    {/* Steps List */}
                    <div className="mt-4 space-y-3 w-full">
                        {[
                            { step: "Step 1:", text: `Download the online application form from the university website and fill in all the requisite details.` },
                            { step: "Step 2:", text: `Fill out the mandatory details correctly to avoid rejection of the application form. Foreign students must check the last date of enrollment to avoid cancellation of the admission.` },
                            { step: "Step 3:", text: `After the submission of the form, it will be reviewed by the university. The review process may extend from 10-12 days.` },
                            { step: "Step 4:", text: `The eligible students will receive an invitation letter from the university after he/she is selected for admission.` },
                            { step: "Step 5:", text: ` The eligible students will receive an invitation letter from the university after he/she is selected for admission.` },
                            { step: "Step 6:", text: ` Once the visa formality is done students can book the flight. It is recommended to carefully check all essential documents before departure.` },
                            { step: "Step 7:", text: `Students must inform about the date of arrival and flight details. RREC representative will be there at the airport to pick and drop you at the university.` },
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
                    Why Choose RREC for MBBS in Samara State Medical University
                </h2>

                <p className="text-gray-700 mt-4 text-justify">
                    RREC has been an established name operating in medical tourism for more than 17 years. We have a proven track record of successful admissions to various top-grade medical universities in Russia. Moreover, our systematic approach and guidance make it easy for medical aspirants to get admission to top-notch medical universities abroad. We have earned appreciation and respect from one and all for our years of selfless and dedicated services. Our branches are located all over India with head office in Delhi. You can visit our website to know more about the encouraging and overwhelming stories and responses from students who are doing or have completed MBBS from major medical universities abroad.
                </p>

                <p className="text-gray-700 mt-4 text-justify">
                    We are committed to providing complete and unconditional support and assistance throughout the MBBS course. We also held periodical counseling through seminars and group invitations to aware parents and students and solve their doubts regarding MBBS admission in NMC-approved Universities in Russia.
                </p>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-6">
                    Call for more details about university, admission, processing fees at Samara State Medical University, Russia
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
                    <a href="https://wa.me/79515190376" className="text-gray-700 hover:text-red-600 block">
                        💬 WhatsApp: +7-9515190376
                    </a>
                </div>
            </div>

            <div className="bg-red-700 mt-2 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                    Call for more details about university, admission, processing fees at Samara State Medical University, Russia
                </h2>
                <h6 className="mb-4">RREC Team: +91-7428212236, 7428203118 | Toll-free 1800-419-5827 (For Indian Students)</h6>
                <h6>Students or parents can write to us on at WhatsApp also +7-9515190376 (Ind)</h6>
            </div>
        </>
    )
}
export default Samara;