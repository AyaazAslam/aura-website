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

/**
 * Home hero.
 * Mobile matches the approved phone reference: padded (not full-bleed) portrait,
 * then eyebrow → lead → HUMEUR → body in the same content column.
 * lg+: original two-column editorial layout with floating inset.
 */
const HomeHero = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-end gap-8 pb-12 sm:gap-14 sm:pb-16 md:pb-24 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:pt-20">
        {/* Copy — sits under the portrait on mobile, left column on desktop */}
        <div className="order-2 px-5 sm:px-8 lg:order-1 lg:col-span-5 lg:px-0 lg:pb-10">
          <p className="eyebrow motion-safe:animate-fade-up">{t.eyebrow}</p>

          <p className="mt-4 font-serif text-[1.65rem] italic motion-safe:animate-fade-up sm:text-4xl">
            {t.lead}
          </p>

          <h1 className="mt-1 font-serif text-[clamp(2.75rem,13vw,7.5rem)] leading-[0.85] tracking-[-0.03em] motion-safe:animate-fade-up">
            <span className="sr-only">{t.lead} </span>
            <span className="italic">{t.title}</span>
          </h1>

          <p className="mt-6 max-w-sm font-sans text-[15px] leading-7 text-stone motion-safe:animate-fade-up sm:mt-8 sm:text-base sm:leading-8">
            {t.body}
          </p>

          <a href="#latest" className="btn-solid mt-7 motion-safe:animate-fade-up sm:mt-8">
            {t.cta}
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>

        {/*
          Mobile: narrow centered portrait (width kam, natural height) like Edito.
          sm+: wider inset frame; lg+: floating side image returns.
        */}
        <div className="relative order-1 px-5 pt-6 sm:px-8 lg:order-2 lg:col-span-7 lg:px-0 lg:pt-0">
          <figure className="relative mx-auto w-[55%] max-w-[250px] sm:ml-auto sm:mr-0 sm:w-[88%] sm:max-w-none md:w-[80%]">
            <div className="overflow-hidden bg-linen sm:aspect-[4/5]">
              <StoryImage
                src="/static-men-image/men.jpeg"
                alt={t.mainAlt}
                eager
                className="h-auto w-full object-cover object-center img-tone sm:h-full"
              />
            </div>

            <figcaption className="absolute left-2 top-2 bg-ivory/95 px-2.5 py-1.5 sm:left-6 sm:top-6 sm:px-5 sm:py-4">
              <span className="font-sans text-[8px] font-medium tracking-[0.18em] uppercase sm:text-[10px] sm:tracking-[0.22em]">
                {t.caption}
              </span>
            </figcaption>
          </figure>

          <div className="absolute -bottom-10 left-0 hidden w-[42%] border-[8px] border-ivory bg-linen sm:block md:-left-10 md:w-[36%] lg:-left-14">
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

      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 border-t border-ink/15 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="eyebrow text-ink/70">Insolite Magazine x Khim Asriel</p>

        <p className="eyebrow text-ink/70">{t.slogan}</p>
      </div>
    </section>
  );
};

export default HomeHero;
