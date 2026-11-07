import { useState } from "react";
import { useLanguage } from "./language";

// Shapes cut from the client's reference images. The mask lets them take the text colour,
// so they work on both light and dark backgrounds.
const maskStyle = (src) => ({
  WebkitMaskImage: `url(${src})`,
  maskImage: `url(${src})`,
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
});

export const Logo = ({ size = "sm" }) => {
  const large = size === "lg";

  return (
    <span className="flex flex-col items-center">
      <span
        aria-hidden="true"
        className={
          large ? "mb-2 block h-8 w-5 bg-current sm:h-10 sm:w-6" : "mb-0.5 block h-5 w-[12px] bg-current md:h-6 md:w-[15px]"
        }
        style={maskStyle("/question-mark.svg")}
      />
      <span
        role="img"
        aria-label="INSOLITE"
        className={large ? "block h-14 bg-current sm:h-16" : "block h-10 bg-current md:h-12"}
        style={{ ...maskStyle("/wordmark-insolite.svg"), aspectRatio: "4.3" }}
      />

      <span
        className={
          large
            ? "mt-3 whitespace-nowrap text-[11px] font-semibold tracking-[0.2em] uppercase"
            : "mt-1.5 whitespace-nowrap text-[9px] font-semibold tracking-[0.2em] uppercase md:text-[10px] md:tracking-[0.22em]"
        }
      >
        Magazine x Khim Asriel
      </span>
    </span>
  );
};

/**
 * LanguageToggle — FR / EN control.
 *
 * Behaviour contract (must stay true once live):
 * - The underline sits ONLY under the active language.
 * - When page copy is French, FR is underlined; when English, EN is underlined.
 * - `lang` from LanguageProvider is the single source of truth for both the
 *   underline and all `copy[lang]` / localized story strings.
 *
 * Layout: extra horizontal padding so the block sits clear of the logo and
 * hamburger on small screens (was reading as cramped against the wordmark).
 *
 * `inverted` = light text for dark backgrounds (footer).
 */
export const LanguageSwitch = ({ className = "", inverted = false }) => {
  const { lang, setLang } = useLanguage();

  const activeTone = inverted ? "text-ivory" : "text-ink";
  const idleTone = inverted
    ? "text-ivory/50 hover:text-ivory"
    : "text-stone hover:text-ink";
  const ruleTone = inverted ? "bg-ivory" : "bg-ink";

  return (
    <div
      role="group"
      aria-label="Language"
      className={`items-center gap-3 px-2 font-sans text-[11px] font-medium tracking-[0.2em] sm:gap-3.5 sm:px-3 ${className}`}
    >
      {["FR", "EN"].map((code, index) => {
        const isActive = lang === code;

        return (
          <span key={code} className="flex items-center gap-3 sm:gap-3.5">
            {index > 0 && (
              <span aria-hidden="true" className="opacity-35">
                /
              </span>
            )}

            <button
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={isActive}
              aria-current={isActive ? "true" : undefined}
              className={`relative py-1.5 transition-colors duration-300 ${
                isActive ? activeTone : idleTone
              }`}
            >
              {code}
              {/* Underline mirrors the live language — never a static “EN” mark */}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -bottom-0.5 h-px origin-left transition-transform duration-300 ${ruleTone} ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          </span>
        );
      })}
    </div>
  );
};

// Falls back to a neutral tile if an image fails to load.
export const StoryImage = ({ src, alt, eager = false, className = "" }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-linen ${className}`}
      >
        <span className="font-serif text-2xl italic text-stone">Insolite</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};
