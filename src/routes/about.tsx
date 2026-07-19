import { createFileRoute } from "@tanstack/react-router";
import founder from "@/assets/founder.jpg";
import { Compass, Sparkles, Handshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Trishul Visionary Studios" },
      { name: "description", content: "Hyderabad-based production house specializing in feature films, digital content, television and state-of-the-art sound design." },
      { property: "og:title", content: "About Trishul Visionary Studios" },
      { property: "og:description", content: "Creative audacity, technical precision. Meet the studio behind Hey Balwanth." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Compass, title: "Integrity in Storytelling", body: "Honoring the voice of the creator and the intelligence of the audience." },
  { icon: Sparkles, title: "Innovation", body: "Constantly evolving our workflows in video production and audio engineering." },
  { icon: Handshake, title: "Collaboration", body: "Building trusted partnerships with regional and global talent." },
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 bg-hero" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">About the Studio</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">
            Creative audacity.<br />
            <span className="text-gradient-gold">Technical precision.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Incorporated in Hyderabad's vibrant media hub, Trishul Visionary Studios LLP
            is a forward-thinking entertainment company specializing in feature films,
            digital content, television programming and state-of-the-art sound design.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 lg:grid-cols-2 lg:px-10">
        <div className="rounded-2xl border border-border/60 bg-card/60 p-10">
          <h2 className="font-display text-3xl">Who We Are</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We bridge the gap between bold independent visionaries and high-impact
            commercial cinema. From development and principal photography to final sound
            mix and distribution readiness, we provide a seamless, comprehensive
            ecosystem for creators.
          </p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card/60 p-10">
          <h2 className="font-display text-3xl">Our Mission</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            To empower filmmakers and storytellers by providing the resources, technology
            and collaborative environment needed to push creative boundaries and deliver
            world-class cinema.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Our Values</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">The principles that shape every frame.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-8 transition-all hover:border-primary/60 hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gold-gradient group-hover:text-primary-foreground">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold-gradient opacity-30 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/60">
              <img src={founder} alt="B. Narendra Reddy" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Founder & Leadership</p>
            <h2 className="mt-4 font-display text-5xl">B. Narendra Reddy</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">Founder & Managing Director</p>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              As the driving force behind Trishul Visionary Studios, B. Narendra Reddy
              established the company with a clear mandate: to back compelling,
              content-driven cinema that resonates with modern audiences.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Under his leadership, the studio successfully launched its maiden venture,
              proving its capability to manage end-to-end production — from script
              development to a global streaming release. His vision is to position
              Trishul Visionary Studios as a home for innovative creators and a
              powerhouse in regional and national cinema.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
