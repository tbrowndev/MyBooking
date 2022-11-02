/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': 'rgb(240, 240, 240)',
        'secondaryColor': 'rgb(255, 255, 255)',
        'actionColor': 'rgb(67, 72, 210)',
        'successColor': 'rgb(59, 205, 59)',
        'warningColor':'rgb(255, 191, 54)',
        'errorColor': 'rgb(236, 92, 92)'
      }
    },
  },
  plugins: [],
}