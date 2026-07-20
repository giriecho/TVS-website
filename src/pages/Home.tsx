import { Link } from "react-router-dom";
import hero from "@/assets/hero-cinema.gif";
import heroMobile from "@/assets/hero-cinema.jpg";
import balwanth from "@/assets/hey-balwanth-poster.jpg";
import cinematicBanner from "@/assets/cinematic-banner.jpg";
import pillarNarrative from "@/assets/pillar-narrative.jpg";
import pillarProduction from "@/assets/pillar-production.jpg";
import pillarCollaboration from "@/assets/pillar-collaboration.jpg";
import { ArrowRight, Film, Sparkles, Users, Play } from "lucide-react";

const pillars = [
  { icon: Film, title: "Narrative Excellence", body: "Script-to-screen storytelling with depth, intention and cinematic craft.", bg: pillarNarrative, alt: "Vintage script pages bathed in warm amber light" },
  { icon: Sparkles, title: "Cutting-Edge Production", body: "Top-tier camera, sound and post workflows that build immersive worlds.", bg: pillarProduction, alt: "Cinema camera silhouette against an amber light source" },
  { icon: Users, title: "Strategic Collaboration", body: "Partnering with visionary directors, writers and talent shaping tomorrow.", bg: pillarCollaboration, alt: "Creative team silhouettes reviewing a storyboard" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-screen overflow-hidden pt-24">
        {/* Hero GIF with built-in animations - Desktop version */}
        <img
          src={hero}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover hidden sm:block"
        />
        {/* Hero static image - Mobile version */}
        <img
          src={heroMobile}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover block sm:hidden"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/90" />
        <div className="absolute inset-0 grain" />

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
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Our Core Pillars</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Craft, technology and <span className="text-gradient-gold">partnership</span>.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Every frame is a promise. We fuse rigorous storytelling with cinematic technology to create work that lingers long after the credits roll.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 p-8 transition-all duration-500 hover:border-primary/60 hover:-translate-y-1"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <img
                src={p.bg}
                alt={p.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-gradient text-primary-foreground shadow-glow">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{p.body}</p>
                <p className="mt-6 font-display text-6xl text-primary/20">0{i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="relative overflow-hidden border-y border-border/60 bg-card/40 py-28">
        <div className="absolute inset-0 opacity-30 bg-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/60" />
        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-gradient-gold drop-shadow-lg">Founder's Vision</p>
          <blockquote className="mt-8 font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl text-foreground drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            "Cinema isn't just about capturing moving images;
            it's about capturing the <span className="text-gradient-gold">human experience</span>.
            At Trishul Visionary Studios, we look at every project as a blank canvas waiting
            to disrupt, inspire, and elevate the art of filmmaking."
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <p className="text-base font-bold uppercase tracking-[0.3em] text-gradient-gold drop-shadow-lg">B. Narendra Reddy</p>
            <div className="h-px w-12 bg-primary" />
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

      {/* CINEMATIC BANNER STRIP */}
      <section className="relative overflow-hidden">
        <div
          className="relative h-[280px] w-full bg-cover bg-center sm:h-[360px] lg:h-[420px]"
          style={{ backgroundImage: `url(${cinematicBanner})` }}
          role="img"
          aria-label="Cinematic film set with amber light beams"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-background/40" />

          <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary drop-shadow-lg">Behind the Lens</p>
              <h2 className="mt-4 font-display text-3xl leading-tight font-bold sm:text-5xl text-foreground drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Every light, every frame — <span className="text-gradient-gold">engineered</span> for wonder.
              </h2>
            </div>
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
              to="/story-submission"
              className="inline-flex items-center gap-2 self-start rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 lg:self-auto"
            >
              Start a Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
