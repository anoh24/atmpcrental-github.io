// tailwind.config.js
module.exports = {
   content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Add your content paths here
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },

  // Instead of requiring directly, use dynamic import to handle ES Modules
  plugins: [
    require('tailwind-scrollbar'), // You can keep this static as it's not an ES Module
    ...(process.env.NODE_ENV === 'production'
      ? [import('tailwind-scrollbar-hide')] // Dynamically load it in production
      : [])
  ],
};
