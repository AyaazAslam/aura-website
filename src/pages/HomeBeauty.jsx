import { Link } from "react-router-dom";
import { useLanguage } from "../common/language";
import { storyPath } from "../common/stories";
import { StoryImage } from "../common/ui";
import { beautyStories as baseStories } from "../data/homeBeautyStories";
import { useLocalizedStories } from "../common/useLocalizedStories";

const copy = {
  EN: {
    eyebrow: "The art of self-care",
    titleA: "Beauty",
    titleB: "Edit.",
    intro:
      "A curated world of beauty, skincare and the little rituals that make you feel extraordinary.",
  },
  FR: {
    eyebrow: "L’art du soin de soi",
    titleA: "Sélection",
    titleB: "Beauté.",
    intro:
      "Un univers de beauté, de soins et de petits rituels qui vous font vous sentir extraordinaire.",
  },
};

const HomeBeauty = () => {
  const { lang } = useLanguage();
  const t = copy[lang];
  const beautyStories = useLocalizedStories(baseStories);

  return (
    <section id="beauty" className="bg-ivory py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 border-b border-ink/15 px-5 pb-8 sm:gap-6 sm:px-0 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-stone">{t.eyebrow}</p>

            <h2 className="mt-3 font-serif text-4xl leading-none sm:text-5xl md:text-6xl lg:text-7xl">
              {t.titleA} <em className="italic text-stone">{t.titleB}</em>
            </h2>
          </div>

          <p className="max-w-xs font-sans text-sm leading-7 text-stone">{t.intro}</p>
        </div>

        {/* Mobile: full-bleed cards; from sm up restore gutters */}
        <div className="mt-10 grid gap-y-10 sm:mt-12 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-12 lg:grid-cols-3">
          {beautyStories.map((story) => (
            <Link key={story.number} to={storyPath(story)} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                <StoryImage
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover object-center img-tone"
                />

                <span className="absolute top-4 left-4 bg-ivory px-3 py-1.5 font-serif text-base italic">
                  {story.number}
                </span>
              </div>

              <div className="px-5 pt-5 sm:px-0 sm:pt-6">
                <p className="font-sans text-[10px] font-medium tracking-[0.25em] text-stone uppercase">
                  {story.category}
                </p>

                <h3 className="mt-3 font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-oxblood sm:text-3xl">
                  {story.title}
                </h3>

                <p className="mt-3 max-w-sm font-sans text-sm leading-7 text-stone sm:mt-4">
                  {story.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBeauty;
