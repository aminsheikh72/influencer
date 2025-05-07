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
            DEFAULT: '#FF003C',
            light: '#FF3363',
            dark: '#D10030',
          },
          secondary: {
            DEFAULT: '#00FFFF',
            light: '#66FFFF',
            dark: '#00CCCC',
          },
          background: {
            DEFAULT: '#000000',
            lighter: '#121212',
            card: 'rgba(20, 20, 20, 0.7)',
          },
          accent: {
            DEFAULT: '#FFFFFF',
            muted: '#BBBBBB',
          },
          success: '#00FF66',
          warning: '#FFBB00',
          error: '#FF3333',
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          display: ['Montserrat', 'sans-serif'],
        },
        boxShadow: {
          'neon': '0 0 5px theme("colors.primary.DEFAULT"), 0 0 20px theme("colors.primary.DEFAULT")',
          'neon-hover': '0 0 10px theme("colors.primary.DEFAULT"), 0 0 30px theme("colors.primary.DEFAULT")',
          'neon-blue': '0 0 5px theme("colors.secondary.DEFAULT"), 0 0 20px theme("colors.secondary.DEFAULT")',
          'card': '0 4px 20px rgba(0, 0, 0, 0.5)',
        },
        animation: {
          'glow': 'glow 2s ease-in-out infinite alternate',
          'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
          glow: {
            '0%': { textShadow: '0 0 5px #FF003C, 0 0 10px #FF003C' },
            '100%': { textShadow: '0 0 10px #FF003C, 0 0 20px #FF003C, 0 0 30px #FF003C' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
        backdropBlur: {
          xs: '2px',
        },
      },
    },
    plugins: [],
  }