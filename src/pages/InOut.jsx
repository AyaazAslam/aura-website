import { Link } from "react-router-dom";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useLanguage } from "../common/language";
import { useDocumentTitle } from "../common/useDocumentTitle";
import { storyPath } from "../common/stories";
import { StoryImage } from "../common/ui";
import { inAndOutStories as baseStories } from "../data/homeInAndOutStories";
import { useLocalizedStories } from "../common/useLocalizedStories";

/**
 * IN / OUT — atypical graphic page.
 * Concept from the client: IN = what I like = UP; OUT = what I don’t like = DOWN.
 * Vertical gravity layout (not a card grid) so the taste axis reads instantly.
 */
const copy = {
  EN: {
    label: "In & Out",
    manifesto: "The axis of taste.",
    inTag: "IN",
    outTag: "OUT",
    up: "UP",
    down: "DOWN",
    inCue: "What I like",
    outCue: "What I don’t like",
    inRule: "Rising. Desired. Kept.",
    outRule: "Falling. Released. Left behind.",
    back: "Back to the magazine",
  },
  FR: {
    label: "In & Out",
    manifesto: "L’axe du goût.",
    inTag: "IN",
    outTag: "OUT",
    up: "HAUT",
    down: "BAS",
    inCue: "Ce que j’aime",
    outCue: "Ce que je n’aime pas",
    inRule: "Qui monte. Désiré. Gardé.",
    outRule: "Qui descend. Relâché. Laissé derrière.",
    back: "Retour au magazine",
  },
};

const InOut = () => {
  const { lang } = useLanguage();
  const t = copy[lang];
  const stories = useLocalizedStories(baseStories);
  const inStory = stories[0];
  const outStory = stories[1];

  useDocumentTitle(t.label);

  return (
    <main className="bg-ink text-ivory">
      {/* Masthead — same eyebrow + serif italic rhythm as Edito / home sections */}
      <header className="relative overflow-hidden border-b border-ivory/15 px-5 py-12 sm:px-8 md:py-20 lg:px-12">
        <p className="eyebrow text-ivory/50">{t.label}</p>
        <p className="mt-3 max-w-xl font-serif text-2xl italic leading-snug text-ivory/80 sm:mt-4 sm:text-4xl">
          {t.manifesto}
        </p>

        {/* Giant axis labels — capped on mobile so they don’t crush the layout */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-8 flex items-end justify-between gap-3 select-none sm:mt-10 sm:gap-4"
        >
          <span className="font-serif text-[clamp(3rem,16vw,12rem)] leading-[0.75] tracking-[-0.04em] text-ivory/[0.12]">
            {t.up}
          </span>
          <span className="font-serif text-[clamp(3rem,16vw,12rem)] leading-[0.75] tracking-[-0.04em] text-ivory/[0.12]">
            {t.down}
          </span>
        </div>
      </header>

      {/*
        Vertical split: IN rises (ivory / violet), OUT sinks (deep violet / ink).
        One composition reading top → bottom like a single graphic poster.
      */}
      <div className="relative">
        {/* Center spine — the taste axis */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-px -translate-x-1/2 bg-ivory/20 md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 z-10 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-oxblood md:block"
        />

        {/* ——— IN = UP ——— */}
        {inStory && (
          <section
            aria-labelledby="in-title"
            className="relative overflow-hidden bg-ivory text-ink"
          >
            <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-5 py-12 sm:gap-10 sm:px-8 md:grid-cols-12 md:gap-12 md:py-24 lg:px-12">
              <div className="order-2 md:order-1 md:col-span-5">
                <div className="flex items-center gap-3 text-oxblood">
                  <ArrowUp className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase sm:text-[11px] sm:tracking-[0.35em]">
                    {t.up}
                  </span>
                </div>

                <p className="mt-5 font-sans text-[10px] tracking-[0.28em] text-stone uppercase sm:mt-6 sm:text-[11px] sm:tracking-[0.3em]">
                  {t.inCue}
                </p>

                <h1
                  id="in-title"
                  className="mt-3 font-serif text-[clamp(3.25rem,12vw,9rem)] leading-[0.8] tracking-[-0.04em]"
                >
                  {t.inTag}
                </h1>

                <p className="mt-3 font-serif text-xl italic text-oxblood sm:mt-4 sm:text-3xl">
                  {t.inRule}
                </p>

                <Link to={storyPath(inStory)} className="group mt-8 block max-w-md sm:mt-10">
                  <p className="font-sans text-[10px] font-medium tracking-[0.25em] text-oxblood uppercase">
                    {inStory.category}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-oxblood sm:mt-3 sm:text-4xl">
                    {inStory.title}
                  </h2>
                  <p className="mt-3 font-sans text-[15px] leading-7 text-stone sm:mt-4 sm:text-sm">
                    {inStory.description}
                  </p>
                  <span className="link-line mt-5 sm:mt-6">↑</span>
                </Link>
              </div>

              <Link
                to={storyPath(inStory)}
                className="group order-1 md:order-2 md:col-span-7"
              >
                {/* Image lifts slightly on hover — “UP” motion */}
                <div className="aspect-[4/5] overflow-hidden bg-linen sm:aspect-[5/4] md:aspect-[4/5]">
                  <StoryImage
                    src={inStory.image}
                    alt={inStory.title}
                    eager
                    className="h-full w-full object-cover transition duration-[900ms] ease-luxe group-hover:-translate-y-2 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Horizon bar between poles */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center gap-6 bg-oxblood-deep px-5 py-4 font-sans text-[10px] tracking-[0.4em] text-ivory/80 uppercase"
        >
          <span>{t.inTag}</span>
          <span className="h-px w-10 bg-ivory/40 sm:w-16" />
          <span>{t.outTag}</span>
        </div>

        {/* ——— OUT = DOWN ——— */}
        {outStory && (
          <section
            aria-labelledby="out-title"
            className="relative overflow-hidden bg-[#2A0E4E] text-ivory"
          >
            <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-5 py-12 sm:gap-10 sm:px-8 md:grid-cols-12 md:gap-12 md:py-24 lg:px-12">
              <Link to={storyPath(outStory)} className="group md:col-span-7">
                {/* Image sinks slightly on hover — “DOWN” motion */}
                <div className="aspect-[4/5] overflow-hidden bg-ink/40 sm:aspect-[5/4] md:aspect-[4/5]">
                  <StoryImage
                    src={outStory.image}
                    alt={outStory.title}
                    className="h-full w-full object-cover opacity-90 grayscale-[0.35] transition duration-[900ms] ease-luxe group-hover:translate-y-2 group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              </Link>

              <div className="md:col-span-5">
                <div className="flex items-center gap-3 text-ivory/70">
                  <ArrowDown className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase sm:text-[11px] sm:tracking-[0.35em]">
                    {t.down}
                  </span>
                </div>

                <p className="mt-5 font-sans text-[10px] tracking-[0.28em] text-ivory/50 uppercase sm:mt-6 sm:text-[11px] sm:tracking-[0.3em]">
                  {t.outCue}
                </p>

                <h1
                  id="out-title"
                  className="mt-3 font-serif text-[clamp(3.25rem,12vw,9rem)] leading-[0.8] tracking-[-0.04em] text-ivory/90"
                >
                  {t.outTag}
                </h1>

                <p className="mt-3 font-serif text-xl italic text-ivory/55 sm:mt-4 sm:text-3xl">
                  {t.outRule}
                </p>

                <Link to={storyPath(outStory)} className="group mt-8 block max-w-md sm:mt-10">
                  <p className="font-sans text-[10px] font-medium tracking-[0.25em] text-ivory/50 uppercase">
                    {outStory.category}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-ivory sm:mt-3 sm:text-4xl">
                    {outStory.title}
                  </h2>
                  <p className="mt-3 font-sans text-[15px] leading-7 text-ivory/55 sm:mt-4 sm:text-sm">
                    {outStory.description}
                  </p>
                  <span className="mt-5 inline-flex border-b border-current pb-1 font-sans text-[11px] tracking-[0.2em] uppercase sm:mt-6">
                    ↓
                  </span>
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>

      <div className="border-t border-ivory/15 px-5 py-10 text-center sm:px-8">
        <Link to="/edito" className="link-line text-ivory/80 hover:text-ivory">
          {t.back}
        </Link>
      </div>
    </main>
  );
};

export default InOut;
