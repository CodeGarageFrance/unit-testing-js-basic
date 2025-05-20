// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text'], // choose what you need
      exclude: ['**/node_modules/**', '**/dist/**'],
    },
  },
});
