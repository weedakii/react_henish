/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#1848B4",
      },
      fontFamily: {
        tajawal: ['"Tajawal"', "sans-serif"],
      },
      boxShadow: {
        hd: "0 4px 4px 0px #9090903d",
        card: "2px 27px 15px -5px #bbbbbb4d",
        prod: "0px 0px 10px 1px #aaa",
        sim: "0px 0px 12px 0px #bbbbbb4d",
        inp: "0px 0px 6px 0px #bbbbbb6d",
      },
      gridTemplateColumns: {
        prod: "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
