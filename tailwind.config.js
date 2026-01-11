/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7fa',
          100: '#b3e6f0',
          200: '#80d5e6',
          300: '#4dc4dc',
          400: '#26b7d4',
          500: '#00a9cc',
          600: '#008ba8',
          700: '#006d84',
          800: '#004f60',
          900: '#00313c',
        },
        secondary: {
          50: '#e6eef5',
          100: '#b3cde0',
          200: '#80abcb',
          300: '#4d8ab6',
          400: '#2672a7',
          500: '#0a2647',
          600: '#092040',
          700: '#071a34',
          800: '#051428',
          900: '#030e1c',
        },
        accent: {
          50: '#fff8e6',
          100: '#ffeab3',
          200: '#ffdc80',
          300: '#ffce4d',
          400: '#ffc426',
          500: '#ffb800',
          600: '#cc9300',
          700: '#996e00',
          800: '#664a00',
          900: '#332500',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
