/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["Source Code Pro", "monospace"],
        display: ["ui-sans-serif", "system-ui"],
        body: ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/aspect-ratio')],
};
