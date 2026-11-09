/**
 * Static blog posts for the Blog page (`/blog`).
 * English is the source; `fr` holds French title / category / excerpt / body.
 * Images use the same centered editorial treatment as Edito on mobile.
 */
export const blogPosts = [
  {
    slug: "november-mood-board",
    category: "Lifestyle",
    title: "November Mood Board: Soft Light & Strong Silhouettes",
    date: "2026-11-03",
    image: "/static-men-image/men.jpeg",
    excerpt:
      "A quiet edit of textures, tones, and rituals that set the pace for the month — from oversized knits to candlelit tables.",
    body: [
      "November asks for a slower rhythm. The light softens, evenings stretch earlier, and every silhouette seems to ask for more fabric, more comfort, more intention.",
      "This mood board gathers what Insolite is living right now: deep berry lips, statement coats, and interiors that feel like a warm sanctuary after a long day outside.",
      "Keep the palette restrained — ivory, charcoal, and one violet accent — so every detail reads clearer.",
    ],
    fr: {
      category: "Lifestyle",
      title: "Mood board de novembre : lumière douce et silhouettes fortes",
      excerpt:
        "Une sélection calme de textures, de tons et de rituels qui donnent le tempo du mois — des pulls oversize aux tables à la bougie.",
      body: [
        "Novembre demande un rythme plus lent. La lumière s’adoucit, les soirées commencent plus tôt, et chaque silhouette semble appeler plus de matière, plus de confort, plus d’intention.",
        "Ce mood board rassemble ce qu’Insolite vit en ce moment : des lèvres berry profondes, des manteaux signature, et des intérieurs qui deviennent un sanctuaire chaleureux.",
        "Gardez une palette retenue — ivoire, charbon, et une touche de violet — pour que chaque détail se lise plus clairement.",
      ],
    },
  },
  {
    slug: "beauty-rituals-for-cold-days",
    category: "Beauty",
    title: "Beauty Rituals That Survive the Cold",
    date: "2026-11-01",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=85",
    excerpt:
      "Hydration, richer pigments, and a three-step evening reset that feels like luxury without the noise.",
    body: [
      "Cold air is unforgiving on skin. The answer is not more products — it is better ones, used with patience.",
      "Start with a cleanse that does not strip, then a serum that drinks in quickly, and finish with a balm that seals the night.",
      "For colour, lean into moody lips and soft definition around the eyes. November beauty should feel lived-in, not overworked.",
    ],
    fr: {
      category: "Beauté",
      title: "Rituels beauté qui résistent au froid",
      excerpt:
        "Hydratation, pigments plus riches, et un reset du soir en trois gestes qui ont l’air luxueux sans le bruit.",
      body: [
        "L’air froid est impitoyable pour la peau. La réponse n’est pas plus de produits — ce sont de meilleurs gestes, faits avec patience.",
        "Commencez par un nettoyage qui n’agresse pas, puis un sérum qui pénètre vite, et terminez par un baume qui scelle la nuit.",
        "Pour la couleur, privilégiez des lèvres mystérieuses et une définition douce autour des yeux. La beauté de novembre doit paraître vécue, pas surjouée.",
      ],
    },
  },
  {
    slug: "in-out-weekend-notes",
    category: "In & Out",
    title: "Weekend Notes: What Is Up, What Is Down",
    date: "2026-10-28",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85",
    excerpt:
      "A quick Insolite scorecard — creative layering stays UP; forced trends and empty maximalism go DOWN.",
    body: [
      "IN (UP): coats with presence, quiet jewellery, and tables that feel cooked with care rather than plated for a feed.",
      "OUT (DOWN): anything that needs an explanation to feel stylish. If it only works in a caption, leave it behind.",
      "Taste is a vertical axis. Keep rising toward what feels true — and let the rest fall.",
    ],
    fr: {
      category: "In & Out",
      title: "Notes de week-end : ce qui monte, ce qui descend",
      excerpt:
        "Un tableau Insolite rapide — le layering créatif reste HAUT ; les tendances forcées et le maximalisme vide descendent.",
      body: [
        "IN (HAUT) : des manteaux avec présence, des bijoux discrets, et des tables qui sentent le soin plutôt que le feed.",
        "OUT (BAS) : tout ce qui a besoin d’une légende pour paraître stylé. Si cela ne marche que dans une légende, laissez-le derrière.",
        "Le goût est un axe vertical. Continuez à monter vers ce qui est vrai — et laissez le reste descendre.",
      ],
    },
  },
  {
    slug: "paris-table-for-two",
    category: "Gourmet",
    title: "A Paris Table for Two: Slow Food, Soft Light",
    date: "2026-10-22",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85",
    excerpt:
      "Around Saint-Honoré, the best evenings still begin with bread, butter, and a conversation that refuses to rush.",
    body: [
      "Gourmet, for Insolite, is never only about the plate. It is the room, the wait, the glass that arrives at the right temperature.",
      "Choose somewhere close enough to walk home. Order something that takes time. Leave the phone face down.",
      "Paris rewards those who eat as if the night has nowhere else to be.",
    ],
    fr: {
      category: "Gourmet",
      title: "Une table pour deux à Paris : slow food, lumière douce",
      excerpt:
        "Autour de Saint-Honoré, les meilleures soirées commencent encore par du pain, du beurre, et une conversation qui refuse de se presser.",
      body: [
        "Le gourmet, pour Insolite, n’est jamais seulement l’assiette. C’est la salle, l’attente, le verre qui arrive à la bonne température.",
        "Choisissez un lieu assez proche pour rentrer à pied. Commandez quelque chose qui prend du temps. Laissez le téléphone face contre table.",
        "Paris récompense ceux qui mangent comme si la nuit n’avait nulle part ailleurs où aller.",
      ],
    },
  },
];

export const localizeBlogPost = (post, lang) => {
  if (!post) return null;
  if (lang !== "FR" || !post.fr) return post;

  return {
    ...post,
    category: post.fr.category ?? post.category,
    title: post.fr.title ?? post.title,
    excerpt: post.fr.excerpt ?? post.excerpt,
    body: post.fr.body ?? post.body,
  };
};

export const findBlogPost = (slug) =>
  blogPosts.find((post) => post.slug === slug);
