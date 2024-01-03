/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{tsx,ts,jsx,js}"
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '425px',
      // => @media (min-width: 425px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}
