/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        "aeonik-pro": "'Aeonik Pro'",
      },
      borderRadius: {
        "31xl": "50px",
        mini: "15px",
        "3xs": "10px",
        "51xl": "70px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      xl: "20px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1825: {
        raw: "screen and (max-width: 1825px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
