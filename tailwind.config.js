/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      shadowinset: {
        shadow: 'inset 0 -2px 4px rgba(0,0,0,0.6)',
      },
      animation: {
        fadein: 'fadein 0.5s ease-in-out',
        slidein: 'slidein 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadein: {
          '0%': { transform: 'translateY(+6%);', opacity: '0;' },
          '100%': { transform: 'translateX(0);', opacity: '1;' },
        },
        slidein: {
          '0%': { transform: 'translateX(-100%);', opacity: '0;' },
          '100%': {
            transform: 'translateX(-110%);',
            opacity: '1;',
          },
        },
      },
    },
  },
  plugins: [],
};
