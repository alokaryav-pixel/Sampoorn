import { createFileRoute } from "@tanstack/react-router";
import { CTABanner, PageHero, Section, SectionHeading } from "@/components/site/Primitives";
import customerLogo from "@/assets/customer-placeholder.png.asset.json";
import skillPassportLogo from "@/assets/skill-passport.png";
import openSkillLogo from "@/assets/openskill.svg";
import campusHireLogo from "@/assets/campushire.png";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Customers & Partners — Sampoorn" },
      { name: "description", content: "The enterprises, institutions and partners we build alongside." },
      { property: "og:title", content: "Customers & Partners — Sampoorn" },
      { property: "og:description", content: "Trusted by leading organizations and partners around the world." },
    ],
  }),
  component: Customers,
});

const CUSTOMERS = [
  { name: "Skill Passport", logo: skillPassportLogo},
  { name: "Open Skill Foundation", logo: openSkillLogo},
  { name: "CampusHire", logo: campusHireLogo},
];

function LogoTile({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group flex aspect-[3/2] flex-col items-center justify-center gap-3 bg-background p-8 transition-colors">
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-h-20 max-w-[80%] object-contain opacity-90 transition-opacity group-hover:opacity-100"
      />
    </div>
  );
}

function Customers() {
  return (
    <>
      <PageHero
        eyebrow="Customers & Partners"
        title="Trusted by the teams"
        serifPart="building what's next."
        lede="We're proud to work alongside leading enterprises, institutions and technology partners across the globe."
      />

      <Section>
        <SectionHeading eyebrow="Our customers & partners" title="Enterprises we serve" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border hairline bg-border sm:grid-cols-2 lg:grid-cols-3">
          {CUSTOMERS.map((c) => (
            <LogoTile key={c.name} name={c.name} logo={c.logo} />
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground"></p>
      </Section>

      <CTABanner
        title="Become a Sampoorn partner"
        serifPart="let's build together."
        lede="Interested in partnering with us? We'd love to hear from you."
      />
    </>
  );
}
