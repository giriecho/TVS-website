import { Link } from "react-router-dom";
import logo from "@/assets/tvs-symbol.png";
import { Instagram, Youtube, Mail, MapPin } from "lucide-react";

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialLinks = [
  { Icon: Instagram, href: "https://www.instagram.com/trishulvisionarystudios", label: "Instagram" },
  { Icon: Youtube, href: "https://www.youtube.com/@TrishulVisionaryStudios", label: "YouTube" },
  { Icon: XIcon, href: "https://x.com/TrishulVSoffl", label: "X (Twitter)" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Trishul Visionary Studios" className="h-16 w-16 object-contain" />
            <div className="leading-tight">
              <p className="font-display text-lg tracking-[0.25em] text-gradient-gold">TRISHUL</p>
              <p className="font-display text-[11px] tracking-[0.4em] text-muted-foreground">VISIONARY STUDIOS</p>
            </div>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A premier production house crafting powerful narratives, cutting-edge visuals,
            and cinematic experiences that resonate globally.
          </p>
          <div className="flex gap-3 pt-2">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-glow"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/projects", "Projects"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground transition-colors hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Studio</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Kavuri Hills, Hyderabad, India</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Info@trishulvisionarystudios.in</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Trishul Visionary Studios LLP. All rights reserved.</p>
          <p className="tracking-[0.3em] uppercase">Made in Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}
