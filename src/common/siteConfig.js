/**
 * Client / site details.
 * Email & newsletter endpoint can be overridden via `.env` (see `.env.example`).
 * An empty email hides the matching footer / edito mailto link; an empty
 * newsletter endpoint switches the form to its “not available yet” state.
 *
 * Address is public masthead copy from the client brief — kept here so footer
 * and edito stay in sync without duplicating the string.
 */
export const siteConfig = {
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL ?? "Khimasriel@gmail.com",
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL ?? "",
  newsletterEndpoint: import.meta.env.VITE_NEWSLETTER_ENDPOINT ?? "",
  // Editorial headquarters — client brief
  address: "320 rue Saint Honoré 75001 Paris",
};
