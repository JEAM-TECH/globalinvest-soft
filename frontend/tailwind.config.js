/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6', // blue-500
          DEFAULT: '#1d4ed8', // blue-700
          dark: '#1e40af', // blue-800
        },
      },
    },
  },
  plugins: [],
}
