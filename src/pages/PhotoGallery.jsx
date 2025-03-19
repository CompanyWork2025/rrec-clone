import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Import images from assets folder
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";

// Loading GIF
const loaderGif = "https://cdn.dribbble.com/userupload/24031440/file/original-09559e5c3ffd3116a53cc071716e4d88.gif";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const ITEMS_PER_PAGE = 6;

const PhotoGallery = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);

    const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const selectedImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading time
        return () => clearTimeout(timer);
    }, [currentPage]);

        // Scroll to top when the page changes
        useEffect(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, [currentPage]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Helmet>
                <title>Photo Gallery - Moments at Doctors-IEA</title>
                <meta
                    name="description"
                    content="Explore the photo gallery of Doctors-IEA, showcasing memorable moments, student experiences, and campus life at top Russian medical universities."
                />
            </Helmet>

            <div className="flex flex-col items-center justify-center p-6 font-roboto select-none">
                <h1 className="text-2xl lg:text-4xl font-bold mb-2">Our Photo <span className="text-red-600">Gallery</span></h1>
                <p className="text-sm lg:text-lg text-center px-4 lg:px-24 text-gray-600">
                    Explore the vibrant student life in Russia through our curated gallery. From academic excellence to cultural celebrations,
                    witness the experiences of international students as they embark on their journey of education in Russia. Discover moments
                    from university events, campus life, and extracurricular activities that make studying in Russia a truly unforgettable experience.
                </p>

                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-12"
                >
                    {selectedImages.map((img, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                            {loading ? (
                                <img src={loaderGif} alt="Loading..." className="w-96 h-80 object-cover" />
                            ) : (
                                <div className="relative">
                                    <img
                                        src={img}
                                        alt={`Gallery Image ${index + 1}`}
                                        className="w-96 h-80 object-cover"
                                        onContextMenu={(e) => e.preventDefault()} // Disable right-click
                                        draggable={false} // Disable dragging
                                    />
                                    {/* Transparent Overlay to Prevent Click and Download */}
                                    <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Pagination Buttons */}
                <div className="flex gap-4 mt-6">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                        disabled={currentPage === 0}
                        className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
                    >
                        Previous
                    </button>

                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                        disabled={currentPage === totalPages - 1}
                        className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default PhotoGallery;
