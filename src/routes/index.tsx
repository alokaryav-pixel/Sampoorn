import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Cpu,
  Gauge,
  GraduationCap,
  Lightbulb,
  LineChart,
  Lock,
  Network,
  RefreshCw,
  Scaling,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { CTABanner, Eyebrow, FeatureCard, Section, SectionHeading, StatRow } from "@/components/site/Primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sampoorn — Enterprise technology, engineered with intent" },
      {
        name: "description",
        content:
          "Sampoorn partners with enterprises to modernize systems, launch products, and operate mission-critical technology at global scale.",
      },
      { property: "og:title", content: "Sampoorn — Enterprise technology, engineered with intent" },
      {
        property: "og:description",
        content:
          "Sampoorn partners with enterprises to modernize systems, launch products, and operate mission-critical technology at global scale.",
      },
    ],
  }),
  component: Home,
});

const SERVICES = [
  {
    title: "IT Services",
    desc: "We design, build, modernize, and manage enterprise technology solutions that help organizations accelerate innovation, improve operational efficiency, and scale with confidence.",
    href: "/services",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Technology Consulting",
    desc: "Strategy, architecture and technology due diligence for boards and CXOs.",
    href: "/services",
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    title: "Engineering Products",
    desc: "Designing, developing, and scaling innovative digital products that transform ideas into market-ready solutions.",
    href: "/services",
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    title: "Education & Learning",
    desc: "Empowering individuals and organizations through practical learning and skill development.",
    href: "/services",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    title: "AI & Blockchain Services",
    desc: "Advanced blockchain mining and consultancy services for businesses and investors.",
    href: "/services",
    icon: <Lock className="h-5 w-5" />,
  },
  {
    title: "Digital & Social Media Marketing",
    desc: "End-to-end online marketing strategies to grow your digital footprint and generate leads. Enhance your brand presence and engagement across all social platforms.",
    href: "/solutions",
    icon: <Sparkles className="h-5 w-5" />,
  },
];

const INDUSTRIES = [
  "Telecom",
  "Banking",
  "Manufacturing",
  "Retail",
  "Healthcare",
  "Education",
  "Government",
  "Technology",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 grad-hero opacity-[0.08]" />
          <div
            className="absolute -top-40 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--electric) 20%, transparent), transparent 70%)",
            }}
          />
        </div>

        <div className="container-page pt-28 pb-24 md:pt-40 md:pb-32">
          <Eyebrow>CREATE • CONNECT • TRANSFORM</Eyebrow>
          <h1 className="mt-8 max-w-5xl text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.02]">
            Technology that drives <span className="serif italic text-foreground">business.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            We help organizations innovate, transform, and grow through technology consulting, enterprise solutions,
            digital products, and professional services—delivering measurable outcomes that create lasting business
            value.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background hover:opacity-90 transition"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex h-12 items-center gap-2 rounded-full border hairline px-6 text-sm font-medium text-foreground hover:bg-secondary transition"
            >
              Explore capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <Eyebrow>The firm</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-5xl font-medium tracking-tight">
              Engineering ideas <span className="serif italic">into business value.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We are a technology, products, and solutions company helping organizations innovate, transform, and grow.
              By combining consulting, engineering, and product expertise, we deliver solutions that solve real business
              challenges and create lasting value.
            </p>
            <p>
              From enterprise technology services and digital transformation to innovative software products and
              professional services, we partner with our clients to turn ideas into measurable business outcomes.
            </p>
            <StatRow
              items={[
                { value: "12+", label: "Years in the enterprise" },
                { value: "40+", label: "Global engagements" },
                { value: "9", label: "Regulated industries" },
                { value: "99.99%", label: "Managed service uptime" },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* CORE CAPABILITIES */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Core capabilities"
          title="Six practices."
          serifPart="One partner."
          lede="Deep specialization across the disciplines enterprises rely on, delivered by senior teams that stay with you through the outcome."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <FeatureCard
              key={s.title}
              index={String(i + 1).padStart(2, "0")}
              icon={s.icon}
              title={s.title}
              description={s.desc}
              href={s.href}
            />
          ))}
        </div>
      </Section>

      {/* SOLUTIONS STRIP */}
      <Section className="!pt-0">
        <div className="rounded-3xl border hairline bg-secondary/50 p-8 md:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow>Solutions</Eyebrow>
              <h3 className="mt-5 text-3xl md:text-5xl font-medium tracking-tight">
                Outcomes we deliver — <span className="serif italic">end to end.</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We package our practices into named enterprise programs: modernization, cloud, data, AI-ready
              architecture, automation and transformation. Each one is a joint plan with your leadership and a joint
              team on the ground.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border hairline sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Modernize",
                d: "Modernize legacy systems, applications, and business processes to create agile, scalable, and future-ready enterprises.",
                i: <RefreshCw className="h-5 w-5" />,
              },
              {
                t: "Innovate",
                d: "Design and build innovative digital products, platforms, and customer experiences that accelerate business growth.",
                i: <Lightbulb className="h-5 w-5" />,
              },
              {
                t: "Connect",
                d: "Integrate applications, data, and enterprise platforms to create seamless, connected business ecosystems.",
                i: <Network className="h-5 w-5" />,
              },
              {
                t: "Optimize",
                d: "Improve operational efficiency through intelligent automation, streamlined workflows, and data-driven decision making.",
                i: <Gauge className="h-5 w-5" />,
              },
              {
                t: "Secure",
                d: "Build secure, resilient, and compliant technology solutions that protect business-critical systems and data.",
                i: <ShieldCheck className="h-5 w-5" />,
              },
              {
                t: "Scale",
                d: "Create flexible technology foundations that enable sustainable growth and adapt to evolving business needs.",
                i: <Scaling className="h-5 w-5" />,
              },
            ].map((s) => (
              <div key={s.t} className="bg-background p-8">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  {s.i}
                </div>
                <div className="mt-5 text-lg font-medium tracking-tight">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section className="!pt-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Products" title="Software we own," serifPart="not just ship." />
          <Link
            to="/products"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
          >
            View all products <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Link
            to="/products"
            className="group relative overflow-hidden rounded-3xl bg-[var(--navy-deep)] p-10 md:p-14 text-white"
          >
            <div className="absolute inset-0 opacity-70 grad-hero" />
            <div className="relative">
              <div className="eyebrow !text-white/60">Flagship product</div>
              <div className="mt-6 flex items-baseline gap-3">
                <div className="text-4xl md:text-6xl font-medium tracking-tight">HireSure</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Live</div>
              </div>
              <p className="mt-6 max-w-md text-white/70 text-lg leading-relaxed">
                A selective, career-oriented 3 and 6 month program focused on full-stack development, industry tools,
                and placement readiness.
              </p>
              <div className="mt-10 inline-flex items-center gap-2 text-sm text-white/90">
                Explore HireSure{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
          <div className="grid gap-6">
            <div className="card-elevated p-8">
              <div className="eyebrow">In Production</div>
              <div className="mt-5 text-2xl font-medium tracking-tight">Skill Passport</div>
              <p className="mt-2 text-sm text-muted-foreground">
                One verified identity for skills, work, and learning, matched to the right opportunities by AI.
              </p>
            </div>
            <div className="card-elevated p-8">
              <div className="eyebrow">In Production</div>
              <div className="mt-5 text-2xl font-medium tracking-tight">Campus Hire</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Create drives, manage eligibility, schedule rounds, update student status, publish results, and generate
                placement reports from one unified platform.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section className="!pt-0">
        <SectionHeading eyebrow="Industries" title="Built for the industries" serifPart="that can't afford to fail." />
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline sm:grid-cols-4">
          {INDUSTRIES.map((n, i) => (
            <div key={n} className="group bg-background p-8 transition hover:bg-secondary">
              <div className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-6 text-lg font-medium tracking-tight">{n}</div>
              <div className="mt-8 inline-flex items-center gap-1 text-xs text-muted-foreground opacity-0 transition group-hover:opacity-100">
                Case studies <ArrowUpRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <Section className="!pt-0">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Why Sampoorn" title="Senior teams." serifPart="Rare accountability." />
          </div>
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {[
              {
                t: "Senior by default",
                d: "Every engagement is led by principals with decades in the domain — not staffed for a pyramid.",
                i: <ShieldCheck className="h-5 w-5" />,
              },
              {
                t: "Outcome contracts",
                d: "We commit to the outcome, and we structure engagements to make it measurable.",
                i: <LineChart className="h-5 w-5" />,
              },
              {
                t: "Enterprise-grade practice",
                d: "Security, compliance and operability are treated as first-class design constraints.",
                i: <Lock className="h-5 w-5" />,
              },
              {
                t: "Product mindset",
                d: "We build for the years after go-live, not just the launch week.",
                i: <Sparkles className="h-5 w-5" />,
              },
            ].map((b) => (
              <div key={b.t} className="border-t hairline pt-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">{b.i}</div>
                <div className="mt-5 text-lg font-medium tracking-tight">{b.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CUSTOMER STORY */}
      <Section className="!pt-0">
        <div className="rounded-3xl border hairline p-10 md:p-16 bg-background">
          <div className="eyebrow">Customer</div>
          <blockquote className="mt-8 serif text-3xl md:text-5xl leading-tight text-foreground max-w-4xl">
            “Sampoorn helped us modernize our learning ecosystem with industry-driven programs and practical execution.
            Their team worked as an extension of ours, focused on outcomes rather than just deliverables. ”
          </blockquote>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-secondary" />
            <div>
              <div className="text-sm font-medium">Dean,Maharishi Management</div>
              <div className="text-xs text-muted-foreground">Maharishi Universities</div>
            </div>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Let's build the next"
        serifPart="decade of your platform."
        lede="Tell us where you're headed. We'll bring the team, the plan and the accountability."
      />
    </>
  );
}
