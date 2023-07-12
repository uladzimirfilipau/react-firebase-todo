import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';
import { ConfirmContextProvider } from './context/confirm/ConfirmContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseState>
      <AlertState>
        <ConfirmContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConfirmContextProvider>
      </AlertState>
    </FirebaseState>
  </React.StrictMode>,
);
