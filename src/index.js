import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Import the App component
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* Only one BrowserRouter wrapping your App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
