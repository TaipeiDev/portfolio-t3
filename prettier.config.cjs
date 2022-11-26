/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  prettier: {
    printWidth: 120,
    singleQuote: false,
    tabWidth: 2,
  },
};
