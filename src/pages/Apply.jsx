import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Apply = () => {
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        whatsapp: "",
        passport: "",
        pcb: "",
        neet: "",
        university: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { fullName, email, phone, whatsapp, passport, pcb, neet, university, message } = formData;

        // Check if all fields are empty
        if (!fullName.trim() && !email.trim() && !phone.trim() && !whatsapp.trim() && !passport.trim()
            && !pcb.trim() && !neet.trim() && !university.trim() && !message.trim()) {
            return "All fields are required!";
        }

        if (!fullName.trim()) return "Full Name is required";
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Valid Email is required";
        if (!phone.trim() || !/^\d{10}$/.test(phone)) return "Valid 10-digit Phone Number is required";
        if (!whatsapp.trim() || !/^\d{10}$/.test(whatsapp)) return "Valid 10-digit WhatsApp Number is required";
        if (!passport.trim()) return "Please select Passport status";
        if (!pcb.trim() || isNaN(pcb) || pcb < 0 || pcb > 100) return "Valid PCB Percentage is required (0-100)";
        if (!neet.trim() || isNaN(neet) || neet < 0) return "Valid NEET Marks are required (must be a positive number)";
        if (!university.trim()) return "Please select a University";
        if (!message.trim()) return "Message cannot be empty";

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            toast.error(validationError, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                icon: "❌",
            });
            return;
        }

        setLoading(true);

        try {
            // Replace this with actual API request
            const response = await fetch("", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit application.");
            }

            toast.success("Application submitted successfully!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                icon: "✅",
            });

            setFormData({
                fullName: "",
                email: "",
                phone: "",
                whatsapp: "",
                passport: "",
                pcb: "",
                neet: "",
                university: "",
                message: ""
            });
        } catch (error) {
            toast.error("Something went wrong. Please try again!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                icon: "❌",
            });
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (!animationPlayed) {
            setAnimationPlayed(true);
        }
    }, []);
    return (
        <>
            <motion.div
                className="container mx-auto font-roboto p-6 lg:py-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}  // Start position
                animate={{ opacity: 1, y: 0 }}  // End position
                transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            >


                {/* Heading Section */}
                <h2
                    className="text-2xl lg:text-3xl font-bold text-center text-gray-800"
                >
                    Apply Online With Us  <span className="text-red-600">Today! </span>
                </h2>
                <p className="text-center font-semibold text-lg text-pink-600 mt-2 max-w-6xl">
                    Choose the top Medical, Federal and Technical Universities with the RREC Team.
                </p>
                <p className="text-center font-semibold text-lg text-blue-500 mt-2 max-w-6xl">
                    Fill your details here, our team will get in contact with you in next 24 hours.
                </p>
            </motion.div>
            <ToastContainer
                className="mt-20"
                toastClassName={() =>
                    "flex items-center gap-3 border border-green-600 bg-white text-gray-900 w-96 shadow-lg shadow-green-500/50 rounded-lg p-4"
                }
            />


            <motion.div
                className="container mx-auto font-roboto p-6 lg:px-24 lg:py-10 lg:-mt-20 flex flex-col md:flex-row items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Left Side - Image */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-center"
                    animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} // Infinite smooth loop
                >
                    <img
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-raising-both-hands-pointing-to-the-top-right-corner-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--direction-man-showing-side-pose-grey-vest-pack-people-illustrations-5191747.png"
                        alt="Contact Illustration"
                        className="max-w-sm md:max-w-lg"
                        loading="lazy"
                    />
                </motion.div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-1/2 bg-white p-6 rounded-lg">

                    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                        {/* Full Name */}
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="fullName" value={formData.fullName} onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />

                        {/* Email & Phone Number in the Same Row */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email" value={formData.email} onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                name="phone" value={formData.phone} onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            {/* WhatsApp Number */}
                            <input
                                type="tel"
                                placeholder="WhatsApp Number"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg"
                            />

                            {/* Passport Radio Buttons */}
                            <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-3 p-3 border border-gray-300 rounded-lg">
                                <span className="font-roboto text-sm">Do you have a Passport?</span>
                                <div className="flex gap-4">
                                    <label
                                        className={`flex items-center gap-2 ${formData.passport === "Yes" ? "text-green-600" : "text-gray-700"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="passport"
                                            value="Yes"
                                            onChange={handleChange}
                                            checked={formData.passport === "Yes"}
                                            className={`w-4 h-4 ${formData.passport === "Yes" ? "border-green-500" : "border-gray-300"
                                                }`}
                                        />
                                        Yes
                                    </label>
                                    <label
                                        className={`flex items-center gap-2 ${formData.passport === "No" ? "text-red-500" : "text-gray-700"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="passport"
                                            value="No"
                                            onChange={handleChange}
                                            checked={formData.passport === "No"}
                                            className={`w-4 h-4 ${formData.passport === "No" ? "border-red-500" : "border-gray-300"
                                                }`}
                                        />
                                        No
                                    </label>

                                </div>
                            </div>
                        </div>


                        {/* PCB% & NEET Marks in the Same Row */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="number"
                                placeholder="PCB Percentage (%)"
                                name="pcb" value={formData.pcb} onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="number"
                                placeholder="NEET Marks"
                                name="neet" value={formData.neet} onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>

                        {/* University Dropdown */}
                        <select name="university" value={formData.university} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg">
                            <option value="">Select University</option>

                            {/* Medical Universities */}
                            <option value="rostov">Rostov State Medical University</option>
                            <option value="ural-medical">Ural State Medical University</option>
                            <option value="kemerovo">Kemerovo State Medical University</option>
                            <option value="crimea-medical">Crimea Federal University - Medical Faculty</option>
                            <option value="kursk">Kursk State Medical University</option>
                            <option value="bashkir">Bashkir State Medical University</option>
                            <option value="kazan-medical">Kazan State Medical University</option>
                            <option value="volgograd">Volgograd State Medical University</option>
                            <option value="kazan-federal">Kazan Federal University</option>

                            <option value="yaroslavl">Yaroslavl State Medical University</option>
                            <option value="samara">Samara State Medical University</option>
                            <option value="north-ossetian">North Ossetian State Medical Academy</option>
                            <option value="peoples-friendship">Peoples' Friendship University of Russia</option>
                            <option value="stavropol">Stavropol State Medical University</option>
                            <option value="kabardino">Kabardino-Balkarian State University</option>
                            <option value="fareastern">Far Eastern Federal University</option>
                            <option value="immanuel-kant">Immanuel Kant Baltic Federal University</option>

                            {/* Technical Universities */}
                            <option value="don-state">Don State Technical University</option>
                            <option value="southern-federal">Southern Federal University</option>
                            <option value="spb-polytech">Saint Petersburg Polytechnic University</option>
                            <option value="ukhta">Ukhta State Technical University</option>
                            <option value="ural-federal">Ural Federal University</option>
                            <option value="misis">University of Science and Technology MISiS</option>
                        </select>



                        {/* Message Textarea */}
                        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" rows="4"></textarea>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 bg-red-600 text-white p-3 rounded-lg hover:bg-blue-400 transition"
                        >
                            {loading ? "Submitting..." : "Send Message"} <Send size={18} />
                        </button>
                    </form>
                </div>
            </motion.div>
        </>
    );
};

export default Apply;