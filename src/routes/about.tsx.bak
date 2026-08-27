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
  { y: "2011", t: "Founded", d: "Sampoorn was established with a vision, to provide innovative career development, business consulting, and strategic growth solutions across multiple sectors." },
  { y: "2013", t: "Higher Education Collaboration", d: "Associated with United Group of Institutions Marketing, Student Outreach, and Campus Development Initiatives, strengthening institutional visibility and student engagement." },
  { y: "2014", t: "Political Campaign Management", d: "Successfully managed strategic campaign planning, outreach, branding, and promotional activities during the Delhi State Election, demonstrating capabilities in large-scale communication and public engagement." },
  { y: "2016", t: "Higher Education Collaboration", d: "Partnered with Maharishi University for Digital Marketing, Student Outreach, Branding, and Campus Development Initiatives, strengthening institutional visibility and student engagement." },
  { y: "2017", t: "Wellness & Social Awareness Initiative", d: "Associated with SRM Foundation to promote Transcendental Meditation (TM) through awareness campaigns, outreach programs, and community engagement initiatives." },
  { y: "2019", t: "Brand Development", d: "Executed integrated marketing and promotional strategies to enhance brand visibility, customer engagement, and market expansion for Adya Organics." },
  { y: "2020", t: "Real Estate Marketing", d: "Partnered with World Infracon to deliver marketing, branding, business promotion, and customer acquisition solutions in the real estate sector." },
  { y: "2021-2026", t: "Expansion & Diversification", d: "Building on over a decade of experience, Sampoorn Solutions has expanded its capabilities across Strategic Business Consulting, Startup & Institutional Growth, Business Transformation Solutions, IT turnkey Projects etc." },
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
        <SectionHeading eyebrow="Journey" title="Fifteen years," serifPart="one delivery standard." />
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
              summary: `Alok Verma is a technology and business leader with over 25 years of experience in IT and Telecommunications. His expertise spans Telecom OSS/BSS, digital transformation, systems integration, consulting, and enterprise technology services.

An Engineering graduate with a Post Graduate Diploma in Advanced Computing, Alok has held leadership roles at Vodafone UK, RelQ, HP, Intec, CSG, Netcracker, and NEC. He has successfully delivered large-scale technology transformation and product engineering initiatives across global markets.

As Managing Director of Sampoorn Solutions, Alok drives the company's vision across IT Services, Education, Consulting, and Engineering. He is passionate about innovation, strategic partnerships, talent development, and building technology solutions that create lasting value for customers.`,
            },
            {
              name: "Abhishek Verma",
              role: "Director",
              summary: "Profile summary coming soon.",
            },
            {
              name: "Mrityunjay Prajapati",
              role: "Advisory Board",
              summary: "Profile summary coming soon.",
            },
            {
              name: "Prof Santosh Kumar",
              role: "Advisory Board",
              summary: "Profile summary coming soon.",
            },
            {
              name: "Sonal Verma",
              role: "Legal",
              summary: "Profile summary coming soon.",
            },
            {
              name: "Sandeep Dubey",
              role: "Legal",
              summary: "Profile summary coming soon.",
            },
            {
              name: "Rajesh Goel",
              role: "Finance",
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
              <p className="mt-6 min-h-32 whitespace-pre-line text-[15px] leading-7 text-muted-foreground">
  {person.summary}
</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <StatRow
          items={[
            { value: "15+", label: "Years in the enterprise" },
            { value: "10+", label: "Engagements" },
            { value: "5", label: "Regulated industries" },
            { value: "100%", label: "Relaibility" },
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
