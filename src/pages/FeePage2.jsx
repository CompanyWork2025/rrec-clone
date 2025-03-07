import React from 'react';

const FeePage2 = () => {
  return (
    <>
      {/* Top Image Banner */}
      <div className="relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Russia_Wikivoyage_front_page_banner.jpg/1200px-Russia_Wikivoyage_front_page_banner.jpg"
          alt="About Russia"
          className="w-full h-48 lg:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-2xl lg:text-5xl font-semibold">Fee For Technical Universities</h1>
          <p className="text-white text-lg lg:text-xl mt-2">
            Home <span className="mx-1 text-xl">&rarr;</span> Fee For Technical Universities
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-8xl lg:px-24 font-roboto mx-auto p-6">
        <h1 className="text-2xl lg:text-4xl font-semibold text-center text-gray-800 mb-4">Fee For Technical Universities</h1>
        <h2 className="text-2xl font-semibold text-blue-800">Top Federal, Technical & State Universities of Russia: (Fee structure)        </h2>
        <p className="text-gray-600 font-semibold text-green-600 mt-2">Here is the list of top Federal, Technical & State Universities in Russia:</p>

        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Southern Federal University</li>
          <li>Lobachevsky State University of Nizhny Novgorod</li>
          <li>Don State Technical University</li>
          <li>Saint Petersburg Polytechnic University</li>
          <li>Rostov State University of Transport</li>
          <li>Sevastopol State University</li>
          <li>Kazan Federal University</li>
          <li>Baikal State University</li>
        </ul>

        <p className="text-gray-700 font-semibold text-green-600 mt-4">
          In all these universities, we have more than <strong>200+ courses</strong> for international students.

          <span className="font-semibold">55%</span> of them are in Russian Medium & <span className="font-semibold">45%</span> in English Medium.
          <br />
          To know more about your selected course, please contact us via email at <strong>contact@rrecrussia.com</strong> or WhatsApp at <strong>+7-9515371133</strong>.
        </p>

        <h2 className="text-xl lg:text-2xl font-semibold text-blue-800 mt-6">Here we have mentioned some popular courses in English Medium for Both Bachelor's & Master's Degree.</h2>

        {/* Bachelor's Programs */}
        <h3 className="text-lg font-semibold text-red-600 mt-4">Courses Available in English Medium; Bachelor's Programmes | Fees for 2025</h3>
        <div className="mt-2 space-y-4">
          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Fundamental Informatics and Information Technologies - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">First-year package: <strong>$3500</strong> (Includes tuition, hostel, medical insurance)</p>
            <p className="text-gray-700">From 2nd year: <strong>$2580</strong></p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Trading - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">First-year package: <strong>$3500</strong> (Includes tuition, hostel, medical insurance)</p>
            <p className="text-gray-700">From 2nd year: <strong>$2580</strong></p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Fundamental Computer Science and Information Technologies - Lobachevsky (Nizhny Novgorod)</h4>
            <p className="text-gray-700">First-year package: <strong>$4000</strong> (Includes tuition, hostel, medical insurance)</p>
            <p className="text-gray-700">From 2nd year: <strong>$2800</strong></p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">International Relations - Lobachevsky (Nizhny Novgorod)</h4>
            <p className="text-gray-700">First-year package: <strong>$4200</strong> (Includes tuition, hostel, medical insurance)</p>
            <p className="text-gray-700">From 2nd year: <strong>$3100</strong></p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Economics - Lobachevsky (Nizhny Novgorod)</h4>
            <p className="text-gray-700">First-year package: <strong>$4000</strong> (Includes tuition, hostel, medical insurance)</p>
            <p className="text-gray-700">From 2nd year: <strong>$2800</strong></p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">International Business - SPbPU (Saint Petersburg)</h4>
            <p className="text-gray-700">First-year package: <strong>$5850</strong> (Includes tuition, hostel, medical insurance)</p>
            <p className="text-gray-700">From 2nd year: <strong>$4900</strong></p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">International Trade - SPbPU (Saint Petersburg)</h4>
            <p className="text-gray-700">First-year package: <strong>$5850</strong> (Includes tuition, hostel, medical insurance)</p>
            <p className="text-gray-700">From 2nd year: <strong>$4900</strong></p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Digital Enterprise Economics - SPbPU (Saint Petersburg)</h4>
            <p className="text-gray-700">First-year package: <strong>$5850</strong> (Includes tuition, hostel, medical insurance)</p>
            <p className="text-gray-700">From 2nd year: <strong>$4900</strong></p>
          </div>
        </div>


        {/* Master's Programs */}
        <h3 className="text-lg font-semibold text-red-600 mt-6">
          Courses Available in English Medium; Master's Programmes | Fees for 2025
        </h3>
        <div className="mt-2 space-y-4">
          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">MBA - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              One-time package: <strong>$6200</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Applied Mathematics and Informatics - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$3600</strong>, From 2nd year: <strong>$2700</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Physics - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$3900</strong>, From 2nd year: <strong>$2950</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Architecture - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$3900</strong>, From 2nd year: <strong>$2950</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Information and Computation - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$3900</strong>, From 2nd year: <strong>$2950</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Nanoengineering - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$3950</strong>, From 2nd year: <strong>$2950</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Economics - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$3600</strong>, From 2nd year: <strong>$2700</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Management (International Business) - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$3610</strong>, From 2nd year: <strong>$2710</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Management (Management and Production Engineering) - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$3610</strong>, From 2nd year: <strong>$2710</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Legal Studies (International Protection of Human Rights) - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$4060</strong>, From 2nd year: <strong>$3160</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Tourism (Ecosystems of Tourism, Service, and Hospitality) - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$3600</strong>, From 2nd year: <strong>$2700</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Philology (International Studies: Languages, Cultures, Diplomacy) - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$3600</strong>, From 2nd year: <strong>$2700</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">History (Socialist and Post-Socialist Studies) - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$3600</strong>, From 2nd year: <strong>$2700</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Cultural Studies (Russian Cultural Studies) - Sfedu (Rostov-on-Don)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$3540</strong>, From 2nd year: <strong>$2640</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Software Engineering - Lobachevsky (Nizhny Novgorod)</h4>
            <p className="text-gray-700">
              First-year package: <strong>$4500</strong>, From 2nd year: <strong>$3400</strong> (Includes tuition, hostel, medical insurance)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">St. Petersburg Polytechnic University</h4>
            <p className="text-gray-700">
              International Master’s degree programs are performed entirely in English. Contact our representative at <strong>contact@rrecrussia.com</strong> for tuition fees.
            </p>
          </div>
        </div>


        {/* Additional Details */}
        <h3 className="text-lg lg:text-2xl font-semibold text-blue-700 mt-6">ENGINEERING NATURAL SCIENCES</h3>
        <ul className="mt-2 space-y-2 list-disc list-inside text-gray-700">
          <li>Civil Engineering</li>
          <li>Energy Efficient and Sustainable Building</li>
          <li>Environmental Engineering in Urban Construction</li>
          <li>Emergency Preparedness and Response</li>
          <li>Power Plant Engineering</li>
          <li>Electrical Engineering</li>
          <li>Nuclear Power Engineering</li>
          <li>New Materials and Additive Technologies</li>
          <li>Processing Technologies of Materials</li>
          <li>Laser and Fiber Optic Systems</li>
          <li>Continuum Mechanics: Fundamentals and Applications</li>
          <li>Mechanics and Mathematical Modeling</li>
          <li>Microelectronics of Telecommunication Systems</li>
          <li>Intelligent Systems</li>
        </ul>

        {/* Natural Sciences */}
        <h3 className="text-lg lg:text-2xl font-semibold text-blue-700 mt-6">NATURAL SCIENCES </h3>
        <ul className="mt-2 space-y-2 list-disc list-inside text-gray-700">
          <li>Smart Nanostructures and Condensed Matter Physics</li>
          <li>Advances and Applications in Plasma Physics</li>
          <li>Molecular and Cellular Biomedical Technologies</li>
          <li>MANAGEMENT AND ENGINEERING</li>
          <li>Business Engineering</li>
          <li>Technology Leadership and Entrepreneurship</li>
        </ul>

        {/* Economics & Management, Humanities */}
        <h3 className="text-lg lg:text-2xl font-semibold text-blue-700 mt-6">ECONOMICS & MANAGEMENT, HUMANITIES</h3>
        <ul className="mt-2 space-y-2 list-disc list-inside text-gray-700">
          <li>International Business Development</li>
          <li>Innovative Entrepreneurship</li>
          <li>Quantitative Finance</li>
          <li>International Trade Relations</li>
          <li>Advertising and PR in International Communications</li>
          <li>Digital Linguistics</li>
          <li>Applied Linguistics and TESOL</li>
        </ul>


        {/* Russian Language Course Section */}
        <h3 className="text-lg font-semibold text-green-600 mt-6">
          Russian Language Course in Federal, State, Technical Universities
          (Preparatory Faculty / Duration: 8-10 Months)
        </h3>
        <div className="mt-2 space-y-4">
          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">Sfedu</h4>
            <p className="text-gray-700">
              <strong>3000 USD</strong> (Includes tuition, hostel, medical insurance, registration & visa extension)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">UNN Nizhny Novgorod</h4>
            <p className="text-gray-700">
              <strong>2600 USD</strong> (Includes tuition, hostel, medical insurance, registration & visa extension)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">RostovSUT</h4>
            <p className="text-gray-700">
              <strong>2800 USD</strong> (Includes tuition, hostel, medical insurance, registration & visa extension)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">DonSTU</h4>
            <p className="text-gray-700">
              <strong>2800 USD</strong> (Includes tuition, hostel, medical insurance, registration & visa extension)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">SevastopolSU</h4>
            <p className="text-gray-700">
              <strong>3000 USD</strong> (Includes tuition, hostel, medical insurance, registration & visa extension)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">KazanFU</h4>
            <p className="text-gray-700">
              <strong>4000 USD</strong> (Includes tuition, hostel, medical insurance, registration & visa extension)
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-semibold">BaikalSU</h4>
            <p className="text-gray-700">
              <strong>2600 USD</strong> (Includes tuition, hostel, medical insurance, registration & visa extension)
            </p>
          </div>
        </div>

        {/* Attention Section */}
        <div className="mt-6 p-4 border border-red-500 bg-red-100 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-red-600">Attention Please:</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li><strong>Fees</strong> here include tuition, hostel, and medical insurance.</li>
            <li><strong>1 USD = 80 Russian Rubles</strong> applied for this fee structure.</li>
            <li>All documentation will be done from the <strong>RREC Head Office</strong>.</li>
            <li>The fees mentioned here, the student has to pay <strong>one time only</strong>.</li>
            <li>The student has to pay for the <strong>RT-PSR report</strong> or any other medical tests in Russia if required.</li>
            <li>As per the new rule of the Russian Federation (from 29.12.21), students must undergo <strong>biometrics and medical tests</strong> within 90 days of arrival in Russia, costing <strong>6500-9000 rubles</strong>.</li>
            <li>Traveling from Moscow to a particular city must be paid by the student. Due to <strong>reduced airline connectivity</strong> since 2020, students may need to travel by bus or train based on available options.</li>
            <li><strong>For Direct Admissions:</strong> Contact us at <a href="tel:+79515371133" className="text-blue-600 font-semibold">+7-9515371133</a> or email at <a href="mailto:contact@rrecrussia.com" className="text-blue-600 font-semibold">contact@rrecrussia.com</a>.</li>
          </ul>
        </div>
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
};

export default FeePage2;
