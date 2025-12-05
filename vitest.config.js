import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["@testing-library/jest-dom/vitest", "./vitest.setup.js"],
  },
});
