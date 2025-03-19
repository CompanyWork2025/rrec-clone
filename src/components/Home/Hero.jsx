import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaVolumeMute, FaVolumeUp, FaPause, FaPlay } from "react-icons/fa";
import video from "../../assets/Video.mp4";

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hover, setHover] = useState(false);
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

            <div className="absolute left-[54%] w-80 top-0 h-full bg-red-600/50 clip-path-secondary z-10 pointer-events-none"></div>
            {/* Right Section - Main Content */}
            <div className="absolute right-0 top-0 w-full md:w-[45%] h-full bg-gradient-to-r from-[#f2312d] to-red-700 flex items-center justify-center p-4 md:p-12 clip-path-main z-10 shadow-lg">


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
                    <div className="relative inline-block">
                        {/* Main Button */}
                        <motion.button
                            className="relative overflow-hidden -mt-4 md:mt-0 px-4 py-2 md:px-5 md:py-3 
        bg-gradient-to-r from-black to-gray-800 text-white rounded-full 
        flex items-center gap-2 md:gap-3 shadow-xl transition-all 
        mx-auto md:mx-0 w-fit min-w-[150px] pr-12" // Extra right padding to prevent text cutoff
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            {/* Expanding Background Effect */}
                            <motion.div
                                className="absolute inset-0 bg-cover bg-center opacity-30"
                                style={{
                                    backgroundImage: `url('https://giffiles.alphacoders.com/194/19497.gif')`, // Change BG as needed
                                }}
                                initial={{ scaleX: 0 }}
                                animate={hover ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />

                            {/* Text with Smooth Hide Effect */}
                            <motion.span
                                animate={hover ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="relative z-10 pr-10 whitespace-nowrap" // Ensures text doesn't wrap or break
                            >
                                {slides[currentSlide].buttonText}
                            </motion.span>

                            {/* Sliding Rounded Button (Moves to left end dynamically) */}
                            <motion.div
                                initial={{ left: "auto", right: "10px" }} // Starts on the right
                                animate={hover ? { left: "4px", right: "auto" } : { left: "auto", right: "10px" }} // Moves to left edge
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute w-8 h-8 md:w-10 md:h-10 
          bg-gray-300 text-black rounded-full flex justify-center items-center 
          shadow-lg z-20"
                            >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/664/664866.png"
                                    alt="Arrow"
                                    className="w-4 h-4 md:w-5 md:h-5"
                                />
                            </motion.div>
                        </motion.button>
                    </div>

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
  .clip-path-secondary {
      clip-path: polygon(45% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`}</style>

        </div>
    )
};

export default HeroSection;
