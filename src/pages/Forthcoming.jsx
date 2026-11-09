import { Link } from "react-router-dom";
import { useLanguage } from "../common/language";
import { useDocumentTitle } from "../common/useDocumentTitle";

const copy = {
  EN: {
    eyebrow: "Forthcoming",
    body: "This section is being prepared for an upcoming issue.",
    back: "Back to the magazine",
  },
  FR: {
    eyebrow: "Bientôt",
    body: "Cette section est en préparation pour un prochain numéro.",
    back: "Retour au magazine",
  },
};

const Forthcoming = ({ page }) => {
  const { lang } = useLanguage();
  const t = copy[lang];

  useDocumentTitle(page.title[lang]);

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <p className="eyebrow">{t.eyebrow}</p>

      <h1 className="mt-6 font-serif text-6xl leading-none sm:text-8xl">
        {page.title[lang]}
      </h1>

      <div className="mt-10 h-px w-16 bg-ink" />

      <p className="mt-8 max-w-md font-sans text-sm leading-7 text-stone">
        {t.body}
      </p>

      <Link to="/" className="link-line mt-12">
        {t.back}
      </Link>
    </main>
  );
};

export default Forthcoming;
