/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'nav-red': '#D2000F',
        'nav-blue': '#457B9D',
        'mode-active': '#28C76F',
        'menu-green': '#CCE9EF',
        'menu-red': '#F1B7B6'
      },
      textColor: {
        'nav-black': '#1F2855',
        'nav-blue': '#457B9D',
        'item-green': '#0093AD'
      },
    },
  },
  plugins: [],
}
