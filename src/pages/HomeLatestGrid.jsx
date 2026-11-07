import { Link } from "react-router-dom";
import { useLanguage } from "../common/language";
import { storyPath } from "../common/stories";
import { StoryImage } from "../common/ui";
import { latestStories as baseStories } from "../data/homeLatestStories";
import { useLocalizedStories } from "../common/useLocalizedStories";

const copy = {
  EN: {
    eyebrow: "Fashion Around the World",
    title: "The Latest",
    edition: "Global Style Edition",
  },
  FR: {
    eyebrow: "La mode autour du monde",
    title: "Les dernières",
    edition: "Édition style mondial",
  },
};

const HomeLatestGrid = () => {
  const { lang } = useLanguage();
  const t = copy[lang];
  const latestStories = useLocalizedStories(baseStories);

  return (
    <section id="latest" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Heading — eyebrow close to title; grid uses shared mt-12 rhythm */}
        <div className="flex flex-col gap-5 border-b border-ink pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-stone">{t.eyebrow}</p>

            <h2 className="mt-3 font-serif text-6xl leading-none sm:text-7xl lg:text-8xl">
              {t.title}
            </h2>
          </div>

          <p className="eyebrow text-stone">{t.edition}</p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {latestStories.map((story) => (
            <Link key={story.category} to={storyPath(story)} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-linen">
                <StoryImage
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover img-tone"
                />
              </div>

              <div className="pt-6">
                <p className="font-sans text-[10px] font-medium tracking-[0.25em] text-stone uppercase">
                  {story.category}
                </p>

                <h3 className="mt-3 font-serif text-2xl leading-snug transition-colors duration-300 group-hover:text-oxblood sm:text-[1.7rem]">
                  {story.title}
                </h3>

                <div className="mt-5 h-px w-12 bg-ink transition-all duration-500 group-hover:w-20" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeLatestGrid;
