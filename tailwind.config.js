/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    // Add other paths as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        moonwalk: ['Moonwalk', 'sans-serif'],
        astro: ['AstroSpace', 'sans-serif'],
      },
      colors: {
        // Accent color with all the shade variants
        accent: {
          500: 'rgba(var(--accent-color-rgb), 1)',
          600: 'rgba(var(--accent-color-rgb-dark), 1)',
          700: 'rgba(var(--accent-color-rgb-darker), 1)'
        },
        alpha: {
          white: {
            5: 'rgba(255, 255, 255, 0.05)',
            10: 'rgba(255, 255, 255, 0.1)',
            50: 'rgba(255, 255, 255, 0.5)',
            80: 'rgba(255, 255, 255, 0.8)'
          },
          gray: {
            2: 'rgba(128, 128, 128, 0.02)',
            5: 'rgba(128, 128, 128, 0.05)',
            10: 'rgba(128, 128, 128, 0.1)',
            30: 'rgba(128, 128, 128, 0.3)',
            50: 'rgba(128, 128, 128, 0.5)',
            80: 'rgba(128, 128, 128, 0.8)'
          },
          accent: {
            10: 'rgba(var(--accent-color-rgb), 0.1)',
            20: 'rgba(var(--accent-color-rgb), 0.2)',
            30: 'rgba(var(--accent-color-rgb), 0.3)', // Added the 30% opacity
          },
          red: {
            10: 'rgba(239, 68, 68, 0.1)',
            20: 'rgba(239, 68, 68, 0.2)',
          },
        },
      },
    },
  },
  plugins: [],
}
