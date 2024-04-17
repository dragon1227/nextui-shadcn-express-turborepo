/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js", "next/core-web-vitals"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
