/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': {
          50: '#FBFBF4',
          300: '#F8F8EC',
          500: '#E2E2C7',
          700: '#CDCDCD',
          900: '#BFBFBF',
        },
        'primary': {
          50: '#B7C0C1',
          300: '#889596',
          500: '#4A5D5E',
          700: '#2C3838',
          900: '#161C1C',
        },
        'secondary': {
          50: '#F6F8F4',
          300: '#E4E9DE',
          500: '#D2DBC8',
          700: '#97A18C',
          900: '#6A765E',
        },
      
      },
    },
  },
  plugins: [],
}