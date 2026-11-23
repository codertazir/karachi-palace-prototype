import { useEffect, useState } from "react";
import { HOURS, isOpenAt, khobarClock } from "@/lib/restaurant";
import { cn } from "@/lib/utils";

/** Live open/closed pill. Computed after hydration so server and client markup match. */
export function OpenStatus({ className }: { className?: string }) {
  const [open, setOpen] = useState<boolean | null>(null);
  const [opensAt, setOpensAt] = useState("12:00 PM");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setOpen(isOpenAt(now));
      // Before opening it's today's time; after midnight close it's still today's (new day).
      setOpensAt(HOURS[khobarClock(now).day]?.open ?? "12:00 PM");
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold backdrop-blur",
        className,
      )}
    >
      <span
        className={cn(
          "size-2 rounded-full",
          open === null ? "bg-muted-foreground" : open ? "bg-secondary animate-pulse" : "bg-accent",
        )}
      />
      {open === null ? "Open daily from noon" : open ? "Open now · until midnight" : `Closed · opens at ${opensAt}`}
    </span>
  );
}
