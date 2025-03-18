import React from 'react';
import { motion } from "framer-motion";

function AboutRussia() {
  const paragraphs = [
    "Rus­sia is also the world’s ninth most pop­u­lous nation with 143 mil­lion peo­ple as of 2012. Extend­ing across the entirety of north­ern Asia and much of East­ern Europe, Rus­sia spans nine time zones and incor­po­rates a wide range of envi­ron­ments and landforms.  ",
    ""
  ];

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
          <h1 className="text-white text-3xl lg:text-5xl font-roboto font-semibold">About Russia</h1>
          <p className="text-white font-roboto text-xl mt-2">
            Home <span className="mx-1 text-xl">&rarr;</span> About Russia
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
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">Brief About Russia – Best Country for study abroad
            Education in Russia <span className='text-blue-400'>(Study in Russia – MBBS in Russia)</span></h2>
          <p className="text-lg text-gray-600 mt-4">
            Rus­sia, also offi­cially known as the Russ­ian Fed­er­a­tion, is a coun­try in north­ern Eura­sia. It is a fed­eral semi-presidential repub­lic, com­pris­ing 83 fed­eral sub­jects. From north­west to south­east, Rus­sia shares land bor­ders with Nor­way, Fin­land, Esto­nia, Latvia, Lithua­nia and Poland (both with Kalin­ingrad Oblast), Belarus, Ukraine, Geor­gia, Azer­bai­jan, Kaza­khstan, China, Mon­go­lia, and North Korea. It shares mar­itime bor­ders with Japan by the Sea of Okhotsk and the U.S. state of Alaska across the Bering Strait. At 17,075,400 square kilo­me­tres (6,592,800 sq mi), Rus­sia is the largest coun­try in the world, cov­er­ing more than one- eighth of the Earth’s inhab­ited land area.
          </p>
        </div>

        {/* First Set of Paragraphs */}
        <div className="space-y-6">
          {paragraphs.slice(0, 2).map((para, index) => (
            <p key={index} className="text-lg text-justify text-gray-700">
              {para}
            </p>
          ))}
        </div>

        {/* Second Heading and Paragraphs */}
        <div className="mt-12">
          <h3 className="text-2xl lg:text-3xl text-justify font-semibold text-blue-400">Education in Russia :</h3>
          <div className="space-y-6 mt-4">
            <p className="text-lg text-gray-700 text-justify">
              Moscow is the capital of Russia. Within the Republic there are around 1,000 towns, of these, including Moscow, nine cities have a population of over a million (St.Petersburg, Volgograd, Rostov on Don, Nizhny Novgorod, Kazan, Ufa, Novosibirsk, Sverdlovsk, Chelyabinsk, and Omsk).
            </p>
            <p className="text-lg text-gray-700 text-justify">
              The territory enjoys a wide array of natural blessings in terms of its topography. The western part largely has vast plains (East European and West Siberian) interrupted by the Ural Mountains to the east and the mountainous areas of southern and northeastern Siberia and the Soviet at the Far East. In the south of the European part are the mountain ranges of the Greater Caucasus.
            </p>
            <p className="text-lg text-gray-700 text-justify">
              Due to its size, Russia has variable climatic conditions differing from the Arctic in the northern parts to subtropical in the south. Over most of the territory, however, the mean January temperature is below Zero. The Republic has a largely good network of perennial rivers.
            </p>
            <p className="text-lg text-gray-700 text-justify">
              The Caspian Sea basin receives the flow from the Volga, Ural, and the rivers of Dagestan. There are also some 2 million fresh and salt-water lakes, the biggest of which are the Baikal, Ladoga, and Onega.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl lg:text-3xl text-justify font-semibold  text-blue-400">Overview :</h3>
          <div className="space-y-6 mt-4">
            <p className="text-lg text-justify text-gray-700">
              Edu­ca­tion in Rus­sia is pro­vided pre­dom­i­nantly by the state and is reg­u­lated by the Min­istry of Edu­ca­tion and Sci­ence. Regional author­i­ties reg­u­late edu­ca­tion within their juris­dic­tions within the pre­vail­ing frame­work of fed­eral laws. RREC welcomes and invites you to study in Russia.
            </p>
            <p className="text-lg text-justify text-gray-700">
              We are helping international students from the last many years around the world to gain a prestigious higher education at state universities in Russia. In exploring this website you will open your path to Russia and to your successful career, which starts with globally respected and world-renowned higher education.
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
    </div>
  );
}

export default AboutRussia;
