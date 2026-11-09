import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../common/language";
import { useDocumentTitle } from "../common/useDocumentTitle";
import { StoryImage } from "../common/ui";
import { findBlogPost, localizeBlogPost } from "../data/blogPosts";
import NotFound from "./NotFound";

/**
 * Single static blog post (`/blog/:slug`).
 * Portrait/image uses the approved Edito mobile treatment.
 */
const copy = {
  EN: {
    back: "Back to the blog",
  },
  FR: {
    back: "Retour au blog",
  },
};

const formatDate = (value, lang) =>
  new Date(value).toLocaleDateString(lang === "FR" ? "fr-FR" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogPost = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const t = copy[lang];
  const post = localizeBlogPost(findBlogPost(slug), lang);

  useDocumentTitle(post?.title);

  if (!post) return <NotFound />;

  return (
    <main className="bg-ivory">
      <article className="mx-auto max-w-[900px] px-5 py-12 sm:px-8 sm:py-16 md:py-24">
        <figure>
          <div className="mx-auto w-[78%] max-w-[320px] overflow-hidden bg-linen sm:w-[70%] sm:max-w-[380px] md:w-full md:max-w-[520px] md:aspect-[4/5]">
            <StoryImage
              src={post.image}
              alt={post.title}
              eager
              className="h-auto w-full object-cover object-center img-tone md:h-full"
            />
          </div>
        </figure>

        <div className="mx-auto mt-8 max-w-2xl md:mt-10">
          <p className="eyebrow text-oxblood">{post.category}</p>
          <p className="mt-3 font-sans text-[11px] tracking-[0.14em] text-stone uppercase">
            {formatDate(post.date, lang)}
          </p>

          <h1 className="mt-3 font-serif text-[1.85rem] italic leading-[1.08] sm:text-5xl md:text-6xl">
            {post.title}
          </h1>

          <div className="mt-5 h-px w-16 bg-ink md:mt-6" />

          <div className="mt-6 space-y-5 font-sans text-[15px] leading-7 text-stone sm:text-base sm:leading-8 md:mt-8">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Link to="/blog" className="link-line mt-10">
            {t.back}
          </Link>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
