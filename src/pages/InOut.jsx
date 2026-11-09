import { Link } from "react-router-dom";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useLanguage } from "../common/language";
import { useDocumentTitle } from "../common/useDocumentTitle";
import { storyPath } from "../common/stories";
import { StoryImage } from "../common/ui";
import { inAndOutStories as baseStories } from "../data/homeInAndOutStories";
import { useLocalizedStories } from "../common/useLocalizedStories";

/**
 * IN / OUT graphic page — the playful taste axis.
 * IN = likes = UP · OUT = dislikes = DOWN
 * Violet only from the brand tokens (oxblood / oxblood-deep / violet-night).
 */
const copy = {
  EN: {
    label: "In & Out",
    manifesto: "Taste has gravity. What I love rises. What I don’t falls.",
    inTag: "IN",
    outTag: "OUT",
    up: "UP",
    down: "DOWN",
    inCue: "What I like",
    outCue: "What I don’t like",
    inRule: "Rising. Desired. Kept.",
    outRule: "Falling. Released. Left behind.",
    ticker: "UP · IN · LIKE · KEEP · RISE · UP · IN · LIKE · KEEP · RISE · ",
    back: "Back to the magazine",
  },
  FR: {
    label: "In & Out",
    manifesto: "Le goût a une gravité. Ce que j’aime monte. Ce que je n’aime pas descend.",
    inTag: "IN",
    outTag: "OUT",
    up: "HAUT",
    down: "BAS",
    inCue: "Ce que j’aime",
    outCue: "Ce que je n’aime pas",
    inRule: "Qui monte. Désiré. Gardé.",
    outRule: "Qui descend. Relâché. Laissé derrière.",
    ticker: "HAUT · IN · AIMER · GARDER · MONTER · HAUT · IN · AIMER · GARDER · ",
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
    <main className="bg-violet-night text-ivory">
      {/* Poster masthead */}
      <header className="relative overflow-hidden px-5 py-14 sm:px-8 md:py-20 lg:px-12">
        <p className="eyebrow text-oxblood">{t.label}</p>
        <p className="mt-4 max-w-2xl font-serif text-3xl italic leading-snug text-ivory sm:text-5xl">
          {t.manifesto}
        </p>

        <div
          aria-hidden="true"
          className="mt-12 flex items-end justify-between gap-4 select-none"
        >
          <span className="flex flex-col">
            <span className="font-sans text-[10px] tracking-[0.4em] text-oxblood uppercase">
              {t.up}
            </span>
            <span className="font-serif text-[clamp(4rem,18vw,11rem)] leading-[0.75] tracking-[-0.05em] text-ivory">
              ↑
            </span>
          </span>
          <span className="flex flex-col items-end">
            <span className="font-sans text-[10px] tracking-[0.4em] text-oxblood uppercase">
              {t.down}
            </span>
            <span className="font-serif text-[clamp(4rem,18vw,11rem)] leading-[0.75] tracking-[-0.05em] text-oxblood">
              ↓
            </span>
          </span>
        </div>
      </header>

      <div
        aria-hidden="true"
        className="overflow-hidden border-y border-ivory/10 bg-oxblood py-3"
      >
        <p className="animate-[marquee_26s_linear_infinite] whitespace-nowrap font-sans text-[11px] tracking-[0.35em] text-ivory uppercase">
          {t.ticker}
          {t.ticker}
        </p>
      </div>

      {/* IN = UP */}
      {inStory && (
        <section aria-labelledby="in-title" className="relative overflow-hidden bg-ivory text-ink">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-5 py-14 sm:gap-10 sm:px-8 md:grid-cols-12 md:gap-12 md:py-24 lg:px-12">
            <div className="order-2 md:order-1 md:col-span-5">
              <div className="flex items-center gap-3 text-oxblood">
                <ArrowUp className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                <span className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase">
                  {t.up}
                </span>
              </div>

              <p className="mt-5 font-sans text-[10px] tracking-[0.3em] text-stone uppercase">
                {t.inCue}
              </p>

              <h1
                id="in-title"
                className="mt-2 font-serif text-[clamp(4rem,16vw,10rem)] leading-[0.78] tracking-[-0.05em] text-oxblood"
              >
                {t.inTag}
              </h1>

              <p className="mt-3 font-serif text-2xl italic text-oxblood-deep sm:text-3xl">
                {t.inRule}
              </p>

              <Link to={storyPath(inStory)} className="group mt-8 block max-w-md sm:mt-10">
                <p className="font-sans text-[10px] font-medium tracking-[0.25em] text-oxblood uppercase">
                  {inStory.category}
                </p>
                <h2 className="mt-2 font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-oxblood sm:text-4xl">
                  {inStory.title}
                </h2>
                <p className="mt-3 font-sans text-[15px] leading-7 text-stone sm:text-sm">
                  {inStory.description}
                </p>
                <span className="link-line mt-6">↑</span>
              </Link>
            </div>

            <Link to={storyPath(inStory)} className="group order-1 md:order-2 md:col-span-7">
              <div className="relative aspect-[4/5] overflow-hidden bg-linen sm:aspect-[5/4] md:aspect-[4/5]">
                <StoryImage
                  src={inStory.image}
                  alt={inStory.title}
                  eager
                  className="h-full w-full object-cover transition duration-[900ms] ease-luxe group-hover:-translate-y-3 group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-4 left-4 font-serif text-6xl text-ivory/90 drop-shadow sm:text-8xl"
                >
                  ↑
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Violet hinge */}
      <div
        aria-hidden="true"
        className="flex items-center justify-center gap-5 bg-oxblood-deep px-5 py-5 font-sans text-[11px] tracking-[0.45em] text-ivory uppercase"
      >
        <span className="text-oxblood">{t.inTag}</span>
        <span className="h-px w-12 bg-ivory/35 sm:w-20" />
        <span>{t.outTag}</span>
      </div>

      {/* OUT = DOWN — full violet-night */}
      {outStory && (
        <section
          aria-labelledby="out-title"
          className="relative overflow-hidden bg-violet-night text-ivory"
        >
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-5 py-14 sm:gap-10 sm:px-8 md:grid-cols-12 md:gap-12 md:py-24 lg:px-12">
            <Link to={storyPath(outStory)} className="group md:col-span-7">
              <div className="relative aspect-[4/5] overflow-hidden bg-oxblood-deep/50 sm:aspect-[5/4] md:aspect-[4/5]">
                <StoryImage
                  src={outStory.image}
                  alt={outStory.title}
                  className="h-full w-full object-cover opacity-90 grayscale-[0.25] transition duration-[900ms] ease-luxe group-hover:translate-y-3 group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-4 font-serif text-6xl text-oxblood drop-shadow sm:text-8xl"
                >
                  ↓
                </span>
              </div>
            </Link>

            <div className="md:col-span-5">
              <div className="flex items-center gap-3 text-oxblood">
                <ArrowDown className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                <span className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase">
                  {t.down}
                </span>
              </div>

              <p className="mt-5 font-sans text-[10px] tracking-[0.3em] text-ivory/55 uppercase">
                {t.outCue}
              </p>

              <h1
                id="out-title"
                className="mt-2 font-serif text-[clamp(4rem,16vw,10rem)] leading-[0.78] tracking-[-0.05em] text-ivory"
              >
                {t.outTag}
              </h1>

              <p className="mt-3 font-serif text-2xl italic text-oxblood sm:text-3xl">
                {t.outRule}
              </p>

              <Link to={storyPath(outStory)} className="group mt-8 block max-w-md sm:mt-10">
                <p className="font-sans text-[10px] font-medium tracking-[0.25em] text-oxblood uppercase">
                  {outStory.category}
                </p>
                <h2 className="mt-2 font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-oxblood sm:text-4xl">
                  {outStory.title}
                </h2>
                <p className="mt-3 font-sans text-[15px] leading-7 text-ivory/60 sm:text-sm">
                  {outStory.description}
                </p>
                <span className="mt-6 inline-flex border-b border-oxblood pb-1 font-sans text-[11px] tracking-[0.2em] text-oxblood uppercase">
                  ↓
                </span>
              </Link>
            </div>
          </div>
        </section>
      )}

      <div className="border-t border-ivory/10 bg-oxblood-deep px-5 py-10 text-center">
        <Link to="/" className="link-line text-ivory hover:text-oxblood">
          {t.back}
        </Link>
      </div>
    </main>
  );
};

export default InOut;
