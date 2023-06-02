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
      subheading: '"Roboto Mono", sans-serif',
      base: '"Montserrat", sans-serif',
      button: '"Montserrat", sans-serif',
    },
    fontWeight: {
      heading: 700,
      subheading: 600,
      base: 400,
      button: 500,
    },
    lineHeight: {
      heading: 1.125,
      subheading: 1.25,
      base: 1.625,
    },
    borderRadius: {
      box: '24px',
      card: '12px',
      button: '8px',
      input: '8px',
      image: '4px',
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
              base: getRadixColors(radixColors.slate),
              'base-9-content': 'white',
            },
          },
        },
        {
          name: 'dark',
          extend: {
            colors: {
              base: getRadixColors(radixColors.slateDark),
              'base-9-content': 'white',
            },
          },
        },
        {
          name: 'light-indigo',
          extend: {
            colors: {
              base: getRadixColors(radixColors.indigo),
              'base-9-content': 'white',
            },
          },
        },
        {
          name: 'dark-indigo',
          extend: {
            colors: {
              base: getRadixColors(radixColors.indigoDark),
              'base-9-content': 'white',
            },
          },
        },
      ],
    }),
    require('fulldev-ui/plugin'),
  ],
}
