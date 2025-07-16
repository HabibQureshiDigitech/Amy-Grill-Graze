/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        public: ['"Public Sans"', 'sans-serif'],
        lora: ['Lora', 'serif'],
        domine: ['Domine', 'serif'],
      },
    },
  },
  plugins: [],
}

module.exports = config


// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         public: ['"Public Sans"', 'sans-serif'],
//         lora: ['Lora', 'serif'],
//         domine: ['Domine', 'serif'],
//       },
//     },
//   },
//   plugins: [],
// }

// export default config



