import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const Blog = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const blogs = [
        {
            id: 1,
            title: "Why Study MBBS in Russia? Top Benefits Explained",
            description: "Discover why Russia is a top choice for medical aspirants worldwide.",
            date: "April 2, 2025",
            category: "Education",
            author: "Amit Sharma",
            userImg: "https://i.ytimg.com/vi/jOUnybwAruc/maxresdefault.jpg",
            bgImage: "https://www.neweraeducation.in/public/assets/images007/blog/5-best-reasons-to-study-mbbs-in-russia.webp",
        },
        {
            id: 2,
            title: "Life as a Medical Student in Russia",
            description: "A glimpse into the daily routine and challenges faced by international students.",
            date: "April 5, 2025",
            category: "Student Life",
            author: "Sneha Kapoor",
            userImg: "https://i.pinimg.com/736x/7a/a4/b5/7aa4b573781d26846881296d2a3e0f07.jpg",
            bgImage: "https://www.imaginecareer.in/blog/wp-content/uploads/2023/02/mbbsrussia-min.jpg",
        },
        {
            id: 3,
            title: "How to Apply for a Russian Student Visa",
            description: "A step-by-step guide to securing your Russian student visa hassle-free.",
            date: "April 10, 2025",
            category: "Guides",
            author: "Ravi Verma",
            userImg: "https://i.pinimg.com/736x/70/16/9b/70169bddff695daa70d161e9ddcc41f7.jpg",
            bgImage: "https://static.themoscowtimes.com/image/article_1360/8f/9F738010-54D2-4CD9-8146-8D98EAD8A28A.jpeg",
        },
        {
            id: 4,
            title: "Best Medical Universities in Russia for 2025",
            description: "Explore the top-ranked medical universities in Russia for international students.",
            date: "April 15, 2025",
            category: "Education",
            author: "Neha Singh",
            userImg: "https://i.pinimg.com/736x/3f/85/c5/3f85c50d50d9cad724655322b0082290.jpg",
            bgImage: "https://www.mbbsadmissionabroad.in/uploads/topics/mbbs-in-russia-2024-25-the-ultimate-guidance-top-universities-fees-etc-12.jpg",
        },
        {
            id: 5,
            title: "Cost of Living for Students in Russia",
            description: "Detailed insights into accommodation, food, transport, and other expenses.",
            date: "April 18, 2025",
            category: "Finance",
            author: "Arjun Mehta",
            userImg: "https://thumbs.dreamstime.com/b/d-fire-text-effect-hindi-name-chitra-dark-background-engulfed-dramatic-each-letter-appears-as-though-s-forged-339388616.jpg",
            bgImage: "https://wise.com/imaginary-v2/money-banks-russia-rubles-notes.jpg",
        },
        {
            id: 6,
            title: "Exploring Russia: Best Cities for International Students",
            description: "A guide to the best student-friendly cities in Russia beyond Moscow and St. Petersburg.",
            date: "April 22, 2025",
            category: "Travel",
            author: "Priya Malhotra",
            userImg: "https://thumbs.dreamstime.com/b/neon-light-editable-text-effect-352276456.jpg",
            bgImage: "https://www.visitrussia.com/images/places-to-go/photo-2.jpg",
        },
    ];
    

    

    const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];


    const filteredBlogs = blogs.filter(
        (blog) =>
            (category === "All" || blog.category === category) &&
            blog.title.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination Logic
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const selectedBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);


    return (
        <motion.div
            className="min-h-screen px-4 lg:px-24 py-8 bg-gray-100 font-roboto"
            initial={{ opacity: 0, y: 20 }}  // Start position
            animate={{ opacity: 1, y: 0 }}  // End position
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        >

            <h1 className="text-2xl lg:text-4xl font-bold text-center text-gray-800">
                Our Latest <span className="text-red-600">Blogs</span>
            </h1>
            <p className="text-center text-md text-gray-600 mt-4">
                Stay informed with the latest updates on medical education, university admissions, and student life abroad. Our blog provides valuable insights, expert guidance, and real experiences to help aspiring doctors navigate their journey. Explore trending topics, admission tips, and success stories – all in one place
            </p>

            {/* Category Filters */}
            <div className="flex justify-center space-x-3 my-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => { setCategory(cat); setCurrentPage(1); }}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${category === cat
                            ? "bg-red-600 text-white"
                            : "bg-gray-200 text-gray-800"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Search Bar */}
            <div className="flex justify-center mt-8 mb-8">
                <input
                    type="text"
                    placeholder="Search blogs..."
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                    className="w-full max-w-md p-2 border rounded-lg"
                />
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10 px-4 lg:px-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
                {selectedBlogs.map((blog) => (
                    <div key={blog.id} className="relative group">
                        <div className="relative h-64 lg:h-96 rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${blog.bgImage})` }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            ></motion.div>
                        </div>

                        {/* Blog Info */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-40px] w-[90%] bg-black bg-opacity-60 backdrop-blur-md p-4 rounded-lg text-white z-10 h-[200px] lg:h-[200px] flex flex-col justify-between">
                            <h2 className="text-lg lg:text-lg mb-2 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{blog.title}</h2>
                            <p className="text-sm lg:text-base text-justify mt-1 line-clamp-2">{blog.description}</p>

                            {/* Date and User Section */}
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center space-x-2">
                                    <img src={blog.userImg} alt="User" className="w-8 h-8 rounded-full border border-red-600" />
                                    <span className="text-gray-300">{blog.author || "Unknown"}</span>
                                </div>
                                <span>{blog.date}</span>
                            </div>

                            {/* See More Button */}
                            <Link to={`/blog/${blog.id}`}>
                                <button className="w-full text-sm bg-white text-black py-1 px-3 rounded font-medium transition-colors duration-300 hover:bg-r-600 hover:text-white">
                                    See More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </motion.div>


            {/* Pagination */}
            <div className="flex justify-center space-x-4 pt-10">
                <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1} className="px-4 py-2 rounded bg-gray-300 disabled:opacity-50">Previous</button>
                <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === totalPages} className="px-4 py-2 rounded bg-red-600 text-white disabled:opacity-50">Next</button>
            </div>

        </motion.div>
    );
};

export default Blog;
