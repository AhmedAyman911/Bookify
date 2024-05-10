/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#63C5DA',
      },
      fontFamily:{
        Reddit:['Reddit Sans']
      },
    },
  },
  plugins: [
  ],
}

