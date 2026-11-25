import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tokens.css';
import './styles/global.css';
import './styles/homepage.css';
import './styles/modules.css';
import './pages/submit.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Application root element was not found.');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
