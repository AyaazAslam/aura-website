import { ArrowRight } from "lucide-react";
import { useLanguage } from "../common/language";
import { StoryImage } from "../common/ui";

const copy = {
  EN: {
    eyebrow: "The Insolite Spotlight",
    titleA: "Style is",
    titleB: "an attitude.",
    bodyA:
      "Fashion is more than what you wear. It is the confidence you carry, the details you choose, and the story you tell without saying a word.",
    bodyB:
      "Discover a world of expressive looks, timeless elegance, and unexpected inspiration with Insolite Magazine.",
    caption: "The Art of Style",
    cta: "Discover our world",
    alt: "Luxury fashion editorial",
  },
  FR: {
    eyebrow: "La sélection Insolite",
    titleA: "Le style est",
    titleB: "une attitude.",
    bodyA:
      "La mode, c’est bien plus que ce que l’on porte. C’est la confiance que l’on dégage, les détails que l’on choisit et l’histoire que l’on raconte sans un mot.",
    bodyB:
      "Découvrez un monde de looks expressifs, d’élégance intemporelle et d’inspirations inattendues avec Insolite Magazine.",
    caption: "L’art du style",
    cta: "Découvrir notre univers",
    alt: "Portrait éditorial de mode de luxe",
  },
};

const HomeBrandSpotlight = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section className="bg-linen">
      {/*
        Mobile: image goes full-bleed; copy keeps horizontal padding.
        md+: original two-column layout restored.
      */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 pb-16 sm:gap-14 sm:pb-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28 lg:px-12">
        <div className="relative w-full md:mx-auto md:max-w-xl">
          <div className="aspect-[4/5] overflow-hidden bg-ivory">
            <StoryImage
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
              alt={t.alt}
              className="h-full w-full object-cover object-center img-tone"
            />
          </div>

          <p className="absolute bottom-5 left-0 bg-ivory px-4 py-2.5 font-serif text-base italic sm:bottom-6 sm:px-6 sm:py-4 sm:text-xl">
            {t.caption}
          </p>
        </div>

        <div className="max-w-xl px-5 sm:px-8 md:pl-4 md:px-0">
          <p className="eyebrow text-stone">{t.eyebrow}</p>

          <h2 className="mt-3 font-serif text-4xl leading-[0.98] sm:text-5xl md:text-6xl lg:text-7xl">
            {t.titleA}
            <span className="block italic text-oxblood">{t.titleB}</span>
          </h2>

          <div className="mt-6 h-px w-16 bg-ink" />

          <p className="mt-6 font-sans text-[15px] leading-7 text-stone sm:text-base sm:leading-8">
            {t.bodyA}
          </p>

          <p className="mt-4 font-sans text-[15px] leading-7 text-stone sm:text-base sm:leading-8">
            {t.bodyB}
          </p>

          {/* Fashion section removed — CTA points to Beauty instead */}
          <a href="#beauty" className="link-line mt-8">
            {t.cta}
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeBrandSpotlight;
