import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  testTimeout: 30000,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.tsx'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
}

export default config
