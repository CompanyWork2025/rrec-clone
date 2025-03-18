import React from 'react';
import { motion } from "framer-motion";
import img1 from '../assets/d1.webp';
import img2 from '../assets/d2.webp';

function FeePage4() {
  return (
    <>
      {/* Top Image Banner */}
      <div className="relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Russia_Wikivoyage_front_page_banner.jpg/1200px-Russia_Wikivoyage_front_page_banner.jpg"
          alt="About Russia"
          className="w-full h-48 lg:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black px-4 bg-opacity-50 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-2xl lg:text-5xl font-semibold">Study MBA In Southern Federal University, Russia</h1>
          <p className="text-white text-lg lg:text-xl mt-2">
            Home <span className="mx-1 text-xl">&rarr;</span> Study MBA In Southern Federal University, Russia
          </p>
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        className="max-w-8xl lg:px-24 font-roboto mx-auto p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-2xl lg:text-4xl font-semibold text-center text-gray-800 mb-4">Study MBA In Southern Federal University, Russia</h1>
        <p className="text-blue-600 text-xl font-semibold text-center mt-2">The program is aimed at young executives wishing to enhance their professional skills with a sound management qualification.</p>
        <div className='font-roboto mt-4 text-justify space-y-4 text-md'>
          <p>With origins dating back to 1915, Southern Federal University (SFedU) is the largest scientific and educational center in the south of Russia. SFedU traces its roots to the Royal University of Warsaw, which moved to the south of Russia during the Great War. We are widely recognized as one of the best universities in Russia for academic excellence, interdisciplinary research, and social commitment. Today, nearly 24,000 students, including 2,500 international students, are enrolled on two university campuses located in Rostov-on-Don and in Taganrog.</p>
          <p>Engineering courses are delivered at the Taganrog campus, while the Rostov campus offers a wide range of courses in Sciences and Humanities. SFedU offers 86 Bachelor’s degree programs, 126 Master’s degree programs, and 26 doctoral programs. The quality of academic programs is confirmed by German accreditation bodies: ACQUIN and AQAS.</p>
          <p>The university’s strong international outlook is demonstrated by the proportion of international students, 25 Erasmus+ destinations, 60 exchange agreements, and 10 double-degree partnerships. SFedU is actively involved in the Bologna process and its graduates receive European Diploma Supplement. SFedU conducts world-level research in information technologies, smart materials, nanotechnologies, medicine of the future, and robotics. Students can conduct research and make prototypes at SFedU international laboratories, shared-use equipment centers, and engineering centers. The students have free access to the e-refereed scientific journals. The SFedU has a wealth of facilities on campus to meet students’ needs in research, innovation, and development from state-of-the-art equipment, and business incubators to our Sports Center.</p>
        </div>

        {/* SOUTHERN FEDERAL UNIVERSITY GLOBAL RANKINGS */}
        <h3 className="text-lg lg:text-2xl font-semibold text-red-600 mt-6">SOUTHERN FEDERAL UNIVERSITY GLOBAL RANKINGS</h3>
        <ul className="mt-2 space-y-2 list-disc list-inside text-gray-700">
          <li>QS World University Rankings: 531-540</li>
          <li>QS University Rankings (Emerging Europe & Central Asia): 90</li>
          <li>Times Higher Education (World University Rankings): 1201+</li>
          <li>The BRICS & Emerging Economies Rankings: 401-500</li>
        </ul>

        <h3 className="text-lg lg:text-2xl font-semibold text-blue-700 mt-6">Master of Business Administration:</h3>
        <p className='text-md mt-2 font-roboto text-justify'>The objective of the MBA program is to educate and prepare a diverse group of men and women with the knowledge, analytical ability, and management perspectives and skills needed to provide leadership to organizations competing in a world increasingly characterized by diversity in the workforce, rapid technological change, and a fiercely competitive global marketplace.</p>

        <h3 className="text-lg lg:text-2xl font-semibold text-blue-700 mt-6">Program Structure:</h3>
        <ul className="mt-2 space-y-2 list-disc list-inside text-gray-700">
          <li>Introductory courses.</li>
          <li>Scientific foundations of business and management.</li>
          <li>Core professional disciplines.</li>
          <li>Special (compulsory) courses</li>
        </ul>

        <h3 className="text-lg lg:text-2xl font-semibold text-blue-700 mt-6">Quick Facts:</h3>
        <ul className="mt-2 space-y-2 list-disc list-inside text-gray-700">
          <li>Duration: 18 Months</li>
          <li>Language of medium: English.</li>
          <li>Intake: September</li>
          <li>Accreditation: ECBE (European Council of Business Education)</li>
        </ul>

        <div className='font-roboto mt-4 text-justify space-y-2 text-md'>
          <h3 className="text-lg lg:text-2xl font-semibold text-blue-700 mt-6">Dormitory: </h3>
          <p>Accommodation at the student campus of SFedU in Rostov-on-Don.</p>
          <p>Southern Federal University offers its students comfortable living conditions in new apartment-type dormitories. A modern sports complex is located on the territory of the student campus, which makes it possible for SFedU students to play tennis, volleyball, basketball, football, and other sports. Near the hostel, there is a new pool.</p>
        </div>
        <h3 className="text-lg lg:text-2xl font-semibold text-blue-700 mt-6">The new student campus of SFedU is the building number 6B, 6V, 6G, 8, 9A, and 9B.           </h3>
        <p className='mt-2 '>Address: Rostov-on-Don, st. Sorge, 21</p>
        <h3 className="text-lg lg:text-2xl font-semibold text-blue-700 mt-6">How to reach:           </h3>
        <p className='mt-2 '>from the Main railway station - take a minibus N 85-A (or take a bus N 67-A, 67, 55, 40) to the stop "Area 339 Shooting Division"</p>
        <p className='mt-2 '>From the Airport Platov- a minibus to the Main Railway Station, transfer to a minibus N 85-A (or take a bus N 67-A, 67, 55, 40) and go to the stop “Area 339 Shooting Division".</p>

        {/* Image Gallery Section */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-start">
          {/* Image 1 */}
          <div className="w-full md:w-1/4">
            <img
              src={img1}
              alt="Campus View"
              className="w-full h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image 2 */}
          <div className="w-full md:w-1/4">
            <img
              src={img2}
              alt="Library View"
              className="w-full h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom Colorful Banner */}
      <div className="bg-[#f2312d] px-4 py-12">
        <div className="max-w-7xl mx-auto text-center font-roboto text-white">
          <h2 className="text-2xl lg:text-3xl mb-4 font-semibold">Choose the Best University in Affordable Fees for MBA Program in Russia with Complete English Medium.          </h2>
          <p className="mt-4 text-sm lg:text-md">
            Get Direct Admission:
          </p>
          <p className="mt-2 text-sm lg:text-md">
            Contact today for fee structure, and admission procedure to the RREC Team
          </p>
          <p className="mt-2 text-sm lg:text-md">
            Who is the official authorized representative of Southern Federal University for Indian & Foreign Students
          </p>
          <p className="mt-4 text-sm lg:text-md">
            Contact numbers: +917042284508, 509 (Indian office), +7-9515371133 (Russian Office)
          </p>
          <p className="mt-4 text-sm lg:text-md">
            Students Inquiries: contact@rrecrussia.com
          </p>
          <p className="mt-4 text-sm lg:text-md">
            For Business Inquiries: contact@rrec.com.ru
          </p>
          <p className="mt-4 text-sm lg:text-md">
            Students or parents can write to us on at WhatsApp also +7-9515371133
          </p>
        </div>
      </div>
    </>
  );
}

export default FeePage4;
