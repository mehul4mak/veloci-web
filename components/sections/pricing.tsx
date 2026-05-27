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
    name: "Free",
    price: "$0",
    period: "forever",
    blurb: "For individuals and small teams getting started.",
    cta: {
      label: "Start free",
      href: `${APP_URL}/signup`,
      variant: "outline",
    },
    features: [
      "Up to 10 users",
      "Unlimited tasks",
      "2 active sprints",
      "Kanban, backlog, retros",
      "Slack & email integrations",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$8",
    period: "per user / month",
    blurb: "For growing teams that need the full toolkit.",
    cta: { label: "Start 14-day trial", href: `${APP_URL}/signup?plan=pro` },
    features: [
      "Everything in Free",
      "Unlimited users & sprints",
      "Claude AI assistant included",
      "Capacity planning + roadmap",
      "JIRA import + advanced integrations",
      "Email support, < 24h",
    ],
    featured: true,
  },
  {
    name: "Business",
    price: "$16",
    period: "per user / month",
    blurb: "For scaling orgs that need security & control.",
    cta: {
      label: "Start trial",
      href: `${APP_URL}/signup?plan=business`,
      variant: "outline",
    },
    features: [
      "Everything in Pro",
      "SSO (SAML / Google / Okta)",
      "SCIM provisioning",
      "Audit log export",
      "99.95% uptime SLA",
      "Priority support, < 4h",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "For large orgs with custom needs.",
    cta: {
      label: "Talk to sales",
      href: "mailto:sales@veloci.app",
      variant: "outline",
    },
    features: [
      "Everything in Business",
      "SOC 2 Type II report",
      "Custom data residency (EU / US)",
      "Dedicated success manager",
      "Custom contracts & invoicing",
      "Onboarding & training",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
            Pricing
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Simple pricing.{" "}
            <span className="text-muted-foreground">No surprises.</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Free forever for small teams. Pay per active user, billed monthly
            or annually. Cancel anytime.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                p.featured
                  ? "border-primary/40 bg-card shadow-2xl shadow-primary/10"
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
              <p className="mt-2 min-h-[2.5rem] text-sm text-muted-foreground">
                {p.blurb}
              </p>

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

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          All plans include unlimited tasks, real-time sync, 256-bit
          encryption, and access on web + mobile.{" "}
          <a href="mailto:sales@veloci.app" className="text-primary underline-offset-2 hover:underline">
            Volume discounts available
          </a>{" "}
          for 100+ seats.
        </p>
      </div>
    </section>
  );
}
