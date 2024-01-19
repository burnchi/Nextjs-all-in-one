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
        shining: "shine 1s linear infinite alternate"
      },
      keyframes: {
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
