/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'farm-green': '#4A7C59',
        'farm-brown': '#8B4513',
        'farm-yellow': '#F4A460',
        'farm-cream': '#FFF8DC',
      }
    },
  },
  plugins: [],
}