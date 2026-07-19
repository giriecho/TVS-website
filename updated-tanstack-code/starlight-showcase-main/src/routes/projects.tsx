import { createFileRoute } from "@tanstack/react-router";
import balwanthAsset from "@/assets/hey-balwanth-poster.jpg.asset.json";
const balwanth = balwanthAsset.url;
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Trishul Visionary Studios" },
      { name: "description", content: "Our slate — starting with our debut feature Hey Balwanth, now streaming exclusively on ZEE5." },
      { property: "og:title", content: "Projects — Trishul Visionary Studios" },
      { property: "og:description", content: "Our debut feature Hey Balwanth is now streaming on ZEE5." },
    ],
  }),
  component: Projects,
});

const upcoming = [
  { title: "Untitled Feature #2", tag: "In Development", desc: "A grounded thriller set against the neon underbelly of a South Indian metropolis." },
  { title: "Anthology Series", tag: "Concept", desc: "Four directors. Four cities. One night in monsoon India." },
  { title: "Documentary", tag: "Research", desc: "Tracing the sonic heritage of Telugu cinema across seven decades." },
];

function Projects() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 bg-hero" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Projects & Slate</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">
            Our <span className="text-gradient-gold">Debut Venture</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            A first step defined by ambition, craft and heart — with much more on the horizon.
          </p>
        </div>
      </section>

      {/* Featured project */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[3fr_4fr] lg:items-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gold-gradient opacity-30 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-card">
              <img src={balwanth} alt="Hey Balwanth" width={1200} height={1600} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary">
              <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-primary" /> Released • Streaming on ZEE5
            </span>
            <h2 className="mt-6 font-display text-6xl sm:text-7xl">
              Hey <span className="text-gradient-gold">Balwanth</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A perfect blend of clean comedy and heartfelt family drama. Krishna, a
              postgraduate who idolizes his father, sees his life turn into a chaotic
              maze when he inherits his father's business — only to discover it is an
              illegal lodge. A hilarious yet sensitive exploration of the father-son
              dynamic and a young man's moral battle between loyalty and conscience.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                ["Produced By", "B. Narendra Reddy"],
                ["Banner", "Trishul Visionary Studios"],
                ["Written & Directed", "Gopi Atchara"],
                ["Music Director", "Vivek Sagar"],
                ["Lead Cast", "Suhas & Shivani Nagaram"],
                ["Supporting", "Naresh V. Krishna, Vennela Kishore, Nellore Sudarshan"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border/60 bg-card/40 p-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-sm font-medium">{v}</dd>
                </div>
              ))}
            </dl>

            <a
              href="https://www.zee5.com"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Watch on ZEE5 <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">On the Horizon</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">What's <span className="text-gradient-gold">next</span>.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {upcoming.map((u, i) => (
            <div key={u.title} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-8 transition-all hover:border-primary/60 hover:-translate-y-1">
              <div className="absolute inset-x-0 top-0 h-px animate-shimmer" />
              <p className="font-display text-6xl text-primary/10">0{i + 2}</p>
              <span className="mt-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary">
                {u.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl">{u.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
