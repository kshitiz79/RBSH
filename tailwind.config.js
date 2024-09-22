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
        // Add Lato as a custom font
        lato: ['Lato', 'sans-serif'],
        robot:['Roboto Mono' ,'monospace']
      },
      animation: {
        scroll: 'scroll 200s linear infinite', // Adds the scrolling animation
        'scroll-reverse': 'scroll-reverse 150s linear infinite', // Reverse scrolling
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
