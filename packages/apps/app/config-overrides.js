/* eslint-disable */
const path = require('path');
const fs = require('fs');

const { override, babelInclude } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader-for-customize-cra');

module.exports = (config, env) => {
  return Object.assign(
    config,
    override(
      rewireReactHotLoader(),
      /* Makes sure Babel compiles the stuff in the common folder */
      babelInclude([
        path.resolve('src'),
        fs.realpathSync('../../components/basic-components/src') // THIS
      ])
    )(config, env)
  );
};
