import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.25rem",
        lg: "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
