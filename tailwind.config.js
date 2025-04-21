/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,tsx}'],
  theme: {
    fontFamily: {
      spaceMono: ['Space Mono', 'serif'],
    },
    fontSize: {
      xl: [
        'var(--xl-font-size)',
        {
          lineHeight: '2.375rem',
          fontWeight: '700',
        },
      ],
      md: [
        'var(--md-font-size)',
        {
          lineHeight: '2.0625rem',
          fontWeight: '700',
        },
      ],
      base: [
        'var(--base-font-size)',
        {
          lineHeight: '1.5rem',
          fontWeight: '400',
        },
      ],
      sm: [
        'var(--sm-font-size)',
        {
          lineHeight: '1.5625rem',
          fontWeight: '400',
        },
      ],
      xs: [
        'var(--xs-font-size)',
        {
          lineHeight: '1.25rem',
          fontWeight: '400',
        },
      ],
      xxs: [
        'var(--xs-font-size)',
        {
          lineHeight: '1.455rem',
          fontWeight: '400',
        },
      ],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: 'rgba(var(--primary))',
      secondary: 'rgba(var(--secondary))',
      tertiary: 'rgba(var(--tertiary))',
      'font-1': 'rgba(var(--font-color-1))',
      dark: {
        DEFAULT: 'rgba(var(--dark))',
        600: 'var(--dark-600)',
      },
      'off-white': 'rgba(var(--off-white))',
      red: 'var(--red)',
      gray: 'rgba(var(--gray))',
      bg1: 'rgba(var(--bg1))',
      bg2: 'rgba(var(--bg2))',
    },
    boxShadow: {
      default: 'var(--shadow)',
    },
    extend: {
      borderRadius: {
        xs: '0.625rem', // 10px
        sm: '0.9375rem', // 15px
      },
    },
  },
  plugins: [],
};
