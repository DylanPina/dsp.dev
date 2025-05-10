module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['"Jost"', "sans-serif"],
    },
    extend: {
      colors: {
        // light mode
        bglight: "#eff1f5",
        textlight: "#4c4f69",
        cardlight: "#ccd0da",
        // dark mode
        bgdark: "#1e1e2e",
        textdark: "#cdd6f4",
        carddark: "#313244",
        // accent colors
        lavender: "#7287fd",
      },
    },
  },
};
