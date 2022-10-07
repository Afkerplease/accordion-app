/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      softViolet: "hsl(273, 75%, 66%)",
      softBlue: "hsl(240, 73%, 65%)",
      lightGrey: "hsl(240, 5%, 91%)",
      veryDarkBlue: "hsl(237, 12%, 33%)",
      darkGray: "hsl(240, 6%, 50%)",
      veryDarkSaturated: "hsl(238, 29%, 16%)",
      softRed: "hsl(14, 88%, 65%)",
    },
    fontFamily: {
      kumb: ["Kumbh Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
