import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "p4-1":
          "1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e",
        "p4-2":
          "0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 1.5px 1.5px 3px #0e0e0e, inset -1.5px -1.5px 3px #5f5e5e",
        "p6-a": "0 0 5px 0px #969696",
        "p6-container": "0 0 7px 1px #c5c5c5",
        "p6-pic": "0 0 5px 0px #afafaf",
      },
      animation: {
        shining: "shine 1s linear infinite alternate",
        move1: "move 0.3s linear",
        scale: "scale 0.3s linear",
        expand: "expand 0.3s linear",
        zoom: "zoom 0.3s linear",
        MoveScale: "MoveScale 0.3s linear",
        submenu: "submenu 0.2s linear",
        foldsubmenu: "foldsubmenu 0.2s linear",
      },
      keyframes: {
        submenu: {
          "0%": {
            transform: "scaleY(0)"
          },
          "100%": {
            transform: "scaleY(100%)"
          }
        },
        foldsubmenu: {
          "0%": {
            height: "100%"
          },
          "100%": {
            height: "0"
          }
        },
        MoveScale: {
          "0%": {
            width: "0",
            height: "0",
            transform: "translateX(0) translateY(0)",
            top: "12px",
            left: "12px",
            opacity: "0"
          },
          "100%": {
            width: "200px",
            height: "200px",
            transform: "translateX(-50%) translateY(-50%)",
            top: "50%",
            left: "50%",
            opacity: "1"
          }
        },
        zoom: {
          "0%": {
            width: "200px"
          },
          "100%": {
            width: "0"
          }
        },
        expand: {
          "0%": {
            width: "0"
          },
          "100%": {
            width: "200px"
          }
        },
        scale: {
          "0%": {
            transform: "scale(1)"
          },
          "100%": {
            transform: "scale(1.2)"
          }
        },
        move: {
          "0%": {
            transform: "translateX(0px)"
          },
          "100%": {
            transform: "translateX(200px)"
          }
        },
        shine: {
          "to": {
            "box-shadow": "0 0 24px #007fff"
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
