// Helpers shared by story cards and the article page. Keep this file free of imports from
// the page components, so both can use it without a circular dependency.
import { storiesFr } from "../data/storiesFr";

export const slugify = (text) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// The URL slug comes from the English title, so a story keeps its URL in both languages.
// A story can set `slug` itself when another story has the same title (see runwayStories).
export const storySlug = (story) => story.slug ?? slugify(story.en ?? story.title);

export const storyPath = (story) => `/stories/${storySlug(story)}`;

// Stories are either full image URLs or Unsplash photo IDs.
export const resolveImage = (image, width = 900) =>
  image.startsWith("http")
    ? image
    : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=${width}&q=85`;

// Returns the story with its French title, category and description when the language is FR.
// The English title is kept in `en` for links.
export const localizeStory = (story, lang) => {
  if (!story || lang !== "FR") return story;

  const fr = storiesFr[story.title];

  if (!fr) return story;

  return { ...story, en: story.title, ...fr };
};
