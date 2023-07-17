/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "highlight-bg": "url('/football-stadium-night-generative-ai-1.png')",
      },
      colors: {
        primary: "#FBFF20",
        secondary: "#000080",
        secondary: {
          dark: {
            50: "#13316C",
            200: "#0F2757",
            400: "#0C1F45",
            500: "#0B1B3D",
            800: "#050E1E",
            950: "#030811",
          },
          light: {
            950: "#7E8DA9",
          },
        },
      },
      borderRadius: {
        32: "32px",
      },
    },
  },
  plugins: [],
};
