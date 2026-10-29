import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VELUNE COFFEE — Specialty Coffee Roastery, Café & Bakery",
  description:
    "A contemporary specialty coffee company dedicated to thoughtfully sourced single origins, light Scandinavian-profile roasting, and handcrafted ceramics.",
  keywords: [
    "Specialty Coffee",
    "Indonesian Coffee",
    "Awan Flores",
    "Single Origin",
    "Pour Over",
    "Coffee Subscription",
    "Stoneware Ceramics",
    "Light Roast",
  ],
  openGraph: {
    title: "VELUNE COFFEE — Specialty Coffee Roastery & Café",
    description: "Thoughtfully sourced coffees and handcrafted ceramic vessels.",
    siteName: "VELUNE COFFEE",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#F8F1EC] text-velune-charcoal antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
