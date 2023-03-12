/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 20px rgba(0, 0, 0, 0.12)',
      }
    },

    screens:{
      ss: '620px',
      sm: '768px',
      md: '1024px',
      lg: '1440px',
      xl: '1700px',
    }
  },

  plugins: [],
  
})
