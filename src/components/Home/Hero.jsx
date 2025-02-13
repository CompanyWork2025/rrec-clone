import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const [bgImage, setBgImage] = useState(0);
    const images = [
        'url(https://static.vecteezy.com/system/resources/previews/034/340/735/non_2x/silhouettes-of-graduates-on-the-background-of-the-sunset-graduation-concept-rear-perspective-of-a-group-of-university-graduates-their-silhouettes-distinct-against-the-ai-generated-free-photo.jpg)',
        'url(https://www.reavizmu.net/wp-content/themes/reavizmu/extra-images/banner-1.jpg)',
        'url(https://bostonglobe-prod.cdn.arcpublishing.com/resizer/v2/76XEW2R74YI6PEUORKN4SGUUY4.jpg?auth=074b8a1c4ae1cca3bb2da380997a72b51298aa07847278321b2ba5a7214b9e03&width=1440)' // placeholder for testing
    ];

    const headings = [
        'Study in Russia A Global Experience',
        'Become A Doctor Study In Abroad',
        'Medical Students In Russia'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBgImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full lg:h-[600px] h-[300px]">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

            {/* Animated Background Image using motion.div */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: images[bgImage] }}
                key={bgImage} // Ensure the background image is properly animated when changing
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }} // Smooth fade transition
            ></motion.div>

            {/* Content */}
            <div className="relative z-10 flex justify-center items-center w-full h-full text-white px-4">
                <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto">
                    {/* Content Animating from Bottom */}
                    <motion.div
                        className="text-4xl font-semibold text-left max-w-xl w-full"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.8 }}
                    >
                        <div className="mx-auto items-center w-full -mt-6">
                            {/* Centered Heading with Border Lines */}
                            <div className="flex items-center justify-center">
                                <div className="flex items-center lg:ml-4">
                                    <div className="w-8 h-[2px] bg-[#f2312d]" />
                                    <div className="w-2 h-[2px] bg-transparent" /> {/* Gap between lines */}
                                    <div className="w-2 h-[2px] bg-[#f2312d]" />
                                    <div className="w-2 h-[2px] bg-transparent" />
                                    <div className="w-2 h-[2px] bg-[#f2312d]" />
                                </div>
                                <div className="w-10 h-[2px] bg-[#f2312d]" />
                                <h1 className="text-sm lg:text-xl font-roboto font-bold mx-4 text-[#f2312d]">Top Universities Of Russia</h1>
                                <div className="flex items-center lg:ml-4">
                                    <div className="w-10 h-[2px] bg-[#f2312d]" />
                                    <div className="w-2 h-[2px] bg-transparent" /> {/* Gap between lines */}
                                    <div className="w-2 h-[2px] bg-[#f2312d]" />
                                    <div className="w-2 h-[2px] bg-transparent" />
                                    <div className="w-2 h-[2px] bg-[#f2312d]" />
                                </div>
                            </div>
                        </div>

                        {/* Heading Text */}
                        <motion.h1
                            className="text-4xl lg:text-6xl text-center mt-4 font-bold"
                            key={headings[bgImage]} // Ensure heading animates correctly with image change
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.8 }}
                        >
                            {headings[bgImage]}
                        </motion.h1>
                    </motion.div>

                    {/* Button */}
                    <motion.div
                        className="mt-6"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.8 }}
                    >
                        <motion.button
                            className="relative inline-flex items-center justify-start overflow-hidden px-4 py-2 lg:px-6 lg:py-3 text-xl font-semibold text-white border-2 border-white rounded-md bg-transparent transition-all duration-300 ease-in-out group"
                            whileHover={{ scale: 1.1 }} // Button hover animation
                            whileTap={{ scale: 0.95 }} // Button tap animation
                        >
                            {/* Background expansion */}
                            <span className="w-0 h-0 rounded bg-[#f2312d] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>

                            {/* Button text */}
                            <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                Read More
                            </span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
