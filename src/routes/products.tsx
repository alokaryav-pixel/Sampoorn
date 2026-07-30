import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CTABanner, Eyebrow, PageHero, Section } from "@/components/site/Primitives";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Sampoorn" },
      { name: "description", content: "Software we own, not just ship. Meet HireSure and the products that follow." },
      { property: "og:title", content: "Products — Sampoorn" },
      { property: "og:description", content: "The Sampoorn product portfolio." },
    ],
  }),
  component: Products,
});

type Product = {
  name: string;
  status: "Live" | "In development" | "Reserved" | "Production";
  tagline: string;
  description: string;
  bullets?: string[];
  featured?: boolean;
};

const PRODUCTS: Product[] = [
  {
    name: "HireSure",
    status: "Live",
    tagline: "Career-focused education institution.",
    description:
      "A selective, career-oriented 3 and 6 month program focused on full-stack development, industry tools, and placement readiness.",
    bullets: [
      "Selective admission and serious cohort",
      "Mentors from actual industry",
      "Hybrid model for real-world balance",
      "Curriculum built around hiring criteria",
      "No artificial job guarantees",
    ],
    featured: true,
  },
  {
    name: "Skill Passport",
    status: "Production",
    tagline: "Bharat's skill identity",
    description: "One verified identity for skills, work, and learning, matched to the right opportunities by AI.",
  },
  {
    name: "Campus Hire",
    status: "Production",
    tagline: "For Colleges & Placement Teams",
    description:
      "Create drives, manage eligibility, schedule rounds, update student status, publish results, and generate placement reports from one unified platform.",
  },
  {
    name: "Open Skill Foundation",
    status: "In development",
    tagline: "Reserved",
    description:
      "Open Skill Foundation is a non-profit institution building open infrastructure, standards, research and innovation systems for India's evolving workforce economy.",
  },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Software we own,"
        serifPart="not just ship."
        lede="Innovation drives everything we build. Our growing portfolio of products empowers businesses to work smarter, adapt faster, and stay ahead."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-12">
          {PRODUCTS.map((p) =>
            p.featured ? <FeaturedCard key={p.name} product={p} /> : <ProductCard key={p.name} product={p} />,
          )}
        </div>
      </Section>

      <CTABanner
        title="Partner with us"
        serifPart="on what comes next."
        lede="Interested in shaping the next Sampoorn product? We'd like to hear from you."
      />
    </>
  );
}

function FeaturedCard({ product }: { product: Product }) {
  return (
    <div className="group lg:col-span-12 relative overflow-hidden rounded-3xl bg-[var(--navy-deep)] p-10 md:p-16 text-white">
      <div className="absolute inset-0 opacity-70 grad-hero" />
      <div className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="eyebrow !text-white/70">Flagship product</div>
          <div className="mt-6 flex items-baseline gap-3">
            <div className="text-5xl md:text-7xl font-medium tracking-tight text-white">{product.name}</div>
            <div className="text-[10px] uppercase tracking-widest text-white/60 border border-white/20 rounded-full px-2 py-0.5">
              {product.status}
            </div>
          </div>
          <p className="serif mt-6 text-2xl md:text-3xl italic text-white/90 max-w-md leading-tight">
            {product.tagline}
          </p>
          <p className="mt-6 max-w-md text-white/70 leading-relaxed">{product.description}</p>
          <div className="mt-10 inline-flex items-center gap-2 text-sm">
            <a
              href="https://hiresure.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              Explore HireSure
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
        {product.bullets && (
          <ul className="grid gap-3">
            {product.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/85 backdrop-blur"
              >
                <span className="mt-2 h-1 w-3 bg-[var(--electric)]" />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const _ = Eyebrow;
  void _;
  return (
    <div className="card-elevated card-elevated-hover lg:col-span-4 p-8 flex flex-col bg-[color-mix(in_oklab,var(--navy)_10%,var(--paper))]">
      <div className="flex items-center justify-between">
        <div className="eyebrow">{product.status}</div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="mt-6 text-2xl font-medium tracking-tight">{product.name}</div>
      <div className="mt-1 serif italic text-muted-foreground">{product.tagline}</div>
      <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
    </div>
  );
}
