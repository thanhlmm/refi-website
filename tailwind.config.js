module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        '120': '30rem',
      }),      
      colors: {
        palette: {
          lighter: '#EFF6FF',
          light: '#ffd761',
          primary: '#FFA000',
          dark: '#F57C00',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
