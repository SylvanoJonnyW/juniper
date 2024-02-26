/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#133F26',
        secondary: '#DFF49F',
        tertiary: '#D0D8BC',
        quarternary: '#F1F5E9',
        'deep-maroon': '#8E1948',
        stroke: '#ABBAA7',
      },
    },
  },
  plugins: [],
};
