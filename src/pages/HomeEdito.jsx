import { useLanguage } from "../common/language";
import { StoryImage } from "../common/ui";
import { siteConfig } from "../common/siteConfig";

/**
 * Home EDITO — the editor’s weekly letter.
 * Always rendered first on the home page (see `home.jsx`).
 * Copy and contact details come from the client; keep article data files unchanged.
 *
 * Portrait asset: `/public/static-men-image/men.jpeg`
 */
const copy = {
  EN: {
    label: "Edito",
    headline: "Welcome to Insolite Magazine!",
    intro:
      "November is officially here, bringing a sudden wave of crisp autumn air and the perfect excuse to completely reinvent our daily routines. As the days grow shorter, we are shifting our focus toward all things cozy, comforting, and undeniably chic. This month, we are diving deep into the season’s most captivating trends across beauty, fashion, food, and lifestyle.",
    inspiring: "Here is what is inspiring us right now:",
    points: [
      "Beauty: The return of rich, moody lip colors and deeply hydrating skincare rituals to combat the late autumn chill.",
      "Fashion: Creative layering, statement outerwear, and oversized knits that effortlessly blend comfort with high style.",
      "Food: Hearty, slow-cooked comfort foods and warm, spiced drinks that make staying indoors an absolute luxury.",
      "Lifestyle: Embracing the art of slow living, creating a warm sanctuary at home, and preparing for the upcoming holiday buzz.",
    ],
    closing:
      "Thank you for being part of our community. Let’s make this November beautiful, stylish, and wonderfully unexpected.",
    signOff: "Stay inspired,",
    byline: "Khim Asriel",
    portraitAlt: "Khim Asriel, editor of Insolite Magazine",
  },
  FR: {
    label: "Edito",
    headline: "Bienvenue dans Insolite Magazine !",
    intro:
      "Novembre est officiellement là, apportant une vague soudaine d’air d’automne croustillant et la parfaite excuse pour réinventer entièrement nos routines quotidiennes. À mesure que les jours raccourcissent, nous tournons notre regard vers tout ce qui est cocooning, réconfortant et indéniablement chic. Ce mois-ci, nous plongeons dans les tendances les plus captivantes de la saison — beauté, mode, gastronomie et lifestyle.",
    inspiring: "Voici ce qui nous inspire en ce moment :",
    points: [
      "Beauté : le retour des rouges à lèvres riches et mystérieux, et des rituels de soin profondément hydratants pour affronter le froid de fin d’automne.",
      "Mode : le layering créatif, les pièces d’extérieur signature et les pulls oversize qui mêlent confort et haute élégance.",
      "Gastronomie : des plats mijotés réconfortants et des boissons chaudes épicées qui transforment le chez-soi en véritable luxe.",
      "Lifestyle : l’art du slow living, la création d’un sanctuaire chaleureux à la maison, et la préparation de l’effervescence des fêtes.",
    ],
    closing:
      "Merci de faire partie de notre communauté. Faisons de ce mois de novembre un moment beau, stylé et merveilleusement inattendu.",
    signOff: "Restez inspirés,",
    byline: "Khim Asriel",
    portraitAlt: "Khim Asriel, rédactrice d’Insolite Magazine",
  },
};

const HomeEdito = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section id="edito" className="bg-ivory" aria-labelledby="edito-title">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:gap-14 md:py-24 lg:px-12">
        {/* Editor portrait — client static asset */}
        <figure className="md:col-span-4 lg:col-span-3">
          <div className="mx-auto aspect-[3/4] max-w-xs overflow-hidden bg-linen md:max-w-none">
            <StoryImage
              src="/static-men-image/men.jpeg"
              alt={t.portraitAlt}
              eager
              className="h-full w-full object-cover img-tone"
            />
          </div>
        </figure>

        {/* Letter body */}
        <div className="md:col-span-8 lg:col-span-9 lg:max-w-3xl">
          {/* Eyebrow sits close to the headline (spacing rhythm). */}
          <p className="eyebrow text-stone">{t.label}</p>

          <h2
            id="edito-title"
            className="mt-3 font-serif text-4xl italic leading-[1.05] sm:text-5xl md:text-6xl"
          >
            {t.headline}
          </h2>

          <div className="mt-6 h-px w-16 bg-ink" />

          <p className="mt-6 font-sans text-base leading-8 text-stone">{t.intro}</p>

          <p className="mt-6 font-sans text-base leading-8 text-stone">{t.inspiring}</p>

          <ul className="mt-4 space-y-3 font-sans text-base leading-8 text-stone">
            {t.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-oxblood" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 font-sans text-base leading-8 text-stone">{t.closing}</p>

          <p className="mt-8 font-serif text-xl italic sm:text-2xl">
            <span aria-hidden="true">🍂 </span>
            {t.signOff}
          </p>
          <p className="mt-2 font-serif text-xl sm:text-2xl">{t.byline}</p>

          {/* Public contact block — address + email from client brief */}
          <address className="mt-8 not-italic">
            <p className="font-sans text-sm leading-7 text-stone">{siteConfig.address}</p>
            {siteConfig.contactEmail && (
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-1 inline-block font-sans text-sm text-oxblood transition-colors duration-300 hover:text-ink"
              >
                {siteConfig.contactEmail}
              </a>
            )}
          </address>
        </div>
      </div>
    </section>
  );
};

export default HomeEdito;
