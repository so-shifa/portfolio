/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        /* Light theme */
        "light-bg": "#F6F0D7", // cream
        "light-primary": "#89986D", // sage
        "light-secondary": "#9CAB84",
        "light-accent": "#C5D89D",

        /* Dark theme (calmer, not harsh) */
        "dark-bg": "#1f1f1f", // softer than pure black
        "dark-primary": "#89986D",
        "dark-secondary": "#9CAB84",
        "dark-accent": "#C5D89D",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
