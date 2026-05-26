import { Check, Minus, X } from "lucide-react";

type Cell = "yes" | "no" | "partial";

const rows: { label: string; cells: [Cell, Cell, Cell, Cell] }[] = [
  { label: "Kanban + backlog + sprints", cells: ["yes", "yes", "yes", "yes"] },
  { label: "Cycles / PI planning", cells: ["yes", "yes", "yes", "partial"] },
  { label: "Triage inbox", cells: ["yes", "yes", "yes", "partial"] },
  { label: "Capacity planning (days off)", cells: ["yes", "no", "no", "partial"] },
  { label: "Retrospective board (built-in)", cells: ["yes", "no", "no", "no"] },
  { label: "AI assistant inline", cells: ["yes", "yes", "no", "yes"] },
  { label: "Self-hostable single binary", cells: ["yes", "no", "yes", "no"] },
  { label: "SaaS-ready (multi-tenant + billing)", cells: ["yes", "no", "no", "no"] },
  { label: "SSO (Keycloak/OIDC) + RBAC", cells: ["yes", "yes", "yes", "yes"] },
  { label: "JIRA import (idempotent)", cells: ["yes", "yes", "partial", "yes"] },
];

const headers = ["Veloci", "Linear", "Plane", "Jira / Asana"];

export function Comparison() {
  return (
    <section id="compare" className="border-b border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            How Veloci compares
          </h2>
          <p className="mt-4 text-muted-foreground">
            We don&apos;t do everything. We do the agile workflow really well —
            and we&apos;re the only one in this list you can run on your own
            server.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-border/60 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-secondary/30">
                <th className="px-6 py-4 text-left font-medium text-muted-foreground">
                  Feature
                </th>
                {headers.map((h, i) => (
                  <th
                    key={h}
                    className={`px-4 py-4 text-center font-semibold ${
                      i === 0 ? "text-primary" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-border/40 last:border-b-0 hover:bg-secondary/10"
                >
                  <td className="px-6 py-3.5 text-foreground">{row.label}</td>
                  {row.cells.map((c, i) => (
                    <td
                      key={i}
                      className={`px-4 py-3.5 text-center ${
                        i === 0 ? "bg-primary/5" : ""
                      }`}
                    >
                      <CellIcon value={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CellIcon({ value }: { value: Cell }) {
  if (value === "yes")
    return (
      <Check className="mx-auto h-4 w-4 text-emerald-500" aria-label="yes" />
    );
  if (value === "partial")
    return (
      <Minus className="mx-auto h-4 w-4 text-amber-500" aria-label="partial" />
    );
  return <X className="mx-auto h-4 w-4 text-muted-foreground/60" aria-label="no" />;
}
