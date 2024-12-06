/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'light-purple': {
          500: '#e4e0f7',
        },
        'dark-purple': {
          500: '#bbb0cb',
        },
        'rose': {
          500: '#d89486',
        },
        'light-rose': {
          500: '#e9c5c5',
        },
        'plant-green': {
          500: '#b6a77b'
        }
      },
      fontFamily: {
        sans: ["Montserrat",'Inter var', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
