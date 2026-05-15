/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'solaria-white': '#FFFFFF',
        'solaria-gold': '#B89C6A', // Adjusted for a more sophisticated, slightly muted gold
        'solaria-silver': '#E5E7EB',
        'solaria-black': '#121212',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        'super-widest': '0.5em',
      }
    },
  },
  plugins: [],
}
