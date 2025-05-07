/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "button-gradient":
          "linear-gradient(90deg, #596BFF 0%, #5A46DC 49.5%, #7C5ECC 100%)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        sora: ["var(--font-sora)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
