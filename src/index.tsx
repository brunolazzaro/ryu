import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';

// Global Styles
import 'css/global.css';

// Render
const root = document.getElementById('root');

ReactDOM.render(<App info="world" />, root);
