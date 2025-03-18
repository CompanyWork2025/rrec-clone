import React from 'react';
import { motion } from "framer-motion";

function FeePage3() {
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
          <h1 className="text-white text-2xl lg:text-5xl font-semibold">Fees For Russian Language Courses</h1>
          <p className="text-white text-lg lg:text-xl mt-2">
            Home <span className="mx-1 text-xl">&rarr;</span> Fees For Russian Language Courses
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
        <h1 className="text-2xl lg:text-4xl font-semibold text-center text-gray-800 mb-4">Fees For Russian Language Courses</h1>
        <p className="text-gray-600 font-semibold text-center mt-2">Learn Russian From Top Medical, Technical and Federal Universities of Russia. After completion of the preparatory course, a student will receive a diploma of the Russian Language Course. With this diploma, students can join any U.G & P.G Courses in Russian Medium in Russia.</p>
      </motion.div >

      {/* Fees Structure Table */}
      <motion.div
        className="mt-6 lg:px-24 px-4 font-roboto mb-4 overflow-x-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-lg lg:text-3xl text-center font-semibold text-gray-800 mb-4">
          Fees Structure for (Preparatory Faculty / Course Duration: 8-10 Months)
        </h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-green-600 text-gray-700">
              <th className="border border-gray-300 text-white px-4 py-2 text-left">Top Universities</th>
              <th className="border border-gray-300 text-white px-4 py-2 text-left">City</th>
              <th className="border border-gray-300 text-white px-4 py-2 text-left">Fees per Year (USD)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {[
              ["Rostov State Medical University", "Rostov-On-Don", "4200"],
              ["Volgograd State Medical University", "Volgograd", "4500"],
              ["UNN (Lobachevsky University)", "Nizhny Novgorod", "2600"],
              ["Kazan Federal University", "Kazan", "4000"],
              ["NWSMU named I.I Mechnikov", "St. Petersburg", "4600"],
              ["Kazan State Medical University", "Kazan", "3200"],
              ["Yaroslavl State Medical University", "Yaroslavl", "2600"],
              ["Don State Technical University", "Rostov-On-Don", "2800"],
              ["Southern Federal University", "Rostov-On-Don", "3000"],
              ["Rostov State University of Transport", "Rostov-On-Don", "2800"],
              ["Sevastopol State University", "Sevastopol", "3000"],
              ["Baikal State University", "Irkutsk", "2600"],
              ["Ukhta State Technical University", "Ukhta", "3200"],
              ["Udmurt State University", "Izhevsk", "2800"],
              ["St. Petersburg Polytechnic University", "Saint Petersburg", "3600"],
            ].map(([university, city, fees], index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{university}</td>
                <td className="border border-gray-300 px-4 py-2">{city}</td>
                <td className="border border-gray-300 px-4 py-2">${fees}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Attention Notice */}
        <div className="mt-6 p-4 border border-red-500 bg-red-100 lg:px-10 rounded-lg">
          <h3 className="text-lg font-semibold text-red-600 mb-2">Attention Please:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Fees here include tuition, hostel, and medical insurance.</li>
            <li>1 USD = 80 Russian Rubles applied for this fee structure.</li>
            <li>All documentation will be done from the RREC Head office.</li>
            <li>The fees mentioned here the student has to pay one time only.</li>
            <li>The student has to pay for the RT-PSR report or any other medical tests in Russia if required.</li>
            <li>As per the new rule of the Russian Federation from 29.12.21, the student has to go through Biometrics and medical tests within 90 days of arrival to Russia, and the student has to pay for them (The cost will be 6500-9000 rubles).</li>
            <li>Traveling from Moscow to a particular city; the student has to pay. As you all know, from 2020 less connectivity of airlines is there, so whatever the possibilities will be, the student has to pay whether by bus or train.</li>
          </ul>
          <p className="mt-3 font-semibold text-gray-800">
            For Direct Admissions contact us at: <br />
            📞 <span className="text-blue-600">+7-9515371133</span> <br />
            📧 <span className="text-blue-600">contact@rrecrussia.com</span>
          </p>
        </div>
      </motion.div>


      {/* Bottom Colorful Banner */}
      <div className="bg-[#f2312d] py-12">
        <div className="max-w-4xl mx-auto text-center font-roboto text-white">
          <h2 className="text-2xl lg:text-4xl mb-4 font-semibold">Get Direct Admission</h2>
          <p className="mt-4 text-sm lg:text-md">
            Reliable Russian Educational Consultants (RREC)
          </p>
          <p className="mt-4 text-sm lg:text-md">
            All you need to do is to apply online application right in the beginning to avoid the deadline.
          </p>
          <p className="mt-4 text-sm lg:text-md">
            Contact numbers: +917042284508, 509 (Indian office), Students Inquiries: contact@rrecrussia.com, rrec.educonsultants@gmail.com
          </p>
          <p className="mt-4 text-sm lg:text-md">
            For Business Inquiries: contact@rrecrussia.com | Students or parents can write to us on at WhatsApp also +7-9515371133
          </p>
        </div>
      </div>

    </>
  );
}

export default FeePage3;
