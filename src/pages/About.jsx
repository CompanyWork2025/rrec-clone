import React from 'react';
import { motion } from "framer-motion";

function AboutRussia() {
    return (
        <div>
            {/* Top Image Banner */}
            <div className="relative">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Russia_Wikivoyage_front_page_banner.jpg/1200px-Russia_Wikivoyage_front_page_banner.jpg" // replace with your image path
                    alt="About Us"
                    className="w-full h-48 lg:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
                    <h1 className="text-white text-3xl lg:text-5xl font-roboto font-semibold">About Us</h1>
                    <p className="text-white font-roboto text-xl mt-2">
                        Home <span className="mx-1 text-xl">&rarr;</span> About Us
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <motion.div
                className="py-12 lg:px-24 font-roboto px-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-left text-justify mb-8">
                    <h2 className="text-2xl lg:text-3xl text-center font-semibold text-gray-800">Welcome to Reliable Russian Education Consultants
                        <span className='text-blue-400'>(RREC)</span></h2>
                    <h2 className="text-xl lg:text-2xl text-center mt-4 font-semibold text-blue-400">Who We Are </h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Reliable Russian Education Consultants (RREC) is India's leading and most trusted MBBS abroad consultancy, specializing in medical education in Russia. With a strong presence across India and almost two decades of experience, we have been the guiding force behind thousands of Indian students achieving their dream of studying MBBS in Russia. Our commitment to excellence, transparency, and student success makes us the perfect partner for medical aspirants seeking a globally recognized medical degree.
                    </p>
                    <p className="text-lg text-gray-600 mt-4">
                        At RREC, we provide comprehensive end-to-end services, ensuring a seamless and hassle-free admission process for students. From personalized counseling and university selection to documentation, visa assistance, and pre-departure guidance, we support students at every stage of their journey. Our partnerships with top NMC and WHO-recognized medical universities in Russia guarantee high-quality education and global career opportunities. With a dedicated team of experts, a student-first approach, and a proven track record of success, RREC continues to empower aspiring doctors by making medical education abroad affordable, accessible, and achievable.
                    </p>
                </div>


                {/* Second Heading and Paragraphs */}
                <div className="mt-12">
                    <h3 className="text-xl lg:text-2xl text-center font-semibold text-blue-400">Why Choose RREC</h3>
                    <div className="space-y-6 mt-4">
                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">A Legacy of Trust and Excellence</h3>
                        <p className="text-lg text-gray-700 text-justify">
                            For the last 16 years, RREC has been a pioneer in providing end-to-end assistance to medical aspirants looking to pursue MBBS in Russia. Our team of experts ensures that students receive personalized guidance, making their journey from application to admission seamless and hassle-free.
                        </p>
                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">Pan-India Presence</h3>
                        <p className="text-lg text-gray-700 text-justify">
                            RREC operates across multiple locations in India, making it easier for students from different regions to access our services. Our extensive network ensures that students and parents receive face-to-face counseling, prompt responses, and all necessary support whenever required.
                        </p>
                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            Complete Admission Assistance
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            We are not just consultants; we are your dedicated partners in your medical education journey. Our services include:
                        </p>

                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li>Personalized counseling to help you choose the best university  </li>
                            <li>Guidance on eligibility, documentation, and admission process  </li>
                            <li>Assistance with visa application and travel arrangements  </li>
                            <li>Pre-departure orientation for a smooth transition  </li>
                            <li>Continuous support during the course duration in Russia  </li>
                        </ul>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            Partnered with NMC & WHO Recognized Universities
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            We have exclusive partnerships with top medical universities in Russia that are recognized by the National Medical Commission (NMC) and the World Health Organization (WHO). This ensures that the MBBS degree you earn is globally accepted, allowing you to practice in India and other countries after clearing the required licensure exams.
                        </p>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            Affordable and Transparent Services
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            RREC is committed to providing students with cost-effective solutions without hidden charges. We ensure complete transparency in university fee structures, accommodation costs, and other expenses, making MBBS in Russia an affordable and realistic dream for Indian students.
                        </p>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            High Success Rate
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            Our success speaks for itself! Over the years, we have successfully placed thousands of students in top Russian medical universities. Our expert guidance ensures that students secure admission without any unnecessary delays or complications.
                        </p>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            A Perfect Partner for MBBS in Russia
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            With our well-structured approach, deep industry expertise, and strong university collaborations, RREC stands as the perfect companion for Indian students aiming to pursue MBBS in Russia. We prioritize student welfare, academic success, and career growth, ensuring a bright future for all our aspirants.
                        </p>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            A Competent Team Dedicated to Your Success – RREC
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            At Reliable Russian Education Consultants (RREC), we take immense pride in our highly skilled, experienced, and dedicated team, which works relentlessly to fulfill the dreams of thousands of Indian students aspiring to pursue MBBS abroad. Our professionals bring years of expertise in education consultancy, career guidance, and international admissions, ensuring a seamless and stress-free journey for students and their families.
                        </p>
                    </div>
                </div>
                <div className="mt-12">
                    <h3 className="text-xl lg:text-2xl text-center font-semibold text-blue-400">Meet Our Expert Team</h3>
                    <div className="space-y-6 mt-4">
                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            Experienced Educational Counselor
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            Our team of knowledgeable education counselors serves as the guiding light for students, helping them choose the best NMC and WHO-recognized medical universities in Russia. They provide:
                        </p>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li>Personalized one-on-one counseling sessions.</li>
                            <li>In-depth analysis of universities, courses, and career opportunities.</li>
                            <li>Assistance in selecting the right university based on budget, eligibility, and student preferences.</li>
                        </ul>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            Admissions & Documentation Specialists
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            The admissions team at RREC ensures a smooth and hassle-free application process. They assist students with:
                        </p>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li>Preparing and verifying all required documents.</li>
                            <li>Completing university applications and ensuring timely submission.</li>
                            <li>Coordinating directly with Russian universities to secure admissions.</li>
                        </ul>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            Visa & Travel Experts
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            Navigating international travel and visa procedures can be overwhelming. Our visa and travel specialists simplify the process by:
                        </p>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li>Guiding students through visa documentation and application.</li>
                            <li>Assisting in travel arrangements, including flight bookings and airport pickups.</li>
                            <li>Providing pre-departure briefings to help students transition smoothly to life in Russia.</li>
                        </ul>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            Student Support & Welfare Team
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            We believe that our responsibility extends beyond securing admission. Our student support team ensures students feel comfortable and secure throughout their MBBS journey by:
                        </p>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li>Assisting with accommodation and hostel arrangements.</li>
                            <li>Offering post-admission guidance and cultural adaptation support.</li>
                            <li>Providing 24/7 assistance for any issues students may face in Russia.</li>
                        </ul>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            University Liaison Officers
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            Our liaison officers maintain strong relationships with top medical universities in Russia. They act as a bridge between students, parents, and university officials, ensuring that students receive the best education and on-campus experience.
                        </p>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            Financial & Scholarship Advisors
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            We understand that affordability is a major concern for students and parents. Our financial advisors provide:
                        </p>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li>Transparent information about tuition fees and living costs.</li>
                            <li>Assistance in securing education loans and scholarships.</li>
                            <li>Guidance on budgeting for a comfortable stay in Russia.</li>
                        </ul>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            A Team That Works Like Family
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            At RREC, our team doesn’t just operate as consultants; we work as a family to ensure that every student gets the best support and guidance to achieve their dream of becoming a doctor. With a student-first approach, industry expertise, and a passion for excellence, we are committed to shaping successful medical careers for aspiring doctors in India.
                        </p>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            Our Vision
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            To be the most reliable and student-centric medical education consultancy, enabling Indian students to achieve their dreams of becoming successful doctors through quality education in Russia.
                        </p>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            Our Values
                        </h3>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li><strong>Integrity & Transparency:</strong> We uphold honesty in our processes, ensuring clarity in every step.</li>
                            <li><strong>Student-Centric Approach:</strong> Every student is unique, and we provide personalized guidance to help them make the best decision.</li>
                            <li><strong>Excellence in Service:</strong> From consultation to admission and beyond, we strive to offer top-notch services to students and parents.</li>
                        </ul>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            Commitment to Success
                        </h3>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li><strong>Your success is our priority:</strong> We are dedicated to ensuring students receive the best education and career opportunities.</li>
                            <li><strong>Long-Term Support:</strong> Our relationship with students doesn’t end at admission; we provide ongoing support throughout their MBBS journey in Russia.</li>
                        </ul>

                        <h3 className="text-md lg:text-xl text-justify font-semibold text-blue-400">
                            Contact Us Today!
                        </h3>
                        <p className="text-lg text-gray-700 text-justify">
                            Take the first step toward your dream of becoming a doctor!
                        </p>
                    </div>
                </div>
            </motion.div>


            {/* Bottom Colorful Banner */}
            <div className="bg-[#f2312d] py-12">
                <div className="max-w-4xl mx-auto text-center font-roboto text-white">
                    <h2 className="text-2xl lg:text-4xl mb-4 font-semibold">A gateway to study in Russia</h2>
                    <h3 className="text-2xl font-semibold">( Reliable Russian Educational Consultants )</h3>
                    <p className="mt-4 text-lg lg:text-2xl">
                        Email: contact@rrecrussia.com, rrec.educonsultants@gmail.com
                    </p>
                </div>
            </div>
        </div >
    );
}

export default AboutRussia;
