import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Add your language translations here (e.g., English, Russian, etc.)
const resources = {
  en: {
    translation: {
      "welcome": "Welcome",
      "language": "Language",
      "studyInRussia": "Study in Russia A Global Experience",
      "becomeDoctor": "Become A Doctor Study In Abroad",
      "medicalStudents": "Medical Students In Russia",
      "topUniversities": "Top Universities Of Russia",
      "breakingNews": "Breaking News",
      "readMore": "Read More",
      "admissionOpenFor2025": "Admission is open for 2025.",
      "bookYourSeatTodayWith": "Book your seat today with",
      "rrecTeam": "RREC Team,",
      "officialAdmissionPartner": "Official Admission Partner of Top Russian Medical Universities; RostSMU, UralSMU, CrimeaFU, VolSMU, KazanFU, KazanSMU, NWSMU, NoSMA, KurskSMU, PFUR, UNN Nizhny Novgorod. Direct Admission with Less Processing fees.",
      "contactUs": "Contact Us", // New translation
      "faq": "Frequently Asked Questions", // New translation
      "home": "Home",
      "aboutUs": "About Us",
      "aboutRussia": "About Russia", // Added translation
      "servicesForStudents": "Services for Students", // Added translation
      "universities": "Universities", // Added translation for 'Universities'
      "medicalUniversities": "Medical Universities", // Added translation for 'Medical Universities'
      "technicalUniversities": "Technical Universities", // Added translation for 'Technical Universities'
      "coursesInRussia": "Courses In Russia", // Added translation for 'Courses In Russia'
      "feeStructure": "Fee Structure 2025", // Added translation for Fee Structure 2025
      "mbbsBdsPharmacyFee": "Fee Structure For MBBS, BDS, Pharmacy", // Added translation for MBBS, BDS, Pharmacy Fee
      "technicalUniversitiesFee": "Fee Structure For Technical Universities", // Added translation for Technical Universities Fee
      "languageCoursesFee": "Fee Structure For Russian Language Courses", // Added translation for Language Courses Fee
      "mbaInEnglishFee": "MBA In English Medium - SfedU, Russia", // Added translation for MBA Fee
      "usefulInfo": "Useful Info", // Added translation for Useful Info
      "mbbsInRussia": "MBBS In Russia", // Added translation for MBBS in Russia
      "admissionProcedure": "Admission Procedure", // Added translation for Admission Procedure
      "preparatoryFaculty": "Preparatory Faculty", // Added translation for Preparatory Faculty
      "gallery": "Gallery", // Added translation for Gallery
      "photoGallery": "Photo Gallery", // Added translation for Photo Gallery
      "videoGallery": "Video Gallery", // Added translation for Video Gallery
      "resources": "Resources", // Added translation for Resources
      "blog": "Blog", // Added translation for Blog
      "neet": "NEET", // Added translation for NEET
      "faqs": "FAQ's", // Added translation for FAQ's
      "upcomingEvents": "Upcoming Events", // Added translation for Upcoming Events
      "faq": "FAQ", // Added translation for FAQ
      "contactUs": "Contact Us", // Added translation for Contact Us
    }
  },
  ru: {
    translation: {
      "welcome": "Добро пожаловать",
      "language": "Язык",
      "studyInRussia": "Учёба в России - мировой опыт",
      "breakingNews": "Новости",
      "becomeDoctor": "Станьте врачом, учитесь за рубежом",
      "medicalStudents": "Студенты медицины в России",
      "topUniversities": "Лучшие университеты России",
      "readMore": "Читать далее",
      "admissionOpenFor2025": "Приём заявок открыт на 2025 год.",
      "bookYourSeatTodayWith": "Забронируйте своё место сегодня с",
      "rrecTeam": "Команда RREC,",
      "officialAdmissionPartner": "Официальный партнёр по приёму студентов в ведущие российские медицинские университеты; РостГМУ, УралГМУ, КрымФУ, ВолГМУ, КазанГМУ, КазанФУ, НГМУ, НОСМА, КурскГМУ, ПФУР, ННГУ им. Лобачевского. Прямой приём с минимальными платами за обработку.",
      "contactUs": "Свяжитесь с нами", // New translation
      "faq": "Часто задаваемые вопросы", // New translation
      "home": "Главная",
      "aboutUs": "О нас",
      "aboutRussia": "О России", // Added translation
      "servicesForStudents": "Услуги для студентов", // Added translation
      "universities": "Университеты", // Added translation for 'Universities' in Russian
      "medicalUniversities": "Медицинские университеты", // Added translation for 'Medical Universities' in Russian
      "technicalUniversities": "Технические университеты", // Added translation for 'Technical Universities' in Russian
      "coursesInRussia": "Курсы в России", // Added translation for 'Courses In Russia' in Russian
      "mbbsBdsPharmacyFee": "Структура платы для MBBS, BDS, Фармацевтика", // Russian translation for MBBS, BDS, Pharmacy Fee
      "technicalUniversitiesFee": "Структура платы для Технических Университетов", // Russian translation for Technical Universities Fee
      "languageCoursesFee": "Структура платы для курсов русского языка", // Russian translation for Language Courses Fee
      "mbaInEnglishFee": "МВА на английском языке - СФедУ, Россия", // Russian translation for MBA Fee
      "usefulInfo": "информация", // Russian translation for Useful Info
      "mbbsInRussia": "МББС в России", // Russian translation for MBBS in Russia
      "admissionProcedure": "Процедура приёма", // Russian translation for Admission Procedure
      "preparatoryFaculty": "Подготовительный факультет", // Russian translation for Preparatory Faculty
      "gallery": "Галерея", // Russian translation for Gallery
      "photoGallery": "Фото Галерея", // Russian translation for Photo Gallery
      "videoGallery": "Видео Галерея", // Russian translation for Video Gallery
      "resources": "Ресурсы", // Russian translation for Resources
      "blog": "Блог", // Russian translation for Blog
      "neet": "NEET", // Russian translation for NEET
      "faqs": "Часто задаваемые вопросы", // Russian translation for FAQ's
      "upcomingEvents": "Предстоящие события", // Russian translation for Upcoming Events
      "faq": "Вопросы", // Shortened Russian translation for FAQ
      "contactUs": "Контакты", // Shortened Russian translation for Contact Us
    }
  },

  // Add more languages like Spanish, French, etc.
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
