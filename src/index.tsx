// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './App';

// Router
import AppRouter from './router';

// Render app
ReactDOM.render(
  <React.StrictMode>
    <App>
      <AppRouter />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
