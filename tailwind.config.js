/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '285px',
        'smx': '400px',
        '2lg': '1025px',
      },
      fontSize: {
        'xxs': '0.625rem', 
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        "-5": "-5",
      },
      fontFamily: {
        handjet: ["Handjet", "sans-serif"],
        "noto-sans-jp": ["Noto Sans JP", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        indigo: "0 0 3px 1px rgba(149, 87, 248, 0.66)",
        red: " 0 0 3px 1px rgba(248, 87, 87, 0.66)",
        blue: "  0 0 3px 1pxrgba(87, 135, 248, 0.66)",
        gray: " 0 0 3px 1px rgba(163, 163, 163, 0.66)",
        purple: "0 0 3px 1px rgba(199, 165, 254, 0.66)",
      },
    },
  },
  plugins: [],
};
