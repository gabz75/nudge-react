import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './styles/tailwind.css';
import './styles/index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Poppins:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
