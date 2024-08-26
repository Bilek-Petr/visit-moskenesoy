/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainRed: "#DF052C",
        fontWhite: "#fff",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },

      container: {
        center: true,
        // padding: '1rem'
      },
      boxShadow: {
        navShadow: "0 0 5px 0 rgba(0, 0, 0, .2)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
