import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import ko from './locales/ko';
import jp from './locales/jp';

i18n.use(initReactI18next).init(
  {
    resources: {
      ko: ko,
      en: en,
      jp: jp,
    },
    lng: 'ko',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  },
  function (err) {
    if (err) console.error(err);
  }
);

export default i18n;
