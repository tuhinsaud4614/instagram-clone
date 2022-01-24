const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { md1: "736px", lg1: "975px" },
      fontFamily: {
        sans: [
          ...defaultTheme.fontFamily.sans,
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        silver: "#8e8e8e",
        "sliver-100": "#efefef",
        "sliver-200": "#dbdbdb",
        "sliver-300": "#a8a8a8",
        accent: "#0095f6",
        fb: "#385185",
        "my-blue-100": "#00376b",
      },
      spacing: {
        15: "3.75rem",
        65: "16.25rem",
        90: "22.5rem",
        100: "25rem",
        2.5: "0.625rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
      },
      opacity: {
        65: "0.65",
      },
      zIndex: {
        100: "100",
      },
      animation: {
        dialog: "dialog .1s ease-out",
      },
      keyframes: {
        dialog: {
          "0%": {
            opacity: "0",
            transform: "scale(1.2)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
