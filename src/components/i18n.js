import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import dict_ru from "../assets/locale/ru.json";
import dict_en from "../assets/locale/en.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
          en: {
            translations:dict_en,
          },
          ru: {
              translations:dict_ru,
            },
          },
        lng: "ru",
        fallbackLng: 'en',
        ns: ['translations'],
        defaultNS: 'translations',
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });


export default i18n;