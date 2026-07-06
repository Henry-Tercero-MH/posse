/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0F0F12',
          surface: '#1A1A1F',
          card: '#242429',
          border: '#3A3A41',
        },
        accent: {
          primary: '#E8B24F',
          secondary: '#6366F1',
          danger: '#EF4444',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#B4B4BA',
          tertiary: '#8B8B92',
        },
      },
      boxShadow: {
        'sm-dark': '0 1px 3px rgba(0, 0, 0, 0.3)',
        'md-dark': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'lg-dark': '0 10px 30px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
