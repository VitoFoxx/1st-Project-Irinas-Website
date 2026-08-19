/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Blue
        'primary': '#2D5A8C',
        'primary-light': '#3D6BA3',
        'primary-pale': '#E8F0F7',

        // Neutrals
        'off-white': '#FAFAF8',
        'cream': '#F5F1EB',
        'charcoal': '#2A2A2A',
        'black': '#0F0F0F',

        // Accent
        'accent-gold': '#D4AF6A',
      },
      fontFamily: {
        'display': ['EB Garamond', 'Playfair Display', 'serif'],
        'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['48px', { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '1.25', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'section': 'clamp(64px, 9vw, 120px)',
      },
      transitionTimingFunction: {
        'lux': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
