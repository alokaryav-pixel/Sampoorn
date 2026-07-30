import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/sampoorn-logo.png.asset.json";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/products", label: "Products" },
  { to: "/customers", label: "Customers" },
  { to: "/industries", label: "Industries" },
  { to: "/careers", label: "Careers" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-xl bg-background/70 border-b hairline" : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="flex items-center gap-3 group outline-none focus:outline-none focus-visible:outline-none"
          aria-label="Sampoorn home"
        >
          <img src={logoAsset.url} alt="Sampoorn" className="h-20 w-auto rounded-md object-contain" />
          <span className="text-2xl font-semibold tracking-tight text-foreground whitespace-nowrap">Sampoorn</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors outline-none focus:outline-none focus-visible:outline-none"
              activeProps={{
                className:
                  "px-3 py-2 text-sm text-foreground outline-none focus:outline-none focus-visible:outline-none",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/contact"
            className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:opacity-90 transition outline-none focus:outline-none focus-visible:outline-none"
          >
            Talk to us
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hairline border"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden container-page pb-6">
          <div className="flex flex-col gap-1 pt-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground border-b hairline outline-none focus:outline-none focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-foreground text-background text-sm font-medium"
            >
              Talk to us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
