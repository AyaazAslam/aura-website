import { Link } from "react-router-dom";
import { useLanguage } from "./language";
import { categories } from "./navigation";
import NewsletterForm from "./NewsletterForm";
import { LanguageSwitch, Logo } from "./ui";
import { siteConfig } from "./siteConfig";

const currentYear = new Date().getFullYear();

const content = {
  EN: {
    tagline: "A Different Point of View.",
    description:
      "An editorial universe exploring fashion, beauty, interiors and gastronomy through a distinctive lens.",
    explore: "Explore",
    magazine: "The Magazine",
    about: "About Insolite",
    inout: "In & Out",
    contact: "Contact",
    newsletter: "The Insolite Letter",
    newsletterText:
      "Discover our selection of culture, style and inspiration.",
    placeholder: "Your email address",
    subscribe: "Subscribe",
    privacy: "By subscribing, you agree to our Privacy Policy.",
    success: "Thank you. You are now on the list.",
    error: "Something went wrong. Please try again.",
    unavailable: "Sign-up is not available yet. Please try again later.",
    location: "Paris · Fashion · Culture",
    rights: "All rights reserved.",
    policy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
  FR: {
    tagline: "Un autre point de vue.",
    description:
      "Un univers éditorial dédié à la mode, la beauté, la décoration et la gastronomie.",
    explore: "Explorer",
    magazine: "Le magazine",
    about: "À propos d'Insolite",
    inout: "In & Out",
    contact: "Contact",
    newsletter: "La lettre Insolite",
    newsletterText:
      "Découvrez notre sélection de culture, de style et d'inspiration.",
    placeholder: "Votre adresse e-mail",
    subscribe: "S'inscrire",
    privacy:
      "En vous inscrivant, vous acceptez notre politique de confidentialité.",
    success: "Merci. Vous êtes désormais sur la liste.",
    error: "Une erreur est survenue. Merci de réessayer.",
    unavailable: "L’inscription n’est pas encore disponible. Merci de réessayer plus tard.",
    location: "Paris · Mode · Culture",
    rights: "Tous droits réservés.",
    policy: "Confidentialité",
    terms: "Conditions générales",
  },
};

/**
 * Shared footer type scale — every column title uses the same eyebrow style
 * so “Explore / Magazine / Newsletter / Brand” read as one system (not mixed
 * serif + sans). Nav links share one serif size for visual consistency.
 */
const columnTitle =
  "font-sans text-[10px] font-medium tracking-[0.3em] text-ivory uppercase";

const navLink =
  "font-serif text-[1.35rem] leading-none text-ivory/90 transition-colors duration-300 hover:text-ivory sm:text-2xl";

const metaLink =
  "font-sans text-sm leading-none text-ivory/70 transition-colors duration-300 hover:text-ivory";

const Footer = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="bg-ink text-ivory/75">
      <div className="mx-auto max-w-[1440px] px-5 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        {/* Brand — logo scales down on mobile so it matches header proportions */}
        <div className="flex flex-col items-center border-b border-ivory/15 pb-10 text-center sm:pb-14">
          <Link
            to="/"
            aria-label="Insolite Magazine home"
            className="scale-[0.85] text-ivory sm:scale-100"
          >
            <Logo size="lg" />
          </Link>

          <p className="mt-6 font-serif text-xl italic text-ivory/80 sm:mt-8 sm:text-3xl">
            {t.tagline}
          </p>
        </div>

        {/*
          Columns — one title style everywhere.
          Mobile: single stack with even gaps. Desktop: 12-col editorial grid.
        */}
        <div className="grid grid-cols-1 gap-10 border-b border-ivory/15 py-10 sm:grid-cols-2 sm:gap-12 sm:py-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <h2 className={columnTitle}>Insolite Magazine</h2>

            <p className="mt-5 max-w-xs font-sans text-[15px] leading-7 text-ivory/65 sm:mt-6 sm:text-sm">
              {t.description}
            </p>

            <p className="mt-5 font-sans text-[15px] leading-7 text-ivory/65 sm:mt-6 sm:text-sm">
              {siteConfig.address}
            </p>

            {siteConfig.contactEmail && (
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-2 inline-block font-sans text-[15px] text-ivory/80 transition-colors duration-300 hover:text-ivory sm:text-sm"
              >
                {siteConfig.contactEmail}
              </a>
            )}

            <p className="mt-5 font-sans text-[10px] tracking-[0.25em] text-ivory/45 uppercase sm:mt-6">
              {t.location}
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-5">
            <h2 className={columnTitle}>{t.explore}</h2>

            <ul className="mt-5 space-y-4 sm:mt-6" translate="no">
              {categories.map((item) => (
                <li key={item.key}>
                  <Link to={item.to} className={navLink}>
                    {item.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className={columnTitle}>{t.magazine}</h2>

            {/* Same serif link type as Explore — was plain sans before */}
            <ul className="mt-5 space-y-4 sm:mt-6">
              <li>
                <Link to="/edito" className={navLink}>
                  Edito
                </Link>
              </li>

              <li>
                <Link to="/blog" className={navLink}>
                  Article
                </Link>
              </li>

              <li>
                <Link to="/about" className={navLink}>
                  {t.about}
                </Link>
              </li>

              <li>
                <Link to="/in-out" className={navLink}>
                  {t.inout}
                </Link>
              </li>

              {siteConfig.contactEmail && (
                <li>
                  <a href={`mailto:${siteConfig.contactEmail}`} className={navLink}>
                    {t.contact}
                  </a>
                </li>
              )}
            </ul>

            {siteConfig.instagramUrl && (
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-block font-sans text-[10px] tracking-[0.22em] text-ivory/80 uppercase transition-colors duration-300 hover:text-ivory sm:mt-8"
              >
                Instagram ↗
              </a>
            )}
          </div>

          <div className="sm:col-span-2 lg:col-span-3 lg:col-start-10">
            {/* Same eyebrow title as every other column (was mismatched serif) */}
            <h2 className={columnTitle}>{t.newsletter}</h2>

            <p className="mt-5 font-sans text-[15px] leading-7 text-ivory/65 sm:mt-6 sm:text-sm sm:leading-6">
              {t.newsletterText}
            </p>

            <NewsletterForm
              id="footer-email"
              className="mt-6 sm:mt-7"
              labels={{
                placeholder: t.placeholder,
                subscribe: t.subscribe,
                privacy: t.privacy,
                success: t.success,
                error: t.error,
                unavailable: t.unavailable,
              }}
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center sm:flex-row sm:gap-6 sm:py-8 sm:text-left">
          <p className="max-w-sm font-sans text-[10px] leading-5 tracking-[0.14em] text-ivory/45 uppercase sm:max-w-none">
            © {currentYear} Insolite Magazine x Khim Asriel. {t.rights}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-6">
            <Link to="/privacy" className={metaLink}>
              {t.policy}
            </Link>

            <Link to="/terms" className={metaLink}>
              {t.terms}
            </Link>

            <LanguageSwitch className="flex" inverted />
          </div>
        </div>
      </div>

      {/* Editorial signature — capped on mobile so it doesn’t overwhelm */}
      <div className="overflow-hidden border-t border-ivory/15 py-2 text-center">
        <p
          aria-hidden="true"
          className="font-serif text-[clamp(1.75rem,8vw,6rem)] leading-none tracking-[-0.04em] whitespace-nowrap text-ivory/[0.07]"
        >
          INSOLITE MAGAZINE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
