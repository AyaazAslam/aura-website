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
    <section id="beauty" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Eyebrow close to heading; mt-12 before the story grid matches Fashion / Latest */}
        <div className="flex flex-col justify-between gap-6 border-b border-ink/15 pb-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-stone">{t.eyebrow}</p>

            <h2 className="mt-3 font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
              {t.titleA} <em className="italic text-stone">{t.titleB}</em>
            </h2>
          </div>

          <p className="max-w-xs font-sans text-sm leading-7 text-stone">{t.intro}</p>
        </div>

        <div className="mt-12 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {beautyStories.map((story) => (
            <Link key={story.number} to={storyPath(story)} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                <StoryImage
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover img-tone"
                />

                <span className="absolute top-4 left-4 bg-ivory px-3 py-1.5 font-serif text-base italic">
                  {story.number}
                </span>
              </div>

              <div className="pt-6">
                <p className="font-sans text-[10px] font-medium tracking-[0.25em] text-stone uppercase">
                  {story.category}
                </p>

                <h3 className="mt-3 font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-oxblood sm:text-3xl">
                  {story.title}
                </h3>

                <p className="mt-4 max-w-sm font-sans text-sm leading-7 text-stone">
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
