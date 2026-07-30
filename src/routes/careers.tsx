import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CTABanner, PageHero, Section, SectionHeading } from "@/components/site/Primitives";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Sampoorn" },
      {
        name: "description",
        content: "Join a firm that treats the craft, the client and the outcome with equal seriousness.",
      },
      { property: "og:title", content: "Careers — Sampoorn" },
      { property: "og:description", content: "Culture, benefits, hiring process and open positions at Sampoorn." },
    ],
  }),
  component: Careers,
});

const BENEFITS = [
  {
    t: "Principals, not pyramids",
    d: "You'll work next to some of the most senior engineers and consultants in the industry.",
  },
  { t: "Time to think", d: "Structured space for research, writing and study — because the work demands it." },
  { t: "Global work, local roots", d: "Distributed teams with real hubs, real gatherings and real ownership." },
  { t: "Serious compensation", d: "Top-quartile pay, meaningful upside and portable benefits." },
];

const PROCESS = [
  { t: "Conversation", d: "A no-slide chat to understand what you're looking for." },
  { t: "Craft", d: "A domain-appropriate exercise reviewed by peers, not gatekeepers." },
  { t: "Team fit", d: "Meet the people you'd actually work with." },
  { t: "Decision", d: "An answer within a week, with real feedback either way." },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work with people"
        serifPart="who take the craft seriously."
        lede="Sampoorn is built for practitioners who want to do their best work of the decade — with a firm that will back them all the way."
      />

      <Section>
        <SectionHeading
          eyebrow="Culture"
          title="A place designed for"
          serifPart="serious practitioners."
          lede="We hire slowly, we invest deeply, and we protect the conditions that make great work possible."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <div key={b.t} className="border-t hairline pt-6">
              <div className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-4 text-lg font-medium tracking-tight">{b.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Hiring" title="A calm, considered" serifPart="process." />
          </div>
          <ol className="lg:col-span-7 divide-y hairline border-y hairline">
            {PROCESS.map((p, i) => (
              <li key={p.t} className="grid grid-cols-[3rem_1fr] gap-8 py-8">
                <div className="serif text-3xl text-foreground">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="text-xl font-medium tracking-tight">{p.t}</div>
                  <p className="mt-2 text-muted-foreground">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Open roles" title="We'll come back with the open roles soon..." serifPart="" />
          <div className="text-sm text-muted-foreground"></div>
        </div>
        <div className="mt-12 divide-y hairline border-y hairline">
          {[].map((r) => (
            <div key={r} className="group flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xl md:text-2xl font-medium tracking-tight">{r}</div>
                <div className="mt-1 text-sm text-muted-foreground"></div>
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-foreground">
                <span>Introduce yourself</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner title="Let's talk?" serifPart="Write to us in how you can help us." />
    </>
  );
}
