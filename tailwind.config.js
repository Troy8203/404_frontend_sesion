/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fire-bush": {
          50: "#fef7ec",
          100: "#fae9cb",
          200: "#f5d192",
          300: "#f0b359",
          400: "#ec9a34",
          500: "#e5781b",
          600: "#ca5815",
          700: "#a83d15",
          800: "#892f17",
          900: "#712816",
          950: "#401208",
        },
      },
    },
  },
  plugins: [],
};
