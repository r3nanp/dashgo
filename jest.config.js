module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '!src/services/*.ts',
    '!src/pages/**/*.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
}
