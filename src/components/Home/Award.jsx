import { motion } from "framer-motion";
import main from "../../assets/Award.jpeg";

const Award = () => {
    return (
        <div className="relative flex flex-col items-center px-6 lg:px-24 font-roboto h-full w-full overflow-hidden">
            {/* Top Heading */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mx-auto w-full mt-8 lg:mt-14 mb-6 flex flex-col items-center px-4"
            >
                <div className="flex items-center justify-center flex-wrap gap-x-1 sm:gap-x-2">
                    {/* Left Side Lines */}
                    <div className="hidden lg:flex items-center">
                        <div className="w-1.5 sm:w-2 h-[2px] bg-[#f2312d]" />
                        <div className="w-1.5 sm:w-2 h-[2px] bg-transparent" />
                        <div className="w-1.5 sm:w-2 h-[2px] bg-[#f2312d]" />
                        <div className="w-1.5 sm:w-2 h-[2px] bg-transparent" />
                        <div className="w-1.5 sm:w-10 h-[2px] bg-[#f2312d]" />
                    </div>


                    {/* Heading */}
                    <h1 className="text-xl sm:text-lg lg:text-xl font-roboto font-bold mx-0 sm:mx-4 text-[#f2312d] text-center">
                        Best Education Abroad Consultants
                    </h1>

                    {/* Right Side Lines */}
                    <div className="hidden lg:flex items-center">
                        <div className="w-1.5 sm:w-10 h-[2px] bg-[#f2312d]" />
                        <div className="w-1.5 h-[2px] bg-transparent" />
                        <div className="w-1.5 h-[2px] bg-[#f2312d]" />
                        <div className="w-2 h-[2px] bg-transparent" />
                        <div className="w-2 h-[2px] bg-[#f2312d]" />
                    </div>
                </div>
            </motion.div>

            {/* Mobile Image (Centered between Heading & Paragraph) */}
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src="https://png.pngtree.com/png-vector/20230624/ourmid/pngtree-gold-black-best-award-badge-with-paddy-symbol-and-gradation-vector-png-image_7313374.png"
                alt="Award Badge"
                className="lg:hidden w-40 h-40 mt-4 mb-4"
            />


            {/* Animated paragraph */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-0 text-center text-md lg:text-lg font-semibold text-gray-700"
            >
                Study MBBS Abroad in Russia top rank educational consultants in 2022 award by popular actor Mr. Sonu Sood
            </motion.p>

            {/* Main Image inside Frame */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex justify-center items-center mt-4"
            >
                <div className="relative w-[500px] h-[500px] flex justify-center items-center">
                    {/* Frame Image (Always on Top) */}
                    <img
                        src="https://www.transparentpng.com/download/photo-frame/simple-black-frame-png-hd--xCYAvY.png"
                        alt="Frame"
                        className="absolute w-full h-full object-contain z-10 pointer-events-none"
                    />

                    {/* Main Image inside Frame */}
                    <div className="absolute inset-0 flex justify-center items-center overflow-hidden w-full h-full">
                        <img
                            src={main}
                            alt="Main Image"
                            className="w-[63%] h-[86%] object-fit"
                        />
                    </div>
                </div>
            </motion.div>


            {/* Left PNG */}
            <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                src="https://png.pngtree.com/png-vector/20230624/ourmid/pngtree-gold-black-best-award-badge-with-paddy-symbol-and-gradation-vector-png-image_7313374.png"
                alt="Left Side PNG"
                className="hidden lg:flex absolute left-64 top-64 transform -translate-y-1/2 w-64 h-64"
            />

            {/* Right PNG */}
            <motion.img
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                src="https://png.pngtree.com/png-vector/20230624/ourmid/pngtree-gold-black-best-award-badge-with-paddy-symbol-and-gradation-vector-png-image_7313374.png"
                alt="Right Side PNG"
                className="hidden lg:flex absolute right-64 top-64 transform -translate-y-1/2 w-64 h-64"
            />
        </div>
    );
};

export default Award;
