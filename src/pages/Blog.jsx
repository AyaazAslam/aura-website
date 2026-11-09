import { Link } from "react-router-dom";
import { useLanguage } from "../common/language";
import { useDocumentTitle } from "../common/useDocumentTitle";
import { StoryImage } from "../common/ui";
import { blogPosts, localizeBlogPost } from "../data/blogPosts";

/**
 * Blog index (`/blog`).
 * Static posts with Edito-style responsive images: centered on mobile with
 * ivory side margins, natural height — not full-bleed.
 */
const copy = {
  EN: {
    label: "Blog",
    title: "The Insolite Journal",
    intro: "Notes, rituals, and taste reports from the magazine — static stories for this issue.",
    read: "Read the story",
  },
  FR: {
    label: "Blog",
    title: "Le journal Insolite",
    intro: "Notes, rituels et rapports de goût du magazine — histoires statiques pour ce numéro.",
    read: "Lire l’histoire",
  },
};

const formatDate = (value, lang) =>
  new Date(value).toLocaleDateString(lang === "FR" ? "fr-FR" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const Blog = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  useDocumentTitle(t.label);

  return (
    <main id="blog" className="bg-ivory">
      <header className="mx-auto max-w-3xl px-5 pt-12 pb-8 text-center sm:px-8 sm:pt-16 md:pt-20">
        <p className="eyebrow text-stone">{t.label}</p>
        <h1 className="mt-3 font-serif text-4xl italic leading-[1.05] sm:text-5xl md:text-6xl">
          {t.title}
        </h1>
        <div className="mx-auto mt-5 h-px w-16 bg-ink" />
        <p className="mx-auto mt-5 max-w-xl font-sans text-[15px] leading-7 text-stone sm:text-base sm:leading-8">
          {t.intro}
        </p>
      </header>

      <div className="mx-auto max-w-[900px] space-y-16 px-5 pb-16 sm:px-8 sm:pb-20 md:space-y-24 md:pb-28">
        {blogPosts.map((raw, index) => {
          const post = localizeBlogPost(raw, lang);

          return (
            <article
              key={post.slug}
              className="border-b border-ink/10 pb-16 last:border-b-0 last:pb-0 md:pb-24"
            >
              {/* Narrow width / natural height — same mobile portrait as Edito reference */}
              <figure>
                <div className="editorial-portrait md:mx-auto md:max-w-[420px] md:aspect-[4/5]">
                  <StoryImage
                    src={post.image}
                    alt={post.title}
                    eager={index === 0}
                    className="h-auto w-full object-cover object-center img-tone md:h-full"
                  />
                </div>
              </figure>

              <div className="mx-auto mt-8 max-w-2xl md:mt-10">
                <p className="eyebrow text-oxblood">{post.category}</p>
                <p className="mt-3 font-sans text-[11px] tracking-[0.14em] text-stone uppercase">
                  {formatDate(post.date, lang)}
                </p>

                <h2 className="mt-3 font-serif text-[1.75rem] italic leading-[1.1] sm:text-4xl md:text-5xl">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="transition-colors duration-300 hover:text-oxblood"
                  >
                    {post.title}
                  </Link>
                </h2>

                <div className="mt-5 h-px w-16 bg-ink" />

                <p className="mt-5 font-sans text-[15px] leading-7 text-stone sm:text-base sm:leading-8">
                  {post.excerpt}
                </p>

                <Link to={`/blog/${post.slug}`} className="link-line mt-7">
                  {t.read}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default Blog;
