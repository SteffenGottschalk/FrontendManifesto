module.exports = {
  extends: [
    "eslint-config-airbnb",
    "eslint-config-airbnb/hooks",
    "eslint:recommended",
    "plugin:testing-library/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    jquery: true,
    node: true,
  },
  settings: {
    // See: https://github.com/benmosher/eslint-plugin-import/issues/1446
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$",
      "setupTests",
    ],
  },
  plugins: ["jest", "testing-library"],
  rules: {
    // Turned off to avoid conflict with prettier
    indent: ["off"],
    "linebreak-style": ["off"],
    "function-paren-newline": ["off"],
    "comma-dangle": ["off", "never"],
    "max-len": ["off"],
    "react/jsx-closing-bracket-location": ["off"],
    "react/jsx-curly-newline": ["off"],
    "react/jsx-indent": ["off"],

    // reasonable
    "react/require-default-props": ["warn"],
    "react/no-array-index-key": ["warn"],
    "react/prop-types": ["warn"],
    //warn onm import/prefer-default-export ?
    "import/prefer-default-export": ["off"],
    "react/jsx-props-no-spreading": ["warn", { html: "ignore" }],
    "jsx-a11y/click-events-have-key-events": ["warn"],
    "react/button-has-type": ["warn"],
    "import/no-cycle": ["warn"],
    "react/no-access-state-in-setstate": ["warn"],
    "jsx-a11y/control-has-associated-label": ["warn"],
    "jsx-a11y/no-static-element-interactions": ["warn"],
    "react/destructuring-assignment": ["warn"],
    "consistent-return": ["warn"],
    "no-lonely-if": ["warn"],
    "react/forbid-prop-types": ["warn"],
    "react/no-unused-state": ["warn"],
    "react/state-in-constructor": ["warn", "never"],
    "operator-linebreak": ["off"],
    "implicit-arrow-linebreak": ["off"],
    "object-curly-newline": ["off"],
    "array-callback-return": ["warn"],
    "arrow-body-style": ["off", "as-needed"],
    "guard-for-in": ["error"],
    "no-else-return": ["warn"],
    "no-mixed-operators": ["warn"],
    "no-param-reassign": [
      "warn",
      { props: true, ignorePropertyModificationsFor: ["draft"] },
    ],
    "no-plusplus": ["off"],
    "no-prototype-builtins": ["warn"],
    "no-restricted-syntax": ["warn"],
    "no-return-assign": "warn",
    "no-shadow": ["warn"],
    "no-console": ["warn"],
    "no-underscore-dangle": ["off"],
    "no-unused-expressions": ["off", "allowShortCircuit"],
    "prefer-destructuring": ["error", { object: true, array: false }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.js",
          "**/*stories.js",
          "**/setupTests.js",
          "**/docs/**/*.js",
          "**/webpack.config.js",
        ],
      },
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/no-direct-mutation-state": "error",
    "jsx-a11y/anchor-is-valid": [
      "error",
      { components: ["Link"], specialLink: ["to"] },
    ],
    "max-classes-per-file": ["off"],
    "no-confusing-arrow": ["off"],
    "no-use-before-define": ["error", { functions: false }],
    "no-nested-ternary": ["warn"],
    camelcase: ["warn"],

    // enforce to import "styled-components/macro" instead of only "styled-components"
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "styled-components",
            message: "Please import from styled-components/macro.",
          },
        ],
        patterns: ["!styled-components/macro"],
      },
    ],
  },
};
