import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RESTAURANT } from "@/lib/restaurant";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/story", label: "Our Story" },
  { to: "/visit", label: "Visit" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="group flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl text-primary">Karachi Palace</span>
          <span className="hidden font-urdu text-lg text-muted-foreground sm:inline">{RESTAURANT.urduName}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="saffron" size="sm" asChild>
            <a href={RESTAURANT.phoneHref}>
              <Phone /> Call
            </a>
          </Button>
        </nav>

        <button
          type="button"
          className="text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 pb-6 pt-3 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-3 font-display text-2xl text-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
      <div className="truck-strip" />
    </header>
  );
}
