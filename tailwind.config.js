const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    'src/templates.html',
    'src/components/**/*.svelte',
    'src/routes/**/*.svelte',
  ],
  theme: {
    screens: {
      sm: '450px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920',
      print: { raw: 'print' },
    },
    fontWeight: {
      lighter: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      bolder: 800
    },
    container: {
      center: true,
      padding: '10px',
    },
    extend: {
      colors: {
        primary: {
          lighter: '#D499B0',
          light: '#B44D74',
          default: '#940039',
          dark: '#850033',
          darker: '#590022',
        },
        secondary: {
          lighter: '#99DDC0',
          light: '#4DC491',
          default: '#00AB62',
          dark: '#009A58',
          darker: '#00673B',
        },
        accent: '#f5a800',
      },
      fontFamily: {
        sans: [
          'Roboto',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    },
  },
  variants: {
    fontFamily: false,
    },
	plugins: [],
};
