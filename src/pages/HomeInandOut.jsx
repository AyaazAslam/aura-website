import { Link } from "react-router-dom";
import { useLanguage } from "../common/language";
import { storyPath } from "../common/stories";
import { StoryImage } from "../common/ui";
import { inAndOutStories as baseStories } from "../data/homeInAndOutStories";
import { useLocalizedStories } from "../common/useLocalizedStories";

const copy = {
  EN: { eyebrow: "The Style Report", titleA: "In", titleB: "Out" },
  FR: { eyebrow: "Le rapport de style", titleA: "Dans", titleB: "Hors" },
};

const HomeInandOut = () => {
  const { lang } = useLanguage();
  const t = copy[lang];
  const inAndOutStories = useLocalizedStories(baseStories);

  return (
    <section id="in-out" className="bg-ink py-16 text-ivory sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] sm:px-8 lg:px-12">
        {/* Spacing only — In & Out content / art direction left unchanged */}
        <div className="mb-10 flex flex-col gap-5 border-b border-ivory/15 px-5 pb-8 sm:mb-12 sm:px-0 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-ivory/55">{t.eyebrow}</p>

            <h2 className="mt-3 font-serif text-5xl leading-none sm:text-6xl md:text-7xl lg:text-8xl">
              {t.titleA} <em className="italic text-ivory/60">&amp;</em> {t.titleB}
            </h2>
          </div>
        </div>

        {/* Mobile: full-bleed story images; padding returns under the captions */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 md:gap-10">
          {inAndOutStories.map((story) => (
            <Link key={story.category} to={storyPath(story)} className="group">
              <div className="aspect-[5/4] overflow-hidden bg-ivory/10">
                <StoryImage
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover object-center img-tone"
                />
              </div>

              <div className="px-5 pt-6 sm:px-0 sm:pt-7">
                <p className="font-sans text-[10px] font-medium tracking-[0.25em] text-ivory/55 uppercase">
                  {story.category}
                </p>

                <h3 className="mt-3 max-w-xl font-serif text-2xl leading-tight sm:mt-4 sm:text-3xl md:text-4xl">
                  {story.title}
                </h3>

                <p className="mt-3 max-w-lg font-sans text-sm leading-7 text-ivory/60 sm:mt-4">
                  {story.description}
                </p>

                <div className="mt-5 h-px w-12 bg-ivory transition-all duration-500 group-hover:w-24 sm:mt-6" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeInandOut;
