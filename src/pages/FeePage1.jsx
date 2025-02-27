import React from 'react';

function FeePage1() {

  const universityData = [
    {
      heading: "Rostov State Medical University | City: Rostov-on-Don, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "6100 USD" },
        { label: "Fees 2nd-6th Per Year", value: "4550 USD" },
        { label: "Grand Total", value: "28850 USD" },
      ],
      note: "Indian food is available in Campus.",
    },
    {
      heading: "Samara State Medical University, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "5500 USD" },
        { label: "Fees 2nd-6th Per Year", value: "5000 USD" },
        { label: "Grand Total", value: "30500 USD" },
      ],
      note: "-",
    },
    {
      heading: "Volgograd State Medical University | City: Volgograd, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "7580 USD" },
        { label: "Fees 2nd-6th Per Year", value: "6580 USD" },
        { label: "Grand Total", value: "40480 USD" },
      ],
      note: "-",
    },
    {
      heading: "Yaroslavl State Medical University, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "4600 USD" },
        { label: "Fees 2nd-6th Per Year", value: "3800 USD" },
        { label: "Grand Total", value: "23600 USD" },
      ],
      note: "-",
    },
    {
      heading: "North-Western State Medical University named after I. I Mechnikov | City: St. Petersburg, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "7800 USD" },
        { label: "Fees 2nd-6th Per Year", value: "6500 USD" },
        { label: "Grand Total", value: "40300 USD" },
      ],
      note: "-",
    },
    {
      heading: "Kursk State Medical University | City: Kursk, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "6280 USD" },
        { label: "Fees 2nd-6th Per Year", value: "6200 USD" },
        { label: "Grand Total", value: "38,280 USD" },
      ],
      note: "-",
    },
    {
      heading: "Kazan Federal University (Institute of Fundamental Medicine and Biology) | City: Kazan, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "8150 USD" },
        { label: "Fees 2nd-6th Per Year", value: "6750 USD" },
        { label: "Grand Total", value: "41900 USD" },
      ],
      note: "-",
    },
    {
      heading: "Crimea Federal University (Medical Academy) | City: Simferopol, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "	6500 USD" },
        { label: "Fees 2nd-6th Per Year", value: "4500 USD" },
        { label: "Grand Total", value: "29000 USD" },
      ],
      note: "-",
    },
    {
      heading: "Lobachevsky State University Of Nizhny Novgorod, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "5700 USD" },
        { label: "Fees 2nd-6th Per Year", value: "4500 USD" },
        { label: "Grand Total", value: "28200 USD" },
      ],
      note: "Regarding Hostel note please; these rates are calculated here for normal hostels as per all students, But who wants to live in a hostel with an extra comfort for that 325$ additional student has to pay.",
    },
    {
      heading: "Kazan State Medical University | City: Kazan, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "6810 USD" },
        { label: "Fees 2nd-6th Per Year", value: "6110 USD" },
        { label: "Grand Total", value: "37360 USD" },
      ],
      note: "The fees here are calculated as per government hostel fees, those who will not get a government hostel, need to pay 1000$ additional for a private hostel up to June Month.",
    },
    {
      heading: "People's Friendship University | City: Moscow, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "11500 USD" },
        { label: "Fees 2nd-6th Per Year", value: "9850 USD" },
        { label: "Grand Total", value: "60,750 USD" },
      ],
      note: "Hostel not included in this package, Hostel starts from 50-170$ per month (we can say yearly 2000$ Approx).",
    },
    {
      heading: "North-Ossetian State Medical Academy | City: Vladikavkaz, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "6000 USD" },
        { label: "Fees 2nd-6th Per Year", value: "4600 USD" },
        { label: "Grand Total", value: "29,000 USD" },
      ],
      note: "-",
    },
    {
      heading: "Izhevsk State Medical Academy | City: Izhevsk, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "5900 USD" },
        { label: "Fees 2nd-6th Per Year", value: "3900 USD" },
        { label: "Grand Total", value: "25,400 USD" },
      ],
      note: "-",
    },
  ];

  return (
    <>
      {/* Top Image Banner */}
      <div className="relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Russia_Wikivoyage_front_page_banner.jpg/1200px-Russia_Wikivoyage_front_page_banner.jpg"
          alt="About Russia"
          className="w-full h-48 lg:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center font-roboto text-center">
          <h1 className="text-white text-2xl lg:text-5xl font-roboto font-semibold">Fee Structure For MBBS, BDS & Pharmacy</h1>
          <p className="text-white font-roboto text-lg lg:text-xl mt-2">
            Home <span className="mx-1 text-xl">&rarr;</span> Fee Structure For MBBS, BDS & Pharmacy
          </p>
        </div>
      </div>

      <div className="container font-roboto mx-auto p-4 mt-6 lg:px-24">
        <h1 className="text-4xl text-center text-gray-800 font-bold">Fee Structure</h1>
        <p className="mt-4 text-center text-blue-400 font-semibold text-lg">
          Study MBBS in Russia, (MBBS, BDS, Pharmacy in Russia)
        </p>
      </div>

      {/* Main Content */}
      <div className="py-6 lg:px-24 font-roboto px-6">
        <div className="text-left text-justify mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#f2312d]">Fees for 2024-25 Academic Year (For International Students)</h2>
          <p className="text-md text-gray-600 mt-4">
            A Dream Universities for MBBS Aspirants.Get complete information regarding tuition fees, hostel fees, and medical insurance.
          </p>
          <p className="text-md text-gray-600 mt-4">Russia, due to its sublime supremacy in science and technology has become the pivotal destination for medical education in the last decade or two. Students not only from Asia but also from other parts of the world are yearning to get admission in the MBBS course that is offered through direct admission to foreign students. If you really want to study MBBS at one of the top-ranked medical universities, you should contact RREC Team the official representative of Russian Medical Universities. However, in order to take admission, you need to take the right initiative at the right time to reserve your seat at Top Medical Universities Russia. It is so because Russian medical universities are one of the highly-ranked universities and a vast number of foreign students apply for these universities every year. </p>
          <p className="text-md text-gray-600 mt-4">RREC Pvt. Ltd is the authorized and official admission partner of Top Russian Medical & Federal Universities. We have massive experience of more than 15 years in imparting professional consulting services for medical aspirants. We welcome Indian students as well as International Students (Asia, Africa, Arab & European Countries) who want to study MBBS in Russia for the 2024 intake. We have the top 10 medical universities in Russia for MBBS on our list, where you can chase your dream to become a good doctor. </p>
        </div>
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#f2312d]">Get Direct Admission</h2>
        <p className="text-md text-gray-600 mt-4 text-justify">
          Russian Medical Universities are well known for their high quality of Medical Education and highly professional teaching staff. Russia is quite an affordable study abroad destination for international students. It is quite budget-friendly for Indian students as well as for foreign students. For an Indian student, you will be delighted to know that you will be charged four times lesser as compared to any Indian private medical college or university. That is the reason why study MBBS in Russia attracts students from all over the world. It will be a delightful opportunity for deserving candidates who want to pursue MBBS abroad.
        </p>
        <h2 className="text-xl lg:text-2xl text-center font-semibold mt-10 text-blue-800">Fees Structure of Top Rank Medical Universities of Russia | 2024-25 Academic Year | Study MBBS in Russia</h2>
      </div>
      {universityData.map((university, index) => (
        <div key={index} className="bg-white shadow-lg lg:px-24 -mt-8 font-roboto rounded-lg p-5 mb-8">
          {/* Table Structure */}
          <table className="w-full border-collapse border border-gray-800">
            {/* University Name */}
            <thead>
              <tr className="bg-blue-800 text-white text-md">
                <th colSpan="4" className="py-1 text-center font-semibold">
                  {university.heading}
                </th>
              </tr>
              <tr className="bg-green-600 text-white text-sm">
                {university.fees.map((fee, i) => (
                  <th key={i} className="border border-gray-800 py-1 text-center">
                    {fee.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Fees Data */}
              <tr className="bg-gray-100">
                {university.fees.map((fee, i) => (
                  <td key={i} className="border border-gray-800 py-2 text-center font-medium">
                    {fee.value}
                  </td>
                ))}
              </tr>
              {/* Note Row */}
              <tr className="bg-gray-50">
                <td colSpan="4" className="border border-gray-800 py-1 text-red-600">
                  <div className="flex justify-start items-center px-4">
                    <strong>Note:</strong>
                    <p className="text-blue-800 font-semibold text-sm ml-4">{university.note}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}

      <div className="container font-roboto mx-auto p-4 mb-4 -mt-6 lg:px-20">
        <h1 className="text-xl lg:text-2xl text-red-600 font-bold">Attention Please</h1>

        {/* List Section */}
        <ul className="mt-4 space-y-2">
          {[
            "Yearly fees mentioned here include tuition, government hostel, medical insurance, registration & visa extension per year.",
            "For all universities, the tuition fees mentioned here can increase from the 2nd – to the 6th year (6-12%).",
            "1 USD = 75 Russian Rubles applied for MBBS fee structure from 2nd to 6th year, which is mentioned here.",
            "1 USD = 75 Russian Rubles applied for MBBS fee structure from 2nd to 6th year, which is mentioned here.",
            "First-year fees student has to pay one time only. From 2nd year students can pay semester-wise as per permission of the university.",
            "The student has to pay for the RT-PSR report or any other medical tests in Russia if required.",
            "First Year Medicals & Biometrics charges are included in 1st-year package. From 2nd year onwards student has to take care of the expenses.",
            "Traveling from Moscow to a particular city; the student has to pay, As you, all know that from 2020 less connectivity of airlines are there; so whatever the possibilities will be there he/she has to pay whether by bus or train."
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-4">
              {/* Image */}
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/011/858/556/small_2x/green-check-mark-icon-with-circle-tick-box-check-list-circle-frame-checkbox-symbol-sign-png.png"
                alt="Attention"
                className="w-8 h-8 object-contain"
              />
              {/* Text */}
              <p className="text-gray-800 text-justify">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="container font-roboto mx-auto p-4 mb-4 -mt-6 lg:px-20">
        <h1 className="text-md lg:text-2xl text-center text-blue-800 mb-8 font-bold">Fees for Faculties Like Stomatology (BDS), Pharmacy in English Medium:</h1>
        <h1 className="text-md lg:text-xl text-green-600 font-bold mb-2">Kazan State Medical University</h1>
        <h2 className="text-md lg:text-xl text-blue-600 font-bold mb-2">Stomatology (Dentistry) | Duration: 5 Years:</h2>
        <p className='text-gray-800 text-justify'>first year: 7200$ (it includes tuition, hostel, M.I, registration & Visa extension), from second year: 6350$. (it includes tuition, hostel, M.I, registration & Visa extension). If a student will not get a government hostel for that 1200$ he/she has to add to live in a private hostel/apartment, which means 8400$ for the first year. (6-10% tuition fees can be increased every year)</p>
        <h2 className="text-md lg:text-xl text-blue-600 font-bold mb-2 mt-4">Pharmacy | 5 Years:</h2>
        <p className='text-gray-800 text-justify'>first year: 4980$ (it includes tuition, hostel, M.I, registration & Visa extension), from second year: 3690$. (it includes tuition, hostel, M.I, registration & Visa extension). If a student will not get a government hostel for that 1200$ he/she has to add to live in a private hostel/apartment, which means 6180$ for the first year. (6-10% tuition fees can be increased every year)</p>
      </div>

      <div className="container font-roboto mx-auto p-4 mb-4 -mt-6 lg:px-20">
        <h1 className="text-md lg:text-xl text-green-600 font-bold mb-2">Lobachevsky State University of Nizhny novgorod</h1>
        <h2 className="text-md lg:text-xl text-blue-600 font-bold mb-2">Stomatology (Dentistry) | Duration: 5 Years:</h2>
        <p className='text-gray-800 text-justify'>First Year: 5590$ (it includes tuition, hostel, M.I, registration & Visa extension), from second year: 4590$. (it includes tuition, hostel, M.I, registration & Visa extension). (6-10% tuition fees can be increased every year)</p>
        <h2 className="text-md lg:text-xl text-blue-600 font-bold mb-2 mt-4">Note Please:</h2>
        <p className='text-gray-800 text-justify'>* 1 USD = 80 Russian Rubles applied for this fee structure.</p>
      </div>

      <div className="container font-roboto mx-auto p-4 mb-4 -mt-6 lg:px-20">
        <h1 className="text-md lg:text-2xl text-blue-800 mb-4 font-bold">Fees for Faculties Like Veterinary Medicine</h1>
        <h1 className="text-md lg:text-xl text-green-600 font-bold mb-2">Don State Technical University</h1>
        <h2 className="text-md lg:text-xl text-blue-600 font-bold mb-2">Duration | 1+4 Years:</h2>
        <p className='text-gray-800 text-justify'>First Year: 3500$ including all means admission+invitation+arrival, from second year: 2200$ (it includes tuition, hostel, M.I, registration & Visa extension)</p>
        <h2 className="text-md lg:text-xl text-blue-600 font-bold mb-2 mt-4">Note Please:</h2>
        <p className='text-gray-800 text-justify'>* 1 USD = 80 Russian Rubles applied for this fee structure.</p>
      </div>

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

export default FeePage1;
