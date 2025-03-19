import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Partner = () => {
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        city: "",
        state: "",
        country: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const validateForm = (formData) => {
        const { fullName, email, phone, company, website, city, state, country, message } = formData;
        let errors = [];

        if (!fullName.trim() && !email.trim() && !phone.trim() && !company.trim() && !website.trim() && !city.trim() && !state.trim() && !country.trim() && !message.trim()) {
            return "All fields are required!";
        }

        if (!fullName.trim()) errors.push("Full Name is required");
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Valid Email is required");
        if (!phone.trim() || !/^\d{10}$/.test(phone)) errors.push("Valid 10-digit Phone Number is required");
        if (!company.trim()) errors.push("Company Name is required");
        if (!website.trim() || !/^https?:\/\/.+\..+/.test(website)) errors.push("Valid Website URL is required");
        if (!city.trim()) errors.push("City is required");
        if (!state.trim()) errors.push("State is required");
        if (!country.trim()) errors.push("Country is required");
        if (!message.trim()) errors.push("Message cannot be empty");

        return errors.length ? errors[0] : null; // Return only the first error message
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        // Dismiss existing toasts before showing a new one
        toast.dismiss();

        const validationError = validateForm(formData);
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
            const response = await fetch("", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Form submitted successfully!", { position: "top-center" });
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    company: "",
                    website: "",
                    city: "",
                    state: "",
                    country: "",
                    message: ""
                });
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.", { position: "top-center" });
        }
        setLoading(false);
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
                    Become a Partner Associate, Get best Services from <span className="text-red-600">RREC</span> Team
                </h2>
                <p className="text-center font-semibold text-lg text-blue-500 mt-2 max-w-6xl">
                    Get best Services from RREC Team
                </p>
                <p className="mt-2 text-center font-roboto">Reliable Russian Educational Consultants (RREC Pvt Ltd) is the official authorized admission partner of Top Russian Universities for Indians as well as for international students. RREC Pvt. Ltd having direct contracts, authorizations with top-ranked universities of Russia. </p>
                <p className="mt-2 text-center font-roboto">For more queries, you can call us at 1800-572-5827 (Tollfree) / +91-70422-84508 (India),  +7-9515371133 (Russia)</p>
                <h2
                    className="text-2xl lg:text-lg mt-4 font-bold text-center text-red-500"
                >
                    University Tie-ups
                </h2>
                <p className="text-center  text-md text-gray-800 mt-2 max-w-6xl">
                    Options of 130+ programs in 20+ tie-up Universities.
                </p>
                <h2
                    className="text-2xl lg:text-lg mt-4 font-bold text-center text-red-500"
                >
                    Comprehensive Services
                </h2>
                <p className="text-center  text-md text-gray-800 mt-2 max-w-6xl">
                    Assistance at each step of the study abroad lifecycle; University selection, Selective Course details, application processes, admissions, fee structure, and visa processin
                </p>
                <h2
                    className="text-2xl lg:text-lg mt-4 font-bold text-center text-red-500"
                >
                    Professional Advice
                </h2>
                <p className="text-center  text-md text-gray-800 mt-2 max-w-6xl">
                    Increase your conversion rate through expert guidance from the RREC team with many years of experience in the Study MBBS abroad in Russia.
                </p>

            </motion.div>

            <ToastContainer
                className="mt-20"
                toastClassName={() =>
                    "flex items-center gap-3 border border-red-600 bg-white text-gray-900 w-96 shadow-lg shadow-red-500/50 rounded-lg p-4"
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
                        src="https://img.freepik.com/premium-photo/virtual-handshake-icon-online-meetings-isolated-white-background-clean-design_980716-513463.jpg"
                        alt="Contact Illustration"
                        className="max-w-sm md:max-w-md"
                        loading="lazy"
                    />
                </motion.div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-1/2 bg-white p-6 rounded-lg">

                    <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />

                        {/* Email & Phone Number in the Same Row */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>

                        {/* Company Name */}
                        <input
                            type="text"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />

                        {/* Website URL */}
                        <input
                            type="url"
                            placeholder="Website URL"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />

                        {/* City, State & Country in the Same Row */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="City"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="text"
                                placeholder="State"
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="text"
                                placeholder="Country"
                                value={formData.country}
                                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>

                        {/* Message Textarea */}
                        <textarea
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            rows="4"
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition"
                        >
                            {loading ? "Submitting..." : "Send Message"}
                            <Send size={18} />
                        </button>
                    </form>

                </div>
            </motion.div>
        </>
    );
};

export default Partner;