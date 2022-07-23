/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'className', // or 'media' or 'className'
  theme: {
    extend: {
      fontFamily: {
        sora: [ "Sora", 'sans'],
        pops: ['Poppins', 'sans'],
        brd: [ 'Birthstone', 'cursive']
      },
      colors: {
      'mainbg': "#000814",
      'prime': "#FD0F49",
      "cream": "#DBE9EE",
      "secondry": "#BD113D",
      "gry" : "#808080"
      },
      fontSize: {
        "12xl": '10rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
}