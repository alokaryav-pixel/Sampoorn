import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CTABanner, Eyebrow, PageHero, Section } from "@/components/site/Primitives";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Sampoorn" },
      { name: "description", content: "Field notes, essays and briefings from our practitioners on enterprise technology." },
      { property: "og:title", content: "Insights — Sampoorn" },
      { property: "og:description", content: "Notes from the field, written by the people doing the work." },
    ],
  }),
  component: Insights,
});

const CATEGORIES = ["All", "Modernization", "AI", "Data", "Cloud", "Leadership", "Blockchain"];

const FEATURED = {
  cat: "Modernization",
  date: "Jun 2026",
  read: "12 min read",
  title: "The quiet decade: what the next ten years of enterprise modernization will actually look like",
  excerpt: "A long-form essay on the shift from platform migration to domain-by-domain replacement, and what it demands from technology leaders.",
};

const ARTICLES = [
  { cat: "AI", date: "May 2026", read: "8 min", title: "Beyond copilots: designing systems that let AI do real work" },
  { cat: "Data", date: "May 2026", read: "6 min", title: "Governance as a product: how regulated firms are re-thinking data" },
  { cat: "Cloud", date: "Apr 2026", read: "9 min", title: "The FinOps hangover: paying for what you don't understand" },
  { cat: "Leadership", date: "Apr 2026", read: "5 min", title: "What a CTO owes the board in year one" },
  { cat: "Blockchain", date: "Mar 2026", read: "10 min", title: "Settlement, not speculation: enterprise chains in 2026" },
  { cat: "Modernization", date: "Feb 2026", read: "7 min", title: "The case against big-bang migrations, again" },
];

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from"
        serifPart="the field."
        lede="Essays and briefings from our practitioners on the systems, teams and decisions shaping enterprise technology."
      />

      <Section>
        <div className="flex flex-wrap items-center gap-2 border-b hairline pb-6">
          {CATEGORIES.map((c, i) => (
            <button
              key={c}
              className={
                "rounded-full px-4 py-2 text-sm transition " +
                (i === 0 ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground")
              }
            >
              {c}
            </button>
          ))}
        </div>

        <article className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Eyebrow>{FEATURED.cat} · Featured</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-5xl font-medium tracking-tight leading-tight">
              {FEATURED.title}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{FEATURED.excerpt}</p>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{FEATURED.date}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>{FEATURED.read}</span>
            </div>
            <div className="mt-10 inline-flex items-center gap-2 text-sm text-foreground border-b hairline pb-1">
              Read the essay <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="aspect-[4/3] w-full rounded-3xl grad-hero" />
          </div>
        </article>

        <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <div key={a.title} className="card-elevated card-elevated-hover p-8 flex flex-col">
              <div className="eyebrow">{a.cat}</div>
              <div className="mt-5 text-xl font-medium tracking-tight leading-snug">{a.title}</div>
              <div className="mt-auto pt-8 flex items-center gap-3 text-xs text-muted-foreground">
                <span>{a.date}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                <span>{a.read}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-3xl border hairline bg-secondary/40 p-10 md:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Newsletter</Eyebrow>
              <h3 className="mt-5 text-3xl md:text-5xl font-medium tracking-tight">
                A monthly briefing, <span className="serif italic">worth reading.</span>
              </h3>
              <p className="mt-6 text-muted-foreground max-w-lg">One essay, one field note, one recommendation. Nothing more.</p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-full border hairline bg-background px-5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--electric)]/40"
              />
              <button className="h-12 rounded-full bg-foreground px-6 text-sm font-medium text-background">Subscribe</button>
            </form>
          </div>
        </div>
      </Section>

      <CTABanner title="Have an idea" serifPart="to publish with us?" />
    </>
  );
}