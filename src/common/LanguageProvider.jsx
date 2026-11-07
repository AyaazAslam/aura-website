import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./language";

const STORAGE_KEY = "insolite-lang";

/**
 * Reads the saved language.
 * Default is FR so first-time visitors see French copy with FR underlined
 * (Paris magazine). Saved preference still wins on return visits.
 */
const readSavedLang = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    return saved === "FR" || saved === "EN" ? saved : "FR";
  } catch {
    return "FR";
  }
};

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(readSavedLang);

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage is unavailable, so the choice lasts only for this visit.
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
