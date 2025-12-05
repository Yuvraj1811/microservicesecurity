const { FlatCompat } = require("@eslint/eslintrc");
const compat = new FlatCompat({ recommendedConfig: require("eslint/conf/eslint-recommended") });

module.exports = [
  ...compat.extends("eslint:recommended"),
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    env: {
      browser: true,
      node: true,
    },
  },
  {
    files: ["**/*.test.js", "**/*.test.jsx"],
    env: {
      jest: true,
    },
  },
];
