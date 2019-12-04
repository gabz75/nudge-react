module.exports = {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      browser: true,
    },
    "ignorePatterns": [
      "src/index.js",
      "src/serviceWorker.js",
    ]
};
