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

const columnTitle =
  "font-sans text-[10px] font-medium tracking-[0.3em] text-ivory uppercase";

const footerLink =
  "transition-colors duration-300 hover:text-ivory";

const Footer = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="bg-ink text-ivory/75">
      <div className="mx-auto max-w-[1440px] px-5 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        {/* Brand */}
        <div className="flex flex-col items-center border-b border-ivory/15 pb-14 text-center">
          <Link to="/" aria-label="Insolite Magazine home" className="text-ivory">
            <Logo size="lg" />
          </Link>

          <p className="mt-8 font-serif text-2xl italic text-ivory/80 sm:text-3xl">
            {t.tagline}
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-12 border-b border-ivory/15 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <h2 className={columnTitle}>Insolite Magazine</h2>

            <p className="mt-6 max-w-xs font-sans text-sm leading-7 text-ivory/65">
              {t.description}
            </p>

            {/* Client headquarters + contact — kept in sync via siteConfig */}
            <p className="mt-6 font-sans text-sm leading-7 text-ivory/65">
              {siteConfig.address}
            </p>

            {siteConfig.contactEmail && (
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-2 inline-block font-sans text-sm text-ivory/80 transition-colors duration-300 hover:text-ivory"
              >
                {siteConfig.contactEmail}
              </a>
            )}

            <p className="mt-6 font-sans text-[10px] tracking-[0.25em] text-ivory/45 uppercase">
              {t.location}
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-5">
            <h2 className={columnTitle}>{t.explore}</h2>

            <ul className="mt-6 space-y-4" translate="no">
              {categories.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.to}
                    className={`font-serif text-2xl leading-none text-ivory/90 ${footerLink}`}
                  >
                    {item.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className={columnTitle}>{t.magazine}</h2>

            <ul className="mt-6 space-y-4 font-sans text-sm">
              <li>
                <Link to="/about" className={footerLink}>
                  {t.about}
                </Link>
              </li>

              <li>
                <Link to="/#in-out" className={footerLink}>
                  {t.inout}
                </Link>
              </li>

              {siteConfig.contactEmail && (
                <li>
                  <a href={`mailto:${siteConfig.contactEmail}`} className={footerLink}>
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
                className="mt-8 inline-block font-sans text-[10px] tracking-[0.22em] text-ivory/80 uppercase transition-colors duration-300 hover:text-ivory"
              >
                Instagram ↗
              </a>
            )}
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl leading-none text-ivory">
              {t.newsletter}
            </h2>

            <p className="mt-5 font-sans text-sm leading-6 text-ivory/65">
              {t.newsletterText}
            </p>

            <NewsletterForm
              id="footer-email"
              className="mt-7"
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
        <div className="flex flex-col items-center justify-between gap-6 py-8 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-[10px] tracking-[0.14em] text-ivory/45 uppercase">
            © {currentYear} Insolite Magazine x Khim Asriel. {t.rights}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-sans text-[11px] text-ivory/55">
            <Link to="/privacy" className={footerLink}>
              {t.policy}
            </Link>

            <Link to="/terms" className={footerLink}>
              {t.terms}
            </Link>

            <LanguageSwitch className="flex" inverted />
          </div>
        </div>
      </div>

      {/* Editorial signature */}
      <div className="overflow-hidden border-t border-ivory/15 py-2 text-center">
        <p
          aria-hidden="true"
          className="font-serif text-[clamp(2rem,6.5vw,6rem)] leading-none tracking-[-0.04em] whitespace-nowrap text-ivory/[0.07]"
        >
          INSOLITE MAGAZINE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
