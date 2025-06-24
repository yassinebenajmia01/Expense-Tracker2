/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    safelist: [
    "bg-violet-500",
    "bg-orange-500",
    "bg-red-500",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}