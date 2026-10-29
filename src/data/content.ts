import { CafeLocation, JournalArticle } from "@/types";

export interface CollectionMeta {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
}

export const COLLECTIONS: CollectionMeta[] = [
  {
    slug: "coffee",
    title: "Whole Bean & Ground Coffee",
    subtitle: "Carefully sourced single origins and seasonal blends",
    description: "Every coffee we source is roasted lightly and thoughtfully to preserve the natural sweetness, clean acidity, and distinct terroir of its origin.",
    coverImage: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1600&auto=format&fit=crop"
  },
  {
    slug: "ceramics",
    title: "Stoneware & Ceramic Collection",
    subtitle: "Collaborative tactile vessels for daily rituals",
    description: "Handcrafted cups, carafes, and ceramic pour-overs thrown in small ateliers. Designed to balance thermal stability, tactile comfort, and aesthetic restraint.",
    coverImage: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=1600&auto=format&fit=crop"
  },
  {
    slug: "equipment",
    title: "Brewing Equipment & Tools",
    subtitle: "Precision instruments for conscious coffee making",
    description: "Curated manual brewing equipment tested daily in our cafés and tasting lab. Engineered for repeatability, longevity, and clarity in the cup.",
    coverImage: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?q=80&w=1600&auto=format&fit=crop"
  },
  {
    slug: "single-serve",
    title: "Single Serve & Drip Bags",
    subtitle: "Specialty coffee wherever your journey takes you",
    description: "Precision-ground single-origin coffees nitro-flushed inside compostable origami drip filters. Uncompromising quality requiring only freshly boiled water.",
    coverImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
  },
  {
    slug: "all",
    title: "All Products",
    subtitle: "The complete VELUNE COFFEE collection",
    description: "Explore our full range of freshly roasted single origin coffees, handmade stoneware, and precision brewing tools.",
    coverImage: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1600&auto=format&fit=crop"
  }
];

export const CAFE_LOCATIONS: CafeLocation[] = [
  {
    id: "loc-menteng",
    name: "Menteng Roastery & Bakery",
    city: "Jakarta",
    country: "Indonesia",
    address: "Jl. Teuku Cik Ditiro No. 42, Menteng, Jakarta Pusat",
    hours: [
      "Monday – Friday: 07:00 – 20:00",
      "Saturday – Sunday: 07:30 – 21:00"
    ],
    description: "Housed in a restored 1930s Dutch colonial villa. The space balances raw lime-washed plaster walls, terrazzo flooring, and bespoke teak woodwork with our central 15kg Giesen roaster on display.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop",
    features: ["On-site Roastery", "Artisan Bakery", "Brew Bar", "Outdoor Courtyard", "Coffee Tasting Table"]
  },
  {
    id: "loc-canggu",
    name: "Batu Bolong Atelier",
    city: "Bali",
    country: "Indonesia",
    address: "Jl. Pantai Batu Bolong No. 88, Canggu, Bali",
    hours: [
      "Monday – Sunday: 06:30 – 18:00"
    ],
    description: "An airy, open-concept pavilion built with volcanic basalt stone and sustainable bamboo. Morning light floods the hand-built ceramic brew bar overlooking tropical greenery.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600&auto=format&fit=crop",
    features: ["Pour-over Bar", "Cold Brew Lab", "Ceramics Showroom", "Lush Garden Seating"]
  },
  {
    id: "loc-kyoto",
    name: "Higashiyama Studio",
    city: "Kyoto",
    country: "Japan",
    address: "3-Chome, Higashiyama-ku, Kyoto 605-0862",
    hours: [
      "Wednesday – Sunday: 09:00 – 18:00",
      "Monday – Tuesday: Closed"
    ],
    description: "A tranquil 90-year-old Machiya townhouse nestled along ancient cobblestone paths. Minimalist cedar counters and hand-thrown stoneware cups serve quiet moments of reflection.",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1600&auto=format&fit=crop",
    features: ["Single Origin Bar", "Ceramics Atelier", "Private Tasting Room"]
  },
  {
    id: "loc-copenhagen",
    name: "Vesterbro Kaffebar",
    city: "Copenhagen",
    country: "Denmark",
    address: "Vesterbrogade 74, 1620 København V",
    hours: [
      "Monday – Friday: 07:30 – 17:30",
      "Saturday – Sunday: 08:30 – 18:00"
    ],
    description: "Our European sister space celebrating Nordic light and quiet hospitality. Freshly baked cardamom knots alongside rotating seasonal filter coffees.",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1600&auto=format&fit=crop",
    features: ["Nordic Bakery", "Filter Tasting Flight", "Retail Collection"]
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "art-sourcing-flores",
    slug: "sourcing-in-the-highlands-of-flores",
    title: "Sourcing in the Highlands of Flores: Terroir and Translucence",
    date: "October 18, 2026",
    readTime: "5 min read",
    category: "Origin & Sourcing",
    excerpt: "Journey into the volcanic valleys of Manggarai, where cool mountain mornings and meticulous processing create a coffee of crystalline floral elegance.",
    coverImage: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1600&auto=format&fit=crop",
    author: "Hendrik Lindqvist & Alika Wardhana",
    content: [
      "The drive from Labuan Bajo into the mountainous heart of Manggarai is a study in vertical altitude. As the coastline recedes, humid tropical heat gives way to brisk mountain mists and ancient bamboo groves.",
      "Here, at elevations surpassing 1,500 meters above sea level, coffee cherries ripen at a noticeably slower pace. This extended maturation allows organic sugars and complex acids to concentrate within the seed.",
      "Our long-standing producer partners in Manggarai have abandoned conventional wet-hulling in favor of pristine, Scandinavian-standard fully washed and extended anaerobic fermentation methods. The outcome in the cup is unmistakable: notes of night-blooming jasmine, white peach flesh, and sparkling lime citrus.",
      "We roast this lot on our vintage cast-iron roaster with a gentle application of conductive heat, terminating the roast just after first crack to preserve every nuance forged by soil and altitude."
    ]
  },
  {
    id: "art-v60-mastery",
    slug: "the-geometry-of-pour-over",
    title: "The Geometry of Pour-Over: A Guide to Conical Clarity",
    date: "September 24, 2026",
    readTime: "4 min read",
    category: "Brew Guide",
    excerpt: "Understanding grind distribution, water temperature curves, and pour turbulence to achieve transparency in every cup.",
    coverImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
    author: "Head of Coffee Education",
    content: [
      "Brewing specialty coffee is not an act of alchemy, but an exercise in mindful measurement and gentle fluid dynamics.",
      "When working with delicate, light-roasted coffees like our Awan Flores or Pagi Kintamani, our goal is high extraction yield paired with low astringency.",
      "Begin with water heated to 93°C with a mineral content between 70–90 ppm TDS. Rinse your paper filter thoroughly with hot water to eliminate paper cellulose notes and preheat the ceramic dripper.",
      "Dose 15 grams of coffee ground to medium-fine (resembling coarse sea sand). Pour 45 grams of water in a tight outward spiral for the bloom, allowing the coffee bed to degas for 45 seconds before executing two steady, concentric pours."
    ]
  },
  {
    id: "art-nordic-roast-philosophy",
    slug: "light-roasting-as-reverence",
    title: "Light Roasting as Reverence: Honoring the Seed",
    date: "August 12, 2026",
    readTime: "6 min read",
    category: "Philosophy",
    excerpt: "Why we choose not to imprint heavy roast flavors onto exceptional coffee beans.",
    coverImage: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1600&auto=format&fit=crop",
    author: "Founder & Roaster",
    content: [
      "Coffee roasting is often portrayed as an act of transformation, where the roaster creates flavor through heat. At VELUNE, we take an entirely opposite philosophical stance.",
      "Every flavor note — the crisp bergamot, the strawberry sweetness, the honeyed floral finish — was already created in the soil, sunshine, and fermentation vats by the farming families who tended the trees.",
      "Our duty as roasters is not to add our own fingerprint, but to step out of the way. By applying high initial convective airflow and a concise development time, we caramelize the natural sugars without scorching the organic cell walls of the bean.",
      "The result is a coffee that tastes like the fruit it originated from: lively, transparent, and effortlessly drinkable."
    ]
  }
];
