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

        "green-shimmer": "#56CDAD",
        fluxx: "#FFB836",
        "midnight-dream": "#4640DE",
        "cosmic-purple": {
          100: "#E4D0FF",
          200: "#C3A9FF",
          500: "#8B5CF6",
          900: "#4C1D95",
        },
        "ocean-blue": {
          100: "#CAF0F8",
          200: "#90E0EF",
          500: "#0077B6",
          900: "#03045E",
        },
        "sunset-orange": {
          100: "#FFE5D9",
          200: "#FFBA08",
          500: "#FB8500",
          900: "#DC2F02",
        },
        "cyber-mint": {
          100: "#CCFBF1",
          200: "#5EEAD4",
          500: "#14B8A6",
          900: "#134E4A",
        },
        neon: {
          pink: "#FF10F0",
          blue: "#00FFFF",
          green: "#39FF14",
          purple: "#B026FF",
        },
        glass: {
          white: "rgba(255, 255, 255, 0.1)",
          dark: "rgba(0, 0, 0, 0.1)",
          blur: "rgba(255, 255, 255, 0.05)",
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
