export type ProcessType = "Washed" | "Natural" | "Anaerobic" | "Honey" | "Wet Hulled" | "Natural & Washed";
export type RoastType = "Filter" | "Espresso" | "Omniroast";
export type ProductCategory = "coffee" | "equipment" | "ceramics" | "single-serve" | "accessories" | "subscription";

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  origin: string;
  region: string;
  altitude?: string;
  variety?: string;
  process?: ProcessType;
  roastType?: RoastType;
  tastingNotes: string[];
  category: ProductCategory;
  price: number; // in IDR
  weight?: string;
  weightOptions?: string[];
  grindOptions?: string[];
  images: string[];
  description: string;
  story?: string;
  brewingNotes?: {
    method: string;
    ratio: string;
    temperature: string;
    grindSize: string;
    totalTime: string;
  };
  inStock: boolean;
  featured?: boolean;
  badge?: string;
}

export interface CartItem {
  id: string; // product.id + '-' + weight + '-' + grind
  product: Product;
  selectedWeight: string;
  selectedGrind: string;
  quantity: number;
  unitPrice: number;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  coverImage: string;
  content: string[];
  author: string;
}

export interface CafeLocation {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  hours: string[];
  description: string;
  image: string;
  features: string[];
}
