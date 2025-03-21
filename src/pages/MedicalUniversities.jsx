import React, { useState, useEffect } from 'react';
import img1 from "../assets/kazan.jpeg";
import img2 from "../assets/rostov.jpeg";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const universityData = [
  { id: 1, name: 'Rostov State Medical University', img: img2, path: '/rostov-state-medical-university' },
  { id: 2, name: 'Ural State Medical University', img: "https://uralstatemedicaluniversity.com/wp-content/uploads/2024/01/ural-state-medical-university-smapse-samll.jpg", path: '/ural-state-medical-university' },
  { id: 3, name: 'Crimea Federal University (Medical Institute)', img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/%D0%A2%D0%9D%D0%A3_-_panoramio_%284%29.jpg', path: '/crimea-federal-university-russia' },
  { id: 4, name: 'Far Eastern Federal University', img: 'https://www.yashoverseas.org/wp-content/uploads/2024/01/Far-Eastern-Federal-University-scaled.jpg', path: '/fareastern-federal-university' },
  { id: 5, name: 'Kemerovo State Medical University', img: 'https://images.shiksha.com/mediadata/images/1595486043phpxMxiPU_g.png', path: '/kemerova-state-medical-university' },
  { id: 6, name: 'Bashkir State Medical University', img: 'https://studymedico.com/public//storage/uploads/university/blog185-BASHKIR%20STATE%20MEDICAL%20UNIVERSITY%20,%20MBBS%20IN%20RUSSIA_1.png', path: '/bashkir-state-medical-university' },
  { id: 7, name: 'Kazan State Medical University', img: img1, path: '/kazan-state-medical-university' },
  { id: 8, name: 'North-Western State Medical University named after I.I Mechnikov', img: 'https://rrecrussia.com/public/upload/subcategory/1802184860539724.webp.webp', path: '/north-ossetian-state-medical-academy-russia' },
  { id: 9, name: 'Kursk State Medical University', img: 'https://studymbbsinrussia.co.in/wp-content/uploads/2019/03/ksmu-kursk-russia.jpg', path: '/kursk-state-medical-university-russia' },
  { id: 10, name: 'Krasnoyarsk State Medical University', img: 'https://studypalacehub.com/wp-content/uploads/2023/03/cr5.webp', path: '/krasnoyarsk-state-medical-university' },
  { id: 11, name: 'Ivanovo State Medical University', img: 'https://eoclindia.com/wp-content/uploads/2024/08/%D0%BC%D0%B5%D0%B4%D0%B8%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82-1.jpg', path: '/ivanovo-state-medical-university' },
  { id: 12, name: 'Pitirim Sorokin Syktyvkar State University', img: 'https://en.syktsu.ru/wp-content/uploads/2020/09/IMG_2772.jpg', path: '/pitirim-sorokin-syktyvkar-state-university' },
  { id: 13, name: 'Synergy University Moscow University', img: 'https://hoorainassociates.com/wp-content/uploads/2023/11/Synergy-University.png', path: '/synergy-university-moscow' },
  { id: 14, name: "People's Friendship University Moscow", img: 'https://rrecrussia.com/public/upload/subcategory/1802184823964992.jpeg.webp', path: '/peoples-friendship-university-russia' },
  { id: 15, name: 'Yaroslavl State Medical University', img: 'https://ik.imagekit.io/syustaging/SYU_PREPROD/image_1737378767468_zoVeTkrNI.webp?tr=w-3840', path: '/mbbs-in-yaroslavl-state-medical-university-russia' },
  { id: 17, name: 'Volgograd State Medical University, Russia', img: 'https://medicinecolleges.in/assets/colleges/3014/bannerimage.jpg', path: '/volgograd-state-medical-university-russia' },
  { id: 18, name: 'Samara State Medical University', img: 'https://blog.rmgoe.org/wp-content/uploads/2023/05/Samara-State-Medical-University-Russia.webp', path: '/mbbs-from-samara-state-medical-university' },
  { id: 17, name: 'Samarkand State Medical University (Uzbekistan)', img: 'https://argroupofeducation.com/wp-content/uploads/elementor/thumbs/imgpsh_fullsize_anim-4-qgqswlfejubtago25aeujue5rem1wxph3rc3ekddto.png', path: '/mbbs-in-uzbekistan' },
];


function MedicalUniversities() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUniversities = universityData.slice(indexOfFirstItem, indexOfLastItem);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

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

      {/* University Grid Cards */}
      <div className="p-8 px-3 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUniversities.map((university) => (
             <div key={university.id} className="relative group bg-gray-200 rounded-xl overflow-hidden border-2 border-red-600 shadow-lg h-64">
             {/* Lazy Loaded University Image */}
             <img
               src={university.img}
               alt={university.name}
               loading="lazy"
               className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
               style={{ background: `url('https://www.blog.motionisland.com/wp-content/uploads/2022/03/Loading_27.gif') center/cover no-repeat` }}
             />

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
                    onClick={() => navigate(university.path)}
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
            onClick={() => {
              handlePrevious();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => {
              handleNext();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
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
