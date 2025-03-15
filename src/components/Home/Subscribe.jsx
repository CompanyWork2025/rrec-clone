import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

const SubscriptionForm = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-[#f2312d] w-96 lg:w-[1200px] lg:-mb-28 -mb-28 mx-auto rounded-2xl px-8 py-8 h-48 lg:h-64 mt-8 bg-cover bg-center z-10"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/009/373/669/non_2x/dashed-line-paper-airplane-route-with-location-icon-free-png.png')`,
      }}
    >
      <div className="text-white flex flex-col items-center -mt-2 lg:-mt-2 justify-center h-full text-center">
        <h2 className="text-2xl lg:text-3xl font-roboto font-bold mb-2">
          {t("subscribeTitle")}
        </h2>
        <p className="text-sm font-roboto lg:text-base mb-4">
          {t("subscribeText")}
        </p>
        <div className="flex items-center justify-center gap-2 w-full lg:w-[600px]">
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            className="w-full py-2 px-4 lg:py-4 font-roboto text-black rounded-lg outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white font-semibold py-2 lg:py-4 px-6 rounded-lg hover:bg-gray-100 hover:text-black transition"
          >
            {t("subscribeButton")}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SubscriptionForm;