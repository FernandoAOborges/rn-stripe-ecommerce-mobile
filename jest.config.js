module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|react-native-vector-icons)',
  ],
  setupFilesAfterEnv: ['./jest-setup.js'],
  moduleNameMapper: {
    '\\.(ttf)$': '<rootDir>/__mocks__/file-mock.js',
    '^react-native-vector-icons/(.*)$': '<rootDir>/__mocks__/vector-icons/$1.js',
  },
};
