module.exports = {

  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'beige': '#F7F1E4',
        'marron': '#E3BBA0',
        'blanc': '#ffffff',
        'jaune': '#FDC77D',
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
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
    },
  },
};
