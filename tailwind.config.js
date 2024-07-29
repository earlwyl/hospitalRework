/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url(/dist/images/hero.jpg)",
      },

      fontFamily: {
        vietnam: ["Be Vietnam Pro", "san-serif"],
      },
    },
  },
  plugins: [],
};
