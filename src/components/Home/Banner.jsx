import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation(); // Use translation hook

  return (
    <div className="bg-gradient-to-r from-[#f2312d] to-red-700 py-8 lg:py-12 lg:px-24 lg:mt-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8">
        {[{
          img: "https://rrecrussia.com/public/upload/home-features/1801975810957227.jpg.webp",
          title: t('learnRussian')
        }, {
          img: "https://rrecrussia.com/public/upload/home-features/1801975872722717.jpg.webp",
          title: t('studyInRussia')
        }, {
          img: "https://rrecrussia.com/public/upload/home-features/1801975920058650.jpg.webp",
          title: t('studyInRussiaAndEnglish')
        }].map((item, index) => (
          <motion.div 
            key={index}
            className="relative group w-full px-4 lg:px-0 lg:w-1/3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-full h-auto transform rounded-lg transition-transform duration-500"
              whileHover={{ rotateY: 10, scale: 1.05 }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: -20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h3 
                  className="text-xl font-bold"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
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
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
