import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Create a file called App.js in the current directory and export the component called App from that file.
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <App />

  </React.StrictMode>
);
