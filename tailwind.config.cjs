/** Build-time config for the static Tailwind CSS bundle (styles/tailwind.css). */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3EC',
        sand: '#EFE6D8',
        'sand-dark': '#E3D5C0',
        espresso: '#2B2420',
        'espresso-soft': '#5C5148',
        gold: '#B08D57',
        'gold-light': '#D9C6A5',
        blush: '#D8B4A0',
        line: '#C9BBA8',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '.28em',
      },
      maxWidth: {
        content: '1440px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(.65,0,.35,1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
