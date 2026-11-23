import { createFileRoute } from "@tanstack/react-router";
import { Flame, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/site/PageHeading";
import { MENU, RESTAURANT } from "@/lib/restaurant";
import heroBbq from "@/assets/hero-bbq.jpg";
import rolls from "@/assets/rolls.jpg";
import biryani from "@/assets/biryani.jpg";
import kheer from "@/assets/kheer.jpg";

const SECTION_IMAGES: Record<string, string> = {
  bbq: heroBbq,
  street: rolls,
  handi: biryani,
  sweet: kheer,
};

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Karachi Palace, Al Khobar" },
      {
        name: "description",
        content: "Charcoal BBQ platters, Bihari kabab, bun kabab, paratha rolls, chicken biryani, haleem and kheer.",
      },
      { property: "og:title", content: "Menu — Karachi Palace, Al Khobar" },
      {
        property: "og:description",
        content: "Charcoal BBQ platters, bun kabab, paratha rolls, biryani, haleem and kheer — Karachi style.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <PageHeading
        eyebrow="The menu"
        title="Straight from Karachi"
        urdu="مینو"
        intro="Our most-loved dishes. Ask in store or call for today's full menu, prices and specials."
      />

      <nav className="sticky top-[5.4rem] z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-4 text-sm font-semibold md:justify-center md:px-8">
          {MENU.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="shrink-0 text-muted-foreground hover:text-primary">
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl space-y-28 px-5 py-20 md:px-8">
        {MENU.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            className="grid scroll-mt-40 items-start gap-12 md:grid-cols-[2fr_3fr]"
          >
            <div className={idx % 2 === 1 ? "md:order-2" : ""}>
              <div className="md:sticky md:top-44">
                <img
                  src={SECTION_IMAGES[section.id]}
                  alt={section.title}
                  loading="lazy"
                  className="arch aspect-[4/5] w-full object-cover shadow-card"
                />
              </div>
            </div>
            <div>
              <p className="font-urdu text-3xl text-primary">{section.urdu}</p>
              <h2 className="mt-1 text-4xl md:text-5xl">{section.title}</h2>
              <p className="mt-3 text-muted-foreground">{section.intro}</p>
              <div className="truck-strip mt-8 w-24 rounded-full" />
              <ul className="mt-6 divide-y divide-border">
                {section.items.map((item) => (
                  <li key={item.name} className="py-6">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-2xl">{item.name}</h3>
                      {item.signature && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
                          <Flame className="size-3" /> Favourite
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-3xl md:text-4xl">Hungry already?</h2>
        <p className="mt-3 text-muted-foreground">Call ahead for takeaway and we'll have it hot when you arrive.</p>
        <Button variant="saffron" size="xl" className="mt-7" asChild>
          <a href={RESTAURANT.phoneHref}>
            <Phone /> {RESTAURANT.phoneDisplay}
          </a>
        </Button>
      </section>
    </>
  );
}
