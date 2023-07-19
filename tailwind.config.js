/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fit,minmax(150px, 150px))'
      },
      backgroundColor: {
        'header' : '#f4f4f4',
        'librarybg' : '#ffffff',
        'genrelist' : '#f0f0f0',
        'button' : '#20c4c8',
        'notifications': '#f75e64'
      }
    },
  },
  plugins: [],
}