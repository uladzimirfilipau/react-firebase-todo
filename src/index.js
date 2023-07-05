import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AlertState } from './context/alert/AlertState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AlertState>
  </React.StrictMode>,
);
