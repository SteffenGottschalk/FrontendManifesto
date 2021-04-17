/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    //  This is needed for sass mapping (can be removed if no sass files are present anymore)
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    // This is needed to resolve and mock static file imports
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.js'
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx'
  }
};
