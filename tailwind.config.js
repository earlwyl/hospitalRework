/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('../images/national-cancer-institute-1c8sj2IO2I4-unsplash.jpg')",
      },

      fontFamily: {
        vietnam: ["Be Vietnam Pro", "san-serif"],
      },
    },
  },
  plugins: [],
};
