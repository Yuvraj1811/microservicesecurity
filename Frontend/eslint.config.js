import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({});

export default [
  ...compat.extends("eslint:recommended"),
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    rules: {
      // add custom rules here
      "no-unused-vars": "warn",
      "no-console": "warn"
    }
  }
];
