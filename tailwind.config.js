/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray1: {
          "100": "#1f2733",
          "200": "#0d0d0d",
          "300": "rgba(0, 0, 0, 0.6)",
          "400": "rgba(255, 255, 255, 0.98)",
          "500": "rgba(0, 0, 0, 0.56)",
          "600": "rgba(13, 13, 13, 0.6)",
          "700": "rgba(255, 255, 255, 0.1)",
        },
        "colors-utility-colors-ws-utility-black": "#000",
        whitesmoke: {
          "100": "#f9fafb",
          "200": "#f9f9f9",
          "300": "#f3f3f3",
          "400": "#f0f0f0",
          "500": "rgba(249, 250, 251, 0.6)",
        },
        darkslategray: {
          "100": "#364761",
          "200": "#383e4d",
          "300": "#363636",
        },
        b900: "#03132e",
        "slate-900": "#0f172a",
        "colors-text-ws-text-primary": "#212020",
        "gray-900": "#18181b",
        "brand-purple-20": "#ab96f8",
        aliceblue: "#eef3f8",
        dimgray: "#666",
        "links-scnd-dark-link-hover": "#4f4f4f",
      },
      spacing: {},
      fontFamily: {
        mulish: "Mulish",
        subtle: "Inter",
        "alphabetized-cassette-tapes-thin":
          "'Alphabetized Cassette Tapes Thin'",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        "open-sans": "'Open Sans'",
        inherit: "inherit",
      },
      borderRadius: {
        "12xs": "1px",
      },
    },
    fontSize: {
      base: "16px",
      "3xl": "22px",
      lg: "18px",
      sm: "14px",
      "9xl": "28px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "21xl": "40px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
