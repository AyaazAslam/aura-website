import { createContext, useContext } from "react";

// Default context mirrors the live default (FR) used by LanguageProvider.
export const LanguageContext = createContext({
  lang: "FR",
  setLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);
