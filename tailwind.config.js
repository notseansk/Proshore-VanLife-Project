/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        simpleColor: "#E17654",
        ruggedColor: "#115E59",
        luxuryColor: "#161616",
        inactiveButton: "#FFEAD0",
        inactiveText: "#4D4D4D",
      },
    },
  },
  plugins: [],
};
