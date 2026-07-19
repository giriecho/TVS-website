import { createFileRoute, Link } from "@tanstack/react-router";
import { Film, Wand2, Mic2, PenLine, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Trishul Visionary Studios" },
      { name: "description", content: "End-to-end production, post-production, sound engineering and script development services for feature films, OTT and digital media." },
      { property: "og:title", content: "Services — Trishul Visionary Studios" },
      { property: "og:description", content: "End-to-end production and media solutions." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Film,
    title: "Feature Film & Television Production",
    body: "Full-scale project execution from script breakdown, casting and pre-visualization through to principal photography and line production.",
    tags: ["Line Production", "Casting", "Pre-Viz", "On-Set Supervision"],
  },
  {
    icon: Wand2,
    title: "Post-Production Excellence",
    body: "High-end video editing, color grading and visual effects management tailored to modern theatrical and OTT streaming standards.",
    tags: ["Editing", "Color Grade", "VFX", "Finishing"],
  },
  {
    icon: Mic2,
    title: "Sound Recording & Audio Engineering",
    body: "State-of-the-art sound design, dubbing, background scoring and music publishing capabilities for immersive auditory experiences.",
    tags: ["Sound Design", "Dubbing", "Scoring", "Music Publishing"],
  },
  {
    icon: PenLine,
    title: "Creative Consulting & Script Development",
    body: "Collaborating with writers and directors to refine narratives, polish screenplays and package projects for commercial viability.",
    tags: ["Story Room", "Screenplay Polish", "Packaging"],
  },
];

function Services() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 bg-hero" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">What We Do</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">
            End-to-End Production &{" "}
            <span className="text-gradient-gold">Media Solutions</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Comprehensive services tailored for feature films, streaming platforms and
            high-production digital media.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-10 transition-all duration-500 hover:border-primary/60"
            >
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-gradient text-primary-foreground shadow-glow">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-4xl text-primary/20">0{i + 1}</span>
                </div>
                <h2 className="mt-6 font-display text-2xl">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-10 sm:p-14">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">Ready to develop your next project?</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">Tell us about your story. We'll bring the crew, the craft and the cameras.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 lg:self-auto"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
