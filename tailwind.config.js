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
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.5px' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-left))',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-light': 'bounceLight 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        bounceLight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      boxShadow: {
        'sm-dark': '0 1px 3px rgba(0, 0, 0, 0.3)',
        'md-dark': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'lg-dark': '0 10px 30px rgba(0, 0, 0, 0.5)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 1px rgba(232, 178, 79, 0.1)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 2px rgba(232, 178, 79, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
      gap: {
        safe: 'clamp(0.5rem, 2vw, 2rem)',
      },
    },
  },
  plugins: [],
}
