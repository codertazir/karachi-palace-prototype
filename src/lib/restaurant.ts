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

export type MenuItem = { name: string; price: string; calories: number };
export type MenuSection = {
  id: string;
  title: string;
  urdu: string;
  intro: string;
  image: "bbq" | "rolls" | "biryani" | "kheer";
  items: MenuItem[];
};

/** Prices in Saudi Riyal (SR), from the restaurant's printed menu. */
export const MENU: MenuSection[] = [
  {
    id: "bbq",
    title: "BBQ Platter",
    urdu: "باربی کیو",
    intro: "Grilled to order over live coals, served as a full platter.",
    image: "bbq",
    items: [
      { name: "Chicken Boti Platter", price: "27", calories: 805 },
      { name: "Chicken Malai Boti Platter", price: "27", calories: 815 },
      { name: "Chicken Kabab Platter", price: "27", calories: 830 },
      { name: "Beef Kabab Platter", price: "27", calories: 845 },
      { name: "Beef Bihari Platter", price: "30", calories: 740 },
      { name: "Mix Platter", price: "60", calories: 1430 },
    ],
  },
  {
    id: "tikka",
    title: "Tikka",
    urdu: "تکہ",
    intro: "Priced leg / chest.",
    image: "bbq",
    items: [
      { name: "Chicken Tikka – Regular", price: "14 / 16", calories: 580 },
      { name: "Chicken Spl Tikka – Malai", price: "14 / 16", calories: 610 },
      { name: "Chicken Spl Tikka – Bihari", price: "14 / 16", calories: 580 },
    ],
  },
  {
    id: "rice",
    title: "Rice",
    urdu: "چاول",
    intro: "Biryani and pulao, Karachi style.",
    image: "biryani",
    items: [
      { name: "Chicken Biryani", price: "16", calories: 315 },
      { name: "Mutton Biryani (weekend)", price: "24", calories: 320 },
      { name: "Beef Pulao", price: "20", calories: 340 },
      { name: "Chullu Kabab", price: "29", calories: 380 },
    ],
  },
  {
    id: "curries",
    title: "Curries",
    urdu: "سالن",
    intro: "Slow pots, home-style.",
    image: "biryani",
    items: [
      { name: "Chicken Korma", price: "17", calories: 330 },
      { name: "Mutton Korma", price: "20", calories: 345 },
      { name: "Haleem (Beef)", price: "17", calories: 315 },
      { name: "Keema (Beef)", price: "18", calories: 385 },
      { name: "Brain Masala", price: "20", calories: 320 },
      { name: "Fry Kabab (weekend)", price: "29", calories: 405 },
    ],
  },
  {
    id: "rolls",
    title: "Paratha Roll",
    urdu: "پراٹھا رول",
    intro: "Wrapped hot in flaky paratha.",
    image: "rolls",
    items: [
      { name: "Chicken Boti Chatni Roll", price: "13", calories: 380 },
      { name: "Chicken Boti Mayogarlic Roll", price: "14", calories: 405 },
      { name: "Chicken Malai Boti Chatni Roll", price: "13", calories: 390 },
      { name: "Chicken Malai Boti Mayogarlic Roll", price: "14", calories: 415 },
      { name: "Chicken Kabab Roll", price: "13", calories: 385 },
      { name: "Beef Kabab Roll", price: "13", calories: 390 },
      { name: "Beef Bihari Roll", price: "14", calories: 395 },
      { name: "Chapli Roll", price: "13", calories: 405 },
      { name: "Chicken Cheese Roll", price: "15", calories: 415 },
    ],
  },
  {
    id: "bun",
    title: "Bun Kabab & Sandwiches",
    urdu: "بن کباب",
    intro: "Burns Road favourites.",
    image: "rolls",
    items: [
      { name: "Bun Kabab", price: "7", calories: 265 },
      { name: "Bun Kabab with Egg", price: "8", calories: 280 },
      { name: "Bihari Bun Kabab", price: "10", calories: 315 },
      { name: "Chapli Bun Kabab", price: "10", calories: 320 },
      { name: "Zinger Burger", price: "15", calories: 405 },
      { name: "Club Sandwich", price: "15", calories: 390 },
      { name: "Malai Boti Wrap", price: "15", calories: 370 },
    ],
  },
  {
    id: "pizza",
    title: "Pizza & Fries",
    urdu: "پیزا",
    intro: "Desi toppings on every slice.",
    image: "rolls",
    items: [
      { name: "Chicken Tikka Boti Pizza", price: "25", calories: 320 },
      { name: "Chicken Malai Boti Pizza", price: "25", calories: 320 },
      { name: "Beef Bihari Pizza", price: "25", calories: 340 },
      { name: "Plain Fries", price: "7", calories: 370 },
      { name: "Masala Fries with Mayogarlic", price: "9", calories: 395 },
    ],
  },
  {
    id: "bread",
    title: "Bread",
    urdu: "روٹی",
    intro: "Fresh from the tandoor.",
    image: "biryani",
    items: [
      { name: "Puri Paratha", price: "3", calories: 215 },
      { name: "Naan", price: "1", calories: 175 },
      { name: "Chapati", price: "1", calories: 105 },
      { name: "Taftan", price: "5", calories: 205 },
      { name: "Shermaal", price: "5", calories: 180 },
    ],
  },
  {
    id: "chinese",
    title: "Chinese & Soup",
    urdu: "سوپ",
    intro: "Karachi-style Chinese.",
    image: "biryani",
    items: [
      { name: "Chicken Chowmein", price: "19", calories: 355 },
      { name: "Chicken Corn Soup", price: "8", calories: 155 },
      { name: "Hot & Sour Soup", price: "8", calories: 140 },
    ],
  },
  {
    id: "sides",
    title: "Salad & Sauces",
    urdu: "سلاد",
    intro: "On the side.",
    image: "kheer",
    items: [
      { name: "Green Salad", price: "8", calories: 70 },
      { name: "Chatni", price: "1", calories: 30 },
      { name: "Mayogarlic", price: "2", calories: 140 },
      { name: "Raita", price: "2", calories: 20 },
    ],
  },
  {
    id: "sweet",
    title: "Desserts & Beverages",
    urdu: "میٹھا",
    intro: "End the meal the way it should end.",
    image: "kheer",
    items: [
      { name: "Kheer", price: "8", calories: 205 },
      { name: "Falooda", price: "15", calories: 220 },
      { name: "Limca", price: "7", calories: 170 },
      { name: "Pakola", price: "3.50", calories: 210 },
      { name: "Cold Drink", price: "3", calories: 77 },
      { name: "Doodh Patti", price: "2", calories: 75 },
      { name: "Water", price: "1", calories: 0 },
    ],
  },
];

export const REVIEWS = [
  { quote: "If you are craving for authentic Karachi taste, this is your destination!", name: "Muhammad" },
  { quote: "Authentic Karachi taste of bun kababs and paratha rolls and chutney.", name: "Ammar" },
  { quote: "Authentic Karachi taste. Must try BBQ platter, biryani and egg bun kabab.", name: "Google review" },
];
