import { useEffect } from "react";
import { Film, ExternalLink } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdj9RHMxzTp3JVuCDbE46Su7YW5DImKpxFJNeAkITlVf6s5uA/viewform?usp=sharing&ouid=103013192961447467742";

export default function StorySubmission() {
  // Redirect to Google Form on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Redirect after a brief delay to show the page first
    const timer = setTimeout(() => {
      window.location.href = GOOGLE_FORM_URL;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10 min-h-[70vh] flex flex-col items-center justify-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient text-primary-foreground shadow-glow mb-6 animate-pulse">
            <Film className="h-8 w-8" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Trishul Visionary Studios</p>
          <h1 className="mt-4 max-w-4xl mx-auto font-display text-5xl leading-tight sm:text-7xl">
            Story <span className="text-gradient-gold">Submission</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Redirecting you to our submission form...
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-2 w-2 rounded-full bg-primary animate-bounce"></div>
            </div>
            
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Open Submission Form
              <ExternalLink className="h-4 w-4" />
            </a>
            
            <p className="mt-6 text-sm text-muted-foreground">
              If you're not redirected automatically, click the button above
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
