/*global module from webpack*/
/*eslint no-undef: "error"*/

module.exports = {
  verbose: true,
  globals: {
    'vue-jest': {}
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^Vue/(.*)$': '<rootDir>/src/vue/$1',
    '^Config/(.*)$': '<rootDir>/src/config/$1',
    '^Img/(.*)$': '<rootDir>/src/img/$1'
  },
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(js)$': 'babel-jest',
    '.*\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{vue,js}', '!**/node_modules/**'],
  coverageReporters: ['cobertura', 'lcov']
}
