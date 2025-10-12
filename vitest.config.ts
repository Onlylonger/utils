import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          include: ['tests/node-environment/**/*.{test,spec}.ts'],
          name: 'node-environment-test',
          environment: 'node',
        },
      },
      {
        test: {
          include: ['tests/browser-environment/**/*.{test,spec}.{ts,tsx}'],
          name: 'browser-environment-test',
          browser: {
            enabled: true,
            provider: playwright({}),
            instances: [
              { browser: 'chromium' },
              // { browser: 'webkit' },
              // { browser: 'firefox' },
            ],
            headless: true,
          },
        },
      },
    ],
  },
})
