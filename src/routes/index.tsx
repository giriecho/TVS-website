import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-cinema.jpg";
import balwanth from "@/assets/hey-balwanth-poster.jpg";
import logo from "@/assets/tvs-logo-color.png";
import { ArrowRight, Film, Sparkles, Users, Play } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trishul Visionary Studios — Where Imagination Meets the Screen" },
      { name: "description", content: "Premier production house crafting powerful narratives, cutting-edge visuals and cinematic experiences from Hyderabad." },
      { property: "og:title", content: "Trishul Visionary Studios" },
      { property: "og:description", content: "Where Imagination Meets the Screen." },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Film, title: "Narrative Excellence", body: "Script-to-screen storytelling with depth, intention and cinematic craft." },
  { icon: Sparkles, title: "Cutting-Edge Production", body: "Top-tier camera, sound and post workflows that build immersive worlds." },
  { icon: Users, title: "Strategic Collaboration", body: "Partnering with visionary directors, writers and talent shaping tomorrow." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-screen overflow-hidden pt-24">
        <img
          src={hero}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background" />
        <div className="absolute inset-0 grain" />

        {/* floating logo */}
        <div className="absolute right-4 top-28 hidden lg:block">
          <div className="animate-float-slow relative">
            <div className="absolute inset-0 -m-10 rounded-full bg-primary/30 blur-3xl" />
            <img
              src={logo}
              alt=""
              className="relative h-72 w-72 object-contain drop-shadow-[0_0_40px_hsl(var(--primary)/0.5)]"
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10 lg:pt-28">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-primary">
              <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-primary" />
              Est. Hyderabad
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
              Where <span className="text-gradient-gold">Imagination</span>
              <br />
              Meets the Screen.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Trishul Visionary Studios is a premier production house dedicated to crafting
              powerful narratives, cutting-edge visuals and cinematic experiences that
              resonate globally.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                Work With Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/40 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                <Play className="h-4 w-4" />
                Watch our work
              </Link>
            </div>
          </div>

          {/* stats strip */}
          <div className="mt-24 grid grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-4">
            {[
              ["01", "Debut feature released"],
              ["ZEE5", "Global streaming"],
              ["360°", "In-house production"],
              ["∞", "Stories to tell"],
            ].map(([k, v]) => (
              <div key={v}>
                <p className="font-display text-3xl text-gradient-gold sm:text-4xl">{k}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* marquee */}
        <div className="relative border-y border-border/60 bg-card/40 py-5 overflow-hidden">
          <div className="flex w-max animate-marquee gap-16 whitespace-nowrap font-display text-2xl uppercase tracking-[0.3em] text-muted-foreground/60">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16">
                {["Feature Films", "★", "Sound Design", "★", "Post Production", "★", "Digital Content", "★", "Television", "★", "Music Publishing", "★"].map((t, j) => (
                  <span key={j} className={j % 2 === 1 ? "text-primary" : ""}>{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Our Core Pillars</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Craft, technology and <span className="text-gradient-gold">partnership</span>.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-8 transition-all duration-500 hover:border-primary/60 hover:-translate-y-1"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:bg-primary/25" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-gradient text-primary-foreground shadow-glow">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <p className="mt-6 font-display text-6xl text-primary/10">0{i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="relative overflow-hidden border-y border-border/60 bg-card/40 py-28">
        <div className="absolute inset-0 opacity-40 bg-hero" />
        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Founder's Vision</p>
          <blockquote className="mt-8 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            "Cinema isn't just about capturing moving images;
            it's about capturing the <span className="text-gradient-gold">human experience</span>.
            At Trishul Visionary Studios, we look at every project as a blank canvas waiting
            to disrupt, inspire, and elevate the art of filmmaking."
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary/60" />
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">B. Narendra Reddy</p>
            <div className="h-px w-12 bg-primary/60" />
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 rounded-3xl bg-gold-gradient opacity-30 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-card">
              <img src={balwanth} alt="Hey Balwanth poster" className="h-full w-full object-cover" loading="lazy" width={1200} height={1600} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">Now Streaming on ZEE5</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Debut Venture</p>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl">Hey <span className="text-gradient-gold">Balwanth</span></h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A perfect blend of clean comedy and heartfelt family drama, our debut feature
              follows Krishna — a postgraduate whose life turns into a chaotic maze when he
              inherits his father's business, only to discover it's an illegal lodge.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
              {[
                ["Lead Cast", "Suhas & Shivani Nagaram"],
                ["Director", "Gopi Atchara"],
                ["Music", "Vivek Sagar"],
                ["Status", "Released"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                  <dd className="mt-1 font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/projects"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Explore the slate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-10 sm:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl">
                Have a story worth <span className="text-gradient-gold">telling</span>?
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                From development to distribution, we build a comprehensive ecosystem for
                creators. Let's shape the future of entertainment together.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 lg:self-auto"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
