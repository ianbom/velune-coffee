import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        velune: {
          bg: "#F8F1EC",
          surface: "#FFFFFF",
          sand: "#F1E9E2",
          charcoal: "#242424",
          olive: "#34352A",
          muted: "#76756D",
          border: "#E2DAD2",
          accent: "#8C5E3C",
          dark: "#1A1917",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        site: "1520px",
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
        widepill: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
