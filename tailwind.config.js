/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}'
  ],
  theme: { 
    extend: {
      colors: {
        'primary': '#8B4513',
        'secondary': '#DAA520'
      },
      height:{
        84: '22rem'
      }
    },
  },
  plugins: [],
}
