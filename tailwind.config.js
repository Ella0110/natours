import nextConfig from "./next.config.mjs"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero": `linear-gradient(to right bottom,rgba(52,211,153,0.8),rgba(163,230,53,0.8)),url('${nextConfig.basePath}/img/hero-small.jpg')`,
        "nat-4": `linear-gradient(to right bottom,rgba(52,211,153,0.8),rgba(163,230,53,0.8)),url('${nextConfig.basePath}/img/nat-4.jpg')`,
        "nat-5": `linear-gradient(to right bottom,rgba(255,185,0),rgba(255,119,48)),url('${nextConfig.basePath}/img/nat-5.jpg')`,
        "nat-6": `linear-gradient(to right bottom,rgba(52,211,153),rgba(163,230,53)),url('${nextConfig.basePath}/img/nat-6.jpg')`,
        "nat-7": `linear-gradient(to right bottom,rgba(41,151,255),rgba(86,67,250)),url('${nextConfig.basePath}/img/nat-7.jpg')`,
        "nat-10": `linear-gradient(105deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 50%, transparent 50%), url('${nextConfig.basePath}/img/nat-10.jpg')`,
        "nat-11": `linear-gradient(105deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), url('${nextConfig.basePath}/img/nat-10.jpg')`

      },
    },
  },
  plugins: [],
};
