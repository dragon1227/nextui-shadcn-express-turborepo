// /** @type {import("eslint").Linter.Config} */
// module.exports = {
//   root: true,
//   extends: ["@repo/eslint-config/react-internal.js"],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     project: true,
//   },
// };

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

