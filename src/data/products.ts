import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "prod-awan-flores",
    slug: "awan-flores",
    name: "Awan Flores",
    subtitle: "Indonesia | 250g, 1kg",
    origin: "Indonesia",
    region: "Manggarai, East Nusa Tenggara",
    altitude: "1,450 - 1,700 MASL",
    variety: "Yellow Caturra, Kartika",
    process: "Washed",
    roastType: "Filter",
    tastingNotes: ["Jasmine", "White Peach", "Bergamot", "Lime Zest"],
    category: "coffee",
    price: 195000,
    weight: "250g",
    weightOptions: ["250g", "1kg"],
    grindOptions: ["Whole Bean", "Filter (V60 / Kalita)", "Espresso", "French Press / Cold Brew"],
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A remarkably floral and crystalline lot from smallholder farmers in the lush highlands of Manggarai, West Flores. Hand-picked at peak ripeness and slow-fermented in cool mountain air.",
    story: "Grown under the canopy of native shade trees near Ruteng, Awan Flores represents the vanguard of modern Indonesian washed coffees. The cool microclimate elongates cherry maturation, resulting in an exceptionally clean cup with refined stone fruit and fragrant floral aromas.",
    brewingNotes: {
      method: "V60 Dripper",
      ratio: "1:16 (15g coffee to 240g water)",
      temperature: "93°C / 200°F",
      grindSize: "Medium-Fine",
      totalTime: "2m 45s"
    },
    inStock: true,
    featured: true,
    badge: "Latest Release"
  },
  {
    id: "prod-pagi-kintamani",
    slug: "pagi-kintamani",
    name: "Pagi Kintamani",
    subtitle: "Indonesia | 250g, 1kg",
    origin: "Indonesia",
    region: "Kintamani, Bali",
    altitude: "1,300 - 1,550 MASL",
    variety: "Typica, Bourbon",
    process: "Anaerobic",
    roastType: "Filter",
    tastingNotes: ["Blood Orange", "Dark Honey", "Cacao Nib", "Papaya"],
    category: "coffee",
    price: 215000,
    weight: "250g",
    weightOptions: ["250g", "1kg"],
    grindOptions: ["Whole Bean", "Filter (V60 / Kalita)", "Espresso", "French Press / Cold Brew"],
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Cultivated on the fertile volcanic slopes of Mount Batur amongst citrus groves. Undergoes a 72-hour sealed anaerobic fermentation to accentuate lush sweetness and sparkling tropical acidity.",
    story: "Kintamani farmers have historically intercropped coffee with sweet valencia oranges. This lot captures that terroir with an innovative anaerobic processing step that yields vibrant tropical fruit and a velvety honey body.",
    brewingNotes: {
      method: "Flat Bottom Dripper",
      ratio: "1:15.5 (16g coffee to 250g water)",
      temperature: "92°C / 198°F",
      grindSize: "Medium",
      totalTime: "3m 00s"
    },
    inStock: true,
    featured: true,
    badge: "Seasonal Lot"
  },
  {
    id: "prod-hutan-gayo",
    slug: "hutan-gayo",
    name: "Hutan Gayo",
    subtitle: "Indonesia | 250g, 1kg",
    origin: "Indonesia",
    region: "Takengon, Aceh, Sumatra",
    altitude: "1,500 - 1,650 MASL",
    variety: "Abyssinia, Ateng Super",
    process: "Natural",
    roastType: "Omniroast",
    tastingNotes: ["Blackcurrant", "Cedar", "Dark Chocolate", "Black Tea"],
    category: "coffee",
    price: 185000,
    weight: "250g",
    weightOptions: ["250g", "1kg"],
    grindOptions: ["Whole Bean", "Filter (V60 / Kalita)", "Espresso", "French Press / Cold Brew"],
    images: [
      "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Deep, layered, and complex. Hand-harvested around Lake Laut Tawar, slow-dried on elevated bamboo beds under high-altitude equatorial sun.",
    story: "Hutan Gayo celebrates the dense rainforest terroirs of Aceh. Unlike traditional wet-hulled lots, this coffee is processed as a pure clean natural, bringing forth juicy berry compote and dark cacao complexity.",
    brewingNotes: {
      method: "Aeropress / Immersion",
      ratio: "1:15 (18g coffee to 270g water)",
      temperature: "90°C / 194°F",
      grindSize: "Medium-Coarse",
      totalTime: "2m 30s"
    },
    inStock: true,
    featured: true
  },
  {
    id: "prod-bukit-kerinci",
    slug: "bukit-kerinci",
    name: "Bukit Kerinci",
    subtitle: "Indonesia | 250g, 1kg",
    origin: "Indonesia",
    region: "Kerinci, Jambi, Sumatra",
    altitude: "1,600 - 1,800 MASL",
    variety: "Andung Sari, Sigarar Utang",
    process: "Anaerobic",
    roastType: "Filter",
    tastingNotes: ["Wild Strawberry", "Red Wine", "Dried Fig", "Cacao"],
    category: "coffee",
    price: 225000,
    weight: "250g",
    weightOptions: ["250g", "1kg"],
    grindOptions: ["Whole Bean", "Filter (V60 / Kalita)", "Espresso", "French Press / Cold Brew"],
    images: [
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "An extraordinary micro-lot produced near Mount Kerinci National Park. Anaerobic maceration reveals winey fruit elegance and a velvety molasses finish.",
    inStock: true,
    featured: true,
    badge: "Highlight Lot"
  },
  {
    id: "prod-lembah-toraja",
    slug: "lembah-toraja",
    name: "Lembah Toraja",
    subtitle: "Indonesia | 250g, 1kg",
    origin: "Indonesia",
    region: "Sapan, Toraja, Sulawesi",
    altitude: "1,700 - 2,100 MASL",
    variety: "S795, Typica",
    process: "Washed",
    roastType: "Filter",
    tastingNotes: ["Green Apple", "Brown Sugar", "Lemongrass", "Almond"],
    category: "coffee",
    price: 205000,
    weight: "250g",
    weightOptions: ["250g", "1kg"],
    grindOptions: ["Whole Bean", "Filter (V60 / Kalita)", "Espresso", "French Press / Cold Brew"],
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Ultra-high altitude washed coffee from the misty peaks of Sapan. Crisp malic acidity with a lingering warm spice and panela finish.",
    inStock: true,
    featured: false
  },
  {
    id: "prod-embun-java",
    slug: "embun-java",
    name: "Embun Java",
    subtitle: "Indonesia | 250g, 1kg",
    origin: "Indonesia",
    region: "Gunung Halu, West Java",
    altitude: "1,400 - 1,600 MASL",
    variety: "Typica, Lini S",
    process: "Honey",
    roastType: "Filter",
    tastingNotes: ["Bosc Pear", "Honeysuckle", "Black Tea", "Mandarin"],
    category: "coffee",
    price: 190000,
    weight: "250g",
    weightOptions: ["250g", "1kg"],
    grindOptions: ["Whole Bean", "Filter (V60 / Kalita)", "Espresso", "French Press / Cold Brew"],
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Yellow Honey processed lot from the misty slopes of Mount Halu. Silky mouthfeel with delicate floral sweetness and ripe orchard fruit.",
    inStock: true,
    featured: false
  },
  {
    id: "prod-aurora-blend",
    slug: "aurora-blend",
    name: "Aurora Blend",
    subtitle: "House Seasonal Filter | 250g, 1kg",
    origin: "House Blend",
    region: "East Africa & Flores",
    variety: "Heirloom & Caturra",
    process: "Washed",
    roastType: "Filter",
    tastingNotes: ["Red Currant", "Sweet Orange", "Floral Honey"],
    category: "coffee",
    price: 175000,
    weight: "250g",
    weightOptions: ["250g", "1kg"],
    grindOptions: ["Whole Bean", "Filter (V60 / Kalita)", "French Press / Cold Brew"],
    images: [
      "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Our signature everyday filter blend. Clean, vibrant, and approachable with uplifting citrus and floral clarity.",
    inStock: true,
    featured: false
  },
  {
    id: "prod-dusk-blend",
    slug: "dusk-blend",
    name: "Dusk Blend",
    subtitle: "Signature Espresso | 250g, 1kg",
    origin: "House Blend",
    region: "Brazil & Sumatra",
    variety: "Mundo Novo & Ateng",
    process: "Natural & Washed",
    roastType: "Espresso",
    tastingNotes: ["Milk Chocolate", "Roasted Hazelnut", "Caramelized Sugar"],
    category: "coffee",
    price: 165000,
    weight: "250g",
    weightOptions: ["250g", "1kg"],
    grindOptions: ["Whole Bean", "Espresso", "Moka Pot", "French Press / Cold Brew"],
    images: [
      "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Crafted specifically for rich espresso extractions and harmonious milk drinks. Heavy sweetness, dense crema, zero astringency.",
    inStock: true,
    featured: false
  },
  {
    id: "prod-stoneware-cup-sand",
    slug: "velune-stoneware-cup-sand",
    name: "Velune Stoneware Cup — Sand",
    subtitle: "Handcrafted Ceramic | 180ml",
    origin: "Denmark Studio Collaboration",
    region: "Atelier Made",
    category: "ceramics",
    price: 280000,
    weight: "180ml",
    images: [
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop"
    ],
    tastingNotes: ["Tactile matte exterior", "Smooth glazed interior", "Ergonomic lip"],
    description: "Wheel-thrown by master artisans using iron-rich stoneware clay. The raw unglazed exterior provides a comforting tactile grip, while the interior is sealed with food-safe silky glaze.",
    inStock: true,
    featured: true,
    badge: "Limited Edition"
  },
  {
    id: "prod-stoneware-cup-basalt",
    slug: "velune-stoneware-cup-basalt",
    name: "Velune Stoneware Cup — Basalt",
    subtitle: "Handcrafted Ceramic | 220ml",
    origin: "Denmark Studio Collaboration",
    region: "Atelier Made",
    category: "ceramics",
    price: 310000,
    weight: "220ml",
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=1200&auto=format&fit=crop"
    ],
    tastingNotes: ["Dark charcoal flecks", "Heavy thermal retention", "220ml capacity"],
    description: "Formed from dark basalt clay fired at 1,280°C. Engineered with a wider rim to channel delicate coffee aromatics directly to the nose.",
    inStock: true,
    featured: true
  },
  {
    id: "prod-conical-ceramic-dripper",
    slug: "velune-ceramic-dripper",
    name: "Velune Conical Dripper",
    subtitle: "Precision Pour-over | Matte Chalk",
    origin: "Arita, Japan",
    region: "Ceramic Workshop",
    category: "equipment",
    price: 360000,
    weight: "1-2 Cups",
    images: [
      "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1200&auto=format&fit=crop"
    ],
    tastingNotes: ["60-degree extraction angle", "Continuous inner spiraling ribs", "High thermal stability"],
    description: "A meticulously engineered pour-over dripper handcrafted from high-density ceramic. Designed to promote uniform drawdown and optimal extraction clarity.",
    inStock: true,
    featured: true
  },
  {
    id: "prod-borosilicate-glass-server",
    slug: "velune-glass-server-500ml",
    name: "Velune Glass Server 500ml",
    subtitle: "Handblown Heat-Resistant Glass",
    origin: "Taiwan",
    region: "Studio Glassworks",
    category: "equipment",
    price: 295000,
    weight: "500ml",
    images: [
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?q=80&w=1200&auto=format&fit=crop"
    ],
    tastingNotes: ["Thermal shock proof", "Precision pour spout", "Subtle volumetric markings"],
    description: "Minimalist handblown borosilicate glass carafe. Sits seamlessly underneath our ceramic drippers and aeropress filters.",
    inStock: true,
    featured: false
  },
  {
    id: "prod-precision-hand-grinder",
    slug: "velune-precision-hand-grinder",
    name: "Velune Precision Hand Grinder",
    subtitle: "48mm Stainless Steel Heptagonal Burrs",
    origin: "Precision Tooling",
    region: "Machined Aluminium",
    category: "equipment",
    price: 1450000,
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200&auto=format&fit=crop"
    ],
    tastingNotes: ["Dual bearing axle", "Micrometric external dial", "CNC anodized body"],
    description: "Engineered for maximum particle uniformity with minimal fines. Delivers clean, vibrant pour-overs and dense espresso extractions on the go.",
    inStock: true,
    featured: false
  },
  {
    id: "prod-single-serve-drip-box",
    slug: "velune-single-serve-box",
    name: "Velune Single Serve Steeped Box",
    subtitle: "10x Nitro-Flushed Pour-Over Pouches",
    origin: "Indonesia & Ethiopia",
    region: "Freshly Roasted & Sealed",
    category: "single-serve",
    price: 140000,
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop"
    ],
    tastingNotes: ["Portable origami dripper", "Nitro-flushed for 6 months freshness", "Just add hot water"],
    description: "Freshly ground specialty coffee sealed in individual oxygen-free biodegradable filter drip bags. Specialty coffee ritual anywhere in 3 minutes.",
    inStock: true,
    featured: true,
    badge: "New Release"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

export function formatIDR(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount).replace("Rp", "Rp ");
}
