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
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
