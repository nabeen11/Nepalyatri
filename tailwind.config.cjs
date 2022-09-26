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
      letterSpacing: {
        veryTight: "-0.2em",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
