module.exports = {
    "extends": [
      "airbnb",
    ],
    "plugins": [
      "jest"
    ],
    "env": {
      browser: true,
      jest: true,
    },
    "settings": {
      "react": {
        "version": "detect",
      },
      "import/resolver": {
        "node": {
          "moduleDirectory": ["node_modules", "src/"]
        }
      }
    },
    "ignorePatterns": [
      "src/index.js",
      "src/serviceWorker.js",
    ],
    "rules": {
      "react/button-has-type": 0,
      "react/jsx-props-no-spreading": 0,
      "react/jsx-filename-extension": 0,
      "max-len": [1, 120],
    },
    "overrides": [
      {
        "files": ["src/*.test.js", "src/tests/helpers/*.js"],
        "rules": {
          "import/no-extraneous-dependencies": 0
        }
      }
    ],
};
