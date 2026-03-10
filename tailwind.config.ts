import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The Silo brand palette
        "panhandle-sky": "#1C3144",
        "winter-wheat": "#D4A853",
        "high-plains-dust": "#C5B49A",
        "alkali-white": "#E8E4DC",
        "icbm-gray": "#3D3D3B",
        "oxidized-steel": "#A84C2A",
        "nws-blue": "#3A7EBF",
        "sage-flat": "#5C7A5E",
        // Base
        canvas: "#141E2A",
        card: "#1A2535",
        border: "#2A3545",
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
