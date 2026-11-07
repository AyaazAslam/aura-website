import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "./siteConfig";

// Designed for dark backgrounds (ink or brand violet / oxblood token).
// Posts { email } to siteConfig.newsletterEndpoint. The success message only shows once the
// endpoint has accepted the address. Without an endpoint, the form says sign-up is not
// available yet instead of pretending the address was saved.
const NewsletterForm = ({ id, labels, className = "" }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error | unavailable

  const handleSubmit = async (e) => {
    e.preventDefault();

    const address = email.trim();

    if (!address || status === "sending") return;

    if (!siteConfig.newsletterEndpoint) {
      setStatus("unavailable");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(siteConfig.newsletterEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: address }),
      });

      if (!response.ok) throw new Error(`Sign-up failed with status ${response.status}`);

      setEmail("");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const messages = {
    idle: labels.privacy,
    sending: labels.privacy,
    done: labels.success,
    error: labels.error,
    unavailable: labels.unavailable,
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <label htmlFor={id} className="sr-only">
        {labels.placeholder}
      </label>

      <div className="flex items-end gap-4 border-b border-ivory/60 pb-3 transition-colors duration-300 focus-within:border-ivory">
        <input
          id={id}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "sending") setStatus("idle");
          }}
          placeholder={labels.placeholder}
          className="min-w-0 flex-1 bg-transparent font-sans text-base text-ivory outline-none placeholder:text-ivory/55 sm:text-sm"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex shrink-0 items-center gap-2 font-sans text-[10px] font-medium tracking-[0.22em] text-ivory uppercase transition-opacity duration-300 hover:opacity-70 disabled:opacity-50"
        >
          {labels.subscribe}
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className="mt-4 min-h-4 font-sans text-xs leading-5 text-ivory/70"
      >
        {messages[status]}
      </p>
    </form>
  );
};

export default NewsletterForm;
