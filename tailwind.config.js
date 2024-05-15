/* global module */

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  darkMode: false,
  mode: 'jit',
  theme: {
    screens: {
      sm: '0px',
      md: '768px',
      lg: '1025px',
    },
    extend: {
      colors: {
        primary: '#FFBE00B3',
      },
      backgroundImage: {
        'star-background': "url('public/assets/images/Star-Background.jpg')",
        'star-wars-logo': "url('public/assets/images/SW_Logo.png')",
      },
      backgroundSize: {
        110: '110%',
        120: '120%',
        130: '130%',
        140: '140%',
        150: '150%',
        160: '160%',
        170: '170%',
        180: '180%',
        190: '190%',
        200: '200%',
        210: '210%',
        220: '220%',
        230: '230%',
        240: '240%',
        250: '250%',
        260: '260%',
        270: '270%',
        280: '280%',
        290: '290%',
        300: '300%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
