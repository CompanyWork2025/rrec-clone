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
  es: {
    translation: {
      "welcome": "Bienvenido",
      "language": "Idioma",
      "studyInRussia": "Estudia en Rusia Una Experiencia Global",
      "becomeDoctor": "Conviértete en médico, estudia en el extranjero",
      "medicalStudents": "Estudiantes de Medicina en Rusia",
      "topUniversities": "Principales Universidades de Rusia",
      "breakingNews": "Últimas Noticias",
      "readMore": "Leer Más",
      "admissionOpenFor2025": "La admisión está abierta para 2025.",
      "bookYourSeatTodayWith": "Reserva tu lugar hoy con",
      "rrecTeam": "Equipo RREC,",
      "officialAdmissionPartner": "Socio Oficial de Admisión de las Mejores Universidades Médicas Rusas; RostSMU, UralSMU, CrimeaFU, VolSMU, KazanFU, KazanSMU, NWSMU, NoSMA, KurskSMU, PFUR, UNN Nizhny Novgorod. Admisión Directa con Menos Tarifas de Procesamiento.",
      "contactUs": "Contáctanos",
      "faq": "Preguntas Frecuentes",
      "home": "Inicio",
      "aboutUs": "Nosotros",
      "aboutRussia": "Sobre Rusia",
      "servicesForStudents": "Servicios para Estudiantes",
      "universities": "Universidades",
      "medicalUniversities": "Universidades Médicas",
      "technicalUniversities": "Universidades Técnicas",
      "coursesInRussia": "Cursos en Rusia",
      "feeStructure": "Tarifas 2025",
      "mbbsBdsPharmacyFee": "Estructura de Tarifas para MBBS, BDS, Farmacia",
      "technicalUniversitiesFee": "Estructura de Tarifas para Universidades Técnicas",
      "languageCoursesFee": "Estructura de Tarifas para Cursos de Idiomas Rusos",
      "mbaInEnglishFee": "MBA en Inglés - SfedU, Rusia",
      "usefulInfo": "Información Útil",
      "mbbsInRussia": "MBBS en Rusia",
      "admissionProcedure": "Procedimiento de Admisión",
      "preparatoryFaculty": "Facultad Preparatoria",
      "gallery": "Galería",
      "photoGallery": "Galería de Fotos",
      "videoGallery": "Galería de Videos",
      "resources": "Recursos",
      "blog": "Blog",
      "neet": "NEET",
      "faqs": "Preguntas Frecuentes",
      "upcomingEvents": "Próximos Eventos",
      "faq": "FAQ",
      "contactUs": "Contáctenos",
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue",
      "language": "Langue",
      "studyInRussia": "Étudier en Russie Une Expérience Globale",
      "becomeDoctor": "Devenez Médecin Étudiez à l'étranger",
      "medicalStudents": "Étudiants en Médecine en Russie",
      "topUniversities": "Meilleures Universités de Russie",
      "breakingNews": "Dernières Nouvelles",
      "readMore": "Lire Plus",
      "admissionOpenFor2025": "L'admission est ouverte pour 2025.",
      "bookYourSeatTodayWith": "Réservez votre place aujourd'hui avec",
      "rrecTeam": "Équipe RREC,",
      "officialAdmissionPartner": "Partenaire Officiel d'Admission des Meilleures Universités Médicales Russes; RostSMU, UralSMU, CrimeaFU, VolSMU, KazanFU, KazanSMU, NWSMU, NoSMA, KurskSMU, PFUR, UNN Nizhny Novgorod. Admission directe avec moins de frais de traitement.",
      "contactUs": "Contactez-nous",
      "faq": "Questions Fréquemment Posées",
      "home": "Accueil",
      "aboutUs": "À Propos",
      "aboutRussia": "À Propos de la Russie",
      "servicesForStudents": "Services pour Étudiants",
      "universities": "Universités",
      "medicalUniversities": "Universités Médicales",
      "technicalUniversities": "Universités Techniques",
      "coursesInRussia": "Cours en Russie",
    "feeStructure": "Tarifs 2025",
      "mbbsBdsPharmacyFee": "Structure des Frais pour MBBS, BDS, Pharmacie",
      "technicalUniversitiesFee": "Structure des Frais pour Universités Techniques",
      "languageCoursesFee": "Structure des Frais pour Cours de Langue Russe",
      "mbaInEnglishFee": "MBA en Anglais - SfedU, Russie",
      "usefulInfo": "Infos Utiles",
      "mbbsInRussia": "MBBS en Russie",
      "admissionProcedure": "Procédure d'Admission",
      "preparatoryFaculty": "Faculté Préparatoire",
      "gallery": "Galerie",
      "photoGallery": "Galerie Photo",
      "videoGallery": "Galerie Vidéo",
      "resources": "Ressources",
      "blog": "Blog",
      "neet": "NEET",
      "faqs": "FAQ's",
      "upcomingEvents": "Événements à Venir",
      "faq": "FAQ",
      "contactUs": "Contactez-nous",
    }
  },
  zh: {
    translation: {
      "welcome": "欢迎",
      "language": "语言",
      "studyInRussia": "在俄罗斯学习全球体验",
      "becomeDoctor": "成为医生，出国学习",
      "medicalStudents": "俄罗斯的医学生",
      "topUniversities": "俄罗斯顶尖大学",
      "breakingNews": "最新消息",
      "readMore": "阅读更多",
      "admissionOpenFor2025": "2025年入学已开放。",
      "bookYourSeatTodayWith": "立即预定座位",
      "rrecTeam": "RREC团队",
      "officialAdmissionPartner": "俄罗斯顶级医学大学的官方录取合作伙伴；RostSMU, UralSMU, CrimeaFU, VolSMU, KazanFU, KazanSMU, NWSMU, NoSMA, KurskSMU, PFUR, UNN Nizhny Novgorod。直接入学，低处理费。",
      "contactUs": "联系我们",
      "faq": "常见问题",
      "home": "首页",
      "aboutUs": "关于我们",
      "aboutRussia": "关于俄罗斯",
      "servicesForStudents": "学生服务",
      "universities": "大学",
      "medicalUniversities": "医学大学",
      "technicalUniversities": "技术大学",
      "coursesInRussia": "俄罗斯课程",
      "feeStructure": "2025年收费结构",
      "mbbsBdsPharmacyFee": "MBBS, BDS, 药学的收费结构",
      "technicalUniversitiesFee": "技术大学收费结构",
      "languageCoursesFee": "俄语课程收费结构",
      "mbaInEnglishFee": "英语授课MBA - SfedU，俄罗斯",
      "usefulInfo": "有用信息",
      "mbbsInRussia": "俄罗斯的MBBS",
      "admissionProcedure": "入学程序",
      "preparatoryFaculty": "预科",
      "gallery": "图库",
      "photoGallery": "照片画廊",
      "videoGallery": "视频画廊",
      "resources": "资源",
      "blog": "博客",
      "neet": "NEET",
      "faqs": "常见问题",
      "upcomingEvents": "即将举行的活动",
      "faq": "常见问题",
      "contactUs": "联系我们",
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
  hi: {
    translation: {
      "welcome": "स्वागत है",
      "language": "भाषा",
      "studyInRussia": "रूस में अध्ययन एक वैश्विक अनुभव",
      "becomeDoctor": "डॉक्टर बनें, विदेश में अध्ययन करें",
      "medicalStudents": "रूस में चिकित्सा छात्र",
      "topUniversities": "रूस के शीर्ष विश्वविद्यालय",
      "breakingNews": "ताज़ा खबर",
      "readMore": "और पढ़ें",
      "admissionOpenFor2025": "2025 के लिए प्रवेश खुला है।",
      "bookYourSeatTodayWith": "आज ही अपनी सीट बुक करें",
      "rrecTeam": "RREC टीम,",
      "officialAdmissionPartner": "रूस के शीर्ष चिकित्सा विश्वविद्यालयों का आधिकारिक प्रवेश साझेदार; RostSMU, UralSMU, CrimeaFU, VolSMU, KazanFU, KazanSMU, NWSMU, NoSMA, KurskSMU, PFUR, UNN Nizhny Novgorod। कम प्रसंस्करण शुल्क के साथ सीधे प्रवेश।",
      "contactUs": "संपर्क करें",
      "faq": "अक्सर पूछे जाने वाले प्रश्न",
      "home": "घर",
      "aboutUs": "हमारे बारे में",
      "aboutRussia": "रूस के बारे में",
      "servicesForStudents": "छात्रों के लिए सेवाएं",
      "universities": "विश्वविद्यालय",
      "medicalUniversities": "चिकित्सा विश्वविद्यालय",
      "technicalUniversities": "प्रौद्योगिकी विश्वविद्यालय",
      "coursesInRussia": "रूस में पाठ्यक्रम",
      "feeStructure": "2025 के लिए शुल्क संरचना",
      "mbbsBdsPharmacyFee": "MBBS, BDS, फार्मेसी के लिए शुल्क संरचना",
      "technicalUniversitiesFee": "प्रौद्योगिकी विश्वविद्यालयों के लिए शुल्क संरचना",
      "languageCoursesFee": "रूसियन भाषा पाठ्यक्रम शुल्क संरचना",
      "mbaInEnglishFee": "MBA अंग्रेजी माध्यम में - SfedU, रूस",
      "usefulInfo": "उपयोगी जानकारी",
      "mbbsInRussia": "रूस में MBBS",
      "admissionProcedure": "प्रवेश प्रक्रिया",
      "preparatoryFaculty": "प्रारंभिक संकाय",
      "gallery": "गैलरी",
      "photoGallery": "फोटो गैलरी",
      "videoGallery": "वीडियो गैलरी",
      "resources": "संसाधन",
      "blog": "ब्लॉग",
      "neet": "NEET",
      "faqs": "FAQ's",
      "upcomingEvents": "आगामी घटनाएँ",
      "faq": "FAQ",
      "contactUs": "संपर्क करें",
    }
  }
  

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
