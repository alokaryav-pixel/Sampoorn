import { createFileRoute } from "@tanstack/react-router";
import { Banknote, GraduationCap, HeartPulse, Landmark, Radio, ShoppingBag, Wrench, Cpu } from "lucide-react";
import { CTABanner, PageHero, Section, SectionHeading } from "@/components/site/Primitives";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Sampoorn" },
      { name: "description", content: "Deep specialization across telecom, banking, manufacturing, retail, healthcare, education, government and technology." },
      { property: "og:title", content: "Industries — Sampoorn" },
      { property: "og:description", content: "Built for the industries that can't afford to fail." },
    ],
  }),
  component: Industries,
});

const INDUSTRIES = [
  { t: "Telecom", d: "OSS/BSS modernization, network platforms and customer experience at national scale.", i: <Radio className="h-5 w-5" /> },
  { t: "Banking", d: "Core banking modernization, digital channels and regulatory-grade delivery.", i: <Banknote className="h-5 w-5" /> },
  { t: "Manufacturing", d: "Connected operations, industrial data platforms and smart factory programs.", i: <Wrench className="h-5 w-5" /> },
  { t: "Retail", d: "Unified commerce, omnichannel platforms and demand-driven supply.", i: <ShoppingBag className="h-5 w-5" /> },
  { t: "Healthcare", d: "Clinical platforms, interoperability and privacy-first data programs.", i: <HeartPulse className="h-5 w-5" /> },
  { t: "Education", d: "Learning platforms and institutional systems for lifelong learners.", i: <GraduationCap className="h-5 w-5" /> },
  { t: "Government", d: "Digital public services, secure identity and citizen-centric platforms.", i: <Landmark className="h-5 w-5" /> },
  { t: "Technology", d: "Engineering leverage for software companies scaling their platforms.", i: <Cpu className="h-5 w-5" /> },
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for the industries"
        serifPart="that can't afford to fail."
        lede="Deep specialization across eight sectors, each with a dedicated set of practitioners, patterns and pre-built accelerators."
      />

      <Section>
        <div className="grid gap-px overflow-hidden rounded-2xl border hairline sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((n, i) => (
            <div key={n.t} className="group bg-background p-8 transition hover:bg-secondary">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground group-hover:bg-background">{n.i}</div>
                <div className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              </div>
              <div className="mt-8 text-xl font-medium tracking-tight">{n.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{n.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading eyebrow="Depth" title="Where our practitioners" serifPart="have lived." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { q: "A national telecom rebuild without a single customer outage.", w: "Telecom" },
            { q: "A retail bank's channel platform, re-architected in eighteen months.", w: "Banking" },
            { q: "A country-scale digital identity, delivered on time and audited on land.", w: "Government" },
          ].map((s) => (
            <blockquote key={s.w} className="card-elevated p-8">
              <div className="eyebrow">{s.w}</div>
              <p className="serif mt-6 text-2xl leading-tight text-foreground">“{s.q}”</p>
            </blockquote>
          ))}
        </div>
      </Section>

      <CTABanner title="Bring us the problem" serifPart="only your industry has." />
    </>
  );
}