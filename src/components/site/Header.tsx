import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "@/assets/tvs-symbol.png";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-black/8 shadow-sm"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link to="/" className="group flex items-end gap-4">
          <div className="relative h-12 w-12 shrink-0" style={{ transform: 'scale(1.57)', transformOrigin: 'center' }}>
            <img src={logo} alt="Trishul Visionary Studios" className="h-full w-full object-contain drop-shadow-md" />
          </div>
          <div className="flex flex-col justify-end leading-none pb-0.5">
            <span className="font-display text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-white font-black drop-shadow-lg">TRISHUL</span>
            <span className="font-display text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.35em] text-white font-bold drop-shadow-lg">VISIONARY STUDIOS</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => {
            const active = isActive(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative px-4 py-2 text-sm font-bold transition-colors ${
                  active ? "text-primary" : "text-white hover:text-primary"
                }`}
              >
                {n.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-primary transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md hover:shadow-lg transition-all hover:scale-105"
        >
          Work With Us
        </Link>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl animate-fade-up shadow-lg">
          <nav className="flex flex-col p-4">
            {NAV.map((n) => {
              const active = isActive(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-4 py-3 text-sm font-bold transition-colors ${
                    active ? "text-primary bg-primary/10" : "text-white hover:bg-white/10 hover:text-primary"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gold-gradient px-5 py-3 text-sm font-bold text-primary-foreground shadow-md"
            >
              Work With Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
