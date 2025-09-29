import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Ensure your path is correct
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          text_color: "#212121",
          light: "#2F2941",
          textcolor: "#010101",
          bgbutton: "#1943F5",
        },
      },
      // screens: {
      //   "970": "970px",
      //   "700": "700px",
      // },
    },
  },
  plugins: [],
} satisfies Config;
