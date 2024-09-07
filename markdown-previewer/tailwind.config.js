/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

module.exports = {
  content: ["./src/**/*.{html,js}","./src/*.{html,js}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [daisyui],
  daisyui:{
    themes:['black']
  }
}

