import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const universitiesLeft = [
  "https://satyamevedu.co.in/wp-content/uploads/2023/04/WhatsApp-Image-2022-05-10-at-12.18.11-AM-1024x683.jpeg",
  "https://mbbscouncil.com/wp-content/uploads/2020/05/Kazan-State-Medical-University-Main-Building-Russia-1280x720.jpg",
  "https://studymedico.com/public//storage/uploads/university/blog185-BASHKIR%20STATE%20MEDICAL%20UNIVERSITY%20,%20MBBS%20IN%20RUSSIA_1.png",
  "https://www.ruseducation.in/wp-content/uploads/2022/01/Crimea-Federal-University.webp",
  "https://uralstatemedicaluniversity.com/wp-content/uploads/2024/01/ural-state-medical-university-smapse-samll.jpg"
];

const universitiesRight = [
  "https://www.ruseducation.in/wp-content/uploads/2022/01/Volgograd-State-Medical-University-2.webp",
  "https://www.ruseducation.in/wp-content/uploads/2022/12/far-eastern-federal-university-students-1.webp",
  "https://en.samsmu.ru/img/uni/04.jpg",
  "https://thefrontiermanipur.com/wp-content/uploads/2024/01/Samarkand-State-Medical-University-Uzbekistan.jpeg",
];

export default function UniversityScrollSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const leftScroll = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rightScroll = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const containerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div className="bg-white px-10">
    <motion.section
      ref={ref}
      className="bg-gradient-to-r from-[#f2312d] to-red-700 py-2 px-6 md:px-16 lg:px-32 rounded-2xl font-roboto text-white h-96 lg:h-[500px] flex items-center justify-center overflow-hidden"
      style={{ opacity: containerOpacity }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        {/* Left Side - Scrolling Bottom to Top */}
        <div className="relative w-1/3 h-[400px] overflow-hidden">
          <motion.div style={{ y: leftScroll }} className="flex flex-col gap-6">
            {universitiesLeft.map((img, index) => (
              <img key={index} src={img} alt="University" className="w-80 h-40 rounded-lg shadow-lg" />
            ))}
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="text-center md:w-1/3">
          <h2 className="text-3xl font-bold">Top Russian Universities</h2>
          <p className="mt-4 text-lg">Explore the best universities in Russia offering world-class education for international students.</p>
          <button className="mt-6 px-6 py-3 bg-white text-red-700 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">View More</button>
        </div>
        
        {/* Right Side - Scrolling Top to Bottom */}
        <div className="relative w-1/3 h-[400px] overflow-hidden">
          <motion.div style={{ y: rightScroll }} className="flex flex-col gap-6">
            {universitiesRight.map((img, index) => (
              <img key={index} src={img} alt="University" className="w-80 h-40 rounded-lg shadow-lg" />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
    </div>
  );
}