import { motion } from "framer-motion";

const Policy = () => {
  return (
    <div className="px-4 lg:px-24 mx-auto p-6 font-roboto bg-white text-justify rounded-lg my-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-6"
      >
        Refund <span className="text-red-600">Policy</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4"
      >
        At RREC (Reliable Russia Education Consultants), we are committed to 
        maintaining transparency and integrity in our services for students 
        aspiring to study MBBS in Russia. This refund policy defines the conditions 
        under which students may request a refund for payments made toward our 
        consultancy services. By availing of our services, you acknowledge and 
        accept the terms specified in this policy.
      </motion.p>

      {/* General Refund Terms */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-600">1. General Refund Terms</h2>
        <p className="mb-4">
          RREC upholds a strict no-refund policy once the admission process has 
          commenced. Payments made for counseling, application submission, document 
          processing, and related services are generally non-refundable. However, 
          in certain exceptional circumstances, refunds may be granted, as outlined below.
        </p>
      </motion.div>

      {/* Eligibility for Refund */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-600">2. Eligibility for Refund</h2>
        <p className="mb-4">
          Students may qualify for a partial or full refund under the following conditions:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>University rejection:</strong> If the student’s admission 
            application is declined by the university due to eligibility constraints 
            or other official reasons, a refund may be granted after deducting 
            applicable administrative charges.
          </li>
          <li>
            <strong>Visa denial:</strong> If a student’s visa application is refused 
            by the Russian Embassy, a refund request may be considered, subject to 
            the deduction of processing and documentation fees. The student must 
            provide an official rejection letter from the embassy.
          </li>
          <li>
            <strong>Service failure by RREC:</strong> If RREC is unable to deliver 
            the agreed-upon services due to internal reasons, the refund request 
            will be reviewed and processed accordingly.
          </li>
        </ul>
      </motion.div>

      {/* Non-Refundable Circumstances */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-600">3. Non-Refundable Circumstances</h2>
        <p className="mb-4">Refunds will not be issued in the following situations:</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>If the student voluntarily withdraws from the admission process after making a payment.</li>
          <li>If incorrect, incomplete, or falsified documents result in rejection by the university or visa authorities.</li>
          <li>If the student fails to comply with deadlines, guidelines, or procedures outlined by RREC or the university.</li>
          <li>If the student refuses an alternative university offer in case their preferred institution is unavailable.</li>
          <li>If the visa application is rejected due to personal errors, misconduct, or failure to provide necessary documents.</li>
          <li>If the student chooses not to travel to Russia after successfully securing admission and obtaining a visa.</li>
          <li>If the student is expelled from the university due to disciplinary misconduct, poor academic performance, or violation of institutional regulations.</li>
        </ul>
      </motion.div>

      {/* Refund Request Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-600">4. Refund Request Process</h2>
        <p className="mb-4">To initiate a refund request, students must follow these steps:</p>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li>Submit a formal refund request via email or registered post, clearly stating the reason for the request.</li>
          <li>Attach supporting documents, including payment receipts, admission rejection or visa denial letters, and any other relevant proof.</li>
          <li>The request will be evaluated by RREC's refund department, and students will receive a response within 15 working days.</li>
          <li>If the request is approved, the refund will be processed through the original payment method within 30 working days of approval.</li>
        </ol>
      </motion.div>

      {/* Deductions & Processing Charges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-600">5. Deductions & Processing Charges</h2>
        <p className="mb-4">
          All refunds are subject to deductions, which include administrative expenses, 
          service charges, and processing fees. The exact refundable amount will be 
          communicated upon approval of the refund request.
        </p>
      </motion.div>

      {/* Policy Updates & Modifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="text-xl font-semibold mt-6 mb-2 text-red-600">6. Policy Updates & Modifications</h2>
        <p className="mb-4">
          RREC reserves the right to alter, amend, or update this refund policy 
          without prior notice. Any modifications will be reflected on our official 
          website and communicated to relevant parties when necessary.
        </p>
      </motion.div>

      {/* Contact Info */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6"
      >
        For refund-related inquiries, students can reach out to us via{" "}
        <a href="mailto:contact@rrec.com.ru" className="text-blue-600 underline">
          contact@rrec.com.ru
        </a>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-6 font-semibold"
      >
        By utilizing our services, you confirm that you have read, understood, and 
        agreed to the terms outlined in this refund policy.
      </motion.p>
    </div>
  );
};

export default Policy;
