/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainRed: "#DF052C",
        fontWhite: "#fff",
        fontGrey: "#616060",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },

      container: {
        center: true,
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
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
