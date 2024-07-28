/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'nav': '#040C18',
        'font': '#C5C5C5',
        'modal': "#1A1A1E",
        'bd-color': '#121214',
        'button': "#8234E9"
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
      },
      width: {
        '500px': '500px',
        '300px': '300px'
      }

    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}

