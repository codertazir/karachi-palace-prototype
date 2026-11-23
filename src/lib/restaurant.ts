export const RESTAURANT = {
  name: "Karachi Palace",
  urduName: "کراچی پیلس",
  tagline: "The hub of flavors",
  addressLines: ["Cross 20, Prince Nayef St", "Al Khobar Al Shamalia, Al Khobar 34426", "Saudi Arabia"],
  phoneDisplay: "+966 54 545 0789",
  phoneHref: "tel:+966545450789",
  whatsappHref: "https://wa.me/966545450789",
  mapsHref: "https://maps.app.goo.gl/GZQjQmmWWrbLBPtUA",
  instagramHref: "https://www.instagram.com/karachi_palace_alkhobar/",
  instagramHandle: "@karachi_palace_alkhobar",
  rating: 4.3,
  reviewCount: "860+",
} as const;

/** Opening hours in Al Khobar local time (UTC+3, no daylight saving). 0 = Sunday. */
export const HOURS: { day: string; open: string; close: string; openMinutes: number }[] = [
  { day: "Sunday", open: "12:00 PM", close: "12:00 AM", openMinutes: 12 * 60 },
  { day: "Monday", open: "12:00 PM", close: "12:00 AM", openMinutes: 12 * 60 },
  { day: "Tuesday", open: "12:00 PM", close: "12:00 AM", openMinutes: 12 * 60 },
  { day: "Wednesday", open: "12:00 PM", close: "12:00 AM", openMinutes: 12 * 60 },
  { day: "Thursday", open: "12:00 PM", close: "12:00 AM", openMinutes: 12 * 60 },
  { day: "Friday", open: "12:30 PM", close: "12:00 AM", openMinutes: 12 * 60 + 30 },
  { day: "Saturday", open: "12:00 PM", close: "12:00 AM", openMinutes: 12 * 60 },
];

const KHOBAR_OFFSET_MS = 3 * 60 * 60 * 1000;

/** Day index (0 = Sunday) and minutes past midnight in Al Khobar for a given instant. */
export function khobarClock(date: Date) {
  const local = new Date(date.getTime() + KHOBAR_OFFSET_MS);
  return { day: local.getUTCDay(), minutes: local.getUTCHours() * 60 + local.getUTCMinutes() };
}

/** Open from the day's opening time until midnight. */
export function isOpenAt(date: Date): boolean {
  const { day, minutes } = khobarClock(date);
  const today = HOURS[day];
  if (!today) return false;
  return minutes >= today.openMinutes;
}

export type MenuItem = { name: string; urdu?: string; description: string; signature?: boolean };
export type MenuSection = { id: string; title: string; urdu: string; intro: string; items: MenuItem[] };

export const MENU: MenuSection[] = [
  {
    id: "bbq",
    title: "Charcoal BBQ",
    urdu: "باربی کیو",
    intro: "Marinated overnight, grilled to order over live coals the Karachi way.",
    items: [
      {
        name: "Mixed BBQ Platter",
        description: "Chicken tikka, malai boti, seekh and Bihari kabab with paratha, chutney and onions.",
        signature: true,
      },
      { name: "Chicken Tikka", description: "Bone-in chicken in a fiery red masala, smoky and charred at the edges." },
      { name: "Chicken Malai Boti", description: "Silky boneless chicken in cream, cheese and green chilli marinade." },
      { name: "Bihari Kabab", description: "Thin beef strips beaten tender, spiced with papaya and mustard oil.", signature: true },
      { name: "Seekh Kabab", description: "Hand-pressed minced beef on skewers with fresh herbs and green chilli." },
      { name: "Beef Kabab Platter", description: "A generous spread of beef kababs with paratha and mint chutney." },
    ],
  },
  {
    id: "street",
    title: "Rolls & Bun Kabab",
    urdu: "رول اور بن کباب",
    intro: "Burns Road and Boat Basin favourites — wrapped hot and eaten with your hands.",
    items: [
      {
        name: "Bun Kabab",
        description: "Spiced shami patty in a toasted bun with onions, green chutney and imli sauce.",
        signature: true,
      },
      { name: "Egg Bun Kabab", description: "The classic, crowned with a fried egg — a Karachi late-night staple." },
      { name: "Bihari Roll", description: "Bihari beef kabab rolled in flaky paratha with onions and chutney.", signature: true },
      { name: "Malai Boti Roll", description: "Creamy malai boti wrapped in paratha with mint mayo." },
      { name: "Chicken Garlic Mayo Roll", description: "Grilled chicken, garlic mayo and crunchy onions in paratha." },
    ],
  },
  {
    id: "handi",
    title: "Biryani, Karahi & Haleem",
    urdu: "بریانی اور کڑاہی",
    intro: "Slow pots and hot woks — the comfort food of every Karachi household.",
    items: [
      {
        name: "Karachi Chicken Biryani",
        description: "Layered basmati with saffron, potato, egg and fried onions, served with raita.",
        signature: true,
      },
      { name: "Chicken Karahi", description: "Tomato, ginger and green chilli cooked down in the karahi, finished with coriander." },
      { name: "Chicken Haleem", description: "Wheat, lentils and chicken slow-cooked for hours, topped with crisp onions and lemon." },
    ],
  },
  {
    id: "sweet",
    title: "Something Sweet",
    urdu: "میٹھا",
    intro: "End the meal the way it should end.",
    items: [{ name: "Kheer", description: "Slow-simmered rice pudding with cardamom, pistachio and almond." }],
  },
];

export const REVIEWS = [
  { quote: "If you are craving for authentic Karachi taste, this is your destination!", name: "Muhammad" },
  { quote: "Authentic Karachi taste of bun kababs and paratha rolls and chutney.", name: "Ammar" },
  { quote: "Authentic Karachi taste. Must try BBQ platter, biryani and egg bun kabab.", name: "Google review" },
];
