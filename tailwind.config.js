// tailwind.config.js
const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(slider|popover).js",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 3s ease infinite",
      },
      colors: {
        "dashboard-black": "#1a1a1a",
        "dashboard-grey": "#333333",
        "dashboard-red": "#fa0100",
        "dashboard-icon-grey": "#808080",
        "dashboard-white": "#ffffff",
        white: "#FFFFFF",
        foreground: "#a2a2a2",
        default: "1e1e1e",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-position": "right center",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
