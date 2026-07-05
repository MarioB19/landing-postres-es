/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          green: "#C13B63",
          greenDark: "#432127",
          greenDeep: "#8E2F4E",
          orange: "#E8742F",
          cream: "#FFF9F2",
          mint: "#FBEFF3",
        },
      },
    },
  },
  plugins: [],
};
