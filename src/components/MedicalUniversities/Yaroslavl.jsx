import React from "react";
import { Helmet } from "react-helmet";

const Yaroslavl = () => {
    const universityData = [
        { label: "Name of the Institute", value: "Yaroslavl State Medical University" },
        { label: "Location", value: "Yaroslavl, Russia" },
        { label: "Institute Type", value: "Public" },
        { label: "Year of Establishment", value: "1944" },
        { label: "No. of Faculty", value: "08" },
        { label: "Medium of Instruction", value: "English & Russian" },
        { label: "NEET", value: "Qualifying Marks required" },
        { label: "Courses Offered", value: "General Medicine, Pediatrics, Dentistry, Pharmacy, etc." },
        { label: "Minimum percentage required", value: "60% in PCB" },
        { label: "IELTS/TOEFL", value: "No" },
        { label: "Duration of MBBS", value: "6 Years (Including 1 Year Internship)" },
        { label: "University Recognition", value: "WHO, NMC" },
        { label: "Total Number of Students", value: "3500 including International Students" },
        { label: "Contact Official Representative", value: <a href="https://www.rrecrussia.com/" className="text-blue-600 hover:underline">RREC, website:- www.rrecrussia.com</a> },
    ];


    return (
        <>
            <Helmet>
                <title>MBBS in Yaroslavl State Medical University in Russia | RREC</title>
                <meta
                    name="description"
                    content="Yaroslavl State Medical University (YSMU) is a highly-rated medical university located in Yaroslavl, Russia. The foundation of this reputed university is laid down in 1944. Since then, it has been the center of medical education in Russia for local and foreign students."
                />
            </Helmet>
            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://www.dishaeducationconsultancy.com/wp-content/uploads/2024/04/YSMU-Yaroslavl-State-University.png"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Yaroslavl State Medical University
                    </h1>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Yaroslavl State Medical University (YSMU) is a highly-rated medical university located in Yaroslavl, Russia. The foundation of this reputed university is laid down in 1944. Since then, it has been the center of medical education in Russia for local and foreign students. It is considered a pivotal center for medical education on biomedical research. The university is also a prominent hub for postgraduate education and medical training and retraining specialist in practical healthcare, medicine, pharmacy and more. The university is enriched with highly-qualified professionals who hail from various medical institutions, local hospitals and several other regions.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">Yaroslavl State Medical University cherishes the services of more than 550 academic staff. More than 400 of them are M.D and Ph.D. (It includes 70 doctors of sciences and full professors and 310 candidates of sciences, associate and assistant professors). The university functions in medical training and education in 58 departments.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">At present, Yaroslavl State Medical University entertains 3500 students. Modern technologies and advanced infrastructure are actively developing at Yaroslavl State Medical University, Russia. All departments are fully equipped with permanent internet access and both students and faculty members can access these resources. The teaching activities are duly conducted through electronic information system using smart classrooms, projector, LED and digital board. YSMU also provides top-level social facilities and structures such as hostels, student healthcare centers, sports centers, Volga river summer camp and medical plants garden.</p>
                    </div>

                    <div className="w-full text-justify text-left">
                        <h2 className="text-md font-semibold text-red-600 lg:text-xl mt-8">
                            Faculty at Yaroslavl State Medical University
                        </h2>
                        <ul className="mt-4 text-sm lg:text-lg text-gray-700 space-y-4">
                            {[
                                "General Medicine",
                                "Dental Surgery",
                                "Pharmacy",
                                "Pediatrics (Child Specialist)",
                                "Stomatology",
                                "Biochemistry"
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
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8 mb-2">
                        Quick Facts YSMU
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
                        Duration of MBBS Course
                    </h2>
                    <p className="text-center    text-md lg:text-lg font-roboto mt-2">The total course duration at Yaroslavl state medical university is 6 years for English Medium MBBS course.</p>
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8">
                        Hostel and Accommodation at Yaroslavl State Medical University
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Yaroslavl State Medical University has five hostel buildings to accommodate a large number of foreign students. All hostel rooms are well-equipped with essential and advanced amenities like hot and cold water, electricity, cooking gas, heating systems for rooms and internet access. There is no additional charge for it. There is a fixed exit and entry time for the students living on the hostel campus. The entire hostel campus is secured with CCTV cameras to ensure maximum security and safety for the students.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">There is the facility of common kitchens for those students who want to cook their own food. Cities having many canteens, restaurants / cafes / fastfood shops, students can visit there also.</p>
                    <h2 className="text-md text-red-600 font-semibold lg:text-xl mt-8">
                        Eligibility for Admission
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The candidate must attain 15 years before 31 December of the year of admission.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The candidate must have passed 10+2 examination                    </p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The subjects should be Physics, Chemistry, and Biology</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Aggregate percentage in 10+2 must be 60%.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">NEET scorecard is compulsory</p>
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
                        Admission Process at a Glance
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-700 text-justify">
                        The admission process is fast, transparent and hassle-free for foreign students
                    </p>


                    {/* Steps List */}
                    <div className="mt-4 space-y-3 w-full">
                        {[
                            { step: "Step 1 Download the online application form:", text: `Download the online application form from the university website and fill in all the requisite details.` },
                            { step: "Step 2 Fill up details:", text: `Fill out the mandatory details correctly to avoid rejection of the application form. Foreign students must check the last of date of enrollment to avoid cancellation of the admission.` },
                            { step: "Step 3 Form Review:", text: `After the submission of the form, it will be reviewed by the university. The review process may extend from 10-12 days.` },
                            { step: "Step 4 Invitation Letter:", text: `The eligible students will receive an invitation letter from the university after he/she is selected for admission.` },
                            { step: "Step 5 Apply for Visa:", text: `Now apply for a visa. RREC team will assist you through the visa process. It usually takes 30-45 days to obtain a study visa.` },
                            { step: "Step 6:", text: `Once visa formality is done student can book the flight. It is recommended to carefully check all essential documents before departure.` },
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
                    Why Choose RREC for MBBS abroad
                </h2>

                {/* Paragraph */}
                <p className="text-gray-700 text-justify">
                    For the last 15 years, RREC has been an iconic name in the field of medical tourism. We have a proven track record of successful admissions to various top-grade medical universities in Russia, Ukraine, Uzbekistan, etc. We can provide comprehensive assistance to students with the admission process, scholarship, visa, and travel which is a part of the admission process. The biggest asset that we earned over the last 15 years is the trust of students and parents and their satisfaction.  Our branches are located all over India with head office in Delhi. Our team of our experts helps you help you determining the university most suited to your budget, interest, and more.  You can visit our website to know more about the encouraging and overwhelming stories and responses from students who are doing or have completed MBBS from major medical universities abroad.
                </p>
                <p className="text-gray-700 mt-4 text-justify">
                    We are committed to providing complete and unconditional support and assistance throughout the MBBS course. We also held periodical counseling through seminars and group invitations to aware parents and students and solve their doubts about MBBS admission to NMC-approved Universities in Russia.
                </p>
            </div>

            <div className="bg-red-700 mt-10 mb-6 font-roboto rounded-xl px-8 py-10 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white">
                <h2 className="text-2xl font-semibold text-white text-center mt-6">
                    Call for more details about the university, admission, processing, fees at MBBS in YSMU:
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
export default Yaroslavl;
