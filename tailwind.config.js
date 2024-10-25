/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          primary: "#000000",
          secondary: "#db0000",
          font: "#ffffff",
          hover: "#831010",
        },
      },
    },
  },
  plugins: [],
};
