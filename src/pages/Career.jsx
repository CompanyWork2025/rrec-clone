import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Send } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.resume) {
      toast.error("Please upload a resume file.");
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("resume", formData.resume);

    console.log("Submitting Form Data:", Object.fromEntries(formDataToSend.entries()));

    try {
      const response = await fetch("", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      console.log("Response:", result);

      if (response.ok) {
        toast.success("Application submitted successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          icon: "✅",
        });
        setFormData({ name: "", email: "", phone: "", position: "", resume: null });
      } else {
        toast.error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const bannerRef = useRef(null);
  const isInView = useInView(bannerRef, { once: true });


  const jobs = [
    {
      title: "Education Advisor",
      description: "Guide students and parents in selecting the most appropriate medical university abroad.",
      eligibility: "Any graduate degree, strong communication skills, and prior counseling experience preferred.",
      image: "https://img.freepik.com/premium-vector/academic-advisor-icon-vector-image-can-be-used-university_120816-201444.jpg"
    },
    {
      title: "Web Designer",
      description: "You will be handed over the responsibility to design visually appealing and intuitive web pages.",
      eligibility: "Expertise in UI/UX, HTML, CSS, Adobe Photoshop, and design tools.",
      image: "https://www.transparentpng.com/download/web-design/web-design-high-quality-png-6.png"
    },
    {
      title: "Web Developer",
      description: "Maintain and develop company websites and online platforms.",
      eligibility: "Proficiency in HTML, CSS, JavaScript, PHP, and WordPress.",
      image: "https://static.vecteezy.com/system/resources/previews/011/153/360/non_2x/3d-web-developer-working-on-project-illustration-png.png"
    },
    {
      title: "SEO Specialist",
      description: "Optimize website rankings using SEO and search engine strategies.",
      eligibility: "Experience in SEO tools, keyword research, and website optimization.",
      image: "https://pxmatrix.com/wp-content/uploads/2021/11/seo.png"
    },
    {
      title: "Content Writer",
      description: "Create engaging and informative content for websites, blogs, and social media.",
      eligibility: "Strong writing and research skills, SEO knowledge, and content marketing experience.",
      image: "https://png.pngtree.com/png-vector/20220615/ourmid/pngtree-content-writer-or-journalist-background-vector-illustration-for-copy-writing-png-image_5085570.png"
    },
    {
      title: "Social Media Marketer",
      description: "Your job responsibility will comprise managing and growing the company’s social media presence.",
      eligibility: "Knowledge of digital marketing, social media strategies, content creation, and analytics.",
      image: "https://www.pngplay.com/wp-content/uploads/7/Online-Digital-Marketing-Background-PNG-Image.png"
    },
    {
      title: "Telecaller (Student Support)",
      description: "Handle student inquiries and admission assistance.",
      eligibility: "Excellent communication skills, fluency in English and Hindi.",
      image: "https://png.pngtree.com/png-vector/20220702/ourmid/pngtree-customer-service-agent-help-call-png-image_5552034.png"
    },
    {
      title: "Operations & Visa Executive",
      description: "Manage documentation, student visa processing, and travel arrangements.",
      eligibility: "Prior experience in visa processing and international travel coordination preferred.",
      image: "https://www.freeiconspng.com/uploads/operations-icon-2.png"
    }
  ];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-100 font-roboto text-gray-900"
    >



      {/* Hero Section */}
      <div className="text-gray-800 py-10 text-center">
        <h1 className="text-2xl px-4 lg:text-4xl font-bold">Careers at  <span className="text-red-600">RREC</span> – Build a Future in Medical Education !</h1>
        <p className="mt-4 text-lg">Shaping Medical Careers for Over 16 Years!</p>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full px-4 lg:px-24 -mt-8 mx-auto p-6"
      >
        <p className="text-lg text-justify">
          At RREC, we have been shaping the careers of aspiring doctors for over 16 years, establishing ourselves as one of India’s most trusted medical education consultancies. We are committed to helping students fulfill their dreams of pursuing MBBS abroad, offering expert guidance and seamless admission support. With our strong pan-India presence, we ensure students from all regions receive reliable assistance, making their transition to top international medical universities smooth and stress-free.
        </p>
        <p className="text-lg mt-4 text-justify">
          As an authorized admission partner for over 20+ NMC and WHO-recognized universities in Russia and other countries, we pride ourselves on delivering ethical, transparent, and result-driven services. Our commitment to excellence has earned the trust of students and parents alike.
        </p>
        <p className="text-lg mt-4 text-justify">
          At RREC, we foster a collaborative, dynamic, and growth-oriented work culture, where innovation and dedication drive success. If you are passionate about education, technology, and making a difference in students' lives, we invite you to join our growing team and contribute to an exciting career in medical education consulting!
        </p>
      </motion.div>

      {/* Job Listings Swiper */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-7xl mx-auto p-6"
      >
        <h2 className="text-xl font-bold text-center mb-6">Exciting Career Opportunities at <span className="text-red-600">RREC</span></h2>
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full h-96"
          breakpoints={{
            320: { slidesPerView: 1 },  // Mobile screens
            768: { slidesPerView: 2 },  // Tablets
            1024: { slidesPerView: 3 }, // Large screens (lg)
          }}
        >
          {jobs.map((job, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg border shadow-md h-80 text-center flex flex-col items-center"
              >
                <img src={job.image} alt={job.title} className="w-24 h-24 mb-4" />
                <h3 className="text-xl font-semibold text-red-600">{job.title}</h3>
                <p className="mt-2">{job.description}</p>
                <p className="mt-2 font-semibold">Eligibility: {job.eligibility}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        id='apply'
        className="container mx-auto font-roboto p-6 lg:px-24 lg:py-10 lg:-mt-20 flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ToastContainer
          className="mt-20"
          toastClassName={() =>
            "flex items-center gap-3 border border-green-600 bg-white text-gray-900 w-96 shadow-lg shadow-green-500/50 rounded-lg p-4"
          }
        />
        {/* Left Side - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          animate={{ y: [0, -20, 0] }} // Moves up and down
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} // Infinite smooth loop
        >
          <img
            src="https://www.pngplay.com/wp-content/uploads/9/Job-No-Background.png"
            alt="Contact Illustration"
            className="max-w-sm md:max-w-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 h-full bg-white border border-2 shadow-lg p-10 rounded-lg">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-md mb-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-md mb-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-md mb-2"
            />

            {/* Dropdown for Position */}
            <select name="position" value={formData.position} onChange={handleChange} required className="w-full p-4 border rounded-md mb-2">
              <option value="">Select Position</option>
              {jobs.map((job, index) => (
                <option key={index} value={job.title}>{job.title}</option>
              ))}
            </select>

            <p className="text-sm mt-2 mb-2 ml-2 text-gray-600">Please upload your CV (PDF, DOC, or DOCX).</p>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full p-4 border rounded-md mb-2"
              aria-label="Upload your CV"
              title="Upload your CV"
            />



            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white p-3 rounded-lg hover:bg-blue-300 transition"
            >
              {loading ? "Submitting..." : "Send Message"} <Send size={18} />
            </button>
          </form>
        </div>
      </motion.div>
      <motion.div
        ref={bannerRef}
        className="px-4 lg:px-24 bg-white mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div
          className="relative bg-gradient-to-r from-[#f2312d] to-red-700 text-white lg:py-2 lg:px-6 text-center rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row items-center"
        >
          <div className="lg:w-1/2 text-center mt-10 lg:mt-0 lg:text-left px-6">
            <h2 className="text-3xl font-bold mb-4">Why Join RREC?</h2>
            <p className="text-lg max-w-6xl mb-6">
              Be part of a company that transforms student aspirations into reality and helps build promising careers in the medical education industry. We value expertise, innovation, and commitment, offering opportunities to grow while making a meaningful impact on students’ futures.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("apply");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="bg-white text-red-700 font-semibold px-6 py-3 rounded-lg shadow-md inline-block cursor-pointer"
            >
              Apply Today & Grow with Us!
            </motion.a>


          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://t3.ftcdn.net/jpg/05/77/64/68/240_F_577646808_fg8V5Bfg4meRP6uPH6PFn1HTlZaELN87.png"
              alt="Career Growth"
              className="w-full max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Career;