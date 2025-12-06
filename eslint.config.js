import js from "@eslint/js";
import pluginVitest from "@vitest/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import configPrettier from "eslint-config-prettier/flat";
import pluginJsdoc from "eslint-plugin-jsdoc";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default defineConfig([
  globalIgnores(["coverage", "dist"]),
  js.configs.recommended,
  pluginJsdoc.configs["flat/recommended"],
  pluginReactHooks.configs.flat["recommended-latest"],
  configPrettier,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    files: ["**/*.test.js", "**/__tests__/**/*.js"],
    extends: [pluginVitest.configs.recommended],
  },
]);
