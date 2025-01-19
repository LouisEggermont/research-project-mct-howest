import type { Config } from "tailwindcss";
import tailwindReactAria from "tailwindcss-react-aria-components";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        govBlack: {
          DEFAULT: "#3C3D3C",
          900: "#1A1A1A",
          800: "#2D2E2D",
          700: "#3C3D3C",
          600: "#4D4E4D",
          500: "#666666",
          400: "#808080",
          300: "#999999",
          200: "#B3B3B3",
          100: "#E6E6E6",
          50: "#F2F2F2",
        },
        govMagenta: {
          DEFAULT: "#CC017A",
          900: "#4A001F",
          800: "#6B002F",
          700: "#8E0041",
          600: "#B0005A",
          500: "#CC017A",
          400: "#EC407A",
          300: "#F06292",
          200: "#F48FB1",
          100: "#F8BBD0",
          50: "#FCE4EC",
        },
        govBlue: {
          DEFAULT: "#32AEC7",
          900: "#003F4F",
          800: "#005B6E",
          700: "#00728A",
          600: "#0097A7",
          500: "#32AEC7",
          400: "#29B6F6",
          300: "#4FC3F7",
          200: "#81D4FA",
          100: "#B3E5FC",
          50: "#E0F7FA",
        },
        govGray: {
          DEFAULT: "#F6F5E5",
          900: "#212121",
          800: "#424242",
          700: "#616161",
          600: "#757575",
          500: "#9E9E9E",
          400: "#BDBDBD",
          300: "#E0E0E0",
          200: "#EEEEEE",
          100: "#F6F5E5",
          50: "#FAFAFA",
        },
        govYellow: {
          DEFAULT: "#FFED00",
          900: "#E65100",
          800: "#F57F17",
          700: "#F9A825",
          600: "#FBC02D",
          500: "#FFED00",
          400: "#FFEB3B",
          300: "#FFEE58",
          200: "#FFF176",
          100: "#FFF59D",
          50: "#FFF9C4",
        },
      },
    },
  },
  plugins: [tailwindReactAria, tailwindAnimate],
};

export default config;
