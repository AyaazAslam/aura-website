import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../common/language";
import { localizeStory, resolveImage, storySlug } from "../common/stories";
import { StoryImage } from "../common/ui";
import { useDocumentTitle } from "../common/useDocumentTitle";
import { fashionStories as homeFashionStories } from "../data/homeFashionStories";
import { beautyStories } from "../data/homeBeautyStories";
import { inAndOutStories } from "../data/homeInAndOutStories";
import { latestStories } from "../data/homeLatestStories";
import { fashionStories as fashionHomeStories } from "../data/fashionHomeStories";
import { runwayStories } from "../data/runwayStories";
import { trendStories } from "../data/trendStories";
import { streetStyleStories } from "../data/streetStyleStories";
import { editorStories } from "../data/editorStories";
import NotFound from "./NotFound";

const allStories = [
  ...homeFashionStories,
  ...beautyStories,
  ...inAndOutStories,
  ...latestStories,
  ...fashionHomeStories,
  ...runwayStories,
  ...trendStories,
  ...streetStyleStories,
  ...editorStories,
];

const findStory = (slug) => allStories.find((story) => storySlug(story) === slug);

const copy = {
  EN: {
    pending: "The full article is being prepared for an upcoming issue.",
    browse: "Back to latest stories",
    back: "Back to the magazine",
  },
  FR: {
    pending: "L’article complet est en préparation pour un prochain numéro.",
    browse: "Retour aux dernières histoires",
    back: "Retour au magazine",
  },
};

const ArticlePage = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const t = copy[lang];
  const story = localizeStory(findStory(slug), lang);

  useDocumentTitle(story?.title);

  if (!story) return <NotFound />;

  return (
    <main className="bg-ivory">
      <article className="mx-auto max-w-4xl px-5 pt-16 pb-24 sm:px-8 md:pt-24">
        <p className="eyebrow text-oxblood">{story.category}</p>

        <h1 className="mt-6 font-serif text-5xl leading-[1.02] sm:text-7xl">
          {story.title}
        </h1>

        {story.description && (
          <p className="mt-8 max-w-2xl font-serif text-2xl italic leading-snug text-stone">
            {story.description}
          </p>
        )}

        <figure className="mt-12">
          <div className="aspect-[4/5] overflow-hidden bg-linen md:aspect-[16/10]">
            <StoryImage
              src={resolveImage(story.image, 1400)}
              alt={story.title}
              eager
              className="h-full w-full object-cover img-tone"
            />
          </div>
        </figure>

        <div className="mx-auto mt-14 h-px w-16 bg-ink" />

        <p className="mx-auto mt-10 max-w-md text-center font-sans text-sm leading-7 text-stone">
          {t.pending}
        </p>

        <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          {/* Fashion hub removed — send readers back to the home latest grid */}
          <Link to="/magazine#latest" className="btn-line">
            {t.browse}
          </Link>

          <Link to="/magazine" className="link-line">
            {t.back}
          </Link>
        </div>
      </article>
    </main>
  );
};

export default ArticlePage;
