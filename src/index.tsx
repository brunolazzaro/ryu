import React from 'react';
import { createRoot } from 'react-dom/client';

import App from 'components/App';

// Global Styles
import 'css/global.css';

// Render
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App info="world" />);
