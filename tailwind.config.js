/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F7A1F",
        primaryDark: "#145214",
        textDark: "#111111",
      },
    },
  },

  plugins: [],
};
