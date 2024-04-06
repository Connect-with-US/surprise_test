/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero': "url('../public/images/hero.jpg')",
      },
      colors: {
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          100: "#AFB2BF",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
          1000:"#223243",
          1001:"#432241",
          1002:"#403568",
          1002:"#403568",
          1003:"#D7CCC8",
          1004:"#9E9E9E",
          1005:"#90A4AE",
          1006:"#A1887F",
          1007:"#685635",   
          
        },
        blue: {
          100: "#47A5C5",
          101:"#e0f1f4",
          102:"#302055",
        },
        pink: {
          200: "#EF476F",
        },
        BGgradient: {
          201: "bg-gradient-to-t from-orange-400 to-sky-400",
        },
        yellow: {
          50: "#FFD60A",
          51:"#F7E7CE",
        },
      },
    },
  },
  plugins: [],
};
