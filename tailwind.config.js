/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{
        'smaller': '300px',
        'smallest': '630px'
      }
    },
    
  },
  plugins: [],
}
