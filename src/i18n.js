import i18n from 'i18next';
import detector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";
import CVeng from './img/CVeng.pdf'
import CVnl from './img/CVnl.pdf'

i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    resources: {
      en: {
        translation: {
          "greeting": "Hello, I'm",
          "front-end-dev": "Front-end Developer",
          "lets-talk": "Let's Talk",
          "scroll-down": "Scroll Down",
          "get-to-know": "Get To Know",
          "about-me": "About Me",
          "experience": "Experience",
          "9-tech": "10+ technologies",
          "education": "Education",
          "pursuing": "Pursuing A Degree At Thomas More",
          "projects": "Projects",
          "12": "14+ Completed Projects",
          "about-me-text": "My name is Felix Van Obbergen and I am a front-end developer. I have a strong passion for front-end development and have gained extensive experience through practical projects. Check out some of my most relevant projects in the portfolio section to see the websites and web apps that I have built.",
          "what-skills": "What Skills I Have",
          "my-experience": "My Experience",
          "front-end": "Front-end Development",
          "back-end": "Back-end Development",
          "my-recent": "My Recent Work",
          "dessert": "Dessert Recepy Website",
          "practice": "Portfolio Site",
          "weather": "Weather App",
          "study": "Study Tracker",
          "get-in-touch": "Get In Touch",
          "contact-me": "Contact Me",
          "send": "Send a message",
          "send-message": "Send Message",
          "your-full-name": "Your Full Name",
          "your-email": "Your Email",
          "your-message": "Your Message",
          "home": "Home",
          "about": "About",
          "exp": "Experience",
          "cv": CVeng
        }
      },
      nl: {
        translation: {
          "greeting": "Hallo, Ik ben",
          "front-end-dev": "Front-end Ontwikkelaar",
          "lets-talk": "Contacteer Me",
          "scroll-down": "Scroll",
          "get-to-know": "Leer Meer",
          "about-me": "Over Mij",
          "experience": "Ervaring",
          "9-tech": "10+ technologiën",
          "education": "Educatie",
          "pursuing": "Hogeschoolstudent Aan Thomas More",
          "projects": "Projecten",
          "12": "14+ Afgemaakte Projecten",
          "about-me-text": "Mijn naam is Felix Van Obbergen en ik ben een front-end ontwikkelaar. Ik heb een sterke passie voor front-end ontwikkeling en heb uitgebreide ervaring opgedaan door middel van praktische projecten. Bekijk enkele van mijn meest relevante projecten in de portfolio sectie om de websites en web-apps te zien die ik heb gebouwd.",
          "what-skills": "Welke Vaardigheden Ik Bezit",
          "my-experience": "Mijn Ervaring",
          "front-end": "Front-end Ontwikkeling",
          "back-end": "Back-end Ontwikkeling",
          "my-recent": "Mijn Recente Werk",
          "dessert": "Recepten Website",
          "practice": "Portfolio Site",
          "weather": "Weer App",
          "study": "Studiebelaster",
          "get-in-touch": "Neem Contact Op",
          "contact-me": "Contacteer Mij",
          "send": "Stuur een bericht",
          "send-message": 'Stuur Bericht',
          "your-full-name": "Volledige Naam",
          "your-email": "Email",
          "your-message": "Uw Bericht",
          "home": "Startpagina",
          "about": "Over Mij",
          "exp": "Ervaring",
          "cv": CVnl
        }
      }
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

export default i18n;