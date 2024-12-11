import React from 'react';
import ReactDOM from 'react-dom/client';
import Approuter from './Approuter';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Approuter />
  </React.StrictMode>,
);
