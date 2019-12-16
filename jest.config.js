const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$'

module.exports = {
  // setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '/tailwind/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: false,
  moduleNameMapper: {
    'components/(.*)$': '<rootDir>/components/$1',
    'gql/(.*)$': '<rootDir>/gql/$1',
    'hooks/(.*)$': '<rootDir>/hooks/$1',
    'interfaces/(.*)$': '<rootDir>/interfaces/$1',
    'layout/(.*)$': '<rootDir>/layout/$1',
    'lib/(.*)$': '<rootDir>/lib/$1',
    'store/(.*)$': '<rootDir>/store/$1',
    store: '<rootDir>/store',
    '\\.css$': require.resolve('./__tests__/style-mock.js'),
    // 'lib/(.*)$': '<rootDir>/lib/$1',
    // 'utils/(.*)$': '<rootDir>/utils/$1'
  },
}
