export const content = ['./*.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '1020px',
    xl: '1440px',
  },
  extend: {
    colors: {
      tigerEye: '#B86800',
      earthYellow: '#FABC6B',
      spanishOrange: '#E66F00',
      battleshipGray: '#A19A91',
      cocoaBrown: '#D4651E',
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    backgroundImage: () => ({
      dots: "url('../images/bg-dots.svg')",
      left: "url('../images/podcast.jpg)"
    }),
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
    },
  },
  plugins: [],
};