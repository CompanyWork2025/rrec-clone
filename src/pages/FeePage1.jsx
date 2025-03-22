import React from 'react';
import { motion } from "framer-motion";

function FeePage1() {

  const universityData = [
    {
      heading: "Rostov State Medical University | City: Rostov-on-Don, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "6100 USD" },
        { label: "Fees 2nd-6th Per Year", value: "4550 USD" },
      ],
      note: "Indian food is available in Campus.",
    },
    {
      heading: "Ural State Medical University | City: Yekaterinburg, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "6000 USD" },
        { label: "Fees 2nd-6th Per Year", value: "5000 USD" },
      ],
      note: "-",
    },
    {
      heading: "Crimea Federal University (Medical Institute) | City: Simferopol, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "6500 USD" },
        { label: "Fees 2nd-6th Per Year", value: "4500 USD" },
      ],
      note: "-",
    },
    {
      heading: "Far Eastern Federal University | City: Vladivostok, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "7000 USD" },
        { label: "Fees 2nd-6th Per Year", value: "6000 USD" },
      ],
      note: "-",
    },
    {
      heading: "Kemerovo State Medical University | City: Kemerovo, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "5800 USD" },
        { label: "Fees 2nd-6th Per Year", value: "4500 USD" },
      ],
      note: "-",
    },
    {
      heading: "Bashkir State Medical University | City: Ufa, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "5700 USD" },
        { label: "Fees 2nd-6th Per Year", value: "4700 USD" },
      ],
      note: "-",
    },
    {
      heading: "Kazan State Medical University | City: Kazan, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "6810 USD" },
        { label: "Fees 2nd-6th Per Year", value: "6110 USD" },
      ],
      note: "The fees here are calculated as per government hostel fees, those who will not get a government hostel, need to pay 1000$ additional for a private hostel up to June Month.",
    },
    {
      heading: "North-Western State Medical University named after I.I Mechnikov | City: St. Petersburg, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "7800 USD" },
        { label: "Fees 2nd-6th Per Year", value: "6500 USD" },
      ],
      note: "-",
    },
    {
      heading: "Kursk State Medical University | City: Kursk, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "6280 USD" },
        { label: "Fees 2nd-6th Per Year", value: "6200 USD" },
      ],
      note: "-",
    },
    {
      heading: "Krasnoyarsk State Medical University | City: Krasnoyarsk, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "5900 USD" },
        { label: "Fees 2nd-6th Per Year", value: "4800 USD" },
      ],
      note: "-",
    },
    {
      heading: "Ivanovo State Medical University | City: Ivanovo, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "5600 USD" },
        { label: "Fees 2nd-6th Per Year", value: "4600 USD" },
      ],
      note: "-",
    },
    {
      heading: "Pitirim Sorokin Syktyvkar State University | City: Syktyvkar, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "5400 USD" },
        { label: "Fees 2nd-6th Per Year", value: "4300 USD" },
      ],
      note: "-",
    },
    {
      heading: "Synergy University Moscow | City: Moscow, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "7000 USD" },
        { label: "Fees 2nd-6th Per Year", value: "6000 USD" },
      ],
      note: "-",
    },
    {
      heading: "People’s Friendship University Moscow | City: Moscow, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "11500 USD" },
        { label: "Fees 2nd-6th Per Year", value: "9850 USD" },
      ],
      note: "Hostel not included in this package, Hostel starts from 50-170$ per month (we can say yearly 2000$ Approx).",
    },
    {
      heading: "Yaroslavl State Medical University | City: Yaroslavl, Russia",
      fees: [
        { label: "Fees Pattern", value: "Per Year" },
        { label: "Total Fee 1st Year", value: "4600 USD" },
        { label: "Fees 2nd-6th Per Year", value: "3800 USD" },
      ],
      note: "-",
    }
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

      <motion.div
        className="container font-roboto mx-auto p-4 mt-6 lg:px-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl text-center text-gray-800 font-bold">Fee Structure</h1>
        <p className="mt-4 text-center text-blue-400 font-semibold text-lg">
          Study MBBS in Russia, (MBBS, BDS, Pharmacy in Russia)
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="py-6 lg:px-24 font-roboto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-left text-justify mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-[#f2312d]">Fee Structure for MBBS in Russia - 2025</h2>
          <p className="text-md text-gray-600 mt-4">
            Pursuing an MBBS in Russia is a cost-effective alternative to studying in private medical colleges in India, making it a popular choice among aspiring doctors. Russian universities offer affordable tuition fees, typically ranging between 3,000 and $7,000 per year, depending on the university and location. Unlike Indian private institutions, there are no donation or capitation fees, ensuring a fair and transparent admission process.
          </p>
          <p className="text-md text-gray-600 mt-4">The cost of living in Russia is budget-friendly, with hostel accommodations and daily expenses being quite manageable for international students. Additionally, many universities offer scholarships for academically outstanding students, helping further ease the financial burden.  </p>
          <p className="text-md text-gray-600 mt-4">On average, the total expense for completing an MBBS in Russia, including tuition, accommodation, and other essential costs, falls between 22 lakh to ₹55 lakh or the entire program. This is significantly more affordable compared to medical education in Western countries. With **globally recognized degrees, state-of-the-art infrastructure, and extensive hands-on clinical training, Russian medical universities provide high-quality education at a fraction of the cost, making them an ideal option for Indian medical aspirants.</p>
        </div>
        <h2 className="text-xl lg:text-2xl font-semibold text-[#f2312d]">Get Direct Admission</h2>
        <p className="text-md text-gray-600 mt-4 text-justify">
          Russian Medical Universities are well known for their high quality of Medical Education and highly professional teaching staff. Russia is quite an affordable study abroad destination for international students. It is quite budget-friendly for Indian students as well as for foreign students. For an Indian student, you will be delighted to know that you will be charged four times lesser as compared to any Indian private medical college or university. That is the reason why study MBBS in Russia attracts students from all over the world. It will be a delightful opportunity for deserving candidates who want to pursue MBBS abroad.
        </p>
        <h2 className="text-xl lg:text-2xl text-center font-semibold mt-10 text-blue-800">Fees Structure of Top Rank Medical Universities of Russia | 2025-26 Academic Year | Study MBBS in Russia</h2>
      </motion.div>
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


      <div className="container font-roboto mx-auto p-4 mb-4 -mt-14 lg:px-20">
        <motion.div
          className="mt-4 space-y-3 py-4 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-left text-justify text-md lg:text-2xl text-red-600 font-semibold font-roboto mt-4">Note:
          </p>
          <ul className="list-disc pl-5 mt-2 text-left text-gray-700 space-y-2">
            <li>
              Kursk state medical university fee mentioned here it includes tuition, hostel, medical insurance.
            </li>
            <li>
              Govt. hostel fee starts from 26,000 RUB to 52,000 RUB yearly, depends on the selected university.
            </li>
            <li>
              Where Govt. hostels are not available; Private hostel fee starts from 7000-11,000 RUB monthly.
            </li>

            <li>
              Hostel fee typically can increase by <strong>5-7% per year</strong> according to the current prices for electricity, gas, water, heating, etc.
            </li>
            <li>
              Medical Insurance fee can increase by <strong>3-5% per year</strong> according to the annual rate of inflation.
            </li>
            <li>
              Tuition Fees can increase by <strong>8-12% per year</strong> according to the annual rate of inflation.
            </li>
            <li>
              Medical Inusrance is mandatory in all universities it starts from 6000-9000 RUB yearly.
            </li>
            <li>
              Medical and biometrics charges are additional; students must pay for themselves from the first to the sixth year. Every city's cost for this procedure is different, but it is on average <strong>7500-11000 </strong>Rubles.
            </li>
            <li>
              Traveling from Moscow to a particular city; the student has to pay, As you, all know that from 2020 less connectivity of airlines are there; so whatever the possibilities will be there he/she has to pay whether by bus or train.
            </li>
          </ul>
          <p className="text-yellow-400 font-semibold text-justify font-roboto mt-4 bg-blue-700 p-2">RREC team would like to inform you that the exchange rate is extremely volatile and is subjected to change. Candidates are requested to check the current exchange rate and your budget before initiating the admission process.</p>

        </motion.div>
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
        
        {/* Volgograd State Medical University */}
        <h1 className="text-md lg:text-xl text-green-600 font-bold mb-2">Volgograd State Medical University</h1>
        <h2 className="text-md lg:text-xl text-blue-600 font-bold mb-2">Stomatology (Dentistry) | Duration: 5 Years:</h2>
        <p className='text-gray-800 text-justify'>
          First year: 7500$ (includes tuition, hostel, M.I, registration & Visa extension), from second year: 6650$
          (includes tuition, hostel, M.I, registration & Visa extension). If a student does not get a government hostel, an additional
          1200$ is required for a private hostel/apartment, making it 8700$ for the first year. (6-10% tuition fee increase per year)
        </p>

        <h2 className="text-md lg:text-xl text-blue-600 font-bold mb-2 mt-4">Pharmacy | 5 Years:</h2>
        <p className='text-gray-800 text-justify'>
          First year: 5100$ (includes tuition, hostel, M.I, registration & Visa extension), from second year: 3800$
          (includes tuition, hostel, M.I, registration & Visa extension). If a student does not get a government hostel, an additional
          1200$ is required for a private hostel/apartment, making it 6300$ for the first year. (6-10% tuition fee increase per year)
        </p>

        {/* Crimea Federal University */}
        <h1 className="text-md lg:text-xl text-green-600 font-bold mb-2 mt-8">Crimea Federal University (Medical Academy)</h1>

        <h2 className="text-md lg:text-xl text-blue-600 font-bold mb-2">Stomatology (Dentistry) | Duration: 5 Years:</h2>
        <p className='text-gray-800 text-justify'>
          First year: 6800$ (includes tuition, hostel, M.I, registration & Visa extension), from second year: 5900$
          (includes tuition, hostel, M.I, registration & Visa extension). If a student does not get a government hostel, an additional
          1200$ is required for a private hostel/apartment, making it 8000$ for the first year. (6-10% tuition fee increase per year)
        </p>

        <h2 className="text-md lg:text-xl text-blue-600 font-bold mb-2 mt-4">Pharmacy | 5 Years:</h2>
        <p className='text-gray-800 text-justify'>
          First year: 4800$ (includes tuition, hostel, M.I, registration & Visa extension), from second year: 3600$
          (includes tuition, hostel, M.I, registration & Visa extension). If a student does not get a government hostel, an additional
          1200$ is required for a private hostel/apartment, making it 6000$ for the first year. (6-10% tuition fee increase per year)
        </p>
      </div>




      <div className="container font-roboto mx-auto p-4 mb-4 -mt-6 lg:px-20">
        <h1 className="text-md lg:text-2xl text-blue-800 mb-4 font-bold">Fees for Faculties Like Veterinary Medicine</h1>
        <h1 className="text-md lg:text-xl text-green-600 font-bold mb-2">Don State Technical University</h1>
        <h2 className="text-md lg:text-xl text-blue-600 font-bold mb-2">Duration | 1+4 Years:</h2>
        <p className='text-gray-800 text-justify'>First Year: 3500$ including all means admission+invitation+arrival, from second year: 2200$ (it includes tuition, hostel, M.I, registration & Visa extension)</p>
        <h2 className="text-md lg:text-xl text-blue-600 font-bold mb-2 mt-4">Note Please:</h2>
        <p className='text-gray-800 text-justify'>* 1 USD = 80 Russian Rubles applied for this fee structure.</p>
      </div>

      <motion.div
        className="bg-gray-100 px-6 py-10 lg:px-24 lg:py-14 rounded-xl shadow-lg w-full mx-auto font-roboto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl lg:text-2xl font-bold text-justify text-gray-800 mb-4">
          Cost of Living for Indian Students Pursuing <span className="text-red-600 ml-2">MBBS in Russia</span>
        </h2>

        <p className="text-gray-700 text-lg text-justify leading-relaxed">
          For Indian students pursuing an MBBS in Russia, the cost of living remains highly
          affordable compared to Western nations. On average, monthly expenses range between
          <strong> $150 and $300 (₹12,000 to ₹25,000)</strong>, depending on the city and personal lifestyle choices.
        </p>

        <div className="mt-6 space-y-4">
          <motion.div
            className="bg-white p-4 lg:p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-800">🏠 Accommodation</h3>
            <p className="text-gray-700">
              University hostel accommodations are cost-effective, with annual charges varying from
              <strong> $500 to $1,000 (₹40,000 to ₹85,000)</strong>, covering essential utilities like heating, electricity, and internet access.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-4 lg:p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-800">🍽️ Food Expenses</h3>
            <p className="text-gray-700">
              Food expenses are quite manageable, with Indian students typically spending
              <strong> $100 to $150 (₹8,000 to ₹12,000)</strong> per month. Many universities provide Indian meal options,
              while students also have the flexibility to cook at home using ingredients readily available at local supermarkets.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-4 lg:p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-800">🚇 Transport</h3>
            <p className="text-gray-700">
              Public transport is an economical choice, costing around
              <strong> $10 to $20 (₹800 to ₹1,600)</strong> per month, with student discounts offered on travel passes.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-4 lg:p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-800">📚 Miscellaneous Expenses</h3>
            <p className="text-gray-700">
              Additional costs, such as mobile recharges, study materials, and recreational activities,
              generally range between <strong>$50 and $100 (₹4,000 to ₹8,000)</strong> per month.
            </p>
          </motion.div>
        </div>

        <p className="text-gray-700 text-lg text-justify mt-6">
          With affordable living expenses, quality education, and a welcoming student environment,
          <strong> Russia remains an ideal destination</strong> for Indian medical aspirants looking for an internationally recognized
          medical degree without excessive financial strain.
        </p>
      </motion.div>

      <motion.div
        className="bg-white px-6 py-4 lg:px-16 lg:py-14 rounded-xl shadow-lg w-full mx-auto font-roboto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6">
          Comparative Cost And Facility Analysis: <br />
          <span className="text-red-600">MBBS in Russia vs. India vs. Western Countries</span>
        </h2>

        {/* Cost-Effectiveness */}
        <motion.div
          className="bg-gray-100 p-5 lg:p-7 rounded-lg shadow-md mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-800">💰 Cost-Effectiveness</h3>
          <p className="text-gray-700">
            Pursuing an MBBS in Russia is far more budget-friendly than in India or Western nations.
            Russian universities charge annual tuition fees starting between
            <strong> $3,000 and $7,000 (₹2.5 to ₹6 lakh)</strong>, whereas private medical institutions in India
            demand anywhere from <strong>₹50 lakh to ₹1.5 crore</strong> for the entire program.
            In contrast, tuition costs in the <strong>USA, UK, Canada, and Australia</strong> range between
            <strong> ₹80 lakh to ₹2 crore</strong>, making them financially challenging for many students.
          </p>
        </motion.div>

        {/* No Capitation Fees */}
        <motion.div
          className="bg-gray-100 p-5 lg:p-7 rounded-lg shadow-md mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-800">🚫 No Capitation Fees or Donations</h3>
          <p className="text-gray-700">
            Private medical colleges in India often require substantial donations or capitation fees,
            significantly increasing the cost of education. In contrast,
            Russian universities follow a <strong>transparent, merit-based admission system</strong> with
            no additional financial burdens. Western universities, while not requiring donations,
            often involve high application and processing fees.
          </p>
        </motion.div>

        {/* Living Expenses & Student Comfort */}
        <motion.div
          className="bg-gray-100 p-5 lg:p-7 rounded-lg shadow-md mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-800">🏠 Living Expenses & Student Comfort</h3>
          <p className="text-gray-700">
            The cost of living in Russia is highly economical, ranging between
            <strong> $150 to $300 (₹12,000 to ₹25,000)</strong> per month, covering food, housing, and transportation.
            Conversely, Western countries have <strong>substantially higher living costs</strong>, ranging from
            <strong> ₹1 to ₹3 lakh</strong> per month. Indian students in Russia also benefit from
            <strong>safe, well-maintained hostels, access to Indian food, and a welcoming student community</strong>.
          </p>
        </motion.div>

        {/* Educational Standards */}
        <motion.div
          className="bg-gray-100 p-5 lg:p-7 rounded-lg shadow-md mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-800">🏥 Educational Standards & Facilities</h3>
          <p className="text-gray-700">
            Russian medical universities provide <strong>state-of-the-art infrastructure, cutting-edge laboratories,
              and research-driven learning experiences</strong>. Many institutions have <strong>direct hospital affiliations</strong>,
            ensuring students receive extensive practical exposure. In contrast, private Indian institutions
            often lack access to advanced research resources, while Western universities, despite exceptional
            facilities, come at a much higher financial investment.
          </p>
        </motion.div>

        {/* Admission Criteria */}
        <motion.div
          className="bg-gray-100 p-5 lg:p-7 rounded-lg shadow-md mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-800">📋 Admission Criteria & Entrance Exams</h3>
          <p className="text-gray-700">
            Securing MBBS admission in Russia is <strong>straightforward</strong>, requiring only
            <strong> NEET qualification</strong> for Indian students. Unlike India and Western nations,
            there is <strong>no need for competitive entrance exams</strong> like AIIMS, JIPMER, MCAT (USA), or UCAT (UK).
            Due to limited government medical seats in India, securing admission is highly competitive,
            whereas Russia offers better availability with fewer hurdles.
          </p>
        </motion.div>

        {/* Global Recognition */}
        <motion.div
          className="bg-gray-100 p-5 lg:p-7 rounded-lg shadow-md mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-800">🌍 Global Recognition & Licensing Exams</h3>
          <p className="text-gray-700">
            MBBS degrees from Russia are <strong>recognized by WHO, NMC (India), ECFMG (USA), GMC (UK)</strong>,
            and other global medical organizations, allowing graduates to practice internationally.
            Indian medical degrees are valid within the country but may require additional licensing exams abroad.
          </p>
        </motion.div>

        {/* Final Verdict */}
        <motion.div
          className="bg-gradient-to-r from-[#f2312d] to-red-700 text-white p-6 lg:p-8 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl lg:text-2xl font-bold">Final Verdict</h3>
          <p className="text-lg">
            For Indian students seeking <strong>affordable, globally recognized, and high-quality medical education</strong>,
            Russia emerges as the <strong>best option</strong>. It offers <strong>modern infrastructure, hands-on clinical training,
              and cost-effective tuition</strong>, making it the ideal choice over India and Western nations.
          </p>
        </motion.div>
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

export default FeePage1;
