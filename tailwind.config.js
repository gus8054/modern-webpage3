/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        third: "rgba(187, 255, 254, 1)",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        slideTop: "slide-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            transform: "translateY(100px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
      gridTemplateColumns: {
        repeatCompany: "repeat(auto-fill, 10rem)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
