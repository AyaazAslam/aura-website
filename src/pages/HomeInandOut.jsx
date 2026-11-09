import { Link } from "react-router-dom";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useLanguage } from "../common/language";
import { StoryImage } from "../common/ui";
import { inAndOutStories as baseStories } from "../data/homeInAndOutStories";
import { useLocalizedStories } from "../common/useLocalizedStories";

/**
 * Home teaser for IN / OUT.
 * Same client idea as the full page: IN = likes = UP, OUT = dislikes = DOWN.
 * Keeps the homepage punchy; the atypical full graphic lives at `/in-out`.
 */
const copy = {
  EN: {
    eyebrow: "The Style Report",
    inTag: "IN",
    outTag: "OUT",
    up: "UP — what I like",
    down: "DOWN — what I don’t like",
    cta: "Enter the axis",
  },
  FR: {
    eyebrow: "Le rapport de style",
    inTag: "IN",
    outTag: "OUT",
    up: "HAUT — ce que j’aime",
    down: "BAS — ce que je n’aime pas",
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
    <section id="in-out" className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 md:py-28">
        <div className="mb-8 flex flex-col gap-5 border-b border-ivory/15 pb-7 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-6 md:pb-8">
          <div>
            <p className="eyebrow text-ivory/55">{t.eyebrow}</p>
            {/* Same heading scale as Beauty / Latest on mobile */}
            <h2 className="mt-3 font-serif text-4xl leading-none sm:text-6xl md:text-7xl lg:text-8xl">
              {t.inTag}{" "}
              <em className="italic text-ivory/45">&amp;</em> {t.outTag}
            </h2>
          </div>

          <Link to="/in-out" className="link-line text-ivory/85 hover:text-ivory">
            {t.cta}
          </Link>
        </div>

        {/* Stacked poles: UP then DOWN — type matches site (serif display + sans eyebrow) */}
        <div className="grid gap-0 overflow-hidden md:grid-cols-2">
          {inStory && (
            <Link
              to="/in-out"
              className="group relative flex flex-col justify-between bg-ivory p-5 text-ink sm:min-h-[26rem] sm:p-8 md:p-10"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex max-w-[55%] items-center gap-2 font-sans text-[10px] leading-4 tracking-[0.22em] text-oxblood uppercase sm:max-w-none sm:tracking-[0.3em]">
                  <ArrowUp className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  {t.up}
                </span>
                <span className="font-serif text-4xl leading-none tracking-[-0.04em] sm:text-6xl">
                  {t.inTag}
                </span>
              </div>

              <div className="relative mt-6 aspect-[5/4] overflow-hidden bg-linen sm:mt-8">
                <StoryImage
                  src={inStory.image}
                  alt={inStory.title}
                  className="h-full w-full object-cover transition duration-[900ms] ease-luxe group-hover:-translate-y-1.5 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-5 sm:mt-6">
                <p className="font-sans text-[10px] tracking-[0.25em] text-oxblood uppercase">
                  {inStory.category}
                </p>
                <h3 className="mt-2 font-serif text-xl leading-tight sm:mt-3 sm:text-3xl">
                  {inStory.title}
                </h3>
              </div>
            </Link>
          )}

          {outStory && (
            <Link
              to="/in-out"
              className="group relative flex flex-col justify-between bg-[#2A0E4E] p-5 text-ivory sm:min-h-[26rem] sm:p-8 md:p-10"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-serif text-4xl leading-none tracking-[-0.04em] text-ivory/90 sm:text-6xl">
                  {t.outTag}
                </span>
                <span className="flex max-w-[55%] items-center justify-end gap-2 text-right font-sans text-[10px] leading-4 tracking-[0.22em] text-ivory/55 uppercase sm:max-w-none sm:tracking-[0.3em]">
                  {t.down}
                  <ArrowDown className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>

              <div className="relative mt-6 aspect-[5/4] overflow-hidden bg-ink/40 sm:mt-8">
                <StoryImage
                  src={outStory.image}
                  alt={outStory.title}
                  className="h-full w-full object-cover opacity-90 grayscale-[0.35] transition duration-[900ms] ease-luxe group-hover:translate-y-1.5 group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>

              <div className="mt-5 sm:mt-6">
                <p className="font-sans text-[10px] tracking-[0.25em] text-ivory/50 uppercase">
                  {outStory.category}
                </p>
                <h3 className="mt-2 font-serif text-xl leading-tight sm:mt-3 sm:text-3xl">
                  {outStory.title}
                </h3>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeInandOut;
