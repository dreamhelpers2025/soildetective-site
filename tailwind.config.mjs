/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        soil: {
          DEFAULT: '#2B1E17',
          900: '#1a120d',
          800: '#221811',
          700: '#2B1E17',
          600: '#3c2c22',
          500: '#574033',
        },
        moss: {
          DEFAULT: '#4A6B3C',
          900: '#26371e',
          800: '#324c29',
          700: '#3d5a31',
          600: '#4A6B3C',
          500: '#5d8049',
          400: '#7a9866',
          300: '#a1b793',
          100: '#dfe7d6',
          50:  '#eef3e8',
        },
        clay: {
          DEFAULT: '#A44A3F',
          700: '#7e362e',
          600: '#9a4138',
          500: '#A44A3F',
          400: '#b86458',
          300: '#cf8e85',
        },
        cream: {
          DEFAULT: '#F9F5EF',
          dark: '#EDE6D8',
        },
        plum: {
          DEFAULT: '#6A4C6D',
          900: '#3d2b3f',
          800: '#523a55',
          700: '#5e4360',
          600: '#6A4C6D',
          500: '#7d5e80',
        },
        gold: {
          DEFAULT: '#C8A96A',
          700: '#a3884b',
          600: '#b89858',
          500: '#C8A96A',
          400: '#d4bb83',
        },
        ink: {
          DEFAULT: '#2B1E17',
          soft: '#5b4e44',
          muted: '#7e7268',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      maxWidth: {
        prose: '70ch',
      },
    },
  },
  plugins: [],
};
