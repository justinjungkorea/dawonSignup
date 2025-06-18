import forms from '@tailwindcss/forms';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dawon-navy': '#13294B',
        'dawon-red':  '#C8102E',
      },
      fontFamily: {
        sans: ['GmarketSans', 'sans-serif'],
      },
    },
  },
  plugins: [forms],
};
