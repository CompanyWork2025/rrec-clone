import React from 'react';

function ServicesForStudents() {

  return (
    <div>
      {/* Top Image Banner */}
      <div className="relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Russia_Wikivoyage_front_page_banner.jpg/1200px-Russia_Wikivoyage_front_page_banner.jpg" // replace with your image path
          alt="About Russia"
          className="w-full h-48 lg:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl lg:text-5xl font-roboto font-semibold">Services For Students</h1>
          <p className="text-white font-roboto text-xl mt-2">
            Home <span className="mx-1 text-xl">&rarr;</span> Services For Students
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 lg:px-24 font-roboto px-6">
        <div className="text-left text-justify mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">Join Reliable Russian Educational Consultants – For Best Services</h2>
          <br /><span className='text-red-500 text-xl lg:text-3xl font-bold'>TOP MEDICAL, FEDERAL & TECHNICAL UNIVERSITIES</span>
          <p className="text-lg text-gray-600 mt-4">
            RREC offers free counseling services to students who want to Study in Russia, but are confused about where to go and how to go about it. RREC has rich experience in the field of educational services. Through our Head Office in Delhi and branch offices all over India and abroad, we provide comprehensive guidance and assistance to our students. Our services to the students also extend to Russia through our Directors who are headquartered in Rostov-Russia, and the branch offices/representatives in each University. Some of the services we are listed below:
          </p>
        </div>

        {/* Second Heading and Paragraphs */}
        <div className="mt-12">
          <h3 className="text-2xl lg:text-3xl text-justify font-semibold text-gray-800">Reliable Russian Educational Consultants</h3>

          <br/>
          <span className='text-green-500 text-xl font-bold'>PRE ADMISSION SERVICES : </span>
          <div className="space-y-6 mt-4">
            <ul className="list-disc text-lg text-gray-700 text-justify">
              <li>Free counseling for the students and parents and providing information about various universities /courses in Russia.</li>
              <li>Processing of application forms.</li>
              <li>Ensuring admission to the selected university and obtaining an Admission Letter from them.</li>
              <li>Guidance in applying for a passport.</li>
              <li>Guidance for applying to Banks for Education Loan.</li>
              <li>Getting the visa Invitation Letter issued by the selected university.</li>
              <li>Getting the visa stamped on the passport by the Russian Embassy.</li>
              <li>Assistance in obtaining the necessary Foreign Exchange from authorized forex dealers.</li>
              <li>Fully Travel guidance to a particular country.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl lg:text-3xl text-justify font-semibold  text-blue-500">POST ADMISSION SERVICES :</h3>
          <div className="space-y-6 mt-4">
          <ul className="list-disc text-lg text-gray-700 text-justify">
              <li>Meeting the student at Moscow Airport, accompanying him/her to the university, and arranging admission to the university, the hostel, etc.</li>
              <li>Arranging to get registration with the local Immigration authorities in Russia.</li>
              <li>Help students in settling down in the new environment at no additional cost.</li>
              <li>Students’ registration and medical insurance at the University.</li>
              <li>Assistance in all the formalities on arrival at the University.</li>
              <li>Provision of food, sim card at arrival in Moscow, and in a particular city.</li>
              <li>Assistance in any issues concerned. [For the complete duration of Study].</li>
              <li>Travel Arrangements assistance.</li>
              <li>Special travel arrangements for parents.</li>
              <li>Assistance in health-related problems.</li>
              <li>Assisting the student to remit the fees to the university.</li>
              <li>Assistance in opening Bank Accounts in Russia.</li>
              <li>Providing regular progress reports of the student to the parents.</li>
              <li>Guidance for students who have completed their education to get admission to post-graduation courses. </li>
            </ul>
          </div>
        </div>
      </div>


      {/* Bottom Colorful Banner */}
      <div className="bg-[#f2312d] py-12">
        <div className="max-w-7xl mx-auto text-center font-roboto text-white">
          <h2 className="text-2xl lg:text-4xl mb-4 font-semibold">Welcome to beautiful country Russia: Get direct admission from RREC officials</h2>
          <h3 className="text-2xl lg:text-3xl text-blue-800 font-semibold">Reliable Russian Educational Consultants (Top Educational Consultants)</h3>
          <p className="mt-4 text-lg lg:text-3xl font-bold text-gray-800">
            Email: contact@rrecrussia.com, rrec.educonsultants@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesForStudents;
