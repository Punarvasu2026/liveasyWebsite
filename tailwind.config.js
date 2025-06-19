/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sofia: ["'Sofia Sans'", "sans-serif"],
      },
      colors: {
        primaryBlue: "#304DAF",    // Custom name for #304DAF     // Another example
      },
    },
  },
  plugins: [],
};
