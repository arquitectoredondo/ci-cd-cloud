
// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended, // ESLint's recommended core rules
  {
    files: ["**/*.{js,jsx}"], // Include .js if you write JSX in .js files
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true } // ✅ Enable JSX
      }
    },
    rules: {
      semi: "error",
      "prefer-const": "error",
    }
  },
  {
    ignores: ["node_modules/", "dist/", "build/"]
  }
];
