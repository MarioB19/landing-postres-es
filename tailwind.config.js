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
          green: "#1B7A5A",
          greenDark: "#0E3B2C",
          greenDeep: "#14543E",
          orange: "#E8742F",
          cream: "#FBF8F1",
          mint: "#F1F8F4",
        },
      },
    },
  },
  plugins: [],
};
