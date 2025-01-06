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
        social: "url('/socialmedia.jpg')",
        experience: "url('/bg12.jpg')",
        title: "url('/title.jpg')",
        sponsor: "url('/sponsor_img.webp')",
      },

      animation: {
        scroll: "scroll 15s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      fontFamily: {
        neometric: ['"FSP DEMO Neometric Alt Black"', "sans-serif"],
        myraidpro: ['"Myraid Pro"', "sans-serif"],
      },
      scale: {
        85: "0.85",
        65: "0.65",
        55: "0.55",
      },
      colors: {
        primary: "#ec2128",
        secondary: "#f4ac1d",
      },
    },
  },
  plugins: [],
};

export default config;
