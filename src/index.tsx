import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'components/App';
import store from 'redux/store';

// Global Styles
import 'css/global.css';

// Render
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App info="hey" />
  </Provider>,
  root,
);
