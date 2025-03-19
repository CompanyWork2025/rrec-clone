import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Loading GIF
const loaderGif = "https://cdn.dribbble.com/userupload/24031440/file/original-09559e5c3ffd3116a53cc071716e4d88.gif";

// YouTube Video Links
const videos = [
    "https://www.youtube.com/embed/duEA_1X0T9M",
    "https://www.youtube.com/embed/H7UvVOfR8yU",
    "https://www.youtube.com/embed/kQr7Hn2M_vc",
    "https://www.youtube.com/embed/8mwHyBLRpqM",
    "https://www.youtube.com/embed/kHcfj2VEJvU",
    "https://www.youtube.com/embed/-A3mHE2mdYM",
    "https://www.youtube.com/embed/vf0Jd-0zipo"
];

const ITEMS_PER_PAGE = 6;

const VideoGallery = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);

    const totalPages = Math.ceil(videos.length / ITEMS_PER_PAGE);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const selectedVideos = videos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000);
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
                <title>Video Gallery - RREC Russia</title>
                <meta
                    name="description"
                    content="Explore the video gallery of RREC Russia featuring student experiences, campus life, and informative videos about studying in Russia."
                />
            </Helmet>

            <div className="flex flex-col items-center justify-center p-6 font-roboto select-none">
                <h1 className="text-2xl lg:text-4xl font-bold mb-2">Our Video <span className="text-red-600">Gallery</span></h1>
                <p className="text-sm lg:text-lg text-center px-4 lg:px-24 text-gray-600">
                    Watch informative videos, student testimonials, and exciting moments from university events in Russia. Stay updated with the latest content from our YouTube channel.
                </p>

                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-12"
                >
                    {selectedVideos.map((video, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                            {loading ? (
                                <img src={loaderGif} alt="Loading..." className="w-96 h-80 object-cover" />
                            ) : (
                                <iframe
                                    src={video}
                                    title={`Video ${index + 1}`}
                                    className="w-96 h-80"
                                    allowFullScreen
                                ></iframe>
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

export default VideoGallery;
