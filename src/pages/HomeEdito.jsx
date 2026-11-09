import { useLanguage } from "../common/language";
import { StoryImage } from "../common/ui";
import { siteConfig } from "../common/siteConfig";

/**
 * Home EDITO — the editor’s weekly letter.
 * Always rendered first on the home page (see `home.jsx`).
 *
 * Mobile: portrait is full-bleed (edge-to-edge) so it doesn’t sit in a tiny
 * padded box. Desktop: side-by-side column layout is unchanged.
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
      {/*
        Mobile: stacked full-bleed image + padded letter.
        md+: 12-column grid with portrait beside the letter (original flow).
      */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center px-5 pt-10 sm:px-8 md:grid-cols-12 md:gap-14 md:px-8 md:py-24 lg:px-12">
        {/*
          Editor portrait.
          Mobile: compact centered card (~220px) so it doesn’t eat the viewport;
          keeps face + signature readable. Desktop: column beside the letter.
        */}
        <figure className="md:col-span-4 lg:col-span-3">
          <div className="mx-auto aspect-[3/4] w-[58%] max-w-[220px] overflow-hidden bg-linen sm:w-[50%] sm:max-w-[260px] md:w-full md:max-w-none">
            <StoryImage
              src="/static-men-image/men.jpeg"
              alt={t.portraitAlt}
              eager
              className="h-full w-full object-cover object-center img-tone"
            />
          </div>
        </figure>

        {/* Letter body */}
        <div className="py-8 md:col-span-8 md:py-0 lg:col-span-9 lg:max-w-3xl">
          <p className="eyebrow text-stone">{t.label}</p>

          <h2
            id="edito-title"
            className="mt-3 font-serif text-[2rem] italic leading-[1.05] sm:text-5xl md:text-6xl"
          >
            {t.headline}
          </h2>

          <div className="mt-5 h-px w-16 bg-ink md:mt-6" />

          <p className="mt-5 font-sans text-[15px] leading-7 text-stone sm:text-base sm:leading-8 md:mt-6">
            {t.intro}
          </p>

          <p className="mt-5 font-sans text-[15px] leading-7 text-stone sm:text-base sm:leading-8 md:mt-6">
            {t.inspiring}
          </p>

          <ul className="mt-4 space-y-3 font-sans text-[15px] leading-7 text-stone sm:text-base sm:leading-8">
            {t.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-oxblood"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 font-sans text-[15px] leading-7 text-stone sm:text-base sm:leading-8 md:mt-6">
            {t.closing}
          </p>

          <p className="mt-7 font-serif text-xl italic sm:mt-8 sm:text-2xl">
            <span aria-hidden="true">🍂 </span>
            {t.signOff}
          </p>
          <p className="mt-2 font-serif text-xl sm:text-2xl">{t.byline}</p>

          <address className="mt-7 not-italic sm:mt-8">
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
