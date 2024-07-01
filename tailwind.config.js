/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FF7A00",
        "secondary-color": "#1154FF",
        "thirdly-color": "#f2f0f5",
      },
    },
  },
  plugins: [],
};
