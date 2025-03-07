import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);

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
          className="text-2xl lg:text-4xl font-bold text-center text-gray-800"
        >
          Contact The<span className="text-red-600"> RREC </span>Team
        </h2>
        <p className="text-center text-gray-600 mt-4 max-w-xl">
          Reach out to us for any queries regarding admissions, universities, or support.
        </p>
      </motion.div>

      <motion.div
        className="container mx-auto font-roboto p-6 lg:px-24 lg:py-10 lg:-mt-10 flex flex-col md:flex-row items-center justify-between"
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
            src="https://wallpapers.com/images/featured/contact-us-png-utzibsfm947bfa36.jpg"
            alt="Contact Illustration"
            className="max-w-sm md:max-w-md"
            loading="lazy"
          />
        </motion.div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg">

          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-red-700 transition"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </motion.div>

      <div className="w-full flex flex-col lg:px-24 md:flex-row mt-6">
        {/* Left Side - Contact Table */}
        <motion.div
          className="w-full md:w-1/2 p-6"
          whileInView={{ x: 0, opacity: 1 }} // Animates when in viewport
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Ensures animation runs only once
        >
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-green-600 text-white">
                <th colSpan="2" className="p-2 text-left text-md">The RREC Team India</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="border border-gray-300">
                <td className="p-3 font-semibold w-1/3 bg-gray-100 border-r border-gray-300">Address</td>
                <td className="p-3">PP Trade Center, Office 709-710,
                  Pitampura - 110034, New Delhi, India</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="p-3 font-semibold w-1/3 bg-gray-100 border-r border-gray-300">
                  Phone</td>
                <td className="p-3">+91-7042284508 , +91 7042284509</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="p-3 font-semibold w-1/3 bg-gray-100 border-r border-gray-300">Toll Free
                </td>
                <td className="p-3">1800-572-5827</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="p-3 font-semibold w-1/3 bg-gray-100 border-r border-gray-300">
                  Landline Number</td>
                <td className="p-3">011-43583056</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="p-3 font-semibold w-1/3 bg-gray-100 border-r border-gray-300">Email</td>
                <td className="p-3">contact@rrecrussia.com , rrec.educonsultants@gmail.com</td>
              </tr>

            </tbody>
          </table>
        </motion.div>

        {/* Right Side - Google Map */}
        <motion.div
          className="w-full md:w-1/2 p-6 flex justify-center"
          whileInView={{ x: 0, opacity: 1 }} // Animates when in viewport
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Ensures animation runs only once
        >
          <iframe
            className="w-full h-64 md:h-80 border border-gray-300 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8652879979413!2d77.1475991755031!3d28.693676075631423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d92f45f1bb%3A0xf2fcd5bfa7590c08!2sThe%20RREC%20Team-MBBS%20in%20Russia%20%7C%20Direct%20Official%20Admission%20Partners%20%7C%20Top%20Medical%2C%20Technical%2C%20Federal%20Universities%20of%20Russia.!5e0!3m2!1sen!2sin!4v1737455159513!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </motion.div>
      </div>

      {/* Downside Section with Table and Map */}
      <div className="w-full flex flex-col lg:px-24 md:flex-row mt-6">
        {/* Left Side - Map */}
        <motion.div
          className="w-full md:w-1/2 p-6 flex justify-center"
          whileInView={{ x: 0, opacity: 1 }} // Animates when in viewport
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Ensures animation runs only once
        >
          <iframe
            className="w-full h-64 md:h-80 border border-gray-300 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.864925779748!2d77.1476046!3d28.6936737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01f85ed2a037%3A0x18541e282325b6d7!2sStudy%20MBBS%20in%20Russia%3A%20Doctors-IEA%20(Top%20Educational%20Advisors)%20%7C%20Official%20Representative%20of%20Top%20Medical%20Universities%20of%20Russia.!5e0!3m2!1sen!2sin!4v1710163850201"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </motion.div>


        {/* Right Side - Form */}
        <motion.div
          className="w-full md:w-1/2 lg:pt-16 p-6"
          whileInView={{ x: 0, opacity: 1 }} // Animates when in viewport
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Ensures animation runs only once
        >
          <table className="w-full border-collapse border border-gray-300">
            {/* Table Header */}
            <thead>
              <tr className="bg-yellow-500 text-white">
                <th colSpan="2" className="p-2 text-left text-md">Registered Office Address:</th>
              </tr>
            </thead>


            {/* Table Body */}
            <tbody className="text-gray-800">
              {/* Address Row */}
              <tr className="border border-gray-300">
                <td className="p-3 font-semibold w-1/3 bg-gray-100 border-r border-gray-300">Address</td>
                <td className="p-3">
                  Unit 608, 6th floor,
                  Aggarwal Cyber Plaza-1,
                  Netaji Subhash Place Pitampura - 110034, New Delhi, India
                </td>
              </tr>

              {/* Student Helpline Row */}
              <tr className="border border-gray-300">
                <td className="p-3 font-semibold w-1/3 bg-gray-100 border-r border-gray-300">	
                Phone</td>
                <td className="p-3">+91-7669533991</td>
              </tr>

              {/* Office Numbers Row */}
              <tr className="border border-gray-300">
                <td className="p-3 font-semibold w-1/3 bg-gray-100 border-r border-gray-300">	
                E-mail</td>
                <td className="p-3">contact@rrec.com.ru</td>
              </tr>

            </tbody>
          </table>
        </motion.div>
      </div >
    </>
  );
};

export default ContactPage;
