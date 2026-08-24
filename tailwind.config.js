/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111111',
          900: '#0A0A0A',
          800: '#111111',
          700: '#1C1C1C',
          600: '#262626',
          500: '#3A3A3A',
          400: '#525252',
          300: '#737373',
          200: '#A3A3A3',
          100: '#D4D4D4',
        },
        canvas: {
          DEFAULT: '#FAFAFA',
          warm: '#F5F5F0',
          cream: '#F8F6F1',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FBF7E9',
          100: '#F6EFD0',
          200: '#EEDF9F',
          300: '#E2CB6A',
          400: '#D4AF37',
          500: '#B8932B',
          600: '#927620',
          700: '#6E5817',
        },
        success: '#10B981',
        line: '#E5E5E5',
        glass: 'rgba(255,255,255,0.6)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(1.875rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'luxury-sm': '0 1px 2px rgba(17,17,17,0.04), 0 4px 12px rgba(17,17,17,0.04)',
        luxury: '0 2px 4px rgba(17,17,17,0.03), 0 12px 32px rgba(17,17,17,0.06)',
        'luxury-lg': '0 4px 8px rgba(17,17,17,0.04), 0 24px 64px rgba(17,17,17,0.08)',
        'luxury-xl': '0 8px 16px rgba(17,17,17,0.05), 0 40px 96px rgba(17,17,17,0.10)',
        gold: '0 8px 32px rgba(212,175,55,0.18)',
        'inner-glass': 'inset 0 1px 0 rgba(255,255,255,0.7)',
      },
      backdropBlur: {
        glass: '16px',
        'glass-lg': '24px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(0.5deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
