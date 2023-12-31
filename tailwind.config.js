/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fffffe",
        secondary: "#d1d1e9",
        danger: "#e45858",
        header: "#2b2c34",
        info: "#6246ea",
      },
    },
  },
  plugins: [],
};
