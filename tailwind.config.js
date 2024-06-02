/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBackground: "url(https://mus7afonline.vercel.app/static/media/bg-img.3ebd8908e3d6bfc272dd.jpeg)"
      },
      // screens: {
      //   xs: "300px",
      //   xxs: "500px",
      // },
    },
  },
  plugins: [],
});

