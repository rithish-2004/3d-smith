import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Or Landingpage if that's the entry point

ReactDOM.render(
  <BrowserRouter>
    <App />  {/* Your main App component */}
  </BrowserRouter>,
  document.getElementById('root')
);
