import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const blogs = [
    {
        id: 1,
        title: "Exploring Russia's Top Universities",
        description: "A deep dive into the best Russian universities for international students.",
        date: "March 5, 2025",
        category: "Education",
        author: "Deepak Kumar",
        userImg: "https://i.pinimg.com/564x/28/61/7c/28617cbb4489a79728f63cb45606dabd.jpg",
        bgImage: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Russia_2CH_uL1Ea.webp?tr=w-3840",
        content: `Russia has been a hub for education, attracting students from all over the world. It boasts a rich academic heritage, with universities consistently ranking among the best globally. Institutions like Lomonosov Moscow State University, Saint Petersburg State University, and Kazan Federal University provide top-tier education in various disciplines. These universities offer modern research facilities, experienced faculty, and diverse student communities. Studying in Russia also gives international students a chance to experience a unique blend of culture, history, and technological advancements, making it a sought-after destination for higher education.`
    },
    {
        id: 2,
        title: "How to Apply for MBBS in Russia",
        description: "Step-by-step guide for international students applying to Russian medical universities.",
        date: "March 10, 2025",
        category: "Education",
        author: "Alka",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwObBd_gax4PJ4LgDaQvLn3AjnKKbFSgG68A&s",
        bgImage: "https://mbbsexpert.in/wp-content/uploads/2021/05/Russia.jpg",
        content: `Applying for MBBS in Russia is a straightforward process that offers affordability and high-quality education. The first step involves choosing a recognized university, such as Rostov State Medical University or Kazan State Medical University. Students must prepare essential documents like academic transcripts, a passport, and a medical certificate. The admission process usually includes filling out an application, submitting the required documents, and obtaining an official invitation from the university. Since Russian medical universities offer English-medium courses, students do not need to learn Russian immediately, but it is beneficial for practical training.`
    },
    {
        id: 3,
        title: "Student Life in Moscow",
        description: "Discover what it's like to study and live in Moscow as a foreign student.",
        date: "March 2, 2025",
        category: "Lifestyle",
        author: "Arun",
        userImg: "https://i.pinimg.com/736x/17/4c/3f/174c3fc52fb1306bb5f1a6feaa8263b1.jpg",
        bgImage: "https://www.hse.ru/data/2019/04/30/1181019089/moscow-1556564_960_720.jpg",
        content: `Moscow, the capital of Russia, offers an exciting student life with its vibrant culture, historical landmarks, and world-class universities. International students enjoy affordable public transportation, diverse food options, and various cultural events throughout the year. Universities in Moscow, like HSE and Moscow State University, provide state-of-the-art facilities and numerous student organizations that help students socialize and engage in extracurricular activities. The city’s nightlife, museums, and parks make it an exciting place to explore outside of academics. Despite the cold winters, students find Moscow to be an enriching and rewarding place to study.`
    },
    {
        id: 4,
        title: "Budgeting Tips for Students in Russia",
        description: "How to manage finances effectively while studying abroad in Russia.",
        date: "March 7, 2025",
        category: "Lifestyle",
        author: "Khusi",
        userImg: "https://i.pinimg.com/736x/1c/f7/b3/1cf7b3139a20ec94c68a47222a2c7546.jpg",
        bgImage: "https://itcslimited.com/wp-content/uploads/2021/08/MBBS-in-Russia-1-1.jpg",
        content: `Managing finances as an international student in Russia requires careful planning. The cost of living varies from city to city, with Moscow and Saint Petersburg being more expensive than smaller cities like Kazan or Rostov. Students can save money by opting for university dormitories, using student discounts for public transportation, and cooking meals instead of eating out. Budgeting apps and opening a local bank account can also help manage expenses. Additionally, part-time work opportunities are available for students who want to earn extra income while studying.`
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
        content: `Russia is home to many breathtaking travel destinations for students. Moscow and Saint Petersburg offer historical landmarks such as the Kremlin, Red Square, and the Winter Palace. Nature lovers can explore Lake Baikal, the deepest freshwater lake in the world, or the scenic Altai Mountains. The Golden Ring cities, known for their ancient churches and architecture, provide a glimpse into Russia’s rich history. Students often take weekend trips to these destinations, making their study experience in Russia more adventurous and fulfilling.`
    },
    {
        id: 6,
        title: "A Weekend Getaway from Moscow",
        description: "Best short trips and weekend destinations near Moscow for students.",
        date: "March 9, 2025",
        category: "Travel",
        author: "Vinita",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDgypu17bngY7dA_wje-Qdel39PJYBYnPig&s",
        bgImage: "https://www.trawell.in/blog/wp-content/uploads/2022/08/Main_Image-5.jpg",
        content: `Students studying in Moscow can take advantage of weekend getaways to escape the city’s hustle and bustle. Popular destinations include Sergiev Posad, known for its beautiful monasteries, and Suzdal, a picturesque town filled with historic sites. Nature lovers can visit the forests and lakes in the Moscow region, offering a perfect retreat for relaxation. Veliky Novgorod, one of Russia’s oldest cities, is also a great choice for students interested in history. These short trips allow students to explore Russian culture and unwind from academic stress.`
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
