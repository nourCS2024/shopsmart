// Curated catalog data — strictly NO PRICES. This is a "Digital Museum" of food.
// Images use external CDN URLs and are loaded with native lazy-loading.

export type CatalogItem = {
  id: string;
  name: string;
  origin: string;
  story: string;
  notes: string[]; // tasting notes / character
  pairings?: string[];
  image: string;
  badge?: string;
};

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  accent: string; // tailwind text color class
  hero: string;
  items: CatalogItem[];
};

const BAKERY: Category = {
  slug: "bakery",
  title: "Bakery",
  tagline: "Of grain, fire & patience.",
  intro:
    "Each loaf in our bakery begins as a field — wind through wheat, rain on rye, the slow patience of stone-milling. We work only with bakers who treat dough as a living thing.",
  accent: "text-clay",
  hero: "https://images.pexels.com/photos/22941632/pexels-photo-22941632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=1200",
  items: [
    {
      id: "country-sourdough",
      name: "Country Sourdough",
      origin: "Stone-milled heritage wheat · 36-hour ferment",
      story:
        "A loaf shaped by silence and time. Wild yeasts, captured from the air of our bakery, transform a simple flour-and-water dough across a day and a half. The result is a deep, blistered crust over a soft, lacy crumb.",
      notes: ["Chestnut crust", "Tangy crumb", "Notes of toasted hazelnut"],
      pairings: ["Cultured butter", "Aged cheddar", "Stone fruit jam"],
      image:
        "https://images.pexels.com/photos/22941632/pexels-photo-22941632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
      badge: "Signature",
    },
    {
      id: "seeded-rye",
      name: "Seeded Rye",
      origin: "Whole rye · Sunflower, flax & caraway",
      story:
        "Dense, dark, honest. A loaf rooted in northern European tradition — the kind you slice thin and stack with everything good.",
      notes: ["Earthy", "Nutty", "Faintly sweet"],
      pairings: ["Smoked fish", "Soft cheese", "Pickled vegetables"],
      image:
        "https://images.pexels.com/photos/30350360/pexels-photo-30350360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
    },
    {
      id: "buttered-brioche",
      name: "Buttered Brioche",
      origin: "French method · Cultured butter & farm eggs",
      story:
        "More butter than you'd believe. A pillow-soft crumb the colour of late-afternoon sun, with a tender, golden top.",
      notes: ["Pillowy", "Buttery", "Lightly sweet"],
      pairings: ["Fresh berries", "Coffee", "Soft scrambled eggs"],
      image:
        "https://images.pexels.com/photos/30888598/pexels-photo-30888598.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
    },
    {
      id: "wreath-loaf",
      name: "Garden Wreath Loaf",
      origin: "Hand-scored · Wild flowers & herbs",
      story:
        "An edible still-life. Each loaf is hand-scored with a botanical pattern — no two are alike, and that's the point.",
      notes: ["Soft crumb", "Floral aroma", "Crackling crust"],
      pairings: ["Ricotta & honey", "Olive oil", "Tomato confit"],
      image:
        "https://images.pexels.com/photos/30895275/pexels-photo-30895275.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
      badge: "Limited",
    },
  ],
};

const MEAT_CHEESE: Category = {
  slug: "meat-cheese",
  title: "Meat & Cheese",
  tagline: "From pasture to board.",
  intro:
    "Curated cuts and cellar-aged cheeses from small producers who know their animals by name and their cultures by heart.",
  accent: "text-clay",
  hero: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1600&q=70",
  items: [
    {
      id: "alpine-tomme",
      name: "Alpine Tomme",
      origin: "Mountain pasture · 8-month cave aged",
      story:
        "Made from the milk of cows who graze among wildflowers above the tree line. Earthy, grassy, with the faintest hum of crystallised salt.",
      notes: ["Buttery", "Hay & wildflower", "Long finish"],
      pairings: ["Crusty bread", "Pear", "Walnuts"],
      image:
        "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1200&q=70",
      badge: "Cave Aged",
    },
    {
      id: "wild-fennel-salami",
      name: "Wild Fennel Salami",
      origin: "Heritage pork · Slow cured 90 days",
      story:
        "Thinly sliced, it should be almost translucent — each bite carrying the warmth of fennel pollen and black pepper.",
      notes: ["Aromatic", "Velvety fat", "Peppered finish"],
      pairings: ["Marcona almonds", "Aged gouda", "Fig"],
      image:
        "https://images.unsplash.com/photo-1601057068403-7facd3262f4d?auto=format&fit=crop&w=1200&q=70",
    },
    {
      id: "blue-shadow",
      name: "Blue Shadow",
      origin: "Raw sheep's milk · Foil-wrapped",
      story:
        "A blue with manners. Creamy rather than crumbly, with veins that glow lavender against pale ivory paste.",
      notes: ["Creamy", "Mineral", "Gentle blue"],
      pairings: ["Honey", "Dark bread", "Port"],
      image:
        "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&q=70",
    },
  ],
};

const DAILY_DEALS: Category = {
  slug: "daily-deals",
  title: "Today's Picks",
  tagline: "What the season is whispering.",
  intro:
    "Not deals in the loud sense — quiet recommendations from our buyers, refreshed each morning based on what arrived crisp, ripe and ready.",
  accent: "text-moss",
  hero: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=70",
  items: [
    {
      id: "morning-figs",
      name: "Black Mission Figs",
      origin: "Picked at dawn · Local orchard",
      story:
        "Eat them today. Tomorrow they'll be jam — which is also wonderful, but different.",
      notes: ["Honeyed", "Soft", "Floral"],
      image:
        "https://images.unsplash.com/photo-1601379329542-31c59cf64f81?auto=format&fit=crop&w=1200&q=70",
      badge: "Picked Today",
    },
    {
      id: "burrata",
      name: "Hand-pulled Burrata",
      origin: "Made this morning · 24-hour shelf life",
      story:
        "Cream cradled in a delicate pouch of fresh mozzarella. Tear it open over warm bread and watch it sigh.",
      notes: ["Milky", "Cool", "Lush"],
      image:
        "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?auto=format&fit=crop&w=1200&q=70",
      badge: "Fresh",
    },
    {
      id: "heirloom-tomatoes",
      name: "Heirloom Tomatoes",
      origin: "Mixed varietals · Sun-ripened",
      story:
        "Striped, knobbly, every shade from amber to plum. The kind that need only sea salt.",
      notes: ["Sweet", "Tangy", "Sun-warm"],
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=70",
    },
  ],
};

const VEGGIES: Category = {
  slug: "veggies",
  title: "Vegetables",
  tagline: "From the soil, in season.",
  intro:
    "We work directly with farms within a half-day's drive. What's on our shelves is what's coming up from the ground right now.",
  accent: "text-moss",
  hero: "https://images.pexels.com/photos/4113917/pexels-photo-4113917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=1200",
  items: [
    {
      id: "rainbow-chard",
      name: "Rainbow Chard",
      origin: "Local farm · Cut yesterday",
      story:
        "Stems like stained glass — coral, gold, magenta. The leaves wilt down to silk in a hot pan with garlic.",
      notes: ["Tender", "Mineral", "Slightly sweet"],
      image:
        "https://images.pexels.com/photos/4113917/pexels-photo-4113917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
    },
    {
      id: "sweet-peppers",
      name: "Sweet Peppers",
      origin: "Greenhouse-ripened · Mixed colours",
      story:
        "Glossy and full-shouldered, sweet enough to eat raw, sliced into ribbons over a salad of grains.",
      notes: ["Crisp", "Juicy", "Honeyed"],
      image:
        "https://images.pexels.com/photos/915002/pexels-photo-915002.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
    },
    {
      id: "wild-mushrooms",
      name: "Wild Mushrooms",
      origin: "Foraged · Forest floor, this week",
      story:
        "Chanterelle, oyster, maitake — a parade of forms. Cook them simply: butter, salt, time.",
      notes: ["Earthy", "Umami", "Woodsy"],
      image:
        "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?auto=format&fit=crop&w=1200&q=70",
    },
  ],
};

const FRUITS: Category = {
  slug: "fruits",
  title: "Fruits",
  tagline: "Sun, in edible form.",
  intro:
    "Picked at the moment of ripeness — never before. We'd rather have less, perfectly, than more in a hurry.",
  accent: "text-rose",
  hero: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1600&q=70",
  items: [
    {
      id: "stone-fruit",
      name: "Stone Fruit Medley",
      origin: "Heritage orchard · Tree-ripened",
      story:
        "Peaches, nectarines, apricots — sticky-fingered and best eaten over a sink.",
      notes: ["Floral", "Juicy", "Honey-edged"],
      image:
        "https://images.unsplash.com/photo-1629828874514-c75da7e5e10e?auto=format&fit=crop&w=1200&q=70",
      badge: "Peak Season",
    },
    {
      id: "wild-berries",
      name: "Wild Berries",
      origin: "Hand-picked · Mixed varieties",
      story:
        "Tiny, dark, intense. The flavour of a hedgerow in late summer, distilled.",
      notes: ["Bright", "Tart", "Wine-deep"],
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=70",
    },
    {
      id: "citrus-trio",
      name: "Citrus Trio",
      origin: "Mediterranean groves · Winter harvest",
      story:
        "Blood orange, Meyer lemon, ruby grapefruit. A bowl of them on the counter is its own kind of light.",
      notes: ["Vibrant", "Aromatic", "Refreshing"],
      image:
        "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1200&q=70",
    },
  ],
};

const OTHERS: Category = {
  slug: "others",
  title: "The Pantry",
  tagline: "Quiet essentials.",
  intro:
    "Oils, vinegars, salts, grains, ferments — the supporting cast that quietly makes everything else taste of more.",
  accent: "text-wheat",
  hero: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1600&q=70",
  items: [
    {
      id: "first-press-oil",
      name: "First-Press Olive Oil",
      origin: "Single estate · Cold extracted",
      story:
        "Grass-green, peppery, alive. Pour it on warm bread and you'll understand why people write poems about this.",
      notes: ["Peppery", "Grassy", "Bright"],
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=70",
    },
    {
      id: "flaked-salt",
      name: "Flaked Sea Salt",
      origin: "Hand-harvested · Atlantic coast",
      story:
        "Pyramidal flakes that crunch and dissolve. The final flourish on almost everything.",
      notes: ["Clean", "Briny", "Crisp"],
      image:
        "https://images.unsplash.com/photo-1518110925495-b37653d50562?auto=format&fit=crop&w=1200&q=70",
    },
    {
      id: "honey-comb",
      name: "Raw Honeycomb",
      origin: "Wildflower meadow · Unfiltered",
      story:
        "Wax and all. Cut a piece onto a cheese board and let people figure it out.",
      notes: ["Floral", "Waxy", "Deep gold"],
      image:
        "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1200&q=70",
    },
  ],
};

export const CATEGORIES: Category[] = [
  BAKERY,
  MEAT_CHEESE,
  DAILY_DEALS,
  VEGGIES,
  FRUITS,
  OTHERS,
];

export const getCategory = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug);
