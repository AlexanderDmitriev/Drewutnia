import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import pl from '../locales/pl/translation.json';
//import en from '../locales/en/translation.json';
//import ua from '../locales/ua/translation.json';

const resources = {
  ua: { translation: pl },
  //en: { translation: en },
  //ua: { translation: ua },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pl',
    supportedLngs: ['pl', 'en', 'ua'],
    debug: false,
    detection: {
      order: ['cookie', 'localStorage'],
      caches: ['cookie', 'localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });