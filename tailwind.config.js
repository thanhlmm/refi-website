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
          light: '#DBEAFE',
          primary: '#2563EB',
          dark: '#1D4ED8',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
