/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'nav': '#040C18',
        'font': '#C5C5C5',
        'modal': "#483D8B",
        'bd-color': '#1B78DE'
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-9deg)" },
          "50%": { transform: "rotate(9deg)" }
        }
      },
      animation: {
        "sping-slow": "spin 1s linear infinite",
        "wiggle": "wiggle 1s linear infinite"
      },
      minWidth: {
        '3/5': '60%',
      },
      margin: {
        '100': '525px'
      },
      padding: {
        '55': '215px'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}

