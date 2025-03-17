import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaVolumeMute, FaVolumeUp, FaPause, FaPlay } from "react-icons/fa";
import video from "../../assets/Video.mp4";

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const slides = [
        {
            text: "Become A Doctor - Study In Abroad",
            buttonText: "Discover more about MBBS",
        },
        {
            text: "Medical Studies In Russia",
            buttonText: "Explore top universities",
        },
        {
            text: "Admission Open for 2025",
            buttonText: "Apply Now",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative w-full h-[260px] lg:h-[600px] font-roboto flex items-center overflow-hidden">
            {/* Background Video */}
            <video
                ref={videoRef}
                className="absolute w-full h-full object-cover"
                autoPlay
                loop
                muted={isMuted}
                src={video}
            />

            {/* Video Controls (Top-Left) */}
            <div className="absolute top-3 left-3 flex space-x-2 z-20 md:top-5 md:left-5">
                <button
                    onClick={toggleMute}
                    className="w-8 h-8 md:w-10 md:h-10 bg-black/60 text-white flex justify-center items-center rounded-full shadow-lg hover:bg-black/80 transition"
                >
                    {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
                </button>

                <button
                    onClick={togglePlay}
                    className="w-8 h-8 md:w-10 md:h-10 bg-black/60 text-white flex justify-center items-center rounded-full shadow-lg hover:bg-black/80 transition"
                >
                    {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
                </button>
            </div>

            {/* Right Section - Main Content */}
            <div className="absolute right-0 top-0 w-full md:w-[50%] h-full bg-gradient-to-r from-[#f2312d] to-red-700 flex items-center justify-center p-4 md:p-12 clip-path-main z-10 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent clip-path-main z-0" />

                {/* Text Content */}
                <div className="relative z-20 text-white text-center max-w-full px-4 md:max-w-md md:text-left">
                    <div className="min-h-[80px] md:min-h-[140px] flex items-start justify-center md:justify-start">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-lg md:text-5xl ml-6 md:ml-0 font-extrabold tracking-wide leading-snug drop-shadow-lg 
                       text-center md:text-left break-words whitespace-normal px-2"
                            >
                                {slides[currentSlide].text}
                            </motion.h1>
                        </AnimatePresence>
                    </div>


                    {/* Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="-mt-4 md:mt-0 px-4 py-2 md:px-5 md:py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-full flex items-center gap-2 md:gap-3 shadow-xl hover:bg-gray-700 transition-all mx-auto md:mx-0"
                    >
                        {slides[currentSlide].buttonText}
                        <div className="ml-auto w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-full flex justify-center items-center shadow-lg">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/664/664866.png"
                                alt="Arrow"
                                className="w-4 h-4 md:w-5 md:h-5"
                            />
                        </div>
                    </motion.button>
                </div>
            </div>


            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center md:justify-start p-3 md:p-4 bg-gradient-to-t from-black via-black/50 to-transparent z-20">
                <div className="bg-red-600 h-10 md:h-12 rounded-lg shadow-lg flex justify-center items-center px-2 space-x-1 md:space-x-2">
                    <button className="px-3 py-1 md:px-4 md:py-1 bg-white text-black font-bold shadow-lg rounded-md hover:text-red-600 transition-all">
                        Faculties
                    </button>
                    <button className="px-3 py-1 md:px-4 md:py-1 bg-white text-black font-bold shadow-lg rounded-md hover:text-red-600 transition-all">
                        Medical Universities
                    </button>
                    <button className="px-3 py-1 md:px-4 md:py-1 bg-white text-black font-bold shadow-lg rounded-md hover:text-red-600 transition-all">
                        Fees
                    </button>
                </div>
            </div>

            {/* Custom Tailwind Clip Paths */}
            <style jsx>{`
                .clip-path-main {
                    clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
                }
            `}</style>
        </div>
    );
};

export default HeroSection;
