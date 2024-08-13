// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";
import { AuthProvider } from "./components/AuthContext";
// Pegue o elemento root
// const container = document.getElementById("root");

// Crie a raiz com createRoot
// const root = createRoot(container);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
