/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#1a1a1a',
        'very-dark-gray': '#0D0D0D',
        'light-blue': '#4ea8de',
        'purple-1': '#5e60ce',
      },
    },
  },
  plugins: [],
}
