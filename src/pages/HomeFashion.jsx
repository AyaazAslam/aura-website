import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useLanguage } from "../common/language";
import { storyPath } from "../common/stories";
import { StoryImage } from "../common/ui";
import { fashionStories as baseStories } from "../data/homeFashionStories";
import { useLocalizedStories } from "../common/useLocalizedStories";

const copy = {
  EN: {
    label: "The Fashion Edit",
    eyebrow: "Curated for you",
    titleA: "The Fashion",
    titleB: "Edit.",
    intro: "The latest looks, statement pieces, and personal style moments worth saving.",
    showStory: (n) => `Show story ${n}`,
    prev: "Previous stories",
    next: "Next stories",
    pause: "Pause stories",
    play: "Play stories",
    all: "Explore all fashion stories",
  },
  FR: {
    label: "La sélection mode",
    eyebrow: "Choisi pour vous",
    titleA: "La sélection",
    titleB: "Mode.",
    intro: "Les looks du moment, pièces phares et moments de style à garder.",
    showStory: (n) => `Afficher l’histoire ${n}`,
    prev: "Histoires précédentes",
    next: "Histoires suivantes",
    pause: "Mettre le défilement en pause",
    play: "Reprendre le défilement",
    all: "Voir toutes les histoires mode",
  },
};

const AUTOPLAY_DELAY = 5000;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const isAtEnd = (track) =>
  track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;

const HomeFashion = () => {
  const { lang } = useLanguage();
  const t = copy[lang];
  const fashionStories = useLocalizedStories(baseStories);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false); // hover or focus inside the section
  const [stopped, setStopped] = useState(false); // the visitor turned autoplay off

  const scrollToCard = useCallback((index) => {
    const track = trackRef.current;
    const card = track?.children[index];

    if (!card) return;

    track.scrollTo({
      left: card.offsetLeft,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, []);

  // Tracks the card nearest the left edge so the dots stay in sync with swiping.
  const handleScroll = () => {
    const track = trackRef.current;

    if (!track) return;

    if (isAtEnd(track)) {
      setActiveIndex(fashionStories.length - 1);
      return;
    }

    let nearest = 0;
    let smallestGap = Infinity;

    Array.from(track.children).forEach((card, index) => {
      const gap = Math.abs(card.offsetLeft - track.scrollLeft);

      if (gap < smallestGap) {
        smallestGap = gap;
        nearest = index;
      }
    });

    setActiveIndex(nearest);
  };

  const showNext = useCallback(() => {
    const track = trackRef.current;

    if (!track) return;

    if (isAtEnd(track)) {
      scrollToCard(0);
    } else {
      scrollToCard(Math.min(activeIndex + 1, fashionStories.length - 1));
    }
  }, [activeIndex, scrollToCard, fashionStories.length]);

  const showPrevious = () => {
    scrollToCard(Math.max(activeIndex - 1, 0));
  };

  // Autoplay pauses while hovered or focused, can be stopped by the visitor, and is off for
  // reduced motion.
  useEffect(() => {
    if (paused || stopped || prefersReducedMotion()) return undefined;

    const timer = setInterval(showNext, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [paused, stopped, showNext]);

  return (
    <section
      id="fashion"
      aria-roledescription="carousel"
      aria-label={t.label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="bg-ivory py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] sm:px-8 lg:px-12">
        {/* Heading — tighter eyebrow→title; consistent gap before the image track */}
        <div className="flex flex-col justify-between gap-5 px-5 sm:gap-6 sm:px-0 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-stone">{t.eyebrow}</p>

            <h2 className="mt-3 font-serif text-4xl leading-none sm:text-5xl md:text-6xl lg:text-7xl">
              {t.titleA} <em className="italic text-oxblood">{t.titleB}</em>
            </h2>
          </div>

          <p className="max-w-sm font-sans text-sm leading-7 text-stone">{t.intro}</p>
        </div>

        {/* Track — starts flush on mobile so cards feel larger */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:mt-12 sm:gap-6 sm:px-0"
        >
          {fashionStories.map((story, index) => (
            <Link
              key={story.number}
              to={storyPath(story)}
              aria-roledescription="slide"
              className="group w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                <StoryImage
                  src={story.image}
                  alt={story.title}
                  eager={index < 3}
                  className="h-full w-full object-cover img-tone"
                />

                <span className="absolute top-4 left-4 bg-ivory px-3 py-1.5 font-serif text-base italic text-oxblood">
                  {story.number}
                </span>
              </div>

              <div className="border-b border-ink/15 py-5">
                <p className="font-sans text-[10px] font-medium tracking-[0.25em] text-oxblood uppercase">
                  {story.category}
                </p>

                <h3 className="mt-3 font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-oxblood sm:text-3xl">
                  {story.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between gap-6 px-5 sm:mt-10 sm:px-0">
          <div className="flex min-w-0 items-center gap-1.5">
            {fashionStories.map((story, index) => (
              <button
                key={story.number}
                type="button"
                onClick={() => scrollToCard(index)}
                aria-label={t.showStory(index + 1)}
                aria-current={activeIndex === index}
                className="group flex h-8 items-center"
              >
                <span
                  className={`block h-[2px] transition-all duration-500 ${
                    activeIndex === index
                      ? "w-8 bg-ink"
                      : "w-3 bg-ink/25 group-hover:bg-ink/60"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setStopped((value) => !value)}
              aria-label={stopped ? t.play : t.pause}
              aria-pressed={stopped}
              className="flex h-10 w-10 items-center justify-center border border-ink/20 transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-ivory"
            >
              {stopped ? (
                <Play className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Pause className="h-4 w-4" strokeWidth={1.5} />
              )}
            </button>

            <button
              type="button"
              onClick={showPrevious}
              aria-label={t.prev}
              className="flex h-10 w-10 items-center justify-center border border-ink/20 transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-ivory"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label={t.next}
              className="flex h-10 w-10 items-center justify-center border border-ink/20 transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-ivory"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="mt-10 px-5 text-center sm:mt-14 sm:px-0">
          <Link to="/fashion" className="link-line">
            {t.all}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFashion;
