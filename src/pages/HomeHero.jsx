import { ArrowRight } from "lucide-react";
import { useLanguage } from "../common/language";
import { StoryImage } from "../common/ui";

const copy = {
  EN: {
    eyebrow: "Style beyond trends",
    lead: "Fashion is a",
    title: "MOOD.",
    body: "Trendy looks, funny moments, and unfiltered style — because fashion isn’t just what you wear, it’s how you feel.",
    cta: "Explore the edit",
    slogan: "Be bold / Be you / Be Insolite",
    caption: "The Main Character",
    mainAlt: "The main character, a fashion editorial portrait",
    sideAlt: "Funny outfits, a playful street look",
  },
  FR: {
    eyebrow: "Le style au-delà des tendances",
    lead: "La mode est une",
    title: "HUMEUR.",
    body: "Looks tendance, moments drôles et style sans filtre — parce que la mode ne se résume pas à ce que l’on porte, c’est la façon dont on se sent.",
    cta: "Découvrir la sélection",
    slogan: "Soyez audacieux / Soyez vous / Soyez Insolite",
    caption: "Le personnage principal",
    mainAlt: "Le personnage principal, portrait éditorial de mode",
    sideAlt: "Tenues amusantes, look de rue espiègle",
  },
};

const HomeHero = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-end gap-14 px-5 pt-12 pb-16 sm:px-8 md:pt-16 md:pb-24 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:pt-20">
        {/*
          Copy block.
          HUMEUR. / MOOD. stays a stylistic concept but is capped so it does not
          cannibalize the rest of the first screen (hierarchy fix).
          Eyebrow → lead → title gaps are tightened for a closer subtitle rhythm.
        */}
        <div className="order-2 lg:order-1 lg:col-span-5 lg:pb-10">
          <p className="eyebrow motion-safe:animate-fade-up">{t.eyebrow}</p>

          <p className="mt-4 font-serif text-3xl italic motion-safe:animate-fade-up sm:text-4xl">
            {t.lead}
          </p>

          {/* Was clamp(5rem, 15vw, 11.5rem) — reduced so the word stays expressive, not dominant */}
          <h1 className="mt-1 font-serif text-[clamp(3.25rem,10vw,7.5rem)] leading-[0.85] tracking-[-0.03em] motion-safe:animate-fade-up">
            <span className="sr-only">{t.lead} </span>
            <span className="italic">{t.title}</span>
          </h1>

          {/* Consistent space under body copy before the CTA / next visual */}
          <p className="mt-8 max-w-sm font-sans text-base leading-8 text-stone motion-safe:animate-fade-up">
            {t.body}
          </p>

          <a href="#latest" className="btn-solid mt-8 motion-safe:animate-fade-up">
            {t.cta}
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>

        {/* Imagery */}
        <div className="relative order-1 lg:order-2 lg:col-span-7">
          <figure className="relative ml-auto w-[88%] sm:w-[80%]">
            <div className="aspect-[4/5] overflow-hidden bg-linen">
              <StoryImage
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1400&q=90"
                alt={t.mainAlt}
                eager
                className="h-full w-full object-cover img-tone"
              />
            </div>

            <figcaption className="absolute left-4 top-4 bg-ivory/95 px-4 py-3 sm:left-6 sm:top-6 sm:px-5 sm:py-4">
              <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase">
                {t.caption}
              </span>
            </figcaption>
          </figure>

          <div className="absolute -bottom-10 left-0 w-[42%] border-[8px] border-ivory bg-linen sm:-left-10 sm:w-[36%] lg:-left-14">
            <div className="aspect-[3/4] overflow-hidden">
              <StoryImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                alt={t.sideAlt}
                className="h-full w-full object-cover img-tone"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer line */}
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 border-t border-ink/15 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="eyebrow text-ink/70">Insolite Magazine x Khim Asriel</p>

        <p className="eyebrow text-ink/70">{t.slogan}</p>
      </div>
    </section>
  );
};

export default HomeHero;
