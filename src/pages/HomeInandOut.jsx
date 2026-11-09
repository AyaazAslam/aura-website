import { Link } from "react-router-dom";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useLanguage } from "../common/language";
import { StoryImage } from "../common/ui";
import { inAndOutStories as baseStories } from "../data/homeInAndOutStories";
import { useLocalizedStories } from "../common/useLocalizedStories";

/**
 * Home IN / OUT — playful gravity teaser.
 * IN = what I like = UP (ivory + brand violet accents)
 * OUT = what I don’t = DOWN (violet-night #2A0E4E — same violet family everywhere)
 * Full graphic page: `/in-out`
 */
const copy = {
  EN: {
    eyebrow: "The Style Report",
    inTag: "IN",
    outTag: "OUT",
    up: "UP — what I like",
    down: "DOWN — what I don’t like",
    ticker: "UP · IN · LIKE · KEEP · RISE · UP · IN · LIKE · KEEP · RISE · ",
    cta: "Enter the axis",
  },
  FR: {
    eyebrow: "Le rapport de style",
    inTag: "IN",
    outTag: "OUT",
    up: "HAUT — ce que j’aime",
    down: "BAS — ce que je n’aime pas",
    ticker: "HAUT · IN · AIMER · GARDER · MONTER · HAUT · IN · AIMER · GARDER · ",
    cta: "Entrer dans l’axe",
  },
};

const HomeInandOut = () => {
  const { lang } = useLanguage();
  const t = copy[lang];
  const stories = useLocalizedStories(baseStories);
  const inStory = stories[0];
  const outStory = stories[1];

  return (
    <section id="in-out" className="overflow-hidden bg-violet-night text-ivory">
      {/* Masthead on brand violet — same violet everywhere */}
      <div className="border-b border-ivory/15 px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-oxblood">{t.eyebrow}</p>
            <h2 className="mt-3 font-serif text-5xl leading-none tracking-[-0.03em] sm:text-7xl md:text-8xl">
              <span className="text-ivory">{t.inTag}</span>{" "}
              <em className="italic text-oxblood">&amp;</em>{" "}
              <span className="text-ivory/80">{t.outTag}</span>
            </h2>
            <p className="mt-4 max-w-sm font-serif text-xl italic text-ivory/60 sm:text-2xl">
              ↑ {t.up.split("—")[0].trim()} · ↓ {t.down.split("—")[0].trim()}
            </p>
          </div>

          <Link
            to="/in-out"
            className="inline-flex items-center gap-2 border border-oxblood bg-oxblood px-6 py-3 font-sans text-[10px] font-medium tracking-[0.22em] text-ivory uppercase transition-colors duration-500 hover:bg-oxblood-deep"
          >
            {t.cta}
          </Link>
        </div>
      </div>

      {/* Moving taste ticker — the “fun” signal */}
      <div
        aria-hidden="true"
        className="overflow-hidden border-b border-ivory/10 bg-oxblood-deep py-3"
      >
        <p className="animate-[marquee_28s_linear_infinite] whitespace-nowrap font-sans text-[11px] tracking-[0.35em] text-ivory/85 uppercase">
          {t.ticker}
          {t.ticker}
        </p>
      </div>

      {/* Stacked poles — IN rises, OUT sinks */}
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
        {inStory && (
          <Link
            to="/in-out"
            className="group relative flex flex-col justify-between overflow-hidden bg-ivory p-5 text-ink sm:p-8 md:min-h-[32rem] md:p-10"
          >
            {/* Giant ghost word */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-4 font-serif text-[7rem] leading-none tracking-[-0.06em] text-oxblood/[0.08] select-none sm:text-[9rem]"
            >
              ↑
            </span>

            <div className="relative z-[1] flex items-start justify-between gap-3">
              <span className="flex max-w-[60%] items-center gap-2 font-sans text-[10px] leading-4 tracking-[0.22em] text-oxblood uppercase sm:tracking-[0.3em]">
                <ArrowUp className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                {t.up}
              </span>
              <span className="font-serif text-5xl leading-none tracking-[-0.04em] text-oxblood sm:text-7xl">
                {t.inTag}
              </span>
            </div>

            <div className="relative z-[1] mx-auto mt-8 aspect-[5/4] w-[92%] overflow-hidden bg-linen sm:mt-10">
              <StoryImage
                src={inStory.image}
                alt={inStory.title}
                className="h-full w-full object-cover transition duration-[900ms] ease-luxe group-hover:-translate-y-3 group-hover:scale-[1.04]"
              />
            </div>

            <div className="relative z-[1] mt-6 sm:mt-8">
              <p className="font-sans text-[10px] tracking-[0.25em] text-oxblood uppercase">
                {inStory.category}
              </p>
              <h3 className="mt-2 font-serif text-2xl leading-tight sm:mt-3 sm:text-3xl">
                {inStory.title}
              </h3>
            </div>
          </Link>
        )}

        {outStory && (
          <Link
            to="/in-out"
            className="group relative flex flex-col justify-between overflow-hidden bg-violet-night p-5 text-ivory sm:p-8 md:min-h-[32rem] md:p-10"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -left-2 font-serif text-[7rem] leading-none tracking-[-0.06em] text-oxblood/25 select-none sm:text-[9rem]"
            >
              ↓
            </span>

            <div className="relative z-[1] flex items-start justify-between gap-3">
              <span className="font-serif text-5xl leading-none tracking-[-0.04em] text-ivory sm:text-7xl">
                {t.outTag}
              </span>
              <span className="flex max-w-[60%] items-center justify-end gap-2 text-right font-sans text-[10px] leading-4 tracking-[0.22em] text-oxblood uppercase sm:tracking-[0.3em]">
                {t.down}
                <ArrowDown className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              </span>
            </div>

            <div className="relative z-[1] mx-auto mt-8 aspect-[5/4] w-[92%] overflow-hidden bg-oxblood-deep/40 sm:mt-10">
              <StoryImage
                src={outStory.image}
                alt={outStory.title}
                className="h-full w-full object-cover opacity-90 grayscale-[0.3] transition duration-[900ms] ease-luxe group-hover:translate-y-3 group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative z-[1] mt-6 sm:mt-8">
              <p className="font-sans text-[10px] tracking-[0.25em] text-oxblood uppercase">
                {outStory.category}
              </p>
              <h3 className="mt-2 font-serif text-2xl leading-tight sm:mt-3 sm:text-3xl">
                {outStory.title}
              </h3>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default HomeInandOut;
