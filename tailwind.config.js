/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: '#F6E9DF',
        midnight: '#0B0D63',
        coral: '#F08E80',
        silver: '#A0AAB2',
        'peach-dark': '#E8D8CA',
        'peach-light': '#FFFaf5',
        'midnight-light': '#161988',
        'midnight-dark': '#06073A',
        'coral-light': '#F5A9A0',
        'coral-dark': '#D67062',
        'silver-light': '#DADDDF',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
        drama: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        '2xl-plus': '2rem',
        '3xl-plus': '3rem',
        '4xl': '4rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
