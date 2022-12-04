const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: [" 'reanimationSansSerif' ", ...defaultTheme.fontFamily.sans],
        display: [" 'reanimationBlackletter' "],
      },
    },
  },
};
