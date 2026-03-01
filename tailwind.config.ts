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
          50: '#eef9ff',
          100: '#d8f1ff',
          200: '#b9e7ff',
          300: '#89d9ff',
          400: '#52c2ff',
          500: '#2aa3ff',
          600: '#1485f7',
          700: '#0d6ee3',
          800: '#1158b8',
          900: '#144b91',
          950: '#112f58',
        },
        accent: {
          50: '#edfffe',
          100: '#c2fffe',
          200: '#85fffe',
          300: '#40fffd',
          400: '#06f7f3',
          500: '#00dcd9',
          600: '#00b0b1',
          700: '#008b8e',
          800: '#066d72',
          900: '#0a595e',
          950: '#003638',
        },
        dark: {
          50: '#f4f6fb',
          100: '#e8ecf6',
          200: '#ccd6eb',
          300: '#a0b3da',
          400: '#6d8ac4',
          500: '#4a6bae',
          600: '#385392',
          700: '#2e4377',
          800: '#293b63',
          900: '#0f172a',
          950: '#080d1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(6, 247, 243, 0.1)' },
          '100%': { boxShadow: '0 0 30px rgba(6, 247, 243, 0.3)' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
}
