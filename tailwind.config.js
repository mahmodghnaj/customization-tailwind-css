/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Figtree", "Noto Sans JP", "Noto Sans", "sans-serif"],
      },
    }
  },
  plugins: [require('./utilities/plugins-styled/index'), require("@tailwindcss/typography"),],
}
