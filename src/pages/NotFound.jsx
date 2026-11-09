import { Link } from "react-router-dom";
import { useLanguage } from "../common/language";
import { useDocumentTitle } from "../common/useDocumentTitle";

const copy = {
  EN: {
    eyebrow: "Error 404",
    title: "This page has moved, or never existed.",
    body: "The story you were looking for may have been retired from this issue.",
    home: "Return home",
    magazine: "Open the magazine",
  },
  FR: {
    eyebrow: "Erreur 404",
    title: "Cette page a été déplacée, ou n'a jamais existé.",
    body: "L'article que vous cherchez n'est peut-être plus dans ce numéro.",
    home: "Retour à l'accueil",
    magazine: "Voir le magazine",
  },
};

const NotFound = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  useDocumentTitle(t.eyebrow);

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <p className="eyebrow">{t.eyebrow}</p>

      <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-[1.02] sm:text-7xl">
        {t.title}
      </h1>

      <p className="mt-6 max-w-md font-sans text-sm leading-7 text-stone">
        {t.body}
      </p>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Link to="/edito" className="btn-solid">
          {t.home}
        </Link>

        <Link to="/magazine" className="btn-line">
          {t.magazine}
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
