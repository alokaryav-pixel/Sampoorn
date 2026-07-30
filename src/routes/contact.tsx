import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Eyebrow, PageHero, Section } from "@/components/site/Primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sampoorn" },
      { name: "description", content: "Start a conversation with Sampoorn. Enterprise inquiries, partnerships, careers and press." },
      { property: "og:title", content: "Contact — Sampoorn" },
      { property: "og:description", content: "Talk to our team about your next platform, program or product." },
    ],
  }),
  component: Contact,
});

const LOCATIONS = [
  { c: "Noida", a: "Headquarters", l: "C-147, Hosiery Complex, Phase 2, Noida - 201307, U.P., India" },
];

function Contact() {
  const initial = {
    fullName: "",
    workEmail: "",
    company: "",
    role: "",
    interest: "IT Services",
    region: "Americas",
    message: "",
  };
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const update = (k: keyof typeof initial) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    for (const [k, v] of Object.entries(values)) {
      if (!v.trim()) {
        setStatus("error");
        setErrorMsg(`Please fill in all fields.`);
        return;
      }
      void k;
    }
    if (!emailRe.test(values.workEmail)) {
      setStatus("error");
      setErrorMsg("Please enter a valid work email.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Failed to send.");
      }
      setStatus("success");
      setValues(initial);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're"
        serifPart="trying to build."
        lede="Enterprise inquiries, partnerships, careers and press. A senior member of our team will read what you send."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Direct</Eyebrow>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Write to us</div>
                  <div className="text-lg font-medium tracking-tight">info@sampoorn.in</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Call Us 24/7</div>
                  <div className="text-lg font-medium tracking-tight">(+91) 0120 4986 155</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Our Location</div>
                  <div className="text-lg font-medium tracking-tight">C-147, Hosiery Complex, Phase 2, Noida - 201307, U.P., India</div>
                </div>
              </li>
            </ul>

            <div className="mt-16">
              <Eyebrow>Locations</Eyebrow>
              <ul className="mt-6 grid grid-cols-2 gap-4">
                {LOCATIONS.map((l) => (
                  <li key={l.c} className="border-t hairline pt-4">
                    <div className="text-lg font-medium tracking-tight">{l.c}</div>
                    <div className="text-xs text-muted-foreground">{l.a}</div>
                    <div className="text-xs text-muted-foreground">{l.l}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 rounded-3xl border hairline p-8 md:p-12 bg-background"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full name" placeholder="Jane Doe" value={values.fullName} onChange={update("fullName")} />
              <Field label="Work email" type="email" placeholder="you@company.com" value={values.workEmail} onChange={update("workEmail")} />
              <Field label="Company" placeholder="Company name" value={values.company} onChange={update("company")} />
              <Field label="Role" placeholder="Title" value={values.role} onChange={update("role")} />
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Select label="Interest" value={values.interest} onChange={update("interest")} options={["IT Services", "Consulting", "Professional Services", "Education", "Blockchain", "Products", "Careers", "Other"]} />
              <Select label="Region" value={values.region} onChange={update("region")} options={["Americas", "Europe", "APAC", "Global"]} />
            </div>
            <div className="mt-6">
              <label className="eyebrow">Message</label>
              <textarea
                rows={5}
                placeholder="What are you trying to build?"
                value={values.message}
                onChange={update("message")}
                className="mt-3 w-full resize-none rounded-2xl border hairline bg-background p-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--electric)]/40"
              />
            </div>
            {status === "success" && (
              <div className="mt-6 rounded-2xl border hairline bg-secondary/40 p-4 text-sm text-foreground">
                Thank you. Your enquiry has been submitted successfully. Our team will contact you shortly.
              </div>
            )}
            {status === "error" && (
              <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-600">
                {errorMsg || "Something went wrong. Please try again."}
              </div>
            )}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-muted-foreground">By submitting you agree to our privacy notice.</div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="aspect-[21/8] w-full overflow-hidden rounded-3xl border hairline bg-secondary/40 relative">
          <div className="absolute inset-0 opacity-70"
               style={{ backgroundImage: "radial-gradient(circle at 20% 60%, color-mix(in oklab, var(--electric) 25%, transparent), transparent 40%), radial-gradient(circle at 80% 40%, color-mix(in oklab, var(--teal) 25%, transparent), transparent 40%)" }} />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <Eyebrow>Map</Eyebrow>
              <div className="mt-3 serif text-3xl md:text-5xl italic">Where we work.</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="block">
      <div className="eyebrow">{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-3 h-12 w-full rounded-full border hairline bg-background px-5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--electric)]/40"
      />
    </label>
  );
}

function Select({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <label className="block">
      <div className="eyebrow">{label}</div>
      <select
        value={value}
        onChange={onChange}
        className="mt-3 h-12 w-full rounded-full border hairline bg-background px-5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--electric)]/40"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}