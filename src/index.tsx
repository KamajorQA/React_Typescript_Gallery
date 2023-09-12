import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ModalContextProvider } from './context/ModalContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
