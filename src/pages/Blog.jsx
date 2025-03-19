import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Blog = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const blogs = [
        {
            id: 1,
            title: "Exploring Russia's Top Universities",
            description: "A deep dive into the best Russian universities for international students.",
            date: "March 5, 2025",
            category: "Education",
            author: "Deepak Kumar",
            userImg: "https://i.pinimg.com/564x/28/61/7c/28617cbb4489a79728f63cb45606dabd.jpg",
            bgImage: "https://www.timeshighereducation.com/sites/default/files/lomonosov_moscow_state_university.jpg",
        },
        {
            id: 2,
            title: "How to Apply for MBBS in Russia",
            description: "Step-by-step guide for international students applying to Russian medical universities.",
            date: "March 10, 2025",
            category: "Education",
            author: "Alka",
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwObBd_gax4PJ4LgDaQvLn3AjnKKbFSgG68A&s",
            bgImage: "https://innovativeconsultants.co.in/wp-content/uploads/2016/11/mbbs-russia-853x458.png.webp",
        },
        {
            id: 3,
            title: "Student Life in Moscow",
            description: "Discover what it's like to study and live in Moscow as a foreign student.",
            date: "March 2, 2025",
            category: "Lifestyle",
            author: "Arun",
            userImg: "https://i.pinimg.com/736x/17/4c/3f/174c3fc52fb1306bb5f1a6feaa8263b1.jpg",
            bgImage: "https://admissions.hse.ru/data/2019/05/17/1507420681/20181228_6556.jpg",
        },
        {
            id: 4,
            title: "Budgeting Tips for Students in Russia",
            description: "How to manage finances effectively while studying abroad in Russia.",
            date: "March 7, 2025",
            category: "Lifestyle",
            author: "Khusi",
            userImg: "https://i.pinimg.com/736x/1c/f7/b3/1cf7b3139a20ec94c68a47222a2c7546.jpg",
            bgImage: "https://leapscholar.com/blog/wp-content/uploads/2024/07/RUSSIA.jpg",
        },
        {
            id: 5,
            title: "Must-Visit Places in Russia for Students",
            description: "Explore the top travel destinations in Russia for international students.",
            date: "March 3, 2025",
            category: "Travel",
            author: "David",
            userImg: "https://logowik.com/content/uploads/images/script-signature-for-the-name-david6245.logowik.com.webp",
            bgImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a3/01/9e/img-20170611-220124-085.jpg?w=1200&h=-1&s=1",
        },
        {
            id: 6,
            title: "A Weekend Getaway from Moscow",
            description: "Best short trips and weekend destinations near Moscow for students.",
            date: "March 9, 2025",
            category: "Travel",
            author: "Vinita",
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDgypu17bngY7dA_wje-Qdel39PJYBYnPig&s",
            bgImage: "https://i0.wp.com/lilioftheworld.com/wp-content/uploads/2019/10/20190907_113844.jpg?resize=768%2C1024&ssl=1",
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
            <Helmet>
                <title>Doctors-IEA Blog - MBBS in Russia Updates & Insights</title>
                <meta
                    name="description"
                    content="Stay updated with the latest news, insights, and guidance on studying MBBS in Russia. Explore expert articles, admission tips, and university updates on the Doctors-IEA blog."
                />
            </Helmet>
            <h1 className="text-2xl lg:text-5xl font-bold text-center text-gray-800">
                Our Latest <span className="text-green-600">Blogs</span>
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
                            ? "bg-green-600 text-white"
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
                                    <img src={blog.userImg} alt="User" className="w-8 h-8 rounded-full border border-green-600" />
                                    <span className="text-gray-300">{blog.author || "Unknown"}</span>
                                </div>
                                <span>{blog.date}</span>
                            </div>

                            {/* See More Button */}
                            <Link to={`/blog/${blog.id}`}>
                                <button className="w-full text-sm bg-white text-black py-1 px-3 rounded font-medium transition-colors duration-300 hover:bg-green-600 hover:text-white">
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
                <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === totalPages} className="px-4 py-2 rounded bg-green-600 text-white disabled:opacity-50">Next</button>
            </div>

        </motion.div>
    );
};

export default Blog;
