import { createFileRoute } from "@tanstack/react-router";

type ContactPayload = {
  fullName?: string;
  workEmail?: string;
  company?: string;
  role?: string;
  interest?: string;
  region?: string;
  message?: string;
};

const REQUIRED: (keyof ContactPayload)[] = [
  "fullName",
  "workEmail",
  "company",
  "role",
  "interest",
  "region",
  "message",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderEmail(data: Required<ContactPayload>, submittedAt: string) {
  const rows: [string, string][] = [
    ["Full Name", data.fullName],
    ["Work Email", data.workEmail],
    ["Company", data.company],
    ["Role", data.role],
    ["Interest", data.interest],
    ["Region", data.region],
    ["Submitted At", submittedAt],
  ];
  const rowsHtml = rows
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:10px 14px;background:#f6f8fb;border:1px solid #e5e9f2;font-size:13px;color:#5b6472;width:170px;">${escapeHtml(k)}</td>
        <td style="padding:10px 14px;background:#ffffff;border:1px solid #e5e9f2;font-size:14px;color:#0b1220;">${escapeHtml(v)}</td>
      </tr>`,
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f2f4f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f4f8;padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e9f2;">
            <tr>
              <td style="padding:28px 32px;background:#0b1220;color:#ffffff;">
                <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#9ba7bd;">Sampoorn Technologies</div>
                <div style="font-size:22px;font-weight:600;margin-top:6px;">New Website Enquiry</div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                <p style="margin:0 0 18px;font-size:14px;color:#3b4657;">A new enquiry has been submitted through the Sampoorn website contact form.</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  ${rowsHtml}
                </table>
                <div style="margin-top:24px;">
                  <div style="font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#5b6472;margin-bottom:8px;">Message</div>
                  <div style="padding:14px 16px;background:#f6f8fb;border:1px solid #e5e9f2;border-radius:8px;font-size:14px;color:#0b1220;white-space:pre-wrap;line-height:1.55;">${escapeHtml(data.message)}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px;background:#f6f8fb;border-top:1px solid #e5e9f2;font-size:12px;color:#7a8598;">
                Sent from sampoorn.in contact form.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
          return Response.json(
            { error: "Email service is not configured." },
            { status: 500 },
          );
        }

        let body: ContactPayload;
        try {
          body = (await request.json()) as ContactPayload;
        } catch {
          return Response.json({ error: "Invalid request body." }, { status: 400 });
        }

        const clean: ContactPayload = {};
        for (const k of REQUIRED) {
          const v = (body[k] ?? "").toString().trim();
          if (!v) {
            return Response.json(
              { error: `Missing required field: ${k}` },
              { status: 400 },
            );
          }
          if (v.length > 5000) {
            return Response.json(
              { error: `Field ${k} is too long.` },
              { status: 400 },
            );
          }
          clean[k] = v;
        }
        if (!EMAIL_RE.test(clean.workEmail!)) {
          return Response.json({ error: "Invalid work email." }, { status: 400 });
        }

        const submittedAt = new Date().toUTCString();
        const html = renderEmail(clean as Required<ContactPayload>, submittedAt);

        // Resend's shared `onboarding@resend.dev` sender only delivers to the
        // Resend account owner. Until a domain is verified at resend.com/domains
        // and CONTACT_FROM is set to an address on that domain, route mail to
        // the account owner (CONTACT_TO) so submissions still get through.
        const from = process.env.CONTACT_FROM || "Sampoorn Website <onboarding@resend.dev>";
        const to = process.env.CONTACT_TO || "info@sampoorn.in";

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from,
            to: [to],
            subject: "New Website Enquiry | Sampoorn Technologies",
            reply_to: clean.workEmail,
            html,
          }),
        });

        if (!res.ok) {
          const errText = await res.text();
          console.error("Resend error", res.status, errText);
          return Response.json(
            { error: "Failed to send email." },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});