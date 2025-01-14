import type { Config } from "tailwindcss";

export default {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./icons.tsx"
  ],
  theme: {
  	extend: {
  		colors: {
            primary: "#facc15",
        }
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
