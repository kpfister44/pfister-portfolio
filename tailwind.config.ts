import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#FAFAF9',
          elevated: '#FFFFFF',
          subtle: '#F5F5F4',
          overlay: 'rgba(255, 255, 255, 0.95)',
        },
        text: {
          primary: '#0A0A0A',
          secondary: '#525252',
          tertiary: '#A3A3A3',
          inverse: '#FAFAF9',
        },
        accent: {
          primary: '#1E40AF',
          hover: '#1E3A8A',
          subtle: '#DBEAFE',
          border: '#93C5FD',
        },
        border: {
          subtle: '#E7E5E4',
          medium: '#D6D3D1',
          strong: '#A8A29E',
        },
        dark: {
          bg: '#1C1917',
          surface: '#292524',
          border: '#44403C',
          text: '#E7E5E4',
        },
        // Semantic colors
        success: '#15803D',
        error: '#B91C1C',
        warning: '#CA8A04',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', '"SF Mono"', 'Monaco', 'monospace'],
      },
      fontSize: {
        xs: ['0.64rem', { lineHeight: '1.5' }],
        sm: ['0.8rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.65' }],
        lg: ['1.25rem', { lineHeight: '1.6' }],
        xl: ['1.563rem', { lineHeight: '1.5' }],
        '2xl': ['1.953rem', { lineHeight: '1.4' }],
        '3xl': ['2.441rem', { lineHeight: '1.3' }],
        '4xl': ['3.052rem', { lineHeight: '1.2' }],
        '5xl': ['3.815rem', { lineHeight: '1.1' }],
        '6xl': ['4.768rem', { lineHeight: '1' }],
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.5rem',
        '6': '2rem',
        '8': '3rem',
        '10': '4rem',
        '12': '6rem',
        '16': '8rem',
        '20': '12rem',
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.011em',
        wide: '0.01em',
        wider: '0.05em',
      },
      maxWidth: {
        'content': '65ch',
        'container-custom': '1140px',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.02)',
        md: '0 2px 4px -1px rgba(0, 0, 0, 0.04), 0 4px 6px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '350ms',
        spring: '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'fade-up': {
          from: {
            opacity: '0',
            transform: 'translateY(24px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) backwards',
      },
    },
  },
  plugins: [],
}
export default config
