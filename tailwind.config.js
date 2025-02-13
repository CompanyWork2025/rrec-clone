/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        expressa: ['Expressa Serial Regular', 'serif'],
        tilt_prism: ['"Tilt Prism"', 'sans-serif'],
        roboto: ["'Roboto'", "sans-serif"],
      },
      animation: {
        ticker: 'ticker 25s linear infinite', // Scrolling text animation
        zoomEffect: 'zoomEffect 20s infinite alternate',
        colorCycle: 'colorCycle 3s infinite', // Color cycling animation for Breaking News
        fadeSlideUp: 'fadeSlideUp 1s ease-out', // New fade and slide-up animation
        shrinkOut: 'shrinkOut 1.5s ease-out forwards', // Add the shrinkOut animation
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        zoomEffect: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        colorCycle: {
          '0%': { color: 'white' },
          '25%': { color: '#f2312d' },
          '50%': { color: '#28a745' },
          '75%': { color: '#0d6efd' },
          '100%': { color: '#ffb539' }, // Adding purple to the color cycle
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shrinkOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0.5)', opacity: '0.7' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
