// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * Keamanan Tambahan:
 * Memastikan elemen 'root' ada sebelum melakukan rendering.
 * Ini mencegah error "null is not an object" yang sering membuat layar blank.
 */
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Gagal memuat aplikasi: Elemen dengan id 'root' tidak ditemukan di index.html");
} else {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}