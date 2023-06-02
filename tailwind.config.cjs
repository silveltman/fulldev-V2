/** @type {import('tailwindcss').Config} */

const radixColors = require('@radix-ui/colors')

function getRadixColors(object) {
  const newObject = {}
  Object.keys(object).forEach((item, index) => {
    newObject[index + 1] = object[item]
  })
  return newObject
}

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/fulldev-ui/dist/**/*.{html,js,svelte,ts}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      heading: '"Montserrat", sans-serif',
      subheading: '"Montserrat", sans-serif',
      base: '"Montserrat", sans-serif',
      button: '"Montserrat", sans-serif',
    },
    fontWeight: {
      heading: 700,
      subheading: 600,
      base: 400,
      button: 600,
    },
    lineHeight: {
      heading: 1.125,
      subheading: 1.25,
      base: 1.625,
    },
    borderRadius: {
      box: '16px',
      card: '8px',
      button: '16px',
      input: '8px',
      image: '8px',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('rippleui')({
      defaultStyle: false,
      themes: [],
    }),
    require('tailwindcss-themer')({
      themes: [
        {
          name: 'light',
          extend: {
            colors: {
              base: getRadixColors(radixColors.mauve),
              'base-9-content': 'white',
            },
          },
        },
        {
          name: 'dark',
          extend: {
            colors: {
              base: getRadixColors(radixColors.mauveDark),
              'base-9-content': 'white',
            },
          },
        },
        {
          name: 'light-primary',
          extend: {
            colors: {
              base: getRadixColors(radixColors.tomato),
              'base-9-content': 'white',
            },
          },
        },
        {
          name: 'dark-primary',
          extend: {
            colors: {
              base: getRadixColors(radixColors.tomatoDark),
              'base-9-content': 'white',
            },
          },
        },
      ],
    }),
    require('fulldev-ui/plugin'),
  ],
}
