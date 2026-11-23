import { MapPin, Phone } from "lucide-react";
import { RESTAURANT } from "@/lib/restaurant";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <a href={RESTAURANT.phoneHref} className="flex items-center justify-center gap-2 bg-primary py-4 font-semibold text-primary-foreground">
        <Phone className="size-4" /> Call now
      </a>
      <a
        href={RESTAURANT.mapsHref}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 py-4 font-semibold text-foreground"
      >
        <MapPin className="size-4" /> Directions
      </a>
    </div>
  );
}
