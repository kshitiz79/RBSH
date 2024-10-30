/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Enable JIT mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#010851",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace'],
        cursive: ['Pacifico', 'cursive'],
      },
    
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hollow-text-black': {
          '-webkit-text-stroke': '2px black',
          'color': 'transparent',
        },
        '.hollow-text-white': {
          '-webkit-text-stroke': '2px white',
          'color': 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
