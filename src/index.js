import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Bootstrap 必須先載入，本站樣式才蓋得過它的預設值。順序不要調換。
import "bootstrap/dist/css/bootstrap.min.css";
import './scss/all.scss'
import("bootstrap")

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)