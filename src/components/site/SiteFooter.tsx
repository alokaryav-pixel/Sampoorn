import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/sampoorn-logo.png.asset.json";

const COLS = [
  {
    heading: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/careers", label: "Careers" },
      { to: "/insights", label: "Insights" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { to: "/services", label: "IT Services" },
      { to: "/services", label: "Technology Consulting" },
      { to: "/services", label: "Engineering Products" },
      { to: "/services", label: "Education & Learning" },
      { to: "/services", label: "Blockchain Services" },
      { to: "/services", label: "Digital & Social Media Marketing" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { to: "/solutions", label: "Solutions" },
      { to: "/products", label: "Products" },
      { to: "/industries", label: "Industries" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t hairline bg-[var(--navy-deep)] text-white/80">
      <div className="container-page py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="Sampoorn" className="h-20 w-auto rounded-md object-contain" />
              <span className="text-2xl font-semibold tracking-tight text-white/90 whitespace-nowrap">Sampoorn</span>
            </div>
            <p className="serif mt-6 max-w-md text-2xl leading-tight text-white/90">
              Building the digital backbone of modern enterprise.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-medium text-[var(--navy-deep)] hover:bg-white/90 transition"
            >
              Start a conversation →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLS.map((col) => (
              <div key={col.heading}>
                <div className="eyebrow !text-white/50">{col.heading}</div>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-white/70 hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Sampoorn Technologies. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
