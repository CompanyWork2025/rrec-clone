import React, { useState } from 'react';
import { motion } from 'framer-motion';

const universityData = [
  { id: 1, name: 'Rostov State Medical University', img: 'https://rrecrussia.com/public/upload/subcategory/1802179036441322.webp.webp' },
  { id: 2, name: 'Ural State Medical University', img: 'https://rrecrussia.com/public/upload/subcategory/1802179115499734.jpg.webp' },
  { id: 3, name: 'Crimea Federal University', img: 'https://rrecrussia.com/public/upload/subcategory/1802179222672712.jpg.webp' },
  { id: 4, name: 'Volgograd State Medical University', img: 'https://rrecrussia.com/public/upload/subcategory/1802179263270516.webp.webp' },
  { id: 5, name: 'North-Western State Medical University named after I.I. Mechnikov, Russia', img: 'https://rrecrussia.com/public/upload/subcategory/1802180244301860.jpg.webp' },
  { id: 6, name: 'Kursk State Medical University, Russia', img: 'https://rrecrussia.com/public/upload/subcategory/1802180281645416.jpg.webp' },
  { id: 7, name: 'Kazan Federal University(IFMB), Russia', img: 'https://rrecrussia.com/public/upload/subcategory/1802180313255303.webp.webp' },
  { id: 8, name: 'Lobachevsky State University of Nizhny Nnovgorod, Russia', img: 'https://rrecrussia.com/public/upload/subcategory/1802180363676129.jpg.webp' },
  { id: 9, name: 'Kazan State Medical University, Russia', img: 'https://rrecrussia.com/public/upload/subcategory/1802184790543782.jpg.webp' },
  { id: 10, name: 'Yaroslavl State Medical University', img: 'https://rrecrussia.com/public/upload/subcategory/1802179301397313.jpg.webp' },
  { id: 11, name: "People's Friendship University, Russia", img: 'https://rrecrussia.com/public/upload/subcategory/1802184823964992.jpeg.webp' },
  { id: 12, name: 'North Ossetian State Medical Academy, Russia', img: 'https://rrecrussia.com/public/upload/subcategory/1802184860539724.webp.webp' },
  { id: 13, name: 'Izhevsk State Medical Academy, Russia', img: 'https://rrecrussia.com/public/upload/subcategory/1802184894753817.webp.webp' },
  { id: 14, name: 'Samara State Medical University, Russia', img: 'https://rrecrussia.com/public/upload/subcategory/1802184943253742.webp.webp' },
];

function MedicalUniversities() {
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
          <h1 className="text-white text-3xl lg:text-5xl font-roboto font-semibold">Medical Universities</h1>
          <p className="text-white font-roboto text-xl mt-2">
            Home <span className="mx-1 text-xl">&rarr;</span> Medical Universities
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

export default MedicalUniversities;
