import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      parisienne: ["Parisienne", "san-serif"],
    },
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            scale: "0",
            opacity: "0",
          },
          "100%": {
            scale: "1",
            opacity: "1",
          },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-up": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-down": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        fadein: "fade-in 1s ease-out",
        slideinright: "slide-in-right 1s ease-out",
        slideinleft: "slide-in-left 1s ease-out",
        slideinup: "slide-in-up 1s ease-out",
        slideindown: "slide-in-down 1s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
