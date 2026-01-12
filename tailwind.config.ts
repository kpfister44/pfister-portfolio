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
          base: '#F5F5F4',
          elevated: '#FAFAF9',
          subtle: '#F0F0EF',
          overlay: 'rgba(250, 250, 249, 0.98)',
        },
        text: {
          primary: '#0A0A0A',
          secondary: '#525252',
          tertiary: '#A3A3A3',
          inverse: '#FAFAF9',
        },
        accent: {
          primary: '#1E3A8A',
          hover: '#1E40AF',
          subtle: '#DBEAFE',
          border: '#93C5FD',
        },
        border: {
          subtle: '#FCFCFB',
          medium: '#F8F8F7',
          strong: '#F5F5F4',
        },
        dark: {
          bg: '#1C1917',
          surface: '#292524',
          border: '#44403C',
          text: '#E7E5E4',
        },
        // Semantic colors
        success: '#15803D',
        error: '#DC2626',
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
        mono: ['"SF Mono"', 'Monaco', 'Consolas', '"Courier New"', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.65' }],
        lg: ['1.25rem', { lineHeight: '1.6' }],
        xl: ['1.5rem', { lineHeight: '1.5' }],
        '2xl': ['2rem', { lineHeight: '1.4' }],
        '3xl': ['2.5rem', { lineHeight: '1.3' }],
        '4xl': ['3rem', { lineHeight: '1.2' }],
        '5xl': ['4rem', { lineHeight: '1.1' }],
        '6xl': ['5rem', { lineHeight: '1' }],
      },
      spacing: {
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px ← 2 × 8
        '5': '1.5rem',    // 24px ← 3 × 8
        '6': '2rem',      // 32px ← 4 × 8
        '8': '2.5rem',    // 40px ← 5 × 8
        '10': '3rem',     // 48px ← 6 × 8
        '12': '3.5rem',   // 56px ← 7 × 8
        '14': '4rem',     // 64px ← 8 × 8 (typical section padding)
        '16': '5rem',     // 80px ← 10 × 8
        '20': '6rem',     // 96px ← 12 × 8
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
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        md: '0 2px 4px -1px rgba(0, 0, 0, 0.04), 0 4px 8px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 20px -3px rgba(0, 0, 0, 0.06), 0 4px 8px -2px rgba(0, 0, 0, 0.04)',
        xl: '0 20px 40px -5px rgba(0, 0, 0, 0.08), 0 10px 20px -5px rgba(0, 0, 0, 0.03)',
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
