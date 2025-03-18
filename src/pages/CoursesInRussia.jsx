import React, { useState } from 'react';
import { motion } from 'framer-motion';

const universityData = [
  { id: 1, name: 'Russian Language Course', img: 'https://rrecrussia.com/public/upload/subcategory/1802189217251558.jpg.webp' },
  { id: 2, name: 'Fee structure for MBBS, BDS, Pharmacy', img: 'https://rrecrussia.com/public/upload/subcategory/1802189266190815.webp.webp' },
  { id: 3, name: 'Veterinary Medicine', img: 'https://rrecrussia.com/public/upload/subcategory/1802189319068661.jpg.webp' },
  { id: 4, name: 'Engineering & Technical Courses', img: 'https://rrecrussia.com/public/upload/subcategory/1802189702306324.webp.webp' },
  { id: 5, name: 'Humanities & Classic Specialties', img: 'https://rrecrussia.com/public/upload/subcategory/1802189766610417.jpg.webp' },
  { id: 6, name: 'Economical Specialties', img: 'https://rrecrussia.com/public/upload/subcategory/1802189820749015.jpg.webp' },
  { id: 7, name: 'Post Graduation Courses', img: 'https://rrecrussia.com/public/upload/subcategory/1802189856129557.png.webp' },
  { id: 8, name: 'A Grade Engineering University', img: 'https://rrecrussia.com/public/upload/subcategory/1802189912848457.jpg.webp' },
  { id: 9, name: 'A Grade Medical University', img: 'https://rrecrussia.com/public/upload/subcategory/1802189931901969.webp.webp' },
  { id: 10, name: 'Top Medical Universities of Russia ', img: 'https://rrecrussia.com/public/upload/subcategory/1802189944294392.jpg.webp' },
  { id: 11, name: "MBA in EM - SfedU, Russia", img: 'https://rrecrussia.com/public/upload/subcategory/1802189957786950.jpg.webp' },

];

function CoursesRussia() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUniversities = universityData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (indexOfLastItem < universityData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
          <h1 className="text-white text-3xl lg:text-5xl font-roboto font-semibold">Courses in Russia</h1>
          <p className="text-white font-roboto text-xl mt-2">
            Home <span className="mx-1 text-xl">&rarr;</span> Courses in Russia
          </p>
        </div>
      </div>

      {/* University Grid Cards */}
      <div className="p-8 px-3 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUniversities.map((university) => (
            <div
              key={university.id}
              className="relative group bg-gray-200 rounded-xl overflow-hidden border-2 border-red-600 shadow-lg h-64"
            >
              {/* University Image */}
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${university.img})` }}
              ></div>

              {/* Hover Background Animation with darker opacity */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-0 group-hover:bg-right-bottom"
                style={{
                  backgroundImage: `url("https://i.pinimg.com/originals/c3/3b/ff/c33bffc762e2193b8699e8162f5054e7.gif")`,
                  transformOrigin: 'right bottom',
                }}
              ></div>

              {/* Darker Overlay for Hover Effect */}
              <div
                className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              ></div>

              <div className="absolute inset-0 bg-black bg-opacity-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">

                {/* University Logo and Name */}
                <div className="flex flex-col items-center justify-center mb-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/535/535137.png" // Replace with actual path to your location PNG icon
                    alt="Location"
                    className="w-10 h-10"
                  />
                  <h3 className="text-white text-center text-lg font-semibold">{university.name}</h3>
                </div>

                {/* Read More Button */}
                <motion.div
                  className="mt-2"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.8 }}
                >
                  <motion.button
                    className="relative inline-flex items-center justify-start overflow-hidden px-3 py-2 text-lg font-semibold text-white border-2 border-white rounded-md bg-transparent transition-all duration-300 ease-in-out group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="w-0 h-0 rounded bg-[#f2312d] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                    <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                      Read More
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={indexOfLastItem >= universityData.length}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default CoursesRussia;
