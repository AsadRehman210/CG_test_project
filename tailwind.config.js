/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        customBlue: {
          light: '#72869C', // Light blue
          DEFAULT: '#00244D', // Default blue
          dark: '#0468B4', // Dark blue
        },
      },
    },
  },
  plugins: [],
};
