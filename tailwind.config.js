/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FF7A00",
        "secondary-color": "#1f2937",
        "thirdly-color": "#324258",
      },
    },
  },
  plugins: [],
};
