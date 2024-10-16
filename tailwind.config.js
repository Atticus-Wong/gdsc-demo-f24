/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'footer_white': '#F9F9F9',
      'grey': '#555555',
      'blue': '#3182CE',
      'dark_blue': '#184065',
      'black': '#000000'
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        'H1': '68px',
        'H2': '40px',
        'H3': '28px',
        'P1': '20px',
        'P2': '18px',
        'P3': '14px',
      },
    },
  },
  plugins: [],
}

