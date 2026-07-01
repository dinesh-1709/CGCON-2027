/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F26522',
          50:  '#FFF5EE',
          100: '#FDE8D8',
          200: '#FBBF99',
          300: '#F9964A',
          400: '#F26522',
          500: '#D9540F',
          600: '#B84309',
          700: '#8C3207',
        },
        secondary: {
          DEFAULT: '#FDE8D8',
          light: '#FFF5EE',
          peach: '#FECEC0',
          pink: '#FDDDE6',
        },
        accent: {
          DEFAULT: '#1D4ED8',
          light: '#3B82F6',
          dark: '#1E40AF',
        },
        warm: {
          white: '#FFFBF7',
          gray: '#F9F5F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
