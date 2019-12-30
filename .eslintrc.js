module.exports = {
    "extends": [
      "airbnb",
    ],
    "plugins": [
      "jest",
      "emotion",
    ],
    "env": {
      browser: true,
      jest: true,
    },
    "settings": {
      "react": {
        "version": "detect",
      },
    },
    "ignorePatterns": [
      "src/index.js",
      "src/serviceWorker.js",
      "src/app.test.js", // @todo: remove
    ],
    "rules": {
      "react/button-has-type": 0,
      // "import/no-absolute-path": 0,
      "react/jsx-filename-extension": 0,
      "max-len": [1, 120],
    }
};
