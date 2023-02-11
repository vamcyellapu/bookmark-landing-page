/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "hsl(231, 69%, 60%)",
        secondary: "hsl(0, 94%, 66%)",
        body: "hsl(229, 8%, 60%)",
        heading: "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
