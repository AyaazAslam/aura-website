import { useLanguage } from "../common/language";

// Text-only editor's note. The copy is placeholder text ("Blablabla") until the
// client sends the final wording. Change `copy` here to update the section.
const copy = {
  EN: {
    label: "Edito",
    headline: "Blablabla",
    body: "Blablabla blablabla blablabla. Blablabla blablabla, blablabla blablabla blablabla.",
    byline: "X Khim Asriel",
  },
  FR: {
    label: "Edito",
    headline: "Blablabla",
    body: "Blablabla blablabla blablabla. Blablabla blablabla, blablabla blablabla blablabla.",
    byline: "X Khim Asriel",
  },
};

const HomeEdito = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section className="bg-ivory" aria-labelledby="edito-title">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 md:py-28 lg:px-12">
        <p className="eyebrow text-stone">{t.label}</p>

        <h2
          id="edito-title"
          className="mt-6 font-serif text-5xl italic leading-[1.02] sm:text-6xl"
        >
          {t.headline}
        </h2>

        <div className="mx-auto mt-8 h-px w-16 bg-ink" />

        <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-8 text-stone">
          {t.body}
        </p>

        <p className="mt-10 font-serif text-xl italic sm:text-2xl">{t.byline}</p>
      </div>
    </section>
  );
};

export default HomeEdito;
