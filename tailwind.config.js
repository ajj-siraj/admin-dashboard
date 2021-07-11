module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { display: "none", opacity: 0 },
          "1%": { display: "block", opacity: 0 },
          "100%": { display: "block", opacity: 1 },
        },
        fadeOut: {
          "0%": { display: "block", opacity: 1 },
          "1%": { display: "none", opacity: 1 },
          "100%": { display: "none", opacity: 0 },
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
