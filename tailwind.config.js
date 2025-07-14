const GlowsAIThemePlugin = require("./theme-plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}", "./sidebar.ts", "./docusaurus.config.ts"],
  theme: {
    extend: {},
  },
  plugins: [GlowsAIThemePlugin],
  darkMode: ["class", '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  blocklist: ["container"],
};
