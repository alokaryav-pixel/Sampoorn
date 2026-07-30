import { createFileRoute } from "@tanstack/react-router";
import { Gauge, Lightbulb, Network, RefreshCw, Scaling, ShieldCheck } from "lucide-react";
import { CTABanner, FeatureCard, PageHero, Section, SectionHeading } from "@/components/site/Primitives";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Sampoorn" },
      { name: "description", content: "Business outcomes delivered through modernization, innovation, integration, optimization, security, and scalable foundations." },
      { property: "og:title", content: "Solutions — Sampoorn" },
      { property: "og:description", content: "Business outcomes delivered through technology." },
    ],
  }),
  component: Solutions,
});

const SOLUTIONS = [
  { t: "Modernize", d: "Modernize legacy systems, applications, and business processes to create agile, scalable, and future-ready enterprises.", i: <RefreshCw className="h-5 w-5" /> },
  { t: "Innovate", d: "Design and build innovative digital products, platforms, and customer experiences that accelerate business growth.", i: <Lightbulb className="h-5 w-5" /> },
  { t: "Connect", d: "Integrate applications, data, and enterprise platforms to create seamless, connected business ecosystems.", i: <Network className="h-5 w-5" /> },
  { t: "Optimize", d: "Improve operational efficiency through intelligent automation, streamlined workflows, and data-driven decision making.", i: <Gauge className="h-5 w-5" /> },
  { t: "Secure", d: "Build secure, resilient, and compliant technology solutions that protect business-critical systems and data.", i: <ShieldCheck className="h-5 w-5" /> },
  { t: "Scale", d: "Create flexible technology foundations that enable sustainable growth and adapt to evolving business needs.", i: <Scaling className="h-5 w-5" /> },
];

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Outcomes,"
        serifPart="not tech stacks."
        lede="We package our practices into named enterprise programs. Each one is a joint plan with your leadership and a joint team on the ground."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <FeatureCard
              key={s.t}
              index={String(i + 1).padStart(2, "0")}
              icon={s.i}
              title={s.t}
              description={s.d}
            />
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-3xl border hairline p-10 md:p-16 bg-secondary/40">
          <SectionHeading eyebrow="Delivery" title="A joint program," serifPart="not a proposal." />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { t: "Frame", d: "Two weeks with your leaders to define the outcome and the constraints." },
              { t: "Shape", d: "A named program with milestones, KPIs and a joint operating model." },
              { t: "Ship", d: "Senior delivery pods embedded into your teams, on a single standard." },
              { t: "Sustain", d: "We hand over to your team — or stay to operate at agreed SLAs." },
            ].map((s, i) => (
              <div key={s.t} className="border-t hairline pt-6">
                <div className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-4 text-lg font-medium tracking-tight">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTABanner title="Shape a program" serifPart="with our team." />
    </>
  );
}