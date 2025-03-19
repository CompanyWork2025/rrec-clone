import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

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
        content: "Russia has emerged as one of the top destinations for medical education due to its world-class universities, affordable tuition fees, and globally recognized degrees. Medical students in Russia benefit from cutting-edge research facilities, experienced faculty, and a multicultural learning environment. The education system emphasizes practical exposure, ensuring that students gain hands-on experience. Additionally, Russia offers a safe and vibrant atmosphere for international students, with numerous opportunities for career growth post-graduation."
    },
    {
        id: 2,
        title: "Life as a Medical Student in Russia",
        description: "A glimpse into the daily routine and challenges faced by international students.",
        date: "April 5, 2025",
        category: "Student Life",
        author: "Sneha Kapoor",
        userImg: "https://i.pinimg.com/736x/7a/a4/b5/7aa4b573781d26846881296d2a3e0f07.jpg",
        bgImage: "https://www.ruseducation.in/wp-content/uploads/2022/01/student-life-with-mbbs-in-russia1200x628-1.jpg",
        content: "Studying in Russia as a medical student is a unique experience filled with challenges and rewards. A typical day includes attending lectures, practical sessions, and hospital visits. Students also engage in extracurricular activities, cultural programs, and community events. While adapting to the climate and language may take time, universities offer language courses to ease communication barriers. The diverse student community creates an inclusive atmosphere, making life enjoyable both inside and outside the classroom."
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
        content: "Applying for a Russian student visa requires careful planning and documentation. First, secure an admission letter from a recognized university. Then, gather necessary documents, including a valid passport, medical certificate, and proof of financial support. Submit your application at the Russian embassy or consulate in your country. Once approved, you'll receive a visa allowing entry into Russia. It's essential to follow all legal formalities and renew your visa as required to avoid any complications."
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
        content: "Russia is home to several prestigious medical universities known for their excellence in education and research. Some of the top choices for 2025 include Moscow State Medical University, Saint Petersburg State Medical University, Kazan Federal University, and Rostov State Medical University. These institutions offer MBBS programs with internationally recognized curricula, ensuring that graduates can practice medicine worldwide. Choosing the right university depends on factors like tuition fees, location, faculty, and career opportunities."
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
        content: "Living costs in Russia vary based on the city and lifestyle of the student. On average, students spend between $300 to $700 per month, covering accommodation, food, transportation, and leisure activities. University dormitories provide affordable housing options, while private rentals are more expensive. Public transport is cost-effective, and students often receive discounts on metro and bus services. Proper financial planning ensures a comfortable and stress-free stay in Russia."
    },
    {
        id: 6,
        title: "Exploring Russia: Best Cities for International Students",
        description: "A guide to the best student-friendly cities in Russia beyond Moscow and St. Petersburg.",
        date: "April 22, 2025",
        category: "Travel",
        author: "Priya Malhotra",
        userImg: "https://thumbs.dreamstime.com/b/neon-light-editable-text-effect-352276456.jpg",
        bgImage: "https://russian-e-visa.com/images/top-20-must-visit-destinations-in-russia/vladivostok-russia.jpg",
        content: "Russia offers several student-friendly cities beyond Moscow and St. Petersburg. Kazan, known as the student capital, is famous for its welcoming atmosphere and rich culture. Rostov-on-Don provides an affordable cost of living and excellent universities. Novosibirsk, the scientific hub of Russia, attracts students interested in research and innovation. Each city has its own charm, offering diverse experiences and opportunities for international students."
    }
];


const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === parseInt(id));
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(() => {
        return JSON.parse(localStorage.getItem(`comments_${id}`)) || [];
    });

    useEffect(() => {
        localStorage.setItem(`comments_${id}`, JSON.stringify(comments));
    }, [comments, id]);

    const handleCommentSubmit = () => {
        if (comment.trim() && username.trim()) {
            const newComment = { author: username, text: comment, id: Date.now() };
            setComments([...comments, newComment]);
            setComment("");
            setUsername("");
        }
    };

    const handleDeleteComment = (commentId) => {
        const updatedComments = comments.filter((c) => c.id !== commentId);
        setComments(updatedComments);
    };

    const handleEditComment = (commentId) => {
        const editedComment = comments.find((c) => c.id === commentId);
        setUsername(editedComment.author);
        setComment(editedComment.text);
        handleDeleteComment(commentId); // Remove the old comment before editing
    };

    if (!blog) {
        return <div className="text-center py-10 text-red-500">Blog not found!</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 px-4 lg:px-24 py-8 font-roboto">
            <Helmet>
                <title>{`${blog.title} | Doctors-IEA Blog`}</title>
                <meta
                    name="description"
                    content={blog.description}
                />
            </Helmet>



            <div className="relative h-64 lg:h-96 w-full rounded-xl overflow-hidden">
                {/* Show loader while image is loading */}
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                        <img src="https://cdn.dribbble.com/userupload/24031440/file/original-09559e5c3ffd3116a53cc071716e4d88.gif" alt="Loading..." className="w-12 h-12" />
                    </div>
                )}

                {/* Actual Image */}
                <img
                    src={blog.bgImage}
                    alt={blog.title}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"
                        }`}
                    loading="lazy"
                    onLoad={() => setIsLoading(false)} // Hide loader when image loads
                />
            </div>

            {/* Blog Content */}
            <div className="max-w-7xl mx-auto mt-8">
                <h1 className="text-3xl lg:text-4xl mb-4 font-bold text-gray-800 text-center">{blog.title}</h1>
                <p className="text-center text-gray-500 mt-2">By {blog.author} | {blog.date}</p>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">{blog.content}</p>
            </div>

            {/* Comment Section */}
            <div className="max-w-7xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-gray-800">Latest <span className="text-green-600">Comments</span> </h2>
                <div className="mt-4 space-y-4">
                    {comments.length > 0 ? (
                        comments.map((c) => (
                            <div key={c.id} className="p-4 border-b border-gray-300 flex justify-between items-start">
                                <div>
                                    <p className="font-semibold text-green-600">{c.author}</p>
                                    <p className="text-gray-600">{c.text}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <FaEdit
                                        onClick={() => handleEditComment(c.id)}
                                        className="cursor-pointer text-blue-600 hover:text-blue-800"
                                    />
                                    <FaTrashAlt
                                        onClick={() => handleDeleteComment(c.id)}
                                        className="cursor-pointer text-red-600 hover:text-red-800"
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                    )}
                </div>

                {/* Comment Form */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-700">Leave a Comment</h3>
                    <input
                        type="text"
                        className="w-full p-2 mt-2 border rounded-lg"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <textarea
                        className="w-full p-2 mt-2 border rounded-lg"
                        rows="3"
                        placeholder="Write your comment here..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <button
                        onClick={handleCommentSubmit}
                        className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                        Post Comment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
