import React, { useState } from 'react';
import { motion } from 'framer-motion';

const universityData = [
  { id: 1, name: 'Don State Technical University', img: 'https://rrecrussia.com/public/upload/subcategory/1802187844524791.jpg.webp' },
  { id: 2, name: 'Southern Federal University', img: 'https://rrecrussia.com/public/upload/subcategory/1802187883132990.webp.webp' },
  { id: 3, name: 'Study MBA in SfedU, Russia', img: 'https://rrecrussia.com/public/upload/subcategory/1802187968186772.webp.webp' },
  { id: 4, name: 'Rostov State University of Economics, Russia', img: 'https://rrecrussia.com/public/upload/subcategory/1802188006965033.jpg.webp' },
  { id: 5, name: 'Veterinary Medicine - DSTU Rostov', img: 'https://rrecrussia.com/public/upload/subcategory/1802188054847354.jpg.webp' },
  { id: 6, name: 'Ukhta State Technical University', img: 'https://rrecrussia.com/public/upload/subcategory/1802188096887736.jpg.webp' },
  { id: 7, name: 'St. Petersburg Polytechnic University', img: 'https://rrecrussia.com/public/upload/subcategory/1802188141822526.jpg.webp' },
  { id: 8, name: 'Udmurt State University', img: 'https://rrecrussia.com/public/upload/subcategory/1802188184507520.jpg.webp' },
];

function TechnicalUniversities() {
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
          <h1 className="text-white text-3xl lg:text-5xl font-roboto font-semibold">Technical Universities</h1>
          <p className="text-white font-roboto text-xl mt-2">
            Home <span className="mx-1 text-xl">&rarr;</span> Technical Universities
          </p>
        </div>
      </div>

      {/* Universities Grid */}
      <div className="p-8 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUniversities.map((university) => (
            <div
              key={university.id}
              className="relative group bg-gray-200 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={university.img}
                alt={university.name}
                className="w-full h-64 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center">
                <h3 className="text-white text-lg font-semibold">{university.name}</h3>
               {/* Button */}
              <motion.div
                className="mt-6"
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

export default TechnicalUniversities;
