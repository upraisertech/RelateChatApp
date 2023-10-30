module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fcfcfc",
          100: "#f4f4f4",
          300: "#e2e2e2",
          600: "#767676",
          900: "#2e2e22",
        },
        green: { 300: "#63d683" },
        blue_gray: {
          50: "#eaf0f7",
          900: "#2e2e2e",
          "900_7f": "#2e2e2e7f",
          "900_01": "#323232",
        },
        red: { 400: "#f14751", "700_a2": "#ec1825a2" },
        light_blue: {
          800: "#0277bd",
          900: "#004c8c",
          "900_a2": "#004c8ca2",
          "800_a2": "#0277bda2",
        },
        blue: { 300: "#58a5f0" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { montserrat: "Montserrat" },
    },
  },
  plugins: [require("daisyui")],
};

