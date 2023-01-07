/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  //custom theme 
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#05f5dd",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
    ],
  },
}
