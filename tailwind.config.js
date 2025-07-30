/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
        pulse: "pulse 10s ease-in-out infinite",
      },
      colors: {
        start: "#e5fe96",
        end: "#ffffeb",
        accent: "#ef8713",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
