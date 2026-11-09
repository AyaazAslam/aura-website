// Shared site navigation. Used by the header and the footer.
// Edito is a dedicated page (not a home section) so the front page stays intact.
export const categories = [
  { key: "edito", label: { EN: "Edito", FR: "Edito" }, to: "/edito" },
  { key: "beauty", label: { EN: "Beauty", FR: "Beauté" }, to: "/magazine#beauty" },
  // IN = likes = UP / OUT = dislikes = DOWN — dedicated graphic page
  { key: "in-out", label: { EN: "In & Out", FR: "In & Out" }, to: "/in-out" },
  // Fashion removed from the main menu — not used for this client build.
  { key: "lifestyle", label: { EN: "Lifestyle", FR: "Lifestyle" }, to: "/lifestyle" },
  { key: "gourmet", label: { EN: "Gourmet", FR: "Gourmet" }, to: "/gourmet" },
  { key: "design", label: { EN: "Design", FR: "Design" }, to: "/design" },
];

// Sections that are linked from the site but do not have content yet.
export const forthcomingPages = {
  lifestyle: { title: { EN: "Lifestyle", FR: "Lifestyle" } },
  gourmet: { title: { EN: "Gourmet", FR: "Gourmet" } },
  design: { title: { EN: "Design", FR: "Design" } },
  about: { title: { EN: "About Insolite", FR: "À propos d'Insolite" } },
  privacy: { title: { EN: "Privacy Policy", FR: "Confidentialité" } },
  terms: { title: { EN: "Terms & Conditions", FR: "Conditions générales" } },
};
