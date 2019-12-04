module.exports = {
    "extends": [
      "airbnb",
    ],
    "parser": "babel-eslint",
    "env": {
      browser: true,
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
      "react/destructuring-assignment": 0,
      "react/jsx-filename-extension": 0,
      "max-len": [1, 120],
    }
};
