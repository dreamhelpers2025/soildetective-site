/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette aligned to original soildetective.org Squarespace site
        // Original (extracted from live CSS 2026-06-25):
        //   --accent-hsl:      267.52, 100%, 73.92%   -> #B77AFF  (vibrant lavender)
        //   --lightAccent-hsl: 45, 11.76%, 86.67%     -> #E1DFD9  (warm cream)
        //   --darkAccent-hsl:  111.43, 11.11%, 12.35% -> #1D231C  (dark forest green)
        //
        // Token names below match the previous rebuild for backwards compatibility
        // with existing components — they're remapped to the correct hex values.

        // Primary brand (was: dusty muted purple). Now: vibrant lavender to match logo.
        plum: {
          DEFAULT: '#B77AFF',
          900: '#3a1f70',
          800: '#5933a3',
          700: '#7a4dd0',
          600: '#9a63f0',
          500: '#B77AFF',
          400: '#c898ff',
          300: '#d9b3ff',
          200: '#e9cfff',
          100: '#f4e7ff',
        },

        // Body text + dark surfaces (was: dark brown). Now: dark forest green to match original.
        soil: {
          DEFAULT: '#1D231C',
          900: '#0e1110',
          800: '#161a15',
          700: '#1D231C',
          600: '#2a3328',
          500: '#3a4537',
        },
        ink: {
          DEFAULT: '#1D231C',
          soft: '#3a4537',
          muted: '#5a6055',
        },

        // Background (was: #F9F5EF / #EDE6D8). Now: warm cream from original.
        cream: {
          DEFAULT: '#E1DFD9',
          dark: '#cfcdc6',
          light: '#efeeea',
        },

        // Foliage greens — Rosalinda likes these, keep them as supporting palette.
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

        // Clay (rust) — kept as a minor accent so lavender dominates.
        clay: {
          DEFAULT: '#A44A3F',
          700: '#7e362e',
          600: '#9a4138',
          500: '#A44A3F',
          400: '#b86458',
          300: '#cf8e85',
        },

        // Gold (mustard) — kept as a minor accent, used sparingly.
        gold: {
          DEFAULT: '#C8A96A',
          700: '#a3884b',
          600: '#b89858',
          500: '#C8A96A',
          400: '#d4bb83',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        // 'display' = headline / hero font. Tries Flower Power (Adobe Fonts) first;
        // falls back to Lobster (free, similar groovy energy) until Rosalinda's
        // Adobe Fonts kit ID is added in BaseLayout.astro.
        display: ['"flower-power"', '"Lobster"', 'Georgia', 'serif'],
        // 'hand' = tasteful handwritten accents (Rosalinda approved sparing use).
        hand: ['"Caveat"', 'cursive'],
      },
      maxWidth: {
        prose: '70ch',
      },
    },
  },
  plugins: [],
};
