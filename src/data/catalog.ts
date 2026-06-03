// Curated catalog data — strictly NO PRICES. This is a "Digital Museum" of food.
// Images use external CDN URLs and are loaded with native lazy-loading.

import bakeryHero from "../assets/Bakery.webp";
import vegetablesFruitsHero from "../assets/Vegetables-fruits.webp";
import meatHero from "../assets/Meat.webp";
import spicesHero from "../assets/Spices.webp";
import groceriesHero from "../assets/Groceries.webp";
import alcoholicBeveragesHero from "../assets/Alcoholic Beverages.webp";
import saladsAppetizersHero from "../assets/Salads-Appetizers.webp";

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
  hero: bakeryHero,
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

const VEGETABLES_FRUITS: Category = {
  slug: "vegetables-fruits",
  title: "Vegetables & Fruits",
  tagline: "From the soil, in season.",
  intro:
    "We work directly with farms within a half-day's drive. What's on our shelves is what's coming up from the ground and ripening on the branch right now — never before, never forced.",
  accent: "text-moss",
  hero: vegetablesFruitsHero,
  items: [
    {
      id: "rainbow-chard",
      name: "Rainbow Chard",
      origin: "Local farm · Cut yesterday",
      story:
        "Stems like stained glass — coral, gold, magenta. The leaves wilt down to silk in a hot pan with garlic.",
      notes: ["Tender", "Mineral", "Slightly sweet"],
      pairings: ["Garlic butter", "Lemon zest", "Pine nuts"],
      image:
        "https://images.pexels.com/photos/4113917/pexels-photo-4113917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
    },
    {
      id: "stone-fruit",
      name: "Stone Fruit Medley",
      origin: "Heritage orchard · Tree-ripened",
      story:
        "Peaches, nectarines, apricots — sticky-fingered and best eaten over a sink.",
      notes: ["Floral", "Juicy", "Honey-edged"],
      pairings: ["Burrata", "Prosciutto", "Aged balsamic"],
      image:
        "https://images.unsplash.com/photo-1629828874514-c75da7e5e10e?auto=format&fit=crop&w=1200&q=70",
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
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=70",
    },
    {
      id: "wild-mushrooms",
      name: "Wild Mushrooms",
      origin: "Foraged · Forest floor, this week",
      story:
        "Chanterelle, oyster, maitake — a parade of forms. Cook them simply: butter, salt, time.",
      notes: ["Earthy", "Umami", "Woodsy"],
      pairings: ["Thyme", "Cream", "Sourdough toast"],
      image:
        "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?auto=format&fit=crop&w=1200&q=70",
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
  hero: meatHero,
  items: [
    {
      id: "dry-aged-ribeye",
      name: "Dry-Aged Ribeye",
      origin: "Grass-fed Hereford · 28-day dry age",
      story:
        "A cut that rewards patience. Twenty-eight days in our cool room concentrates the flavour and tenderises the grain until it melts under a knife.",
      notes: ["Rich", "Nutty", "Deep umami"],
      pairings: ["Flaked salt", "Bone marrow butter", "Watercress"],
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=70",
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
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=70",
    },
    {
      id: "free-range-chicken",
      name: "Free-Range Whole Chicken",
      origin: "Heritage breed · Open pasture",
      story:
        "A chicken that has lived well tastes nothing like one that hasn't. This one has legs from walking and flavour from living.",
      notes: ["Savoury", "Clean", "Deeply flavourful"],
      pairings: ["Lemon & thyme", "Roasted garlic", "Pan jus"],
      image:
        "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1200&q=70",
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
    {
      id: "jambon-cru",
      name: "Jambon Cru",
      origin: "Air-dried · 18-month cure",
      story:
        "Paper-thin slices of dry-cured ham that dissolve on the tongue with a whisper of hazelnut and salt.",
      notes: ["Silky", "Nutty", "Saline"],
      pairings: ["Melon", "Grissini", "Aged Comté"],
      image:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=70",
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
  hero: spicesHero,
  items: [
    {
      id: "kashmir-saffron",
      name: "Kashmir Saffron",
      origin: "Pampore, Kashmir · Hand-harvested",
      story:
        "The most labour-intensive spice on earth. Each thread is the stigma of a single crocus flower, picked by hand at dawn before the bloom fades.",
      notes: ["Floral", "Honey", "Metallic warmth"],
      pairings: ["Risotto", "Bouillabaisse", "Rice pudding"],
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=70",
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
      image:
        "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=1200&q=70",
    },
    {
      id: "smoked-paprika",
      name: "Oak-Smoked Paprika",
      origin: "La Vera, Extremadura · Stone-ground",
      story:
        "Dried over smouldering oak for weeks, then ground to a burnished rust. One spoonful transforms a dish entirely.",
      notes: ["Smoky", "Sweet", "Earthy depth"],
      pairings: ["Chorizo", "Lentils", "Roasted peppers"],
      image:
        "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?auto=format&fit=crop&w=1200&q=70",
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
  hero: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=1600&q=70",
  items: [
    {
      id: "sicilian-pistachios",
      name: "Sicilian Pistachios",
      origin: "Bronte, Sicily · PDO certified",
      story:
        "The Bronte pistachio is small, intensely green, and unlike any other. Grown on volcanic slopes of Etna, the terroir is tasted in every shell.",
      notes: ["Vivid green", "Resinous", "Sweet & complex"],
      pairings: ["Mortadella", "Ricotta", "Dark chocolate"],
      image:
        "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=1200&q=70",
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
      image:
        "https://images.unsplash.com/photo-1574570651898-22b6e74c83e3?auto=format&fit=crop&w=1200&q=70",
    },
    {
      id: "persian-walnuts",
      name: "Persian Walnuts",
      origin: "Chaharmahal, Iran · Freshly shelled",
      story:
        "The original walnut. Persian varieties have thinner shells and paler, less tannic flesh — mild enough to eat by the handful.",
      notes: ["Mild", "Creamy", "Faintly sweet"],
      pairings: ["Feta & honey", "Grape must", "Bitter chocolate"],
      image:
        "https://images.unsplash.com/photo-1563412885-139aff9e5e7f?auto=format&fit=crop&w=1200&q=70",
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
  hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=70",
  items: [
    {
      id: "beeswax-wrap",
      name: "Beeswax Wraps",
      origin: "Handmade · Organic cotton & local beeswax",
      story:
        "A plastic-free alternative that gets better with use. Warm it in your hands and it moulds; cool it and it holds. Wash, reuse, repeat for a year.",
      notes: ["Sustainable", "Mouldable", "Honey-scented"],
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=70",
      badge: "Plastic-Free",
    },
    {
      id: "linen-dish-towels",
      name: "Linen Dish Towels",
      origin: "Woven in Portugal · Stone-washed",
      story:
        "Linen softens and improves with every wash. These start stiff and honest; in six months they'll be your favourite thing in the kitchen.",
      notes: ["Durable", "Fast-drying", "Improves with age"],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=70",
    },
    {
      id: "castile-soap",
      name: "Castile Liquid Soap",
      origin: "Olive oil base · Unscented",
      story:
        "One soap for everything — hands, dishes, surfaces. Pure castile, nothing added, nothing hidden on the label.",
      notes: ["Gentle", "Unscented", "Concentrated"],
      image:
        "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=1200&q=70",
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
  hero: groceriesHero,
  items: [
    {
      id: "first-press-oil",
      name: "First-Press Olive Oil",
      origin: "Single estate · Cold extracted",
      story:
        "Grass-green, peppery, alive. Pour it on warm bread and you'll understand why people write poems about this.",
      notes: ["Peppery", "Grassy", "Bright"],
      pairings: ["Warm bread", "Burrata", "Lemon"],
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=70",
    },
    {
      id: "aged-balsamic",
      name: "Aged Balsamic Vinegar",
      origin: "Modena · 12-year cask aged",
      story:
        "Thick, dark, almost syrupy. A few drops on aged Parmesan or ripe strawberries and the dish needs nothing else.",
      notes: ["Sweet-sour", "Syrupy", "Complex"],
      pairings: ["Parmesan", "Strawberries", "Risotto"],
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=70",
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
      image:
        "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1200&q=70",
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
  ],
};

const ALCOHOLIC_BEVERAGES: Category = {
  slug: "alcoholic-beverages",
  title: "Alcoholic Beverages",
  tagline: "Fermented, distilled, alive.",
  intro:
    "A curated selection of wines, spirits, and fermented drinks chosen for character, not category. Each bottle has a story worth telling at the table.",
  accent: "text-rose",
  hero: alcoholicBeveragesHero,
  items: [
    {
      id: "natural-orange-wine",
      name: "Skin-Contact Orange Wine",
      origin: "Georgian amphora · Rkatsiteli grape",
      story:
        "Eight months on skins in a buried clay amphora. The result is something ancient and alive — amber-coloured, tannic, unlike any white wine you've tasted.",
      notes: ["Amber", "Tannic", "Oxidative & complex"],
      pairings: ["Aged cheese", "Charcuterie", "Roasted root vegetables"],
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=70",
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
      image:
        "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1200&q=70",
    },
    {
      id: "farmhouse-ale",
      name: "Farmhouse Saison",
      origin: "Belgian tradition · Wild-fermented",
      story:
        "Brewed to refresh farm workers through summer — fruity, dry, slightly funky. A beer that tastes of labour and countryside.",
      notes: ["Fruity", "Dry", "Peppery"],
      pairings: ["Mussels", "Fresh chèvre", "Rye bread"],
      image:
        "https://images.unsplash.com/photo-1532634733-cae1395e440f?auto=format&fit=crop&w=1200&q=70",
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
  hero: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1600&q=70",
  items: [
    {
      id: "jun-kombucha",
      name: "Jun Kombucha",
      origin: "Small batch · Green tea & raw honey",
      story:
        "Jun is the rarer sibling of kombucha — brewed with green tea and honey rather than black tea and sugar. The result is softer, more floral, more refined.",
      notes: ["Floral", "Lightly effervescent", "Honey-forward"],
      pairings: ["Sushi", "Light salads", "Afternoon sun"],
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=70",
      badge: "Probiotic",
    },
    {
      id: "cold-brew-single-origin",
      name: "Single-Origin Cold Brew",
      origin: "Ethiopian Yirgacheffe · 18-hour steep",
      story:
        "Steeped cold for eighteen hours to extract sweetness without bitterness. The coffee does everything; the process simply gets out of the way.",
      notes: ["Blueberry", "Jasmine", "Clean & bright"],
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=70",
    },
    {
      id: "ceremonial-matcha",
      name: "Ceremonial Matcha",
      origin: "Uji, Japan · First harvest, shade-grown",
      story:
        "Shade-grown for three weeks before harvest to concentrate the chlorophyll and L-theanine. Whisked into warm water, it becomes something close to meditation.",
      notes: ["Umami", "Grassy", "Creamy foam"],
      pairings: ["Oat milk", "Rice cakes", "Silence"],
      image:
        "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=1200&q=70",
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
  hero: saladsAppetizersHero,
  items: [
    {
      id: "fattoush",
      name: "Fattoush",
      origin: "Levantine tradition · Made this morning",
      story:
        "Crisp toasted flatbread tumbled with summer vegetables, sumac, and a sharp pomegranate dressing. Bright, loud, essential.",
      notes: ["Tangy", "Crisp", "Herbaceous"],
      pairings: ["Grilled meats", "Hummus", "Arak"],
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=70",
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
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=70",
    },
    {
      id: "tabbouleh",
      name: "Tabbouleh",
      origin: "Lebanese method · Bulgur & flat-leaf parsley",
      story:
        "More parsley than grain — the way it should be. Each handful dressed at the last minute with lemon and oil so nothing wilts.",
      notes: ["Fresh", "Lemony", "Vibrant"],
      pairings: ["Kibbeh", "Hummus", "Grilled halloumi"],
      image:
        "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=1200&q=70",
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
  hero: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=1600&q=70",
  items: [
    {
      id: "cold-pressed-green",
      name: "Cold-Pressed Green",
      origin: "Kale, cucumber, apple, ginger · Pressed at dawn",
      story:
        "Eleven pounds of produce pressed into one bottle. Drink it within 72 hours or watch it turn; that urgency is part of its honesty.",
      notes: ["Grassy", "Ginger heat", "Apple bright"],
      image:
        "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=1200&q=70",
      badge: "Raw",
    },
    {
      id: "blood-orange-carrot",
      name: "Blood Orange & Carrot",
      origin: "Sicilian citrus · Local carrots, seasonal",
      story:
        "The blood orange season is short and beautiful. We press it with sweet carrot while it lasts and the colour alone is worth the glass.",
      notes: ["Vivid", "Sweet-tart", "Warm spice"],
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=1200&q=70",
      badge: "Seasonal",
    },
    {
      id: "watermelon-mint",
      name: "Watermelon & Mint",
      origin: "Summer watermelon · Garden mint",
      story:
        "The simplest juice and the hardest to argue with on a warm afternoon. Nothing added, nothing removed, barely anything done.",
      notes: ["Cool", "Sweet", "Refreshing"],
      image:
        "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1200&q=70",
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
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    alt: "Fresh produce daily deal",
    badge: "Today Only",
    wide: true,
  },
  {
    id: "deal-02",
    image:
      "https://images.unsplash.com/photo-1601379329542-31c59cf64f81?auto=format&fit=crop&w=800&q=80",
    alt: "Black mission figs offer",
    badge: "−30%",
  },
  {
    id: "deal-03",
    image:
      "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?auto=format&fit=crop&w=800&q=80",
    alt: "Fresh burrata special",
    badge: "Fresh",
  },
  {
    id: "deal-04",
    image:
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1200&q=80",
    alt: "Cheese board offer",
    badge: "Weekend Deal",
    wide: true,
  },
  {
    id: "deal-05",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    alt: "Olive oil promotion",
    badge: "−20%",
  },
  {
    id: "deal-06",
    image:
      "https://images.pexels.com/photos/22941632/pexels-photo-22941632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    alt: "Artisan bread daily special",
    badge: "Baked Today",
  },
  {
    id: "deal-07",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80",
    alt: "Premium meat cut offer",
    badge: "Limited",
    wide: true,
  },
  {
    id: "deal-08",
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
    alt: "Fresh juice bundle",
    badge: "−25%",
  },
  {
    id: "deal-09",
    image:
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80",
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
  hero: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=70",
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
