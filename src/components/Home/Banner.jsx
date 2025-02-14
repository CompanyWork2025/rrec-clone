import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation(); // Use translation hook

  return (
    <div className="bg-[#f2312d] py-8 lg:py-12 lg:px-24 lg:mt-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8">
        {/* University Image 1 */}
        <div className="relative group w-full px-4 lg:px-0 lg:w-1/3">
          <img
            src="https://rrecrussia.com/public/upload/home-features/1801975810957227.jpg.webp" 
            alt="University 1"
            className="w-full h-auto transform group-hover:scale-105 rounded-lg transition-transform duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <h3 className="text-xl font-bold">{t('learnRussian')}</h3>
              {/* Button */}
              <motion.div
                className="mt-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.8 }}
              >
                <motion.button
                  className="relative inline-flex items-center justify-start overflow-hidden px-3 py-2 text-lg text-xl font-semibold text-white border-2 border-white rounded-md bg-transparent transition-all duration-300 ease-in-out group"
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }} 
                >
                  <span className="w-0 h-0 rounded bg-[#f2312d] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                    {t('readMore')}
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* University Image 2 */}
        <div className="relative group w-full px-4 lg:px-0 lg:w-1/3">
          <img
            src="https://rrecrussia.com/public/upload/home-features/1801975872722717.jpg.webp" 
            alt="University 2"
            className="w-full h-auto transform group-hover:scale-105 rounded-lg transition-transform duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <h3 className="text-xl font-bold">{t('studyInRussia')}</h3>
              {/* Button */}
              <motion.div
                className="mt-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.8 }}
              >
                <motion.button
                  className="relative inline-flex items-center justify-start overflow-hidden px-3 py-2 text-lg text-xl font-semibold text-white border-2 border-white rounded-md bg-transparent transition-all duration-300 ease-in-out group"
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }} 
                >
                  <span className="w-0 h-0 rounded bg-[#f2312d] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                    {t('readMore')}
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* University Image 3 */}
        <div className="relative group px-4 lg:px-0 w-full lg:w-1/3">
          <img
            src="https://rrecrussia.com/public/upload/home-features/1801975920058650.jpg.webp" 
            alt="University 3"
            className="w-full h-auto transform group-hover:scale-105 rounded-lg transition-transform duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <h3 className="text-xl font-bold">{t('studyInRussiaAndEnglish')}</h3>
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
                    {t('readMore')}
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
