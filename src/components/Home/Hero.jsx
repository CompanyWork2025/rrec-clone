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

    // Toggle Mute
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // Toggle Play/Pause
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
        <div className="relative w-full h-[600px] font-roboto flex items-center overflow-hidden">
            {/* Background Video */}
            <video ref={videoRef} className="absolute w-full h-full object-cover" autoPlay loop muted={isMuted} src={video} />

            {/* Video Controls (Top-Left, Inside Video) */}
            <div className="absolute top-5 left-5 flex space-x-3 z-20">
                {/* Mute/Unmute Button */}
                <button
                    onClick={toggleMute}
                    className="w-10 h-10 bg-black/60 text-white flex justify-center items-center rounded-full shadow-lg hover:bg-black/80 transition"
                >
                    {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                </button>

                {/* Play/Pause Button */}
                <button
                    onClick={togglePlay}
                    className="w-10 h-10 bg-black/60 text-white flex justify-center items-center rounded-full shadow-lg hover:bg-black/80 transition"
                >
                    {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                </button>
            </div>
            <div className="absolute left-[53%] top-0 w-[60%] h-full bg-[#f2312d] opacity-40 clip-path-secondary z-0" />

            {/* Right Section - Main Content */}
            <div className="absolute right-0 top-0 w-[45%] h-full bg-gradient-to-r from-[#f2312d] to-red-700 flex items-center justify-center p-12 clip-path-main z-10 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent clip-path-main z-0" />

                {/* Text Content */}
                <div className="relative z-20 text-white text-left max-w-md pl-12">
                    {/* Ensure fixed height so content doesn't jump */}
                    <div className="min-h-[140px] flex items-start">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-5xl font-extrabold tracking-wide leading-snug drop-shadow-lg"
                            >
                                {slides[currentSlide].text}
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    {/* Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-5 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-full flex items-center gap-3 shadow-xl hover:bg-gray-700 transition-all"
                    >
                        {slides[currentSlide].buttonText}

                        {/* Circular Arrow */}
                        <div className="ml-auto w-10 h-10 bg-white text-black rounded-full flex justify-center items-center shadow-lg">
                            <img src="https://cdn-icons-png.flaticon.com/512/664/664866.png" alt="Arrow" className="w-5 h-5" />
                        </div>
                    </motion.button>
                </div>

            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 w-full flex justify-start p-4 bg-gradient-to-t from-black via-black/50 to-transparent z-20">
                <div className="bg-red-600 h-12 rounded-lg shadow-lg flex justify-center items-center px-2 space-x-2">
                    <button className="px-4 py-1 bg-white text-black font-bold shadow-lg rounded-md hover:text-red-600 transition-all">
                        Faculties
                    </button>
                    <button className="px-4 py-1 bg-white text-black font-bold shadow-lg rounded-md hover:text-red-600 transition-all">
                        Medical Universities
                    </button>
                    <button className="px-4 py-1 bg-white text-black font-bold shadow-lg rounded-md hover:text-red-600 transition-all">
                        Fees
                    </button>
                </div>
            </div>

            {/* Custom Tailwind Clip Paths */}
            <style jsx>{`
        .clip-path-main {
          clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        .clip-path-secondary {
          clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
        </div>
    );
};

export default HeroSection;
