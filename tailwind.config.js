/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2.5xl": "1.625rem",
        "2.75xl": "1.75rem",
      },
      colors: {
        "grey-matte": {
          100: "#22242A",
          200: "#17181C",
        },
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(200px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(200px) rotate(-360deg)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        orbit: "orbit 20s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
