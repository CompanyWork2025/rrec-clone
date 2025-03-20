import { useState, useRef } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "../../assets/thumbnail.PNG";
import vid from "../../assets/consultant.mp4";
import vid2 from "../../assets/consultant2.mp4";

export default function Media() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
  }

  const togglePlay = (videoNumber) => {
    if (videoNumber === 1 && videoRef1.current) {
      if (isPlaying) {
        videoRef1.current.pause();
      } else {
        videoRef1.current.play();
        if (videoRef2.current) videoRef2.current.pause();
      }
      setIsPlaying(!isPlaying);
    } else if (videoNumber === 2 && videoRef2.current) {
      if (isPlaying) {
        videoRef2.current.pause();
      } else {
        videoRef2.current.play();
        if (videoRef1.current) videoRef1.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef1.current) videoRef1.current.muted = !isMuted;
    if (videoRef2.current) videoRef2.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="w-full py-6 lg:py-12 px-0 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        {/* Top Heading */}
        <div className="mx-auto items-center w-full -mt-4 mb-6">
          <div
            className="flex items-center justify-center"
          >
            <div className="flex items-center lg:ml-4">
              <div className="w-2 lg:w-8 h-[2px] bg-[#f2312d]" />
              <div className="w-2 lg:w-2 h-[2px] bg-transparent" />
              <div className="w-2 lg:w-2 h-[2px] bg-[#f2312d]" />
              <div className="w-2 lg:w-2 h-[2px] bg-transparent" />
              <div className="w-2 lg:w-2 h-[2px] bg-[#f2312d]" />
            </div>
            <div className="w-10 h-[2px] bg-[#f2312d]" />
            <h1 className="text-lg lg:text-xl font-roboto font-bold mx-4 text-gray-800">
              What We <span className="text-[#f2312d]">Provide</span>
            </h1>
            <div className="flex items-center lg:ml-4">
              <div className="w-6 lg:w-10 h-[2px] bg-[#f2312d]" />
              <div className="w-2 h-[2px] bg-transparent" />
              <div className="w-2 h-[2px] bg-[#f2312d]" />
              <div className="w-2 h-[2px] bg-transparent" />
              <div className="w-2 h-[2px] bg-[#f2312d]" />
            </div>
          </div>
        </div>

        {/* First Video Section */}
        <div className="flex flex-col md:flex-row h-auto mb-8 md:h-[300px] lg:h-[500px] px-4 lg:px-20 lg:-ml-36 w-full">
          {/* Right Side - Video Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative">
            <div className="relative transform perspective-1000">
              <div className="relative w-[330px] h-[500px] lg:w-[350px] lg:h-[500px] bg-black shadow-2xl rounded-lg overflow-hidden border-4 border-red-600">
                <video
                  ref={videoRef1}
                  src={vid}
                  className="w-full h-full object-cover rounded-lg"
                  poster="https://img.youtube.com/vi/uqhlSIZMaVI/maxresdefault.jpg"
                  onClick={() => togglePlay(1)}
                  muted={isMuted}
                ></video>

                {!isPlaying && (
                  <button
                    className="absolute inset-0 flex items-center justify-center w-full h-full"
                    onClick={() => togglePlay(1)}
                  >
                    <div className="relative p-4 rounded-full bg-white shadow-lg animate-pulse">
                      <Play className="text-red-600 w-10 h-10" />
                      <div className="absolute inset-0 rounded-full bg-red-600 opacity-50 animate-ping"></div>
                    </div>
                  </button>
                )}

                {/* Mute/Unmute Button */}
                <button
                  className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg"
                  onClick={toggleMute}
                >
                  {isMuted ? (
                    <VolumeX className="text-red-600 w-6 h-6" />
                  ) : (
                    <Volume2 className="text-red-600 w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Left Side - PNG Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative hidden lg:flex bg-white">
            <div className="relative lg:-ml-96 lg:-mt-24">
              <img
                src="https://media3.giphy.com/media/JRCWaAYIhOi9zV8l9k/giphy.gif?cid=6c09b9527pm5kd1yahdo1n2qbq7f08jz6l9eafc7szv8ae71&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                alt="Descriptive Alt"
                className="w-[100%] lg:w-[200%] h-auto"
              />
              <div className="absolute inset-0 flex flex-col items-center font-roboto justify-center text-gray-800 p-10 lg:p-24 lg:-mt-16 lg:pb-20 rounded-lg">
                <h2 className="text-xl text-center text-red-600 font-bold">Kemerovo State Medical University</h2>
                <p className="text-sm text-center">
                  If you're planning to study MBBS in Russia, Kemerovo State Medical University could be a great choice!
                  Watch the full video to learn everything you need to know.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Second Video Section */}
        <div className="flex flex-col md:flex-row h-auto md:h-[300px] lg:h-[500px] w-full">
          {/* Left Side - PNG Section (Centered Image & Content) */}
          <div className="w-full md:w-1/2 flex items-center justify-center pr-24 relative bg-white hidden lg:flex">
            <div className="relative flex flex-col items-center text-center ml-10 lg:-mt-24 lg:-mr-[120%]">
              {/* Mirrored PNG Image */}
              <div className="relative w-full">
                <img
                  src="https://media3.giphy.com/media/JRCWaAYIhOi9zV8l9k/giphy.gif?cid=6c09b9527pm5kd1yahdo1n2qbq7f08jz6l9eafc7szv8ae71&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                  alt="Ural State Medical University"
                  className="w-full h-auto transform scale-x-[-1]"
                />
                {/* Content Overlay (Inside PNG) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-20 py-6">
                  <h2 className="text-lg lg:text-xl text-red-600 pb-2 font-bold">
                    Why Study in Russia? | Top Reasons, Benefits & Opportunities
                  </h2>
                  <p className="text-sm text-gray-800 px-4 pb-8">
                    Top reasons to study in Russia 🎓
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* Right Side - Video Section */}
          <div className="w-full md:w-1/4 flex lg:ml-64 items-center justify-center relative">
            <div className="relative transform perspective-1000">
              <div className="relative  w-[330px] h-[500px] lg:w-[350px] lg:h-[500px] bg-black shadow-2xl rounded-lg overflow-hidden border-4 border-red-600">
                <video
                  ref={videoRef2}
                  src={vid2}
                  className="w-full h-full object-cover rounded-lg"
                  poster={img}
                  onClick={() => togglePlay(2)}
                  muted={isMuted}
                ></video>

                {!isPlaying && (
                  <button
                    className="absolute inset-0 flex items-center justify-center w-full h-full"
                    onClick={() => togglePlay(2)}
                  >
                    <div className="relative p-4 rounded-full bg-white shadow-lg animate-pulse">
                      <Play className="text-red-600 w-10 h-10" />
                      <div className="absolute inset-0 rounded-full bg-red-600 opacity-50 animate-ping"></div>
                    </div>
                  </button>
                )}

                {/* Mute/Unmute Button */}
                <button
                  className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg"
                  onClick={toggleMute}
                >
                  {isMuted ? (
                    <VolumeX className="text-red-600 w-6 h-6" />
                  ) : (
                    <Volume2 className="text-red-600 w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>



        </div>
      </motion.div>
    </>
  );
}
