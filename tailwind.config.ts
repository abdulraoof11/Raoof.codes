
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7A00",
        bgdark: "#0E0E0E",
        card: "#161616"
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.4)",
      }
    }
  },
  plugins: []
};
export default config;
