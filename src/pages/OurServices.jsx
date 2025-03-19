import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const services = [
  {
    title: "Counseling and Guidance",
    content:
      "Choosing the right path for medical education abroad requires proper counseling and informed decision-making. At RREC, we offer personalized guidance to help students navigate their options effectively. Our expert advisors take the time to understand each student’s academic background, career goals, and financial situation to recommend the best-fit university. We provide comprehensive insights into leading medical universities in Russia, covering aspects such as curriculum, accreditation, tuition fees, and student life. Beyond university selection, we also prepare students for the academic and cultural experience in Russia, ensuring they are well-informed before making their decision. Our structured and transparent counseling approach helps students not only meet the required admission criteria but also gain confidence in their journey toward becoming a doctor. By offering step-by-step guidance, we make the transition to studying MBBS abroad seamless and stress-free.",
  },
  {
    title: "Complete Admission Assistance",
    content:
      "Going through the MBBS admission process in Russia can be very challenging and complicated without proper guidance. For that reason, the adept consultant at RREC provides comprehensive assistance to ensure a seamless experience. Our dedicated team offers step-by-step guidance, from shortlisting the most suitable university to securing admission successfully. We help students with application preparation, document verification, and obtaining the official admission letter from the university. Additionally, our experts assist in visa application procedures, travel planning, and pre-departure readiness, making the transition effortless. Through our structured and student-focused approach, we simplify the entire process, ensuring that aspiring doctors can embark on their medical education in Russia without stress or difficulties.",
  },
  {
    title: "Pre-departure Instruction",
    content:
      "Starting your MBBS journey in Russia is an exciting milestone, and at RREC, we ensure you are well-prepared for this transition. Our pre-departure assistance is designed to help students adjust smoothly to their new academic and cultural surroundings. We offer comprehensive guidance on travel logistics, university enrollment, housing arrangements, adapting to the climate, and essential documents required for a hassle-free experience. Additionally, our team provides valuable insights into Russian culture, academic expectations, and practical survival strategies, ensuring students feel confident and prepared. With our expert support, you can begin your medical education journey with ease, equipped with all the necessary information to settle comfortably and focus on your studies.",
  },
  {
    title: "NEXT/FMGE Preparation Support",
    content:
      "At RREC, we provide comprehensive support to help students prepare for these crucial exams like NEXT/FMGE while pursuing their studies in Russia. Our assistance includes expert-curated study materials, strategic preparation plans, and valuable insights to keep students ahead in their learning. Several of our partner universities also incorporate NEXT/FMGE-focused coaching into their curriculum, ensuring students receive targeted training alongside their medical education. Through our continuous guidance and extensive resources, we help students develop a strong conceptual foundation, improving their chances of passing the exam and fulfilling their dream of becoming a licensed doctor in India.",
  },
  {
    title: "Visa Assistance",
    content:
      "RREC offers complete visa assistance, ensuring students meet all requirements without complications. Our team facilitates the process by obtaining the university-issued invitation letter, assisting with medical fitness certification, guiding visa form submissions, and ensuring adherence to the latest visa policies. We maintain constant coordination with the embassy, monitoring application progress and providing real-time updates to students. With our expert guidance and streamlined approach, students can successfully obtain their Russian student visa, allowing them to focus on their academic aspirations without unnecessary stress.",
  },
  {
    title: "Education Loan Assistance",
    content:
      "Financing an MBBS education abroad can be a frequent concern for many students. To ease this burden, we offer detailed guidance on education loans, helping students access the best financial aid options available. For students requiring additional financial assistance, we provide step-by-step support in obtaining education loans from both public and private banks. From understanding eligibility criteria to handling documentation and the loan application process, we ensure a smooth and stress-free experience in securing financial support for medical studies.",
  },
  {
    title: "Personal and Education Documents’ Notarization",
    content:
      "Notarization and attestation of academic and personal documents are critical steps in securing MBBS admission to Russian universities. At RREC, we provide comprehensive support to ensure students meet all legal and institutional requirements for a smooth admission process. Our team assists students in verifying and notarizing essential documents, including educational certificates, birth records, passports, and other required paperwork. Additionally, we facilitate official attestation from relevant authorities such as the Ministry of External Affairs and the Russian Embassy, ensuring compliance with university and visa regulations.",
  },
  {
    title: "Currency Exchange Assistance",
    content:
      "At RREC, we assist students with hassle-free foreign exchange services to ensure a smooth financial transition while studying MBBS in Russia. We help students obtain the best exchange rates, guide them on currency regulations, and facilitate secure transactions. Our team also assists in setting up international debit cards, forex travel cards, and bank accounts, enabling students to manage their finances efficiently and securely while abroad.",
  },
  {
    title: "Ticket Booking and Travel Arrangement",
    content:
      "At RREC, we provide seamless ticket booking and travel arrangement services to ensure a hassle-free journey for students traveling to Russia for their MBBS studies. Our team helps students book affordable flights, choose optimal travel routes, and coordinate group travel for a more convenient experience. Additionally, we offer guidance on baggage policies, airport procedures, and essential travel documents. With our dedicated support, students can embark on their MBBS journey with confidence, knowing that all travel-related arrangements have been taken care of efficiently.",
  },
  {
    title: "RREC On-arrival Assistance",
    content:
      "We strive to make every student's arrival in Russia as seamless as possible. Our on-arrival support services include airport pickup by university officials, arranging transport to the hostel or university, and assisting with accommodation allocation. Additionally, we provide guidance on university enrollment, mandatory medical examinations, and local documentation requirements, ensuring students meet all formalities smoothly. Our team also helps in setting up essential services such as SIM cards, bank accounts, and an orientation program to help students settle into their new surroundings. With our dedicated assistance, students can transition comfortably into their academic journey, feeling supported and prepared to begin their MBBS studies in Russia without any hassle.",
  },
];


export default function OurServices() {
  return (
    <div className="font-roboto lg:px-24 px-4 py-10">


      <motion.h1
        className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our <span className="text-red-600">Services</span>
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 text-justify mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        At RREC, we are committed to guiding students through every step of the admission process for top medical universities in Russia. Our goal is to make the journey seamless for aspiring doctors by offering expert advice, transparent processes, and complete assistance. We help students identify the best university based on their preferences and eligibility while also managing documentation, visa applications, and travel coordination to ensure a smooth transition. Our support doesn’t end with admission—our team remains available to assist students after their arrival in Russia, helping them settle comfortably into their academic and living environment. With a strong focus on student success and a dedication to excellence, we strive to make studying medicine abroad a well-organized and enriching experience.
      </motion.p>

      <motion.h1
        className="text-2xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The List of Services offered by <span className="text-red-600">RREC</span>
      </motion.h1>
      <motion.h2
        className="text-xl font-bold text-center text-red-600 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Appropriate University Selection
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 text-justify mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Selecting the right university is a vital decision in every student’s MBBS journey, and at RREC, we are dedicated to helping aspirants find the ideal institution for their medical studies in Russia. With a wide range of NMC and WHO-recognized universities, the selection process can seem complex, but our expert assistance makes it simple and efficient.
      </motion.p>
      <motion.p
        className="text-lg text-gray-700 text-justify mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        To guide students toward the best choice, we evaluate crucial aspects such as academic records, financial budget, curriculum structure, university reputation, faculty qualifications, and campus facilities. Our personalized counseling approach ensures that students secure admission in a university that aligns with their aspirations, offering top-quality education, hands-on clinical experience, and global accreditation for a promising medical career.
      </motion.p>
      <div className="space-y-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white shadow-lg rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h2 className="text-xl lg:text-2xl font-semibold text-red-600 mb-3">{service.title}</h2>
            <p className="text-gray-700 text-justify">{service.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
