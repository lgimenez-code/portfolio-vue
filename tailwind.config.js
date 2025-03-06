/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ...require('tailwindcss/colors').cyan,
        },
        secondary: {
          ...require('tailwindcss/colors').indigo,
        },
        disabledPrimary: {
          ...require('tailwindcss/colors').gray,
        },
      },
    },
  },
  plugins: [],
}