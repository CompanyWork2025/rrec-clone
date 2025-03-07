import React from 'react';

function UsefulInfoPage2() {
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
          <h1 className="text-white text-2xl lg:text-5xl font-semibold">Admission Procedure</h1>
          <p className="text-white text-lg lg:text-xl mt-2">
            Home <span className="mx-1 text-xl">&rarr;</span> Admission Procedure
          </p>
        </div>
      </div>

      <div className="font-roboto p-6 px-4 lg:px-24 text-gray-800">
        {/* Heading */}
        <h2 className="text-center text-2xl lg:text-4xl font-bold mb-4 text-gray-800">
          Admission Procedure
        </h2>

        {/* Subheading */}
        <h3 className="text-xl font-semibold text-center text-blue-700 mb-2">
          Admission Procedure for Study in Russia: Intake open for 2025
        </h3>

        {/* Description */}
        <p className="text-center text-lg font-medium text-gray-700 mb-2">
          Top Medical, Federal & Technical Universities of Russia
        </p>
        <p className="text-center text-lg font-medium text-gray-700 mb-2">
          Join Reliable Russian Educational Consultants for study in Russia
        </p>

        {/* Required Documents Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            LIST OF MANDATORY REQUIRED DOCUMENTS, FOR FOREIGN APPLICANTS WISHING TO STUDY AS STUDENTS IN RUSSIA:
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-md space-y-2">
            <li>Completed online application through the RREC website (including full name, date of birth, passport number, citizenship, permanent address, contact phone, and e-mail of applicant).</li>
            <li>Copy of Passport. (Minimum duration of 2 years)</li>
            <li>Educational certificate. (Secondary School)</li>
            <li>Birth certificate (if available)</li>
            <li>Physical health examination report</li>
            <li>HIV test results</li>
            <li>Twenty photographs on matte paper. (35*45 mm on matte paper)</li>
            <li>The age limit for applicants to higher educational establishments is 17-25 years. For postgraduate candidates - 35 years. For Doctoral Candidates - 45 years.</li>
          </ul>
        </div>

        {/* Important Notes Section */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Note please:</h3>
          <p className="text-gray-700 text-lg">
            Students arriving to study in Russia must present their original documents personally to the Dean’s office of foreign students.
          </p>
          <p className="text-gray-700 text-lg mt-2">
            Original documents of complete higher secondary education certificate (including mark sheet/academic transcript) must be apostille by the Ministry of External Affairs or Ministry of Education and the Embassy/General Consulate of the Russian Federation in the native country where the student obtained the certificate. Also, the secondary school certificate and passport must be translated into Russian with local notary authorities.
          </p>
        </div>
      </div>

      {/* Bottom Colorful Banner */}
      <div className="bg-[#f2312d] py-12">
        <div className="max-w-4xl mx-auto text-center font-roboto text-white">
          <h2 className="text-2xl lg:text-3xl mb-4 font-semibold">A gateway to study in Russia</h2>
          <p className="mt-4 text-sm lg:text-md">
            (Reliable Russian Educational Consultants)
          </p>
          <p className="mt-4 text-sm lg:text-md">
            Authorized Representatives of Top Universities
          </p>
          <p className="mt-4 text-sm lg:text-md">
            Contact numbers: +7-9515371133 (Rus) | +9170422284508, 509 (Ind)
          </p>
          <p className="mt-4 text-sm lg:text-md">
            Email: contact@rrecrussia.com, rrec.educonsultants@gmail.com
          </p>
          <p className="mt-4 text-sm lg:text-md">
            Students or parents can write to us on at WhatsApp also +7-9515371133
          </p>
        </div>
      </div>
    </>
  );
}

export default UsefulInfoPage2;
