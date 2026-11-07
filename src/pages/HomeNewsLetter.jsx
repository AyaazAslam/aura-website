import { useLanguage } from "../common/language";
import NewsletterForm from "../common/NewsletterForm";

const copy = {
  EN: {
    eyebrow: "The Magazine Edit",
    title: "A Little More Style in Your Inbox",
    body: "Get the latest fashion stories, beauty inspiration and culture updates delivered straight to your inbox.",
    placeholder: "Enter your email address",
    subscribe: "Subscribe",
    privacy: "By subscribing, you agree to receive magazine updates by email.",
    success: "Thank you. You are now on the list.",
    error: "Something went wrong. Please try again.",
    unavailable: "Sign-up is not available yet. Please try again later.",
  },
  FR: {
    eyebrow: "L’édition du magazine",
    title: "Un peu plus de style dans votre boîte mail",
    body: "Recevez les dernières histoires mode, l’inspiration beauté et l’actualité culture directement dans votre boîte mail.",
    placeholder: "Saisissez votre adresse e-mail",
    subscribe: "S’inscrire",
    privacy: "En vous inscrivant, vous acceptez de recevoir les actualités du magazine par e-mail.",
    success: "Merci. Vous êtes désormais sur la liste.",
    error: "Une erreur est survenue. Merci de réessayer.",
    unavailable: "L’inscription n’est pas encore disponible. Merci de réessayer plus tard.",
  },
};

const HomeNewsLetter = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  // bg-oxblood now resolves to brand violet #784888 (see index.css tokens).
  return (
    <section id="subscribe" className="bg-oxblood py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="eyebrow text-ivory/70">{t.eyebrow}</p>

        <h2 className="mx-auto mt-3 max-w-3xl font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
          {t.title}
        </h2>

        <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-8 text-ivory/75">
          {t.body}
        </p>

        <NewsletterForm
          id="newsletter-email"
          className="mx-auto mt-12 max-w-xl text-left"
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
    </section>
  );
};

export default HomeNewsLetter;
