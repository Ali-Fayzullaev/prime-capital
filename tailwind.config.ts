import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1rem", screens: { lg: "1024px", xl: "1200px" } },
    extend: {
      colors: {
        brand: {
          primary: "#392175",      // фиолетовый
          primaryDark: "#362275",  // темный фиолет
          accent: "#F7C318",       // золото
          paper: "#F4F2E6",        // молочный
          blue: "#1A3386",         // синий
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
