import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const translationKey = "i18nextLng";

export default class TranslationService {
  translate(text: string, ...args: any[]) {
    return i18next.t(text, args);
  }

  async updateLang(lang: string) {
    return i18next.changeLanguage(lang);
  }

  async init() {
    return i18next
      .use(Backend)
      .use(initReactI18next)
      .use(LanguageDetector)
      .init({
        lng: localStorage.getItem(translationKey) || "en",
        fallbackLng: "en",
        returnEmptyString: false,
        debug: false,
        ns: "default",
        keySeparator: " ",
        backend: {
          loadPath: "/locale/{{lng}}.json",
        },
        lowerCaseLng: true,
        interpolation: {
          escapeValue: false,
        },
        react: {
          useSuspense: false,
        },
        fallbackNS: "default",
      });
  }
}
