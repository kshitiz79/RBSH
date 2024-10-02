/** @type {import('tailwindcss').Config} */
export default {
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
        // Add Lato and Roboto Mono as custom fonts
        lato: ['Lato', 'sans-serif'],
        robot: ['Roboto Mono', 'monospace'],
      },
      // Add custom stroke widths and colors for hollow text
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hollow-text-black': {
          '-webkit-text-stroke': '2px black',  // Black stroke
          'color': 'transparent',
        },
        '.hollow-text-white': {
          '-webkit-text-stroke': '2px white',  // White stroke
          'color': 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
