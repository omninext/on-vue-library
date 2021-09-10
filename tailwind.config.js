

module.exports = {
  mode:'jit',
  purge: ['./src/**/*.vue',
  './src/**/*.js',
  './src/**/*.jsx',
  './src/**/*.html',
  './src/**/*.pug',
  './src/**/*.md',],
  darkMode: false, // or 'media' or 'class'

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
    extend: {
      colors:{
        primary:{
          DEFAULT: '#00A9E0',
          '50': '#C6F1FF',
          '100': '#ADEBFF',
          '200': '#7ADEFF',
          '300': '#47D2FF',
          '400': '#14C5FF',
          '500': '#00A9E0',
          '600': '#008EBC',
          '700': '#007399',
          '800': '#005875',
          '900': '#003D51'
        },
        secondary:{
          DEFAULT: '#5CEBCE',
          '50': '#FFFFFF',
          '100': '#EDFDFA',
          '200': '#C9F8EF',
          '300': '#A4F4E4',
          '400': '#80EFD9',
          '500': '#5CEBCE',
          '600': '#21E4BD',
          '700': '#15AC8E',
          '800': '#0E715E',
          '900': '#07362D'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [  ],
}
