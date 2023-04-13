/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  reporters: ['default', 'jest-junit'],
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['text', 'html', 'json-summary'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    }
  },
  collectCoverageFrom: [
    'source/**/*.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    "\\.json$"
  ],
  detectOpenHandles: true,
  testTimeout: 200,
};