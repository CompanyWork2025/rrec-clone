import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How to make a passport?",
    answer:
      "A student has to visit their states/cities' passport office or passport authorities website. And arrange documents as per requirements to process the passport application, if need any assistance student can consult with RREC Team at contact@rrecrussia.com."
  },
  {
    question: "How to select a good university and how to take admission in Russian universities?",
    answer:
      "For selective & most demandable universities students can visit our website or contact us for free guidance, as we are working with Russian Universities for 15 years and having a great experience to guide International students. Reliable Russian Educational Consultants is the name for a one-stop solution for Russian Medical, Technical & Federal Universities. From the RREC team, you can take direct admission without any subagents, because we are the direct admission partners of Top Russian Universities."
  },
  {
    question: "What is the Eligibility Criteria to get admission for pursuing MBBS in Russia?",
    answer:
      "As per MCI, the minimum qualification for Indian students to study MBBS in Russia is 50% in PCB in the 12th standard (General). In the case of SC/ST & others 40%. the minimum age should be 17 years. But some universities require ECB; 60-65% or above, and Some require 60 in CB only. So all mainly depends on the selective university by the student."
  },
  {
    question: "Do I have to clear the NEET exam before entering Russian Universities?",
    answer:
      "Yes, the NEET exam is mandatory for all Indian students who want to join Medical studies abroad or in India as well. For other countries students, there is no such exam mandatory."
  },
  {
    question: "Is there an entrance exam to get admission in Russian universities?",
    answer:
      "Yes, some universities require an entrance exam for admission. and some universities No. All admissions are strictly on a first come first serve basis."
  },
  {
    question: "What is the medium of teaching?",
    answer: "The medium of instruction is in English & Russian."
  },
  {
    question: "When does the academic year start in Russian Universities?",
    answer: "The academic year starts on 1st September."
  },
  {
    question: "What is the duration of courses in Russia?",
    answer:
      "Medical (MBBS): 6 years, BDS-5 years, Pharmacy-5 years, Preparatory courses: 8-10 months, Engineering 4 years, students can ask their questions at contact@rrecrussia.com."
  },
  {
    question: "Can a student come back to their native countries during the holidays?",
    answer:
      "Yes, students get vacations in the month of July & August every year, that time they can visit their native countries."
  },
  {
    question: "Can a student earn while studying?",
    answer: "No, a student cannot do a job while studying, because he/she has a student visa."
  },
  {
    question: "Where will the student live during their studies in Russia?",
    answer: "Students will live in government hostels provided by the University only."
  },
  {
    question: "What will be the average monthly expenses?",
    answer:
      "Nearly 80-100% is enough for one student except for Moscow. Mainly it depends on the student's lifestyle."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* Top Image Banner */}
      <div className="relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Russia_Wikivoyage_front_page_banner.jpg/1200px-Russia_Wikivoyage_front_page_banner.jpg"
          alt="About Russia"
          className="w-full h-48 lg:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center font-roboto text-center">
          <h1 className="text-white text-2xl lg:text-5xl font-roboto font-semibold">FAQ for Study in Russia</h1>
          <p className="text-white font-roboto text-lg lg:text-xl mt-2">
            Home <span className="mx-1 text-xl">&rarr;</span> FAQ for Study in Russia
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-24 font-roboto mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold mb-2 text-center">Student, who wants to study Medicine, Engineering, Law, Economics,</h2>
        <h2 className="text-2xl font-bold mb-6 text-center">
          What questions can arise before traveling to Russia?{" "}
          <span className="text-red-600">(FAQ for Study in Russia)</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl bg-gray-100 p-4 cursor-pointer transition-all hover:bg-gray-200 shadow-sm"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-blue-600" />
                ) : (
                  <Plus className="w-6 h-6 text-gray-500" />
                )}
              </div>

              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-gray-700 mt-3"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
