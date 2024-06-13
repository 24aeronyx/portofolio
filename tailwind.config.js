/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        montserrat:['Montserrat', 'sans-serif'],
        openSans:['Open Sans', 'sans-serif']
      },
      letterSpacing: {
        widest: '.25em', // menambahkan nilai custom
      }
    },
  },
  plugins: [],
}
