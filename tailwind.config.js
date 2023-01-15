// import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  darkMode: false,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2"
      }
    },
  },
  plugins: [],
}