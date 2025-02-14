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
