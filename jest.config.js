module.exports = {
  roots: ['<rootDir>/app'],

  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],

  snapshotSerializers: ['enzyme-to-json/serializer'],

  setupFilesAfterEnv: [
    '<rootDir>/app/setupEnzyme.ts',
    '@testing-library/jest-dom/extend-expect',
  ],

  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/app/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['.', 'app', 'node_modules'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
