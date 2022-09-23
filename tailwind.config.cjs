/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        success: "#E6FAF0",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
