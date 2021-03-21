const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      'codelance-blue': '#276ce3',
      'codelance-cream': '#f8f6f5',
      'codelance-grey': '#282828',
      'codelance-grey-20': 'rgba(40, 40, 40, 0.2)',
      'codelance-grey-50': 'rgba(40, 40, 40, 0.5)',
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
