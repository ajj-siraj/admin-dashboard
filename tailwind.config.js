module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { visibility: "hidden", opacity: 0 },
          "30%": { visibility: "visible", opacity: 0 },
          "100%": { visibility: "visible", opacity: 1 },
        },
        fadeOut: {
          "0%": { visibility: "visible", opacity: 1 },
          "1%": { visibility: "hidden", opacity: 1, position: "fixed", zIndex: -100  },
          "100%": { visibility: "hidden", opacity: 0, position: "fixed", zIndex: -100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        fadeOut: "fadeOut 0.5s ease-in-out forwards",
      },
    },
  },
  variants: {
    extend: {
      cursor: ["hover"],
    },
  },
  plugins: [],
};
