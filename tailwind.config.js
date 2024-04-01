/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        accent:"rgb(5 150 105)"
      },
      screens:{
        "xs":"525px"
      }
    },
  },
  plugins: [],
}

