import { createFileRoute } from "@tanstack/react-router";
import { CTABanner, Eyebrow, PageHero, Section, SectionHeading, StatRow } from "@/components/site/Primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sampoorn" },
      {
        name: "description",
        content:
          "A technology firm built for the enterprise decade. Our vision, mission, values and the reasons we exist.",
      },
      { property: "og:title", content: "About — Sampoorn" },
      { property: "og:description", content: "The people, principles and journey behind Sampoorn." },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    t: "Innovation",
    d: "We continuously explore new ideas, technologies, and approaches to solve tomorrow's challenges today.",
  },
  { t: "Integrity", d: "We build relationships based on trust, transparency, and ethical business practices." },
  {
    t: "Customer Success",
    d: "Our success is measured by the success of our customers and the value we create for them.",
  },
  {
    t: "Collaboration",
    d: "We believe the best outcomes are achieved when diverse perspectives work together toward a common goal.",
  },
];

const TIMELINE = [
  { y: "2015", t: "Founded", d: "A small team of engineers, one enterprise client, one shared belief." },
  { y: "2016", t: "First managed platform", d: "Ran mission-critical infrastructure for a national telecom." },
  { y: "2019", t: "Consulting practice", d: "Formalized strategy and architecture advisory for boards." },
  { y: "2022", t: "Products", d: "Launched HireSure, our first owned enterprise product." },
  { y: "2025", t: "Global delivery", d: "Nine industries, three continents, one delivery standard." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Sampoorn"
        title="Building Technology"
        serifPart="that Drives Business Forward."
        lede="We help organizations turn ideas into impact through technology, products, and innovative solutions. Combining expertise with execution, we solve complex business challenges and build lasting value."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Vision</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-4xl font-medium tracking-tight">
              To become a globally trusted technology and consulting partner, enabling businesses to innovate,
              transform, and thrive in an ever-evolving digital world.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <Eyebrow>Mission</Eyebrow>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              We combine technology, consulting, education, and innovation to create intelligent solutions that enable
              organizations to adapt, grow, and lead with confidence in the digital era.
            </p>
          </div>
          <div className="lg:col-span-4">
            <Eyebrow>Why we exist</Eyebrow>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Technology should simplify complexity—not create it. We exist to help organizations navigate change with
              confidence by delivering practical, scalable, and innovative solutions that solve real business problems
              and create measurable outcomes.
            </p>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading eyebrow="Values" title="Four principles." serifPart="Every engagement." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border hairline sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <div key={v.t} className="bg-background p-8">
              <div className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-6 text-xl font-medium tracking-tight">{v.t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading eyebrow="Journey" title="Twelve years," serifPart="one delivery standard." />
        <ol className="mt-16 relative">
          <div className="space-y-12">
            {TIMELINE.map((t) => (
              <li key={t.y} className="grid gap-6 md:grid-cols-[7rem_1fr] md:gap-14 items-start">
                <div className="serif text-4xl md:text-5xl text-foreground">{t.y}</div>
                <div className="md:pl-8 border-l hairline md:border-l-0">
                  <div className="text-xl font-medium tracking-tight">{t.t}</div>
                  <p className="mt-2 text-muted-foreground max-w-xl">{t.d}</p>
                </div>
              </li>
            ))}
          </div>
        </ol>
      </Section>

      <Section className="!pt-0">
        <SectionHeading eyebrow="Leadership" title="A senior team," serifPart="present in the work." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Alok Verma",
              role: "Managing Director",
              summary: "Profile summary coming soon.",
            },
            {
              name: "Abhishek Verma",
              role: "Director",
              summary: "Profile summary coming soon.",
            },
            {
              name: "Nishi Srivastava",
              role: "Director",
              summary: "Profile summary coming soon.",
            },
          ].map((person) => (
            <div
              key={person.name}
              className="card-elevated card-elevated-hover flex h-full flex-col overflow-hidden p-8"
            >
              <div className="border-b hairline pb-5">
                <div className="text-xl font-medium tracking-tight">{person.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{person.role}</div>
              </div>
              <p className="mt-6 min-h-32 text-sm leading-relaxed text-muted-foreground">
                {person.summary}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <StatRow
          items={[
            { value: "12+", label: "Years in the enterprise" },
            { value: "40+", label: "Global engagements" },
            { value: "9", label: "Regulated industries" },
            { value: "99.99%", label: "Managed service uptime" },
          ]}
        />
      </Section>

      <CTABanner
        title="Meet the team"
        serifPart="behind the delivery."
        lede="We're always open to conversations with leaders who take their platforms seriously."
      />
    </>
  );
}
