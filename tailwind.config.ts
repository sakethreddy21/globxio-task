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
       'my_bg_image' : "url('../public/images/homeimg.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
export default config;
