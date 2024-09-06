/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: ["./src/**/*.{html,js}","./src/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui:{
    themes:['black']
  }
}

