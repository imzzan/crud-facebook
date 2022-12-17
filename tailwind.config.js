/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#5C6FB4",
        secondary : "#65676b",
        gray : "#F0F2F5"
      },
      boxShadow : {
        card : "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      }
    },
  },
  plugins: [],
}
