import Link from "next/link";
import { Zap } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
              <Zap className="h-4 w-4" />
            </span>
            <span className="text-lg tracking-tight">Veloci</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            The agile workspace built for shipping.
          </p>
        </div>

        <FooterCol
          title="Product"
          links={[
            ["Features", "#features"],
            ["Compare", "#compare"],
            ["Pricing", "#pricing"],
            ["Customers", "#customers"],
            ["Changelog", "#"],
            ["Roadmap", "#"],
          ]}
        />
        <FooterCol
          title="Resources"
          links={[
            ["Documentation", "#"],
            ["Help center", "#"],
            ["Integrations", "#"],
            ["API", "#"],
            ["Status", "#"],
            ["Security", "#"],
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            ["About", "#"],
            ["Customers", "#customers"],
            ["Contact", "mailto:hello@veloci.app"],
            ["Privacy", "#"],
            ["Terms", "#"],
            ["DPA", "#"],
          ]}
        />
      </div>
      <div className="border-t border-border/40 py-6">
        <div className="container flex flex-col items-center justify-between gap-2 text-center text-xs text-muted-foreground md:flex-row md:text-left">
          <div>© {new Date().getFullYear()} Veloci, Inc. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold">{title}</h4>
      <ul className="space-y-2">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
