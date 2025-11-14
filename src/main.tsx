import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Ocultar preloader al terminar de montar
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.4s";
    
    setTimeout(() => {
      loader.style.display = "none";
    }, 400);
  }
});
