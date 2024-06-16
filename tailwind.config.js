/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(271deg, #8d38ea -3.53%, #3d85fe 76.43%)'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translate(-100%)' },
          '100%': { transform: 'translate(100%)' },
        }
      },
    },
  },
  plugins: [],
}