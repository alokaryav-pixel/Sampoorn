import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Cpu, GraduationCap, LineChart, Lock, Workflow } from "lucide-react";
import { CTABanner, Eyebrow, PageHero, Section, SectionHeading } from "@/components/site/Primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sampoorn" },
      {
        name: "description",
        content:
          "IT services, technology consulting, professional services, education and blockchain — five practices delivered by senior teams.",
      },
      { property: "og:title", content: "Services — Sampoorn" },
      { property: "og:description", content: "Six practices. One delivery standard. Engineered for the enterprise." },
    ],
  }),
  component: Services,
});

const PRACTICES = [
  {
    id: "it",
    icon: <Cpu className="h-5 w-5" />,
    name: "IT Services",
    lede: "We design, build, modernize, and manage enterprise technology solutions that help organizations accelerate innovation, improve operational efficiency, and scale with confidence.",
    capabilities: [
      "Custom application engineering",
      "Digital transformation",
      "Product development",
      "Quality assurance",
    ],
    process: ["Discover", "Architect", "Build", "Operate", "Improve"],
    primary: true,
  },
  {
    id: "consulting",
    icon: <LineChart className="h-5 w-5" />,
    name: "Technology Consulting",
    lede: "Strategy, architecture and technology due diligence for boards and CXOs.",
    capabilities: ["Technology strategy", "Architecture review", "Vendor & platform selection", "Technology diligence"],
    process: ["Diagnose", "Frame", "Recommend", "Enable"],
  },
  {
    id: "professional",
    icon: <Workflow className="h-5 w-5" />,
    name: "Engineering Products",
    lede: "Designing, developing, and scaling innovative digital products that transform ideas into market-ready solutions.",
    capabilities: [
      "Product strategy & roadmapping",
      "UI/UX design",
      "Product engineering",
      "MVP development",
      "Product modernization ",
      "Product lifecycle management",
    ],
    process: ["Scope", "Assemble", "Embed", "Transition"],
  },
  {
    id: "education",
    icon: <GraduationCap className="h-5 w-5" />,
    name: "Education & Learning (KG to PG Solutions)",
    lede: "Empowering individuals and organizations through practical learning and skill development.",
    capabilities: [
      "Corporate training",
      "Technical training ",
      "Certification programs",
      "Skill development",
      "Learning solutions",
    ],
    process: ["Assess", "Design", "Deliver", "Measure"],
  },
  {
    id: "blockchain",
    icon: <Lock className="h-5 w-5" />,
    name: "AI & Blockchain Services",
    lede: "Advanced blockchain mining and consultancy services for businesses and investors.",
    capabilities: ["Blockchain mining", "Consultancy services", "AI server assembly, sales & maintenance"],
    process: ["Model", "Build", "Audit", "Operate"],
  },
  {
    id: "marketing",
    icon: <LineChart className="h-5 w-5" />,
    name: "Digital & Social Media Marketing",
    lede: "End-to-end online marketing strategies to grow your digital footprint and generate leads. Enhance your brand presence and engagement across all social platforms.",
    capabilities: [
      "Search engine optimization (SEO) ",
      "Social media marketing ",
      "Content marketing",
      "Performance marketing",
      "Email marketing",
      "Lead generation",
    ],
    process: ["Discover", "Strategize", "Execute", "Optimize"],
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six practices."
        serifPart="One delivery standard."
        lede="We organize our work into six deep practices, led by senior specialists. IT services is our primary business; the others compound its impact for our clients."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <Eyebrow>Practices</Eyebrow>
              <ul className="mt-6 space-y-2">
                {PRACTICES.map((p) => (
                  <li key={p.id}>
                    <a
                      href={`#${p.id}`}
                      className="group flex items-baseline justify-between border-b hairline py-4 text-lg tracking-tight text-foreground outline-none focus:outline-none focus-visible:outline-none"
                    >
                      <span className="flex items-center gap-3">
                        {p.name}
                        {p.primary && (
                          <span className="inline-flex items-center rounded-full bg-[var(--electric)]/12 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[var(--electric)]">
                            Primary
                          </span>
                        )}
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-24">
            {PRACTICES.map((p, i) => (
              <article id={p.id} key={p.id} className="scroll-mt-28">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px w-10 bg-[var(--hairline)]" />
                  <span className="uppercase tracking-widest">{p.primary ? "Primary practice" : "Practice"}</span>
                </div>
                <h2 className="mt-4 flex items-center gap-4 text-4xl md:text-5xl font-medium tracking-tight">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-foreground">
                    {p.icon}
                  </span>
                  {p.name}
                </h2>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{p.lede}</p>

                <div className="mt-12 grid gap-10 md:grid-cols-2">
                  <div>
                    <div className="eyebrow">Capabilities</div>
                    <ul className="mt-5 space-y-3">
                      {p.capabilities.map((c) => (
                        <li key={c} className="flex items-start gap-3 text-sm">
                          <span className="mt-2 h-1 w-3 bg-[var(--electric)]" />
                          <span className="text-foreground">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="eyebrow">How we work</div>
                    <ol className="mt-5 space-y-3">
                      {p.process.map((step, idx) => (
                        <li key={step} className="flex items-center justify-between border-b hairline pb-3 text-sm">
                          <span className="text-foreground">{step}</span>
                          <span className="text-muted-foreground">{String(idx + 1).padStart(2, "0")}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm text-foreground border-b hairline pb-1"
                  >
                    Discuss a {p.name.toLowerCase()} engagement <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading eyebrow="Why Sampoorn" title="Trusted partner" serifPart="for technology & transformation." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Senior-led", d: "Principals in the room, not just on the pitch." },
            { t: "Regulated by design", d: "Security, audit and compliance woven in from day one." },
            { t: "Outcome-aligned", d: "Engagements structured around measurable business results." },
            {
              t: "Customer centric",
              d: "Every engagement is built around your business goals, ensuring tailored solutions and lasting partnerships.",
            },
          ].map((v) => (
            <div key={v.t} className="border-t hairline pt-6">
              <div className="text-lg font-medium tracking-tight">{v.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner title="Ready when you" serifPart="are." lede="Bring us a real problem. We'll bring the team." />
    </>
  );
}
