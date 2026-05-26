import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.veloci.app";

type Plan = {
  name: string;
  price: string;
  period?: string;
  blurb: string;
  cta: { label: string; href: string; variant?: "default" | "outline" };
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Self-host",
    price: "Free",
    blurb: "One Docker container on your hardware. Yours forever.",
    cta: {
      label: "Get on GitHub",
      href: "https://github.com/mkumawat1/veloci",
      variant: "outline",
    },
    features: [
      "Unlimited users",
      "Unlimited tasks & sprints",
      "Keycloak SSO + RBAC",
      "JIRA import, Slack webhooks",
      "Community support",
    ],
  },
  {
    name: "Team",
    price: "$8",
    period: "per seat / month",
    blurb: "Hosted SaaS for small teams. We run it, you ship.",
    cta: { label: "Start free trial", href: `${APP_URL}/signup` },
    features: [
      "Everything in Self-host",
      "We host + back up",
      "Custom subdomain",
      "Magic-link sign-in",
      "Email support",
    ],
    featured: true,
  },
  {
    name: "Business",
    price: "$16",
    period: "per seat / month",
    blurb: "For teams that need SSO, audit logs, and priority support.",
    cta: { label: "Contact sales", href: "mailto:hello@veloci.app", variant: "outline" },
    features: [
      "Everything in Team",
      "SSO (SAML / Google / Okta)",
      "Audit log export",
      "SLA + priority support",
      "Custom data residency",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Pricing that respects your team
          </h2>
          <p className="mt-4 text-muted-foreground">
            Self-host free forever. Or let us run it for you, billed per active
            seat — no minimums.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-6 ${
                p.featured
                  ? "border-primary/40 bg-card shadow-xl"
                  : "border-border/60 bg-card/40"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most popular
                </div>
              )}
              <div className="mb-2 text-sm font-medium text-muted-foreground">
                {p.name}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-tight">
                  {p.price}
                </span>
                {p.period && (
                  <span className="text-sm text-muted-foreground">
                    {p.period}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>

              <Button
                className="mt-6 w-full"
                variant={p.cta.variant || "default"}
                asChild
              >
                <a href={p.cta.href}>{p.cta.label}</a>
              </Button>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
