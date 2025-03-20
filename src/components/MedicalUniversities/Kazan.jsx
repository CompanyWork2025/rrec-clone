import React from "react";
import { Helmet } from "react-helmet";

const Kazan = () => {

    const universityData = [
        { label: "Name of the University", value: "Kazan State Medical University" },
        { label: "Location", value: "Kazan City, Russia" },
        { label: "Popular Name/Abbrev.", value: "KSMU, KGMU, KazanSMU, KazanGMU" },
        { label: "Institute Type", value: "Government" },
        { label: "Year of Establishment", value: "1804" },
        { label: "Number of Faculty", value: "8" },
        { label: "Medium of Instruction", value: "English/Russian" },
        { label: "NEET Required", value: "Yes, It is Required & Mandatory" },
        { label: "Courses Offered", value: "General Medicine, Pediatrics, Dentistry, Pharmacy, Medical Biochemistry" },
        { label: "Minimum percentage required", value: "65% in English, Chemistry & Biology (per each subject)" },
        { label: "IELTS/TOEFL", value: "Not Required" },
        { label: "Processing Time for MBBS Admission", value: "25-35 days Approx." },
        { label: "Duration of MBBS", value: "6 Years" },
        { label: "University Recognition", value: "WHO, NMC of India Approved" },
        { label: "Total Number of Students", value: "9000 including 3000+ international Students" },
        { label: "Category", value: "Medical Colleges in Russia" },
        { label: "Contact Official Representative", value: <a href="https://www.rrecrussia.com/" className="text-blue-600 hover:underline">RREC, website:- www.rrecrussia.com</a> },
    ];



    return (
        <>
            <Helmet>
                <title>Kazan State Medical University | MBBS, Fees, Admission</title>
                <meta
                    name="description"
                    content="Kazan State Medical University - about, KazanSMU, Quick Fact check, ranking, Duration of MBBS, Accreditation and Approval, Hostel, advantages to students, Fees Structure, Admission Procedure, Eligibility Criteria, Opportunity for Indian Student, Kazan City Russia, Interesting facts, Documents required, Ranking"
                />
            </Helmet>

            <div className="px-4 lg:px-20 py-8 font-roboto">
                {/* Header */}
                <div className="text-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/1/14/KSMU_logo.png"
                        alt="university"
                        className="mx-auto w-10 h-10 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-xl lg:text-3xl font-semibold mt-4">
                        Kazan State Medical University
                    </h1>
                    <h2 className="text-md text-red-600 lg:text-xl mt-4">
                        Kazan State Medical University – The Best University for MBBS
                    </h2>
                    <div className="mt-4 space-y-6">
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">As per the trend in the last decade or two, Russian Universities have emerged as the top destination for MBBS aspirants. However, not all universities are equally ranked when it comes to the standard and quality of education they impart to the students. Hence ticking the right option is imperative. As a medical aspirant, if you are looking for a reliable and leading medical university in Russia, then betting on Kazan Medical State University (KSMU) will be an excellent choice whatsoever. It is one of the trusted and oldest names in the history of universities in Russia.</p>
                        <p className="text-left text-justify text-md lg:text-lg font-roboto">The number of Indian students who applied for MBBS in KSMU is quite phenomenal. Of course, there are several factors such as the opportunity to get exposure at a global level, searching assured medical career, fierce competition in India, and so on. When the number is so big, it also becomes quintessential that they have the right information and guidance about how to apply and take admission in KSMU. This is where RREC (Doctors Ideal Educational Advisors) team will be of utmost importance because we are the official representative of Kazan State Medical University, Russia. We are in this field for years and know the ins and out of every step you require to get through in your journey to get admission in MBBS at KSMU. Undoubtedly, it can be the best university where you can achieve your goal at an affordable price without compromising the quality of medical education.</p>
                    </div>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        About Kazan State Medical University
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">Undoubtedly, Kazan State Medical University is one of the most popular and leading universities for medical education. It is contemplated as one of the top universities of Russia. It is a multifunctional and multi-leveled government institution for higher learning in medicine that comes under the System of Higher Education and Scientific Research of the Ministry of Health in Russia. It is immensely appreciated for its core values and integrated medical education. It is located in the central part of Kazan city. There are 9 faculties and 65 medicine departments in this university. It has more than 5500 medical students including interns and clinical residents.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">KSMU is the 3rd rank university among the top 10 list of Russian medical universities. The Kazan state medical university country ranking is 124 (As per Indian Embassy listed in top 5 Medical Universities of Russia). Moreover, the international ranking of this university is also appreciable. It has more than 200 years of experience in medical education as it was established in 1814 and truly an international university in Russia. Kazan State Medical University’s official website provides ample information to the students seeking admission in medical education courses and programs. The only intake or the admission process in KSMU follows from June to October.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The university offers world-class medical education to students who come from more than 57 countries in the world including India. The Kazan State Medical University admission is near about 40-45 percent. The selection policy of KSMU is based on the entrance examination and students’ past academic records and grades. KSMU imparts an array of academic and non-academic services and facilities that may include the Kazan State Medical University hostel, library, sports amenities, and administrative services as well as study abroad and exchange programs.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Sophisticated Infrastructure
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-4">The infrastructure of KSMU is quite excellent. The entire campus is remarkably maintained and truly equipped with modern and advanced instruments as well as laboratory machinery. The state-of-the-art infrastructure draws the attention of many foreign students. Hence seeking admission to KSMU is highly beneficial for students’ careers because not only in bestow world-class medical education but also recognized approved by WHO, NMC of India, ECFMG, and European Council.</p>

                </div>


                {/* Middle Section */}
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        KazanSMU – Quick Fact check
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
                        Degree & Faculty at KSMU
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">KSMU degree is widely acknowledged and accepted around the globe. It offers medical courses and programs leading to officially recognized higher education degree comprises bachelor’s degrees, master’s degrees, and doctorate degrees.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        What Makes KSMU the Right Place for Medical Aspirants?
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">It is established in 1814, after Moscow and St. Petersburg University, which makes it the third oldest in Russia. Kazan State Medical University ranking is 33rd among all Russian universities including medical and non-medical universities.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">It is a government-funded university.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">KSMU has been accredited with a rating of BBB+.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">In most of the scientific conferences at KSMU, eminent professors and doctors from Canada, the USA, France, Germany delivery their valuable lectures and insight to international students.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The university has comprehensive academic contacts with doctors and scientists in France, Germany, the USA, Italy, Belgium, and the Czech Republic.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">In most of the scientific conferences at KSMU, eminent professors and doctors from Canada, the USA, France, Germany delivery their valuable lectures and insight to international students.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">It has more than 44 Clinical Residency & 39 Ph.D. programs.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Kazan State Medical University Hostel Facility
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Kazan State Medical University’s hostel facility is appreciable. KSMU has 6 hostels located near to the campus. The hostel provided to the international students may differ in size and facility. The rooms are available on a sharing basis. Candidates are supposed to share a room with 3 students. As far as the facilities in hostel rooms are concerned, all rooms are well-furnished, comfortable and well-heated. The kitchen and bathroom are also there with the hostel room. All 6 buildings of the hostels are well-equipped with safety and security measures.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Food Facility for Foreign Student
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">There is plenty of food available Indian taste and flavor. Some of the Indian recipes are so deliciously cooked in restaurants that they will give a home feeling. There are several restaurants in the city. Moreover, students in hostels are allowed to cook their own favorite food in the common kitchen provided by the university management.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        Weather Condition
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">The weather may not be an issue in summer, however, in winter it can be challenging especially when you are not prepared. The temperature is mild and moderate during the onset of summer, but usually, summer is dry and hot here. In winter, you will experience intense cold. It can be as low as -15 degrees in winter and snowfall is very common.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        What advantages to students receive in KSMU?
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Pursuing MBBS in KSMU is totally a different experience for students enrolling there from India or other countries. The teachers have abundant knowledge and experience in their fields. Teachers and professors pay equal and undivided attention to each and every student. Students are allotted to the most prolific training and research program. There is a consistent approach from the administration and teaching staff to elevate your performance and progression throughout the course. For all these exceptional teaching and training Kazan State Medical University fees is very nominal because it is a government-funded institution.</p>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Apart from study, students are also encouraged to participate in various extracurricular activities to hone up their collateral skills and personality. They can participate in activities, games, and entertainment such as tennis, basketball, swimming, skating, football, and skiing in winter. They can mix up with international students and experience dynamic thoughts, culture, and tradition. Overall, they explore and experience healthy and soothing campus life in the university.</p>
                    <h2 className="text-md text-red-600 lg:text-xl mt-8">
                        MBBS Fees Structure and Course Duration in KSMU
                    </h2>
                    <p className="text-left text-justify text-md lg:text-lg font-roboto mt-2">Kazan State Medical University fees are below par as compared to the output of quality education. That is the reason why it attracts students from all over the world. Thus, it yields a great opportunity to grab the best medical education at a low price.</p>
                </div>
                <div className="text-center">
                    <h2 className="text-md text-red-600 lg:text-xl mt-8 mb-2">
                        Kazan State Medical University MBBS fee structure is given below:
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
                                    { label: "Tuition Fee", firstYear: "475,000 RUB", secondYear: "475,000 RUB", total: "37360 USD Total" },
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
                        Admission Procedure to Study MBBS in KazanSMU, Russia in Simple Steps:
                    </h2>


                    {/* Steps List */}
                    <div className="mt-4 space-y-3 w-full">
                        {[
                            { step: "Step 1:", text: ` Call or Visit RREC Team Official representative of University.` },
                            { step: "Step 2:", text: `Properly fill the online application form of the Kazan State Medical University.` },
                            { step: "Step 3:", text: `After filling the online application form, the candidate will receive an offer letter from the university.` },
                            { step: "Step 4:", text: `Pay processing fees and then submit all essential documents required to get admission in NMC recognized medical college-Kazan state medical university.` },
                            { step: "Step 5:", text: ` After receiving processing fees and original documents, the RREC team will apply for an invitation letter and visa documentation.` },
                            { step: "Step 6:", text: ` After getting the Visa, the RREC team will arrange tickets and all a proper set of documents to fly for a particular university with a group of students and their representatives.` },
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
                    Why Choose RREC for Kazan State Medical University Admission?
                </h2>

                <p className="text-gray-700 mt-4 text-justify">
                    When you are planning to choose the best consultant for taking admission to Kazan State Medical University, you should not confuse at all by getting so many search results. The RREC is the best in the Russian Medical Universities admissions. We are the official representative of Kazan State Medical University, Russia. However, the question will arise in your mind why should you choose us and not others.
                </p>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-red-600 text-center mt-6">
                    Call for more details about the university, admission, processing, and fees at MBBS in KSMU, Russia:
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
                    Get Direct Admission to Kazan State Medical University, Join Us
                </h2>
                <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                    Admission open for this academic year, interesting students may contact us
                </h3>
                <h6 className="mb-4">Contact numbers: +917042284508, 509 (Indian office)</h6>
                <h6>Students or parents can write to us on at WhatsApp also +7-9515190376 (Ind)</h6>
            </div>
        </>

    )
}
export default Kazan;