import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { pointsInner, pointsOuter } from "./utils.jsx";

const Banner = () => {
  const { t } = useTranslation();
  const [zoomLevel, setZoomLevel] = useState(10);
  const [showGrid, setShowGrid] = useState(false);
  const [lockScroll, setLockScroll] = useState(false);

  // When the zoom level threshold is met, show grid and lock scrolling.
  useEffect(() => {
    const handleWheel = () => {
      if (zoomLevel <= 6 && !showGrid) {
        setShowGrid(true);
        setLockScroll(true);
        // Unlock scroll 4 seconds after grid appears.
        setTimeout(() => {
          setLockScroll(false);
        }, 1000);
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [zoomLevel, showGrid]);

  // Lock/unlock scroll without causing jump.
  useEffect(() => {
    if (lockScroll) {
      // Store the current scroll offset and fix the body.
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // When unlocking, restore the body's position and scroll back to the stored value.
      const storedScrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (storedScrollY) {
        // Convert stored value back to number (it includes a "-" sign)
        const scrollYNum = parseInt(storedScrollY.replace("px", ""), 10) * -1;
        window.scrollTo(0, scrollYNum);
      }
    }
  }, [lockScroll]);

  return (
    <div className="relative w-full lg:mt-28 h-screen">
      <Canvas camera={{ position: [10, -7.5, -5] }} className="bg-slate-900">
        <ZoomHandler onZoomChange={setZoomLevel} />
        <OrbitControls
          maxDistance={20}
          minDistance={5}
          enableZoom={true}
          enablePan={false}
        />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <motion.div
        className={`absolute inset-0 transition-opacity duration-700 ${
          showGrid ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ImageGrid />
      </motion.div>

      {!showGrid && (
       <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center pointer-events-none">
       <h1 className="text-slate-200 font-medium text-2xl md:text-5xl ">
         Welcome To RREC Education
       </h1>
       <img
         src="https://media4.giphy.com/media/hr9Pnok7OlrDALJBKB/giphy.gif?cid=6c09b952jrms7i926wls4pe8ztxotrvpz0uy142zh4q3oyu9&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
         alt="Loading Animation"
         className="mt-4 w-32 h-32 -mt-20 md:w-full md:h-64 mx-auto"
       />
     </div>
      )}
    </div>
  );
};

const ZoomHandler = ({ onZoomChange }) => {
  const { camera } = useThree();
  useFrame(() => {
    onZoomChange(camera.position.length());
  });
  return null;
};

const PointCircle = () => {
  const ref = useRef(null);
  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });
  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => (
  <Sphere position={position} args={[0.1, 10, 10]}>
    <meshStandardMaterial
      emissive={color}
      emissiveIntensity={0.5}
      roughness={0.5}
      color={color}
    />
  </Sphere>
);

const ImageGrid = () => {
  const { t } = useTranslation();
  const items = [
    {
      img: "https://rrecrussia.com/public/upload/home-features/1801975810957227.jpg.webp",
      title: "Learn Russian",
    },
    {
      img: "https://rrecrussia.com/public/upload/home-features/1801975872722717.jpg.webp",
      title: "Study in Russia A Global Experience",
    },
    {
      img: "https://rrecrussia.com/public/upload/home-features/1801975920058650.jpg.webp",
      title: "Study in Russia & English",
    },
  ];

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative group w-full px-4 lg:px-0 lg:w-1/3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-full h-auto transform rounded-lg transition-transform duration-500"
              whileHover={{ rotateY: 10, scale: 1.05 }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.h3 className="text-xl font-bold">
                {item.title}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Banner;
