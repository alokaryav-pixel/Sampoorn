import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`container-page py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 eyebrow">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--electric)]" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  serifPart,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  serifPart?: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
        {title}
        {serifPart && (
          <>
            {" "}
            <span className="serif italic text-foreground/80">{serifPart}</span>
          </>
        )}
      </h2>
      {lede && (
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          {lede}
        </p>
      )}
    </div>
  );
}

export function CTAButton({
  to,
  children,
  variant = "solid",
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "light";
}) {
  const cls =
    variant === "solid"
      ? "bg-foreground text-background hover:opacity-90"
      : variant === "light"
      ? "bg-white text-[var(--navy-deep)] hover:bg-white/90"
      : "border hairline text-foreground hover:bg-secondary";
  return (
    <Link
      to={to}
      className={`inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium transition ${cls}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}

export function StatRow({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="border-t hairline pt-6">
          <dt className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            {s.value}
          </dt>
          <dd className="mt-2 text-sm text-muted-foreground">{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function FeatureCard({
  index,
  title,
  description,
  icon,
  href,
}: {
  index?: string;
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
}) {
  const inner = (
    <div className="card-elevated card-elevated-hover group p-8 h-full flex flex-col">
      <div className="flex items-start justify-between">
        {icon ? (
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-foreground">
            {icon}
          </div>
        ) : (
          <div className="eyebrow">{index}</div>
        )}
        {href && (
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        )}
      </div>
      <h3 className="mt-6 text-xl md:text-2xl font-medium tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
  return href ? (
    <Link to={href} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

export function PageHero({
  eyebrow,
  title,
  serifPart,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  serifPart?: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b hairline">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
             style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--electric) 22%, transparent), transparent)" }} />
      </div>
      <div className="container-page pt-28 pb-20 md:pt-40 md:pb-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl font-medium tracking-tight text-foreground">
          {title}
          {serifPart && (
            <>
              {" "}
              <span className="serif italic">{serifPart}</span>
            </>
          )}
        </h1>
        {lede && (
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}

export function CTABanner({
  title,
  serifPart,
  lede,
}: {
  title: ReactNode;
  serifPart?: ReactNode;
  lede?: string;
}) {
  return (
    <div className="container-page py-24 md:py-32">
      <div className="relative overflow-hidden rounded-3xl grad-hero p-10 md:p-16 text-white">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
            {title}{" "}
            {serifPart && <span className="serif italic text-white/90">{serifPart}</span>}
          </h2>
          {lede && <p className="mt-6 max-w-xl text-white/70 text-lg">{lede}</p>}
          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton to="/contact" variant="light">Talk to our team</CTAButton>
            <Link
              to="/services"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}