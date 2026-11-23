import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/site/PageHeading";
import grill from "@/assets/grill.jpg";
import bunKabab from "@/assets/bun-kabab.jpg";
import haleem from "@/assets/haleem.jpg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Karachi Palace, Al Khobar" },
      {
        name: "description",
        content: "Karachi Palace brings the street food, BBQ and home cooking of Karachi to Al Khobar.",
      },
      { property: "og:title", content: "Our Story — Karachi Palace" },
      {
        property: "og:description",
        content: "The smoke of Karachi's BBQ stalls and the warmth of its biryani pots, in Al Khobar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoryPage,
});

const PILLARS = [
  {
    title: "Live charcoal",
    text: "Every tikka, boti and kabab is grilled to order over real coals — no shortcuts, just smoke and fire.",
  },
  {
    title: "Karachi recipes",
    text: "Spice blends, chutneys and marinades made the way Karachi's street cooks have made them for generations.",
  },
  {
    title: "Made fresh daily",
    text: "Haleem simmered for hours, rolls wrapped hot, bun kababs toasted the moment you order.",
  },
];

function StoryPage() {
  return (
    <>
      <PageHeading
        eyebrow="Our story"
        title="Karachi, served hot"
        urdu="ہماری کہانی"
        intro="A little corner of Pakistan's city of lights on Prince Nayef Street."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2 md:px-8">
        <img
          src={grill}
          alt="A cook turning skewers over a charcoal grill at night"
          className="arch mx-auto aspect-[3/4] w-full max-w-md object-cover shadow-card"
        />
        <div className="space-y-6 text-lg text-muted-foreground">
          <p className="eyebrow">The city of lights</p>
          <h2 className="text-4xl leading-tight text-foreground md:text-5xl">
            Some cities have restaurants. Karachi has a food street on every corner.
          </h2>
          <p>
            From the late-night BBQ smoke of Burns Road to the bun kabab carts of Boat Basin, Karachi's food is loud,
            generous and full of flavour. It's the taste so many of us grew up with — and the one we missed most.
          </p>
          <p>
            Karachi Palace was made for that feeling. Whether you're from Karachi, from anywhere in Pakistan, or just
            love good food, you'll find dishes cooked with the same spice, smoke and care you'd find back home.
          </p>
        </div>
      </section>

      <section className="bg-card">
        <div className="bead-line opacity-60" />
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 md:grid-cols-3 md:px-8">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-border bg-background p-8">
              <span className="font-display text-5xl text-accent">0{i + 1}</span>
              <h3 className="mt-4 text-3xl">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-24 md:grid-cols-2 md:px-8">
        <img src={bunKabab} alt="Karachi bun kabab with egg" loading="lazy" className="aspect-square w-full rounded-3xl object-cover" />
        <img src={haleem} alt="Chicken haleem with fried onions and lemon" loading="lazy" className="aspect-square w-full rounded-3xl object-cover" />
      </section>

      <section className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-4xl md:text-5xl">Taste it for yourself</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button variant="saffron" size="xl" asChild>
            <Link to="/menu">
              See the menu <ArrowRight />
            </Link>
          </Button>
          <Button variant="cream" size="xl" asChild>
            <Link to="/visit">Plan your visit</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
