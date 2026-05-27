import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.veloci.app";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
            <Zap className="h-4 w-4" />
          </span>
          <span className="text-lg tracking-tight">Veloci</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#compare"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Compare
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="#customers"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Customers
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href={`${APP_URL}/signin`}>Sign in</a>
          </Button>
          <Button size="sm" asChild>
            <a href={`${APP_URL}/signup`}>Start free</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
