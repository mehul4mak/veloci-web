import { Shield, Lock, Globe, Clock } from "lucide-react";

const items = [
  { icon: Shield, label: "SOC 2 in progress" },
  { icon: Lock, label: "AES-256 encryption at rest" },
  { icon: Globe, label: "GDPR-compliant data handling" },
  { icon: Clock, label: "99.95% uptime SLA on Business" },
];

export function TrustBand() {
  return (
    <section className="border-b border-border/40 py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
