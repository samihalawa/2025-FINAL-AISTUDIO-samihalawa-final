import defaultTheme from 'tailwindcss/defaultTheme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './hooks/**/*.{ts,tsx,js,jsx}',
    './i18n/**/*.{ts,tsx,js,jsx}',
    './constants.{ts,tsx,js,jsx}',
    './types.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dee6ff',
          200: '#c2d0ff',
          300: '#9db1ff',
          400: '#7c89ff',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3',
          800: '#312e81',
          900: '#1e1b4b'
        },
        surface: '#f5f7fb'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans]
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          xl: '3rem'
        }
      },
      maxWidth: {
        '8xl': '88rem'
      },
      backgroundImage: {
        'grid-slate': 'linear-gradient(to right, rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.08) 1px, transparent 1px)',
        'radial-fade': 'radial-gradient(circle at top, rgba(79,70,229,0.32), transparent 55%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 0.9 }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 10s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite'
      },
      boxShadow: {
        brand: '0 25px 45px -20px rgba(79, 70, 229, 0.35)',
        soft: '0 18px 30px -18px rgba(30, 41, 59, 0.25)'
      },
      borderRadius: {
        '5xl': '3rem'
      }
    }
  },
  plugins: [],
};
