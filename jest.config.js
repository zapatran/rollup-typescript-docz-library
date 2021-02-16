module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setuptests.ts'],
  collectCoverage: true,
  testEnvironment: 'jsdom',

  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
