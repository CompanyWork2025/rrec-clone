import React from "react";
import { Helmet } from "react-helmet";

const Samarkand = () => {

    const universityData = [
        { label: "Name of the University", value: "Samarkand State Medical University" },
        { label: "Year of Establishment", value: "1930" },
        { label: "Type", value: "Public" },
        { label: "Eligibility", value: "50% in HSC or Equivalent (PCB)" },
        { label: "Recognition", value: "NMC & WHO" },
        { label: "MBBS Intake", value: "August" },
        { label: "Duration of MBBS", value: "6 years" },
        { label: "Medium of Teaching", value: "English" },
        { label: "NEET", value: "Yes (Qualifying Marks)" },
        { label: "Contact Official Representative", value: <a href="https://www.rrecrussia.com/" className="text-blue-600 hover:underline">RREC, website:- www.rrecrussia.com</a> },
    ];


    return (
        <>
            <Helmet>
                <title>Samarkand State Medical University, Uzbekistan | RREC Official Representative</title>
                <meta
                    name="description"
                    content="RREC, being the representative, has assisted and placed a large number of Indian students in the MBBS program in abroad over the years. Many of them have successfully completed their MBBS qualification, and today they are well-placed in leading and reputed medical organizations and institutions in India and abroad."
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://www.sammu.uz/images/logo-lg.png?v=1.1.2"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                        loading="lazy"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Samarkand State Medical University (Uzbekistan)
                    </h1>
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-4">
                        About the University
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">As an Indian medical aspirant, if you are looking to pursue medical education from abroad, Samarkand State Medical University, Uzbekistan provides you the best opportunity to do MBBS program because it is one of the highly sought-after medical universities in Central Asia for global students. It is reckoned as a top-ranked medical university in Uzbekistan. The university is duly recognized by the Ministry of Higher and Secondary Specialized Education, Uzbekistan. It is also approved by WHO and NMC of India, which further enhanced its credibility as a top-grade medical university in Uzbekistan.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Samarkand State Medical University was established in 1930. Since its inception, the university is truly renowned for its unparalleled contribution to medical science development on the global front. The university offers high-quality training to medical professionals and students because the entire medical education structure, as well as the infrastructure,is technically sound and seamless as compared to other medical universities abroad.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The largest and one of the oldest medical universities in Uzbekistan is well-equipped with an ultra-modern medical education system that includes advanced classrooms, electronic teaching and learning materials, multimedia lecture halls, clinical laboratories, quality teaching and research programs and vastly experienced faculties. It has 7 faculties, 57 departments and 9 undergraduate studies programs. Apart from quality medical education, there is ample provision for accommodation and leisure activities for foreign students. Over 40,000 students have been trained and graduated from the university.</p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 font-semibold">
                        About the City
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The university is located in the most mesmerizing city of Samarkand. The city is the land of outstanding culture and traditions and it has been the center of scientific development and activities since time immemorial.The country is not so populated and there are many points of attraction for tourists including UNESCO World Heritage Sites. You can explore ancient time monuments, art & craft museum and spellbound landscapes. The city is known for its many beautiful mosques and mausoleums. The city is safe and peaceful.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 font-semibold">
                        Why Choose RREC for MBBS in Samarkand State Medical University in Uzbekistan
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The major concern for parents and students when choosing to study MBBS abroad is finding a trustworthy foreign education consultant. The moment you contact RREC your concern comes to an end. We are not only a reliable, established and recognized consultant but the only authorized representative and admission partner for medical education in top NMC-recognized and WHO-approved Universities in Uzbekistan, Russia, etc. We are committed to provide complete and unconditional support and assistance throughout the MBBS course. We also held periodical counseling through seminars and group invitations to aware parents and students and solve their doubts regarding MBBS admission in NMC-approved Universities.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">RREC has been in this business for more than 15 years with proven track record of successful admissions in various top-grade medical universities in Russia, Uzbekistan, etc. Our truly guided services and systematic approach help thousands of medical aspirants get admission to top-notch medical universities abroad. We have earned appreciation and respect from all corners due to years of dedicated and truly guided placement services. We have a wide network and branches all over India with head office in Delhi. You can visit our website to know more about the encouraging and overwhelming stories and responses from students who are doing or have completed MBBS from major medical universities abroad.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 font-semibold">
                        Admission Procedure at Samarakand State Medical University, Uzbekistan
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The admission procedure at Samarakand State Medical University is more and less the same as in many Russian Universities. It includes the admitting process, required set of documents, signing contract with the university, completion of medical checkups, payment of tuition fees and more. We have put the entire procedure in a crisp and clear manner for a better understanding.</p>
                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl font-semibold mt-8 mb-2">
                        Quick Information & Stats about Samarkand State Medical University
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

                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8 mb-2">
                        Samarakand State Medical University Fees for MBBS
                    </h2>
                    <p className="mt-4 mb-2">TheUniversity fees structure for medicine courses is not only affordable but it is relative low for Indian students as compared to various private medical colleges and universities in India.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 shadow-md">
                            <thead>
                                <tr className="bg-red-600 text-white">
                                    <th className="px-4 py-2 border-r border-gray-300">Particulars</th>
                                    <th className="px-4 py-2 border-r border-gray-300">Fee Structure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: "First Year Package", firstYear: "-", },
                                    { label: "From 2nd Year Onwards", firstYear: "-", },

                                ].map((item, index) => (
                                    <tr key={index} className="border-b border-gray-300 text-gray-700">
                                        <td className="px-4 py-2 border-r border-gray-300 font-semibold bg-gray-100">{item.label}</td>
                                        <td className="px-4 py-2 border-r border-gray-300">{item.firstYear}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <p className="text-left text-justify text-md lg:text-lg text-red-600 font-roboto mt-4">Note:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-left text-gray-700 space-y-2">
                            <li>
                                First year package includes tuition fee, hostel fee, Indian mess three times meal, medical checkup.
                            </li>
                            <li>
                                From second year onwards Hostel fee and Indian mess is not mandatory. Student can choose as per their own.
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
                        Admission Procedure at Samarakand State Medical University, Uzbekistan
                    </h2>


                    <div className="flex flex-col md:flex-row items-start md:items-center w-full mt-4 space-y-6 md:space-y-0">
                        {/* Left Side - Steps List */}
                        <div className="w-full md:w-1/2 space-y-3">
                            {[
                                { step: "Step 1:", text: `Download the online application form and fill in all the requisite details.` },
                                { step: "Step 2:", text: `Fill out all essential pre-requisite details correctly to avoid rejection of the application form.` },
                                { step: "Step 3:", text: `After the submission of the form, it will be reviewed by the university. The review process may extend from 3-4 days.` },
                                { step: "Step 4:", text: `The eligible students will receive the invitation letter from the university after he/she is selected for admission.` },
                                { step: "Step 5:", text: `Now, students can apply a visa. The RREC team will assist you through the visa process. It usually takes 7-10 days to obtain a study visa.` },
                                { step: "Step 6:", text: `Once visa formality is over, you are all set to fly to Uzbekistan. It is recommended to carefully check all essential documents before departure.` },
                                { step: "Step 7:", text: `Students must inform about the date of arrival and flight details. There will be a RREC representative at Uzbekistan airport to pick and drop you at the university.` },
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col md:flex-row md:items-start md:space-x-3 w-full">
                                    <span className="text-red-600 font-semibold flex-shrink-0">{item.step}</span>
                                    <p className="text-gray-700 text-justify md:text-left md:flex-1 px-4">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Right Side - Video */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <iframe
                                className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
                                src="https://www.youtube.com/embed/xuvANijvUmg"
                                title="Admission Process Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                </div>
                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">
                    Why Choose RREC for MBBS in Samarkand State Medical University in Uzbekistan
                </h2>

                <p className="text-gray-700 mt-4 text-justify">
                    The major concern for parents and students when choosing to study MBBS abroad is finding a trustworthy foreign education consultant. The moment you contact RREC your concern comes to an end. We are not only a reliable, established and recognized consultant but the only authorized representative and admission partner for medical education in top NMC-recognized and WHO-approved Universities in Uzbekistan, Russia, etc. We are committed to provide complete and unconditional support and assistance throughout the MBBS course. We also held periodical counseling through seminars and group invitations to aware parents and students and solve their doubts regarding MBBS admission in NMC-approved Universities.
                </p>

                <p className="text-gray-700 mt-4 text-justify">
                    RREC has been in this business for more than 18 years with proven track record of successful admissions in various top-grade medical universities in Russia, Uzbekistan, etc. Our truly guided services and systematic approach help thousands of medical aspirants get admission to top-notch medical universities abroad. We have earned appreciation and respect from all corners due to years of dedicated and truly guided placement services. We have a wide network and branches all over India with head office in Delhi. You can visit our website to know more about the encouraging and overwhelming stories and responses from students who are doing or have completed MBBS from major medical universities abroad.
                </p>
            </div>

            <div className="bg-red-700 mt-10 mb-6 font-roboto rounded-xl px-8 py-10 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-2xl font-semibold text-white text-center mt-6">
                    Call for more details about the university, admission, processing, fees at MBBS in SMSMU:
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
export default Samarkand;