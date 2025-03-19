import { motion } from "framer-motion";
import { useState } from "react";
import { FaUniversity } from "react-icons/fa";

export default function Payment() {
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center font-roboto lg:py-10 bg-gray-100 p-6"
    >


      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Registration Fee <span className="text-red-600">Payment</span></h1>
        <p className="text-gray-700 font-semibold mt-2">Pay your registration fee securely and receive a receipt via <span className="text-red-600">WhatsApp</span></p>
      </div>

      {/* Payment Details Section */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-4xl justify-center">
        {/* Bank Details */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white shadow-2xl rounded-3xl p-6 w-full lg:w-1/2 text-center border border-gray-200"
        >
          <div className="flex justify-center mb-3">
            <FaUniversity className="text-red-600 text-4xl" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Bank Details</h2>

          <div className="text-center space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900 mr-2 text-justify">Account Name:</span> Doctors-Ideal Educational Advisors
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900 mr-2 text-justify">Bank Name:</span> IndusInd Bank Ltd
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900 mr-2 text-justify">Branch:</span> Jasola (New Delhi)
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900 mr-2 text-justify">Account Number:</span> 201000339462
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900 mr-2 text-justify">IFSC Code:</span> INDB0000389
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900 mr-2 text-justify">Account Type:</span> Current Account
            </p>
          </div>
        </motion.div>



        {/* QR Code Payment */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-xl rounded-3xl p-6 w-full lg:w-1/2 text-center border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-gray-800">Scan to Pay</h2>
          <div className="mt-4 w-40 h-40 mx-auto flex items-center justify-center rounded-lg overflow-hidden relative">
            {loading && (
              <img
                src="https://i.gifer.com/origin/da/da2834742a17d831921203f11ecd9b51_w200.gif"
                alt="Loading..."
                className="w-40 h-40"
              />
            )}
            <img
              src="https://www.themailboxstore.net/app/uploads/2022/01/no-qr.png"
              alt="QR Code"
              className={`w-full h-full object-contain transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"
                }`}
              onLoad={() => setLoading(false)}
            />
          </div>
          <h2 className="text-lg mt-6 font-semibold text-red-600">
            QR Not Available Right Now!
          </h2>
        </motion.div>
      </div>

      {/* WhatsApp Receipt Reminder */}
      <p className="text-gray-700 text-center mt-6">
        After payment, please send the receipt to our{" "}
        <span className="text-red-600 font-semibold">WhatsApp</span> number 👉🏻((
        <a
          href="https://wa.me/7428212236?text=Hi%2C%20this%20is%20my%20fee%20receipt."
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 font-semibold hover:underline cursor-pointer"
        >
          7669533991
        </a>
        ))👈🏻
      </p>

    </motion.div>
  );
}
