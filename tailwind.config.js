/** @type {import('tailwindcss').Config} */
export default {
  content:
  [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#29045C',
        'gradient-end': '#010002',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #29045C 0%, #010002 100%)',
        'custom-gradient2': 'linear-gradient(90deg, #FFFFFF 0%, #0C021B 64.56%, #0C021B 100%)',
        'custom-gradient3': 'linear-gradient(180deg, #29045C 0%, #010002 100%)',

      },
    },
  },
  screens: {
    '3xl': { max: '1920px' },
    '2xl': { max: '1535px' },
    'xl': { max: '1279px' },
    'lg': { max: '1024px' }, 
    'md': { max: '768px' },
    'sm': { max: '640px' },
    'xs': { max: '400px' },
  },
  darkMode: "class",
  plugins: [],
};
