import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OpenStatus } from "@/components/site/OpenStatus";
import { RESTAURANT, REVIEWS } from "@/lib/restaurant";
import heroBbq from "@/assets/hero-bbq.jpg";
import bunKabab from "@/assets/bun-kabab.jpg";
import rolls from "@/assets/rolls.jpg";
import biryani from "@/assets/biryani.jpg";
import haleem from "@/assets/haleem.jpg";
import grill from "@/assets/grill.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karachi Palace — Authentic Karachi BBQ & Bun Kabab in Al Khobar" },
      {
        name: "description",
        content:
          "Charcoal BBQ, bun kabab, paratha rolls and biryani with true Karachi taste. Prince Nayef St, Al Khobar. Open daily till midnight.",
      },
      { property: "og:title", content: "Karachi Palace — Authentic Karachi BBQ in Al Khobar" },
      {
        property: "og:description",
        content: "Charcoal BBQ, bun kabab, paratha rolls and biryani with true Karachi taste. Open daily till midnight.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FAVOURITES = [
  { name: "Bun Kabab", note: "The Karachi street classic", image: bunKabab },
  { name: "Paratha Rolls", note: "Bihari, malai & garlic mayo", image: rolls },
  { name: "Chicken Biryani", note: "Saffron, potato & egg", image: biryani },
  { name: "Chicken Haleem", note: "Slow-cooked for hours", image: haleem },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden">
        <img
          src={heroBbq}
          alt="A copper platter of chicken tikka, malai boti and seekh kabab with paratha and chutney"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        />
        <div className="hero-scrim absolute inset-0 -z-10" />
        <div className="fade-up-scrim absolute inset-0 -z-10" />

        <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center px-5 py-20 md:px-8">
          <div className="max-w-xl">
            <OpenStatus className="animate-rise" />
            <p className="mt-8 font-urdu text-4xl text-primary animate-rise md:text-5xl">{RESTAURANT.urduName}</p>
            <h1 className="mt-2 text-6xl leading-[0.95] text-foreground animate-rise md:text-8xl">
              Karachi
              <br />
              Palace
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground animate-rise">
              {RESTAURANT.tagline}. Charcoal BBQ, bun kabab and paratha rolls with the real taste of Karachi — right
              here on Prince Nayef Street, Al Khobar.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-rise">
              <Button variant="saffron" size="xl" asChild>
                <a href={RESTAURANT.phoneHref}>
                  <Phone /> Call {RESTAURANT.phoneDisplay}
                </a>
              </Button>
              <Button variant="cream" size="xl" asChild>
                <a href={RESTAURANT.mapsHref} target="_blank" rel="noreferrer">
                  <MapPin /> Get directions
                </a>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <span>
                <strong className="text-foreground">{RESTAURANT.rating}</strong> on Google · {RESTAURANT.reviewCount}{" "}
                reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Favourites */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Karachi favourites</p>
            <h2 className="mt-4 text-4xl md:text-6xl">What everyone orders</h2>
          </div>
          <Link to="/menu" className="group inline-flex items-center gap-2 font-semibold text-primary">
            See the full menu <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:gap-8 lg:grid-cols-4">
          {FAVOURITES.map((dish, i) => (
            <article key={dish.name} className="group animate-rise" style={{ animationDelay: `${i * 90}ms` }}>
              <div className="arch overflow-hidden border border-border bg-card p-2 shadow-card">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="arch aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-2xl md:text-3xl">{dish.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{dish.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Story teaser */}
      <section className="relative overflow-hidden bg-card">
        <div className="bead-line opacity-60" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8">
          <div className="relative mx-auto w-full max-w-md">
            <img
              src={grill}
              alt="Seekh kababs and chicken tikka grilling over glowing charcoal"
              loading="lazy"
              className="arch aspect-[3/4] w-full object-cover shadow-card"
            />
            <div className="absolute -bottom-6 -right-4 rounded-full bg-accent px-6 py-4 font-display text-xl text-accent-foreground shadow-card md:-right-8">
              Live charcoal
            </div>
          </div>
          <div>
            <p className="eyebrow">From Burns Road to Khobar</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-6xl">A taste of home, grilled every night.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Karachi never sleeps, and neither does its food. We bring the smoke of its BBQ stalls, the crunch of its
              bun kababs and the warmth of its biryani pots to Al Khobar — cooked the way it's done back home.
            </p>
            <Button variant="cream" size="lg" className="mt-8" asChild>
              <Link to="/story">
                Read our story <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <p className="eyebrow text-center">What guests say</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.quote} className="rounded-2xl border border-border bg-card p-8">
              <span className="font-display text-6xl leading-none text-primary">“</span>
              <blockquote className="mt-2 text-xl leading-relaxed text-foreground">{r.quote}</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Visit CTA */}
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grain relative overflow-hidden rounded-3xl bg-secondary px-8 py-16 text-center md:px-16">
          <p className="font-urdu text-3xl text-primary">آئیے، کھانا کھائیے</p>
          <h2 className="mt-3 text-4xl text-secondary-foreground md:text-6xl">Come hungry. Open till midnight.</h2>
          <p className="mx-auto mt-5 max-w-xl text-secondary-foreground/80">
            Cross 20, Prince Nayef St, Al Khobar Al Shamalia. Dine in or take away — call ahead and we'll have it hot
            and ready.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button variant="saffron" size="xl" asChild>
              <a href={RESTAURANT.phoneHref}>
                <Phone /> Call now
              </a>
            </Button>
            <Button variant="cream" size="xl" asChild>
              <Link to="/visit">Hours & location</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
