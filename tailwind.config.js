/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xm': '300px', // Custom screen size for minimum width of 480px
      },
    },
  },
  plugins: [],
}

