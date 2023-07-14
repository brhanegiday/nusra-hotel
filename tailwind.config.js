/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  eslint: {
    ignoreDuringBuilds: true,
  },
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        bean: {
          50: "#f7f0f4",
          100: "#eddfe6",
          200: "#d4b2bf",
          300: "#ba8a99",
          400: "#854953",
          500: "#511d1e",
          600: "#4a1819",
          700: "#3d1111",
          800: "#300b0b",
          900: "#240606",
          950: "#170203",
        },
        carmine: {
          400: "#c77c6b",
          500: "#ae3f3c",
          600: "#9c3430",
        },
        primary: {
          50: "#f7f0f4",
          100: "#f0e1e8",
          200: "#d6b4c1",
          300: "#bf8e9d",
          400: "#8f4f59",
          500: "#5e2223",
          600: "#541b1c",
          700: "#471314",
          800: "#380c0d",
          900: "#2b0708",
          950: "#1c0303",
        },
        secondary: {
          400: "#f2c874",
          500: "#eda83b",
          600: "#d69131",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/hero-pattern.jpg')",
        hero: "url('/assets/images/hero.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
