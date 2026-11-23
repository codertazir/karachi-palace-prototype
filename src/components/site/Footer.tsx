import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";
import { RESTAURANT } from "@/lib/restaurant";

export function Footer() {
  return (
    <footer className="mt-24 bg-card">
      <div className="truck-strip" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-3xl text-primary">Karachi Palace</p>
          <p className="mt-1 font-urdu text-xl text-muted-foreground">{RESTAURANT.urduName}</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {RESTAURANT.tagline} — authentic Karachi street food and BBQ in the heart of Al Khobar.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow">Find us</p>
          <a href={RESTAURANT.mapsHref} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-primary">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{RESTAURANT.addressLines.join(", ")}</span>
          </a>
          <a href={RESTAURANT.phoneHref} className="flex gap-3 hover:text-primary">
            <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
            {RESTAURANT.phoneDisplay}
          </a>
          <a href={RESTAURANT.instagramHref} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-primary">
            <Instagram className="mt-0.5 size-4 shrink-0 text-primary" />
            {RESTAURANT.instagramHandle}
          </a>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow">Hours</p>
          <p>Saturday – Thursday · 12 PM – 12 AM</p>
          <p>Friday · 12:30 PM – 12 AM</p>
          <div className="flex gap-5 pt-4 text-muted-foreground">
            <Link to="/menu" className="hover:text-primary">Menu</Link>
            <Link to="/story" className="hover:text-primary">Our Story</Link>
            <Link to="/visit" className="hover:text-primary">Visit</Link>
          </div>
        </div>
      </div>
      <div className="bead-line opacity-60" />
      <p className="py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Karachi Palace, Al Khobar
      </p>
    </footer>
  );
}
