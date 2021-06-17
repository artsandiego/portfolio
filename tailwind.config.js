module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat','sans-serif'],
        spectral: ['Spectral','serif'],
      },
      fontSize: {
        '16': '1rem',
        '25': '1.5625rem',
        '60': '3.75rem',
        '100': '6.25rem',
        '125': '7.8125rem',
      },
      colors: {
        primary: '#FFBB00',
        secondary: '#212121',
        white: '#FFFFFF'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
