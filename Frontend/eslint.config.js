const { FlatCompat } = require("@eslint/eslintrc");

// Provide the required recommendedConfig parameter
const compat = new FlatCompat({ recommendedConfig: require("eslint/conf/eslint-recommended") });

module.exports = [
  ...compat.extends("eslint:recommended"),
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
];
