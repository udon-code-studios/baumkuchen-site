/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "major-mono": ["Major Mono Display", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
      colors: {
        isabelline: "#f2e9e4",
        "pale-dogwood": "#c9ada7",
        "rose-quartz": "#9a8c98",
        "ultra-violet": "#4a4e69",
        "space-cadet": "#22223b",
      },
    },
  },
  plugins: [],
};
