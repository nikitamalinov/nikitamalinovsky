/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "600px",
        md: "820px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1600px",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(14deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(14deg)" },
          "60%": { transform: "rotate(-4deg)" },
          "70%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave 1.5s 3",
      },
    },
    plugins: [],
  },
};
