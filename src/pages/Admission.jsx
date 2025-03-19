import React from "react";
import { motion } from "framer-motion";

const Admission = () => {
    const steps = [
        {
            title: "Counseling and University Selection",
            description:
                "The first and foremost step for students is to choose an NMC and WHO-recognized university that aligns with their academic goals, financial plans, and eligibility criteria. With the assistance of experienced counselors at RREC, aspirants receive comprehensive guidance on university options, tuition fees, and course structures, helping them make an informed decision.",
        },
        {
            title: "Application Submission",
            description:
                "After finalizing the university, students must complete the application process by submitting a properly filled admission form and the necessary documents. These typically include academic marksheet from the 10th and 12th grades, a valid passport, NEET qualification certificate, passport-sized photographs, a birth certificate, and a medical fitness certificate.",
        },
        {
            title: "Admission Letter",
            description:
                "Once the university reviews the application, an official admission letter is issued by the authority to confirm the acceptance of the student's application for admission. This normally takes a few days to a few weeks, depending on the university.",
        },
        {
            title: "Invitation Letter & Visa Processing",
            description:
                "Once admission is confirmed, the university provides an official invitation letter, a key document for visa processing. Students must then apply for a student visa by submitting necessary paperwork, including their passport, medical certificates, and the invitation letter. The Russian Embassy generally takes about two to three weeks to complete the visa approval process.",
        },
        {
            title: "Tuition Fee Payment",
            description:
                "Now, students must pay the university tuition fee as per the dictated guidelines. Most universities offer affordable fee structures, and the payment can be made directly to the university account.",
        },
        {
            title: "Travel Arrangements & Pre-Departure Guidance",
            description:
                "With the student visa in hand, students proceed to arrange their flight tickets to Russia. Before departure, they attend an orientation session designed to familiarize them with university life, cultural adjustments, and essential travel instructions, ensuring a smooth transition to their new academic environment.",
        },
        {
            title: "Arrival in Russia & University Registration",
            description:
                "After landing in Russia, students are welcomed by university representatives who guide them to their assigned hostel accommodations. They then proceed with university registration, which involves verifying original documents, completing necessary formalities, and participating in orientation sessions to help them settle into their new academic environment.",
        },
        {
            title: "Commencement of Classes",
            description:
                "After completing the registration process, students take part in orientation programs and commence their MBBS coursework. Additionally, they receive fundamental Russian language training to enhance their communication skills during clinical rotations.",
        },
    ];

    const sections = [
        {
            title: "Essential Document for MBBS Admission Application ",
            documents: [
                "10th Mark Sheet & Certificate",
                "12th Mark Sheet & Certificate",
                "Valid Passport (minimum 18 months validity)",
                "NEET Qualification Certificate (for Indian students)",
                "Birth Certificate (English or notarized translation)",
                "Passport-size Photographs (as per university specifications)",
                "Medical Fitness Certificate",
                "HIV Test Report (as per university requirement)",
                "Application Form (duly filled and signed)",
            ],
        },
        {
            title: "Mandatory Documents to Obtain Student Visa  ",
            documents: [
                "Correctly filled Visa Application Form",
                "Original Passport with minimum 18 months validity",
                "Invitation Letter from the Russian University",
                "Passport-size Photographs (as per embassy specifications)",
                "Medical Fitness Certificate",
                "HIV Test Report (as required by Russian authorities)",
                "Educational Certificates (10th & 12th mark sheets and certificates)",
                "NEET Scorecard (for Indian students)",
                "Payment Receipt of Visa Processing Fee",
                "Travel Insurance (as per visa requirements)",
            ],

        },

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
                        Admission procedure for <span className="text-red-600">MBBS</span> study in Russia
                    </h1>
                    <p className="text-gray-800 mt-4 text-justify text-md lg:text-lg font-roboto">
                        The admission process at RREC for MBBS in Russian universities is streamlined, transparent, and stress-free. With extensive experience and strong partnerships with top medical institutions in Russia, we provide proven insight to simplify the journey for aspiring doctors. With a proven track record of success, we help students secure seats in NMC and WHO-recognized universities, paving the way for a promising medical career. From university selection to documentation, visa processing, and travel arrangements, our expert team offers comprehensive support at every stage. We prioritize a smooth experience for both students and parents by ensuring expert guidance, timely updates, and hassle-free admissions.
                    </p>
                </motion.div>

                <div className=" p-6 font-roboto bg-white rounded-lg my-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-center mb-6"
                    >
                        Essential Eligibility Criteria for {" "}
                        <span className="text-red-600">MBBS</span> in Russia
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-4 text-lg text-justify"
                    >
                        To get admission to an MBBS program in a Russian university, students must fulfil specific eligibility criteria established by both the universities and the National Medical Commission (NMC) of India. These requirements ensure that applicants are academically prepared and qualified to pursue medical education abroad.
                    </motion.p>

                    <div className="space-y-6">
                        {/* Age Requirement */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-gray-100 p-0 rounded-lg text-justify"
                        >
                            <h2 className="text-xl font-semibold text-red-600">Educational Qualification</h2>
                            <p className="mt-2 text-justify">
                                Applicants must have completed their 10+2 education from a recognized board, with physics, chemistry, and biology as compulsory subjects.
                            </p>
                        </motion.div>

                        {/* Academic Qualification */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-gray-100 p-0 rounded-lg"
                        >
                            <h2 className="text-xl font-semibold text-red-600">Age Criteria</h2>
                            <p className="mt-2 text-justify">
                                Candidates must be at least 17 years old by December 31 of the admission year. There is no maximum age limit for applying to medical universities in Russia.
                            </p>
                        </motion.div>

                        {/* Minimum Marks Required */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-gray-100 p-0 rounded-lg"
                        >
                            <h2 className="text-xl font-semibold text-red-600">Minimum Percentage Requirement</h2>
                            <ul className="list-disc list-inside mt-2 text-justify space-y-2">
                                <li>
                                    General category students must have scored a minimum of 50% in PCB (Physics, Chemistry, Biology) in their 12th-grade exams. Reserved category students (SC/ST/OBC) require at least 40% in these subjects.
                                </li>
                            </ul>
                        </motion.div>

                        {/* NEET Qualification */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-gray-100 p-0 rounded-lg"
                        >
                            <h2 className="text-xl font-semibold text-red-600">Language Requirement</h2>
                            <p className="mt-2 text-justify">
                                As many top-ranked Russian universities offer MBBS courses in English, However, learning basic Russian is essential for effective communication during clinical training..
                            </p>
                        </motion.div>

                        {/* Language Proficiency */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-gray-100 p-0 rounded-lg"
                        >
                            <h2 className="text-xl font-semibold text-red-600">NEET Qualification for Indian Students</h2>
                            <p className="mt-2 text-justify">
                                According to NMC guidelines, Indian students planning to study MBBS abroad must qualify for the NEET exam. The NEET score remains valid for three years for MBBS admissions in Russia.
                            </p>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="mt-6 text-lg font-semibold text-justify"
                    >
                        Fulfilling these criteria ensures a smooth admission process, allowing students to secure a place at a prestigious Russian medical university and take the first step toward a successful medical career.
                    </motion.p>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-6"
                >
                    Step by Step Admission Process for  {" "}
                    <span className="text-red-600">MBBS </span>in Russian University 2025
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6 text-lg text-justify"
                >
                    Securing admission for MBBS in Russian universities is a smooth and well-organized process. With proper guidance, students can complete their admission journey without any difficulties. Russian universities follow a clear and straightforward step-by-step process, ensuring a hassle-free experience for aspiring medical students.
                </motion.p>

                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-gray-100 p-4 rounded-lg shadow-md"
                        >
                            <h2 className="text-xl font-semibold text-red-600">Step {index + 1}: {step.title}</h2>
                            <p className="mt-2">{step.description}</p>
                            {step.list && (
                                <ul className="list-disc list-inside mt-2 space-y-1">
                                    {step.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mx-auto p-6 font-roboto bg-white rounded-lg my-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-center mb-6"
                    >
                        Documents Required for{" "}
                        <span className="text-red-600">MBBS Admission in Russia</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6 text-lg text-center"
                    >
                        Students applying for MBBS in Russia must submit specific documents for admission,
                        visa processing, and university registration. Below are the required documents for
                        each stage.
                    </motion.p>

                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-gray-100 p-4 rounded-lg shadow-md"
                            >
                                <h2 className="text-xl font-semibold text-red-600">{section.title}</h2>
                                <ul className="list-disc list-inside mt-2 space-y-1">
                                    {section.documents.map((doc, i) => (
                                        <li key={i}>{doc}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="px-4 font-roboto mt-10"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl font-semibold text-red-600"
                        >
                            Important Documents Required While Entering Russia for MBBS Studies
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mb-6 text-lg text-justify mt-2"
                        >
                            When traveling to Russia for your MBBS studies, it is essential to carry specific
                            documents for smooth immigration clearance and successful university registration.
                            Below is a checklist of mandatory documents students must have upon arrival:
                        </motion.p>

                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="list-disc list-inside space-y-2 text-lg"
                        >
                            {[
                                "A valid passport with a stamped student visa",
                                "Official admission invitation letter issued by the university",
                                "University-issued admission confirmation letter",
                                "Medical fitness certificate verifying health status",
                                "HIV test report, as per Russian government requirements",
                                "Original academic records, including 10th and 12th mark sheets and certificates",
                                "NEET scorecard (mandatory for Indian applicants)",
                                "Proof of payment for tuition and hostel fees (if applicable)",
                                "Russian Rubles (RUB) or an international debit/credit card for initial expenses",
                                "Travel insurance document covering the study period",
                                "Migration card, obtained upon arrival at the Russian airport—must be securely kept",
                                "Contact details of university representatives or student coordinators for assistance",
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-6 text-lg font-semibold text-justify"
                        >
                            It is advisable to have both hard and digital copies of these documents to prevent any
                            inconvenience upon arrival. University officials will be available at the airport to assist
                            students and guide them through the registration and onboarding process.
                        </motion.p>
                    </motion.div>
                </div>



                <motion.div
                    className="bg-gradient-to-r from-[#f2312d] to-red-700 mt-6 mb-6 rounded-xl px-8 py-16 max-w-4xl lg:max-w-7xl mx-auto text-center font-roboto text-white"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-xl lg:text-2xl mb-4 font-semibold">
                        These documents must be properly arranged and submitted as per the university and visa guidelines to ensure a smooth admission and travel process.
                    </h2>
                </motion.div>
            </div>
        </>
    );
};

export default Admission;
