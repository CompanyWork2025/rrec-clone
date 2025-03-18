import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const [clients, setClients] = useState(0);
  const [universities, setUniversities] = useState(0);
  const [visa, setVisa] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const animateCount = (setter, target) => {
        let count = 0;
        const interval = setInterval(() => {
          count += Math.ceil(target / 50);
          if (count >= target) {
            count = target;
            clearInterval(interval);
          }
          setter(count);
        }, 50);
      };

      animateCount(setClients, 1600);
      animateCount(setUniversities, 22);
      animateCount(setVisa, 100);

      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="bg-white lg:px-14 lg:py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-[#f2312d] to-red-700 font-roboto lg:mt-10 text-white py-0 px-6 md:px-16 rounded-2xl flex flex-col md:flex-row items-center"
      >
        {/* Left Content */}
        <div className="md:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-3xl md:text-4xl text-center lg:text-left font-bold">
            Embark on Your Medical Career with <br /> 
            <span className="text-white">RREC Russia</span>
          </h1>
          <p className="mt-4 text-center lg:text-left text-md text-gray-200">
            Secure your spot for 2025 admissions with RREC, the official admission partner of top Russian medical universities. Start your journey towards academic excellence today.
          </p>

          <div className="mt-6 flex space-x-6">
            {[
              { count: `${clients}+`, label: "Happy Clients", icon: "https://cdn3d.iconscout.com/3d/premium/thumb/happy-face-emoji-3d-icon-download-in-png-blend-fbx-gltf-file-formats--smiley-funny-expression-collection-pack-sign-symbols-icons-7148889.png?f=webp" },
              { count: `${universities}+`, label: "Medical Universities", icon: "https://cdn3d.iconscout.com/3d/premium/thumb/university-3d-icon-download-in-png-blend-fbx-gltf-file-formats--higher-education-campus-lectures-students-building-pack-buildings-icons-10321058.png?f=webp" },
              { count: `${visa}%`, label: "Visa Guarantee", icon: "https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight.png?w=360" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <img src={item.icon} alt={item.label} className="w-12 h-12 lg:w-14 lg:h-14 inline-block mr-2" />
                <h2 className="text-3xl font-bold">{item.count}</h2>
                <p className="text-sm text-gray-300">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image - Fixed */}
        <div className="md:w-1/2 flex justify-center relative h-[350px] md:h-[400px]">
          <img
            src="https://static-hotsites.edufindme.com/tsw-events/f2c12fa2fffa6a52c548e0311c466023b785b8aa/static/img/hub/img/img-student-2.png"
            alt="Student"
            className="relative top-[70px] md:top-[-80px] max-w-[350px] md:max-w-[600px] h-[80%] lg:h-[120%] object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
