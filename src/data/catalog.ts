// Curated catalog data — strictly NO PRICES. This is a "Digital Museum" of food.
// Images served from /public/assets/ and loaded with native lazy-loading.

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
  hero: "/assets/Bakery.webp",
  items: [
    {
      id: "country-sourdough",
      name: "Country Sourdough",
      origin: "Stone-milled heritage wheat · 36-hour ferment",
      story:
        "A loaf shaped by silence and time. Wild yeasts, captured from the air of our bakery, transform a simple flour-and-water dough across a day and a half. The result is a deep, blistered crust over a soft, lacy crumb.",
      notes: ["Chestnut crust", "Tangy crumb", "Notes of toasted hazelnut"],
      pairings: ["Cultured butter", "Aged cheddar", "Stone fruit jam"],
      image: "/assets/country-sourdough.webp",
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
      image: "/assets/seeded-rye.webp",
    },
    {
      id: "buttered-brioche",
      name: "Buttered Brioche",
      origin: "French method · Cultured butter & farm eggs",
      story:
        "More butter than you'd believe. A pillow-soft crumb the colour of late-afternoon sun, with a tender, golden top.",
      notes: ["Pillowy", "Buttery", "Lightly sweet"],
      pairings: ["Fresh berries", "Coffee", "Soft scrambled eggs"],
      image: "/assets/buttered-brioche.webp",
    },
    {
      id: "wreath-loaf",
      name: "Garden Wreath Loaf",
      origin: "Hand-scored · Wild flowers & herbs",
      story:
        "An edible still-life. Each loaf is hand-scored with a botanical pattern — no two are alike, and that's the point.",
      notes: ["Soft crumb", "Floral aroma", "Crackling crust"],
      pairings: ["Ricotta & honey", "Olive oil", "Tomato confit"],
      image: "/assets/wreath-loaf.webp",
      badge: "Limited",
    },
  ],
};

const VEGETABLES_FRUITS: Category = {
  slug: "vegetables-fruits",
  title: "Vegetables & Fruits",
  tagline: "From the soil, in season.",
  intro:
    "We work directly with farms within a half-day's drive. What's on our shelves is what's coming up from the ground and ripening on the branch right now — never before, never forced.",
  accent: "text-moss",
  hero: "/assets/Vegetables-fruits.webp",
  items: [
    {
      id: "rainbow-chard",
      name: "Rainbow Chard",
      origin: "Local farm · Cut yesterday",
      story:
        "Stems like stained glass — coral, gold, magenta. The leaves wilt down to silk in a hot pan with garlic.",
      notes: ["Tender", "Mineral", "Slightly sweet"],
      pairings: ["Garlic butter", "Lemon zest", "Pine nuts"],
      image: "/assets/Vegetables-fruits-1.webp",
    },
    {
      id: "stone-fruit",
      name: "Stone Fruit Medley",
      origin: "Heritage orchard · Tree-ripened",
      story:
        "Peaches, nectarines, apricots — sticky-fingered and best eaten over a sink.",
      notes: ["Floral", "Juicy", "Honey-edged"],
      pairings: ["Burrata", "Prosciutto", "Aged balsamic"],
      image: "/assets/Vegetables-fruits-2.webp",
      badge: "Peak Season",
    },
    {
      id: "heirloom-tomatoes",
      name: "Heirloom Tomatoes",
      origin: "Mixed varietals · Sun-ripened",
      story:
        "Striped, knobbly, every shade from amber to plum. The kind that need only sea salt.",
      notes: ["Sweet", "Tangy", "Sun-warm"],
      pairings: ["Sea salt", "Basil", "Good olive oil"],
      image: "/assets/Vegetables-fruits-3.webp",
    },
    {
      id: "wild-mushrooms",
      name: "Wild Mushrooms",
      origin: "Foraged · Forest floor, this week",
      story:
        "Chanterelle, oyster, maitake — a parade of forms. Cook them simply: butter, salt, time.",
      notes: ["Earthy", "Umami", "Woodsy"],
      pairings: ["Thyme", "Cream", "Sourdough toast"],
      image: "/assets/wild-mushrooms.webp",
    },
  ],
};

const MEAT: Category = {
  slug: "meat",
  title: "Meat",
  tagline: "From pasture to table.",
  intro:
    "Sourced from small farms where animals live well and slowly. We know the farmers by name and the breeds by nature — every cut speaks of that relationship.",
  accent: "text-clay",
  hero: "/assets/Meat.webp",
  items: [
    {
      id: "dry-aged-ribeye",
      name: "Dry-Aged Ribeye",
      origin: "Grass-fed Hereford · 28-day dry age",
      story:
        "A cut that rewards patience. Twenty-eight days in our cool room concentrates the flavour and tenderises the grain until it melts under a knife.",
      notes: ["Rich", "Nutty", "Deep umami"],
      pairings: ["Flaked salt", "Bone marrow butter", "Watercress"],
      image: "/assets/Meat-1.webp",
      badge: "Dry Aged",
    },
    {
      id: "heritage-lamb",
      name: "Heritage Lamb Rack",
      origin: "Mountain pasture · Spring lamb",
      story:
        "Frenched, clean, and proud. The lamb grazes high meadows in summer; the meat carries that brightness — sweet, grassy, gentle.",
      notes: ["Sweet", "Grassy", "Delicate"],
      pairings: ["Rosemary jus", "Flageolet beans", "Mint gremolata"],
      image: "/assets/Meat-2.webp",
    },
    {
      id: "free-range-chicken",
      name: "Free-Range Whole Chicken",
      origin: "Heritage breed · Open pasture",
      story:
        "A chicken that has lived well tastes nothing like one that hasn't. This one has legs from walking and flavour from living.",
      notes: ["Savoury", "Clean", "Deeply flavourful"],
      pairings: ["Lemon & thyme", "Roasted garlic", "Pan jus"],
      image: "/assets/free-range-chicken.webp",
    },
  ],
};

const FROMAGERIE_CHARCUTERIE: Category = {
  slug: "fromagerie-charcuterie",
  title: "Fromagerie & Charcuterie",
  tagline: "Cellar-aged, hand-cured.",
  intro:
    "Curated cheeses and cured meats from small producers who know their animals by name and their cultures by heart. Each piece arrives ready for a board or a quiet afternoon.",
  accent: "text-wheat",
  hero: "/assets/FROMAGERIE & CHARCUTERIE.webp",
  items: [
    {
      id: "alpine-tomme",
      name: "Alpine Tomme",
      origin: "Mountain pasture · 8-month cave aged",
      story:
        "Made from the milk of cows who graze among wildflowers above the tree line. Earthy, grassy, with the faintest hum of crystallised salt.",
      notes: ["Buttery", "Hay & wildflower", "Long finish"],
      pairings: ["Crusty bread", "Pear", "Walnuts"],
      image: "/assets/FROMAGERIE & CHARCUTERIE-1.webp",
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
      image: "/assets/FROMAGERIE & CHARCUTERIE-2.webp",
    },
    {
      id: "blue-shadow",
      name: "Blue Shadow",
      origin: "Raw sheep's milk · Foil-wrapped",
      story:
        "A blue with manners. Creamy rather than crumbly, with veins that glow lavender against pale ivory paste.",
      notes: ["Creamy", "Mineral", "Gentle blue"],
      pairings: ["Honey", "Dark bread", "Port"],
      image: "/assets/FROMAGERIE & CHARCUTERIE-3.webp",
    },
    {
      id: "jambon-cru",
      name: "Jambon Cru",
      origin: "Air-dried · 18-month cure",
      story:
        "Paper-thin slices of dry-cured ham that dissolve on the tongue with a whisper of hazelnut and salt.",
      notes: ["Silky", "Nutty", "Saline"],
      pairings: ["Melon", "Grissini", "Aged Comté"],
      image: "/assets/FROMAGERIE & CHARCUTERIE-4.webp",
      badge: "18 Months",
    },
  ],
};

const SPICES: Category = {
  slug: "spices",
  title: "Spices",
  tagline: "From ancient trade routes.",
  intro:
    "Spices sourced at origin — single-harvest, unblended, honestly labelled. We taste each batch before it reaches the shelf. Aroma is everything.",
  accent: "text-clay",
  hero: "/assets/Spices.webp",
  items: [
    {
      id: "kashmir-saffron",
      name: "Kashmir Saffron",
      origin: "Pampore, Kashmir · Hand-harvested",
      story:
        "The most labour-intensive spice on earth. Each thread is the stigma of a single crocus flower, picked by hand at dawn before the bloom fades.",
      notes: ["Floral", "Honey", "Metallic warmth"],
      pairings: ["Risotto", "Bouillabaisse", "Rice pudding"],
      image: "/assets/Spices-1.webp",
      badge: "Single Origin",
    },
    {
      id: "tellicherry-pepper",
      name: "Tellicherry Black Pepper",
      origin: "Malabar Coast · Extra-bold grade",
      story:
        "Allowed to ripen longer on the vine, Tellicherry berries develop a depth that ordinary black pepper simply cannot offer.",
      notes: ["Complex", "Citrus-edged", "Long heat"],
      pairings: ["Steak", "Cheese boards", "Dark chocolate"],
      image: "/assets/Spices-2.webp",
    },
    {
      id: "smoked-paprika",
      name: "Oak-Smoked Paprika",
      origin: "La Vera, Extremadura · Stone-ground",
      story:
        "Dried over smouldering oak for weeks, then ground to a burnished rust. One spoonful transforms a dish entirely.",
      notes: ["Smoky", "Sweet", "Earthy depth"],
      pairings: ["Chorizo", "Lentils", "Roasted peppers"],
      image: "/assets/Spices-3.webp",
    },
  ],
};

const NUTS: Category = {
  slug: "nuts",
  title: "Nuts",
  tagline: "Harvested at the height of season.",
  intro:
    "From Sicilian almonds to Persian walnuts — each variety selected for flavour, not shelf life. We keep them cool, whole, and uncoated.",
  accent: "text-wheat",
  hero: "/assets/nuts.webp",
  items: [
    {
      id: "sicilian-pistachios",
      name: "Sicilian Pistachios",
      origin: "Bronte, Sicily · PDO certified",
      story:
        "The Bronte pistachio is small, intensely green, and unlike any other. Grown on volcanic slopes of Etna, the terroir is tasted in every shell.",
      notes: ["Vivid green", "Resinous", "Sweet & complex"],
      pairings: ["Mortadella", "Ricotta", "Dark chocolate"],
      image: "/assets/sicilian-pistachios.webp",
      badge: "PDO",
    },
    {
      id: "marcona-almonds",
      name: "Marcona Almonds",
      origin: "Andalusia · Lightly sea-salted",
      story:
        "Rounder, softer, and richer than the California variety. Fried briefly in olive oil and finished with a touch of salt, they're a ritual rather than a snack.",
      notes: ["Buttery", "Mild", "Rich"],
      pairings: ["Sherry", "Manchego", "Olives"],
      image: "/assets/marcona-almonds.webp",
    },
    {
      id: "persian-walnuts",
      name: "Persian Walnuts",
      origin: "Chaharmahal, Iran · Freshly shelled",
      story:
        "The original walnut. Persian varieties have thinner shells and paler, less tannic flesh — mild enough to eat by the handful.",
      notes: ["Mild", "Creamy", "Faintly sweet"],
      pairings: ["Feta & honey", "Grape must", "Bitter chocolate"],
      image: "/assets/persian-walnuts.webp",
    },
  ],
};

const HOUSEHOLD: Category = {
  slug: "household",
  title: "Household",
  tagline: "Quiet things that last.",
  intro:
    "A careful selection of household essentials — things you reach for every day without thinking. We've thought about them so you don't have to.",
  accent: "text-moss",
  hero: "/assets/household.webp",
  items: [
    {
      id: "beeswax-wrap",
      name: "Beeswax Wraps",
      origin: "Handmade · Organic cotton & local beeswax",
      story:
        "A plastic-free alternative that gets better with use. Warm it in your hands and it moulds; cool it and it holds. Wash, reuse, repeat for a year.",
      notes: ["Sustainable", "Mouldable", "Honey-scented"],
      image: "/assets/beeswax-wrap.webp",
      badge: "Plastic-Free",
    },
    {
      id: "linen-dish-towels",
      name: "Linen Dish Towels",
      origin: "Woven in Portugal · Stone-washed",
      story:
        "Linen softens and improves with every wash. These start stiff and honest; in six months they'll be your favourite thing in the kitchen.",
      notes: ["Durable", "Fast-drying", "Improves with age"],
      image: "/assets/linen-dish-towels.webp",
    },
    {
      id: "castile-soap",
      name: "Castile Liquid Soap",
      origin: "Olive oil base · Unscented",
      story:
        "One soap for everything — hands, dishes, surfaces. Pure castile, nothing added, nothing hidden on the label.",
      notes: ["Gentle", "Unscented", "Concentrated"],
      image: "/assets/castile-soap.webp",
    },
  ],
};

const GROCERIES: Category = {
  slug: "groceries",
  title: "Groceries",
  tagline: "Quiet essentials, considered.",
  intro:
    "Oils, vinegars, salts, grains, legumes — the supporting cast that quietly makes everything else taste of more. We taste everything before it earns shelf space.",
  accent: "text-wheat",
  hero: "/assets/Groceries.webp",
  items: [
    {
      id: "first-press-oil",
      name: "First-Press Olive Oil",
      origin: "Single estate · Cold extracted",
      story:
        "Grass-green, peppery, alive. Pour it on warm bread and you'll understand why people write poems about this.",
      notes: ["Peppery", "Grassy", "Bright"],
      pairings: ["Warm bread", "Burrata", "Lemon"],
      image: "/assets/first-press-oil.webp",
    },
    {
      id: "aged-balsamic",
      name: "Aged Balsamic Vinegar",
      origin: "Modena · 12-year cask aged",
      story:
        "Thick, dark, almost syrupy. A few drops on aged Parmesan or ripe strawberries and the dish needs nothing else.",
      notes: ["Sweet-sour", "Syrupy", "Complex"],
      pairings: ["Parmesan", "Strawberries", "Risotto"],
      image: "/assets/aged-balsamic.webp",
      badge: "12 Year",
    },
    {
      id: "raw-honeycomb",
      name: "Raw Honeycomb",
      origin: "Wildflower meadow · Unfiltered",
      story:
        "Wax and all. Cut a piece onto a cheese board and let people figure it out.",
      notes: ["Floral", "Waxy", "Deep gold"],
      pairings: ["Aged cheese", "Warm bread", "Walnuts"],
      image: "/assets/raw-honeycomb.webp",
    },
    {
      id: "flaked-salt",
      name: "Flaked Sea Salt",
      origin: "Hand-harvested · Atlantic coast",
      story:
        "Pyramidal flakes that crunch and dissolve. The final flourish on almost everything.",
      notes: ["Clean", "Briny", "Crisp"],
      image: "/assets/flaked-salt.webp",
    },
  ],
};

const ALCOHOLIC_BEVERAGES: Category = {
  slug: "alcoholic-beverages",
  title: "Alcoholic Beverages",
  tagline: "Fermented, distilled, alive.",
  intro:
    "A curated selection of wines, spirits, and fermented drinks chosen for character, not category. Each bottle has a story worth telling at the table.",
  accent: "text-rose",
  hero: "/assets/Alcoholic Beverages.webp",
  items: [
    {
      id: "natural-orange-wine",
      name: "Skin-Contact Orange Wine",
      origin: "Georgian amphora · Rkatsiteli grape",
      story:
        "Eight months on skins in a buried clay amphora. The result is something ancient and alive — amber-coloured, tannic, unlike any white wine you've tasted.",
      notes: ["Amber", "Tannic", "Oxidative & complex"],
      pairings: ["Aged cheese", "Charcuterie", "Roasted root vegetables"],
      image: "/assets/Alcoholic Beverages-1.webp",
      badge: "Natural",
    },
    {
      id: "mezcal-artisanal",
      name: "Artisanal Mezcal",
      origin: "Oaxaca · Espadín agave, pit-roasted",
      story:
        "Made in small batches by a single family, roasting the piñas over mesquite before fermentation. Every bottle is a portrait of a place.",
      notes: ["Smoky", "Vegetal", "Citrus finish"],
      pairings: ["Dark chocolate", "Grapefruit", "Grilled corn"],
      image: "/assets/Alcoholic Beverages-2.webp",
    },
    {
      id: "farmhouse-ale",
      name: "Farmhouse Saison",
      origin: "Belgian tradition · Wild-fermented",
      story:
        "Brewed to refresh farm workers through summer — fruity, dry, slightly funky. A beer that tastes of labour and countryside.",
      notes: ["Fruity", "Dry", "Peppery"],
      pairings: ["Mussels", "Fresh chèvre", "Rye bread"],
      image: "/assets/Alcoholic Beverages-3.webp",
    },
  ],
};

const NON_ALCOHOLIC_BEVERAGES: Category = {
  slug: "non-alcoholic-beverages",
  title: "Non-Alcoholic Beverages",
  tagline: "Alive without the alcohol.",
  intro:
    "From wild-fermented kombuchas to single-origin cold brews and ceremonial teas. Every bottle here is as considered as anything with a cork.",
  accent: "text-moss",
  hero: "/assets/non-alcoholic-beverages.webp",
  items: [
    {
      id: "jun-kombucha",
      name: "Jun Kombucha",
      origin: "Small batch · Green tea & raw honey",
      story:
        "Jun is the rarer sibling of kombucha — brewed with green tea and honey rather than black tea and sugar. The result is softer, more floral, more refined.",
      notes: ["Floral", "Lightly effervescent", "Honey-forward"],
      pairings: ["Sushi", "Light salads", "Afternoon sun"],
      image: "/assets/non-Alcoholic Beverages-1.webp",
      badge: "Probiotic",
    },
    {
      id: "cold-brew-single-origin",
      name: "Single-Origin Cold Brew",
      origin: "Ethiopian Yirgacheffe · 18-hour steep",
      story:
        "Steeped cold for eighteen hours to extract sweetness without bitterness. The coffee does everything; the process simply gets out of the way.",
      notes: ["Blueberry", "Jasmine", "Clean & bright"],
      image: "/assets/non-Alcoholic Beverages-2.webp",
    },
    {
      id: "ceremonial-matcha",
      name: "Ceremonial Matcha",
      origin: "Uji, Japan · First harvest, shade-grown",
      story:
        "Shade-grown for three weeks before harvest to concentrate the chlorophyll and L-theanine. Whisked into warm water, it becomes something close to meditation.",
      notes: ["Umami", "Grassy", "Creamy foam"],
      pairings: ["Oat milk", "Rice cakes", "Silence"],
      image: "/assets/non-Alcoholic Beverages-3.webp",
    },
  ],
};

const SALADS_APPETIZERS: Category = {
  slug: "salads-appetizers",
  title: "Salads & Appetizers",
  tagline: "Small things, done beautifully.",
  intro:
    "Prepared fresh each morning in our kitchen. Salads dressed to order, dips made from scratch, small plates composed with the same care as a main course.",
  accent: "text-moss",
  hero: "/assets/Salads-Appetizers.webp",
  items: [
    {
      id: "fattoush",
      name: "Fattoush",
      origin: "Levantine tradition · Made this morning",
      story:
        "Crisp toasted flatbread tumbled with summer vegetables, sumac, and a sharp pomegranate dressing. Bright, loud, essential.",
      notes: ["Tangy", "Crisp", "Herbaceous"],
      pairings: ["Grilled meats", "Hummus", "Arak"],
      image: "/assets/fattoush.webp",
      badge: "Made Today",
    },
    {
      id: "labneh",
      name: "Labneh with Za'atar",
      origin: "Strained overnight · Local yoghurt",
      story:
        "Yoghurt hung in cloth overnight until it becomes dense, creamy, and slightly sour. Finished with za'atar and good oil — a complete thing.",
      notes: ["Tangy", "Creamy", "Herby"],
      pairings: ["Warm bread", "Olives", "Cherry tomatoes"],
      image: "/assets/labneh.webp",
    },
    {
      id: "tabbouleh",
      name: "Tabbouleh",
      origin: "Lebanese method · Bulgur & flat-leaf parsley",
      story:
        "More parsley than grain — the way it should be. Each handful dressed at the last minute with lemon and oil so nothing wilts.",
      notes: ["Fresh", "Lemony", "Vibrant"],
      pairings: ["Kibbeh", "Hummus", "Grilled halloumi"],
      image: "/assets/tabbouleh.webp",
    },
  ],
};

const FRESH_JUICES: Category = {
  slug: "fresh-juices",
  title: "Fresh Juices",
  tagline: "Pressed this morning.",
  intro:
    "Cold-pressed within hours of arrival, never pasteurised, always consumed today. Our juices are perishable by design — that's the point.",
  accent: "text-rose",
  hero: "/assets/fresh-juices.webp",
  items: [
    {
      id: "cold-pressed-green",
      name: "Cold-Pressed Green",
      origin: "Kale, cucumber, apple, ginger · Pressed at dawn",
      story:
        "Eleven pounds of produce pressed into one bottle. Drink it within 72 hours or watch it turn; that urgency is part of its honesty.",
      notes: ["Grassy", "Ginger heat", "Apple bright"],
      image: "/assets/cold-pressed-green.webp",
      badge: "Raw",
    },
    {
      id: "blood-orange-carrot",
      name: "Blood Orange & Carrot",
      origin: "Sicilian citrus · Local carrots, seasonal",
      story:
        "The blood orange season is short and beautiful. We press it with sweet carrot while it lasts and the colour alone is worth the glass.",
      notes: ["Vivid", "Sweet-tart", "Warm spice"],
      image: "/assets/blood-orange-carrot.webp",
      badge: "Seasonal",
    },
    {
      id: "watermelon-mint",
      name: "Watermelon & Mint",
      origin: "Summer watermelon · Garden mint",
      story:
        "The simplest juice and the hardest to argue with on a warm afternoon. Nothing added, nothing removed, barely anything done.",
      notes: ["Cool", "Sweet", "Refreshing"],
      image: "/assets/watermelon-mint.webp",
    },
  ],
};

export type DealImage = {
  id: string;
  image: string;
  alt: string;
  badge?: string;
  /** Optional column span hint: 1 = normal, 2 = wide */
  wide?: boolean;
};

export const DEAL_IMAGES: DealImage[] = [
  {
    id: "deal-01",
    image: "/assets/deal-01.webp",
    alt: "Fresh produce daily deal",
    badge: "Today Only",
    wide: true,
  },
  {
    id: "deal-02",
    image: "/assets/deal-02.webp",
    alt: "Black mission figs offer",
    badge: "−30%",
  },
  {
    id: "deal-03",
    image: "/assets/deal-03.webp",
    alt: "Fresh burrata special",
    badge: "Fresh",
  },
  {
    id: "deal-04",
    image: "/assets/deal-04.webp",
    alt: "Cheese board offer",
    badge: "Weekend Deal",
    wide: true,
  },
  {
    id: "deal-05",
    image: "/assets/deal-05.webp",
    alt: "Olive oil promotion",
    badge: "−20%",
  },
  {
    id: "deal-06",
    image: "/assets/deal-06.webp",
    alt: "Artisan bread daily special",
    badge: "Baked Today",
  },
  {
    id: "deal-07",
    image: "/assets/deal-07.webp",
    alt: "Premium meat cut offer",
    badge: "Limited",
    wide: true,
  },
  {
    id: "deal-08",
    image: "/assets/deal-08.webp",
    alt: "Fresh juice bundle",
    badge: "−25%",
  },
  {
    id: "deal-09",
    image: "/assets/deal-09.webp",
    alt: "Nuts & dried fruits deal",
    badge: "Value Pack",
  },
];

const DAILY_DEALS: Category = {
  slug: "daily-deals",
  title: "Daily Deals",
  tagline: "Offers, refreshed every morning.",
  intro:
    "Discounts and special offers on the finest products in store — refreshed every morning, gone by evening.",
  accent: "text-moss",
  hero: "/assets/daily-deals.webp",
  items: [],
};

export const CATEGORIES: Category[] = [
  BAKERY,
  VEGETABLES_FRUITS,
  MEAT,
  FROMAGERIE_CHARCUTERIE,
  SPICES,
  NUTS,
  HOUSEHOLD,
  GROCERIES,
  ALCOHOLIC_BEVERAGES,
  NON_ALCOHOLIC_BEVERAGES,
  SALADS_APPETIZERS,
  FRESH_JUICES,
  DAILY_DEALS,
];

export const getCategory = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug);
