import React from 'react';

function UsefulInfoPage3() {
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
          <h1 className="text-white text-2xl lg:text-5xl font-semibold">Preparatory Faculty</h1>
          <p className="text-white text-lg lg:text-xl mt-2">
            Home <span className="mx-1 text-xl">&rarr;</span> Preparatory Faculty
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-24 mx-auto p-6 text-gray-800 font-roboto">
        <h2 className="text-center text-3xl font-bold mb-2">Preparatory Faculty</h2>
        <h3 className="text-xl text-center text-blue-800 font-semibold mb-2">Best Universities to Learn the Russian Language</h3>
        <h3 className="text-xl text-center text-blue-800 font-semibold mb-4">Preparatory Course – Russian Language Course</h3>

        <p className="mb-4">
          For all the students who have not opted for the English language as a medium of instruction, admission to the
          preparatory faculty in the Russian language is required in the first year. This is where the knowledge of the
          Russian language is provided along with all the other technical subjects concerned with the final education.
          The duration of the course termed as the Preparatory is 6-10 months or 8-10 months. After the successful
          completion of the course, the students are admitted to the first year of the Medical, Stomatology, Pharmacy,
          Engineering, Law, Economics, etc., all faculties of Russian Medical & Technical Universities of Russia.
        </p>

        <p className="mb-4">
          Students are provided with hostel accommodation, on a sharing basis – 2-3 persons in a room, library, and sports
          facilities on the university campus. According to the curriculum, lectures are conducted for 20 hours a week,
          and emphasis is placed on home- and self-study. Excursions and other activities are arranged to enhance
          Russian language learning.
        </p>


        <ul className="list-disc list-inside mb-4">
          <li>Russian Language</li>
          <li>Chemistry</li>
          <li>Physics</li>
          <li>Fundamentals of Higher Mathematics</li>
          <li>Biology: General Biology, Botany, Zoology, Anatomy</li>
        </ul>

        <h3 className="text-xl lg:text-2xl text-blue-800 font-semibold mt-6 mb-2">Universities List:</h3>
        <ul className="list-disc list-inside gap-3">
          <li>Rostov State Medical University</li>
          <li>Crimea Federal University</li>
          <li>Far Eastern Federal University</li>
          <li>Kazan State Medical University</li>
          <li>Volgograd State Medical University</li>
          <li>North-Western State Medical University named after I.I. Mechnikov</li>
          <li>Don State Technical University</li>
          <li>Southern Federal University</li>
          <li>Rostov State University of Economics</li>
          <li>Peoples’ Friendship University</li>
          <li>Yaroslavl State Medical University</li>
          <li>Ukhta State Technical University</li>
          <li>Udmurt State University</li>
          <li>Kazan Federal University</li>
        </ul>
      </div>

      {/* Bottom Colorful Banner */}
      <div className="bg-[#f2312d] py-12">
        <div className="max-w-4xl mx-auto text-center font-roboto text-white">
          <h2 className="text-2xl lg:text-3xl mb-4 font-semibold">A gateway to Study in Russia & Learn Russian Language
          </h2>
          <p className="mt-4 text-sm lg:text-md">
            Get Direct Admission in Top Universities which are mentioned here.
          </p>
          <p className="mt-4 text-sm lg:text-md">
            Admission open for 2023 academic year, interesting students may contact us for admission and fee details.
          </p>
          <p className="mt-4 text-sm lg:text-md">
            Email: contact@rrecrussia.com, rrec.educonsultants@gmail.com
          </p>
          <p className="mt-4 text-sm lg:text-md">
            Apply online at www.rrecrussia.com, www.rrecrostov.com
          </p>
        </div>
      </div>
    </>
  );
}

export default UsefulInfoPage3;
