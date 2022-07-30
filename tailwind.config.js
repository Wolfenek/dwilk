/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,png,jpg}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/src/img/header_background.jpg')"
      },
    },
  },
  plugins: [],
}
