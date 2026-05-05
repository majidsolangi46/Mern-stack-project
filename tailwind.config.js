/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: "#16181d",
        paper: "#f7f4ee",
        coral: "#ff6b57",
        teal: "#168c82",
        plum: "#5b476b",
        gold: "#e3a72f",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(22, 24, 29, 0.12)",
      },
    },
  },
  plugins: [],
};
