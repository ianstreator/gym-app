/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FFD568",
        bone: "#E3DAC9",
        dark: "#3D3D3D",
      },
    },
  },
  plugins: [],
};
