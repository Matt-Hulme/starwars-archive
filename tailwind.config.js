/* global module */

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  darkMode: false,
  mode: 'jit',
  theme: {
    screens: {
      'sm': '0px',
      'md': '768px',
      'lg': '1025px',
    },
    extend: {
      backgroundImage: {
        'star-background': "url('src/assets/images/Star-Background.jpg')",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}