/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          'beige': '#F7F1E4',
          'marron': '#E3BBA0',
          'blanc': '#ffffff',
          'jaune': '#FDC77D',
          'noir': '#000000',

        },
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        fontFamily: {
          sans: ['DM sans', 'sans-serif'],
        },
  
      },
    },
    plugins: [],
    safelist: ['bg-beige', 'bg-marron', 'bg-jaune'],
    

  },
}

