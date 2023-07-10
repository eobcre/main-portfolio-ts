/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-blue': '#34C7F2',
        'dark-gray': '#333333',
        'off-white': '#FFFFFE',
        'clear-tape': 'rgba(255,255,255,.4)',
        pink: '#E15783',
        teal: '#4682B4',
      },
      backgroundImage: {
        'main-image': "url('./assets/bg.jpg')",
      },
      boxShadow: {
        'showcase-bg': '3px 3px 3px 2px rgb(64, 126, 177)',
      },
      spacing: {
        360: '360px',
        480: '480px',
        minus: '-63px',
      },
      maxWidth: {
        21: '21rem',
      },
      fontSize: {
        '5xl': '2.75rem',
      },
      fontFamily: {
        arial: ['Arial'],
        bebas: ['Bebas Neue', 'cursive'],
      },
      inset: {
        inset40: '40%',
      },
    },
  },
  plugins: [],
};
