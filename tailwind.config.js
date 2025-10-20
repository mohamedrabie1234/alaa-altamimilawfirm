/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        br1: '#87643f', 
        br2: 'rgba(30, 23, 18, 1)', 
        br3: 'rgba(51, 37, 27, 1)', 
        logoColor: '#FFD700', 
      },
      fontFamily: {
        lantxBoldItalic: ['LANTX-BoldItalic', 'sans-serif'], 
        arabFont: ['arabFont', 'sans-serif'],
        arabFont2: ['arabFont2', 'sans-serif'],
        arabFont3: ['arabFont3', 'sans-serif'],
        arabFont4: ['arabFont4', 'sans-serif'],
        arabFontNana: ['arabFontNana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
