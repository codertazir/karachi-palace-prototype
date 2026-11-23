import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Car, Clock, Instagram, MapPin, MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OpenStatus } from "@/components/site/OpenStatus";
import { PageHeading } from "@/components/site/PageHeading";
import { HOURS, RESTAURANT, khobarClock } from "@/lib/restaurant";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — Hours & Location | Karachi Palace, Al Khobar" },
      {
        name: "description",
        content: "Cross 20, Prince Nayef St, Al Khobar. Open daily 12 PM – 12 AM (Friday from 12:30 PM). Call +966 54 545 0789.",
      },
      { property: "og:title", content: "Visit Karachi Palace — Hours & Location" },
      {
        property: "og:description",
        content: "Cross 20, Prince Nayef St, Al Khobar. Open daily till midnight.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => setToday(khobarClock(new Date()).day), []);

  return (
    <>
      <PageHeading
        eyebrow="Visit us"
        title="Find your seat"
        urdu="تشریف لائیے"
        intro="Dine in, take away, or call ahead — we're open every day until midnight."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 md:grid-cols-2 md:px-8">
        {/* Location & contact */}
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <MapPin className="size-8 text-primary" />
          <h2 className="mt-5 text-4xl">Location</h2>
          <address className="mt-4 text-lg not-italic leading-relaxed text-muted-foreground">
            {RESTAURANT.addressLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="saffron" size="lg" asChild>
              <a href={RESTAURANT.mapsHref} target="_blank" rel="noreferrer">
                <MapPin /> Open in Google Maps
              </a>
            </Button>
          </div>

          <div className="mt-10 space-y-4 border-t border-border pt-8">
            <a href={RESTAURANT.phoneHref} className="flex items-center gap-4 text-lg hover:text-primary">
              <Phone className="size-5 text-primary" /> {RESTAURANT.phoneDisplay}
            </a>
            <a href={RESTAURANT.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-lg hover:text-primary">
              <MessageCircle className="size-5 text-primary" /> Message on WhatsApp
            </a>
            <a href={RESTAURANT.instagramHref} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-lg hover:text-primary">
              <Instagram className="size-5 text-primary" /> {RESTAURANT.instagramHandle}
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Clock className="size-8 text-primary" />
            <OpenStatus />
          </div>
          <h2 className="mt-5 text-4xl">Opening hours</h2>
          <ul className="mt-6 divide-y divide-border">
            {HOURS.map((h, i) => (
              <li
                key={h.day}
                className={cn(
                  "flex justify-between py-4 text-lg",
                  today === i ? "font-semibold text-primary" : "text-muted-foreground",
                )}
              >
                <span>
                  {h.day}
                  {today === i && <span className="ml-2 text-xs uppercase tracking-widest">Today</span>}
                </span>
                <span>
                  {h.open} – {h.close}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 md:px-8">
        <div className="flex gap-5 rounded-3xl bg-secondary p-8 text-secondary-foreground">
          <ShoppingBag className="size-7 shrink-0 text-primary" />
          <div>
            <h3 className="text-2xl">Takeaway</h3>
            <p className="mt-2 text-secondary-foreground/80">
              Call ahead with your order and pick it up hot — perfect for BBQ platters and biryani for the family.
            </p>
          </div>
        </div>
        <div className="flex gap-5 rounded-3xl bg-secondary p-8 text-secondary-foreground">
          <Car className="size-7 shrink-0 text-primary" />
          <div>
            <h3 className="text-2xl">Parking tip</h3>
            <p className="mt-2 text-secondary-foreground/80">
              Street parking around Prince Nayef St fills up after 8 PM. Afternoons and early evenings are the quietest
              time to visit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
