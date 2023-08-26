/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(150, 100%, 66%)',
        textColor: ' hsl(193, 38%, 86%)',
        primaryBg: '#313A49',
        secondaryBg: '#1F2531',
        defaultBg: '#202632',
      },

      fontFamily: {
        manropeXtraBold: 'Manrope-ExtraBold',
        manropeSemiBold: 'Manrope-SemiBold',
      },
    },
  },
  plugins: [],
};
