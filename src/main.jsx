import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { ApplicationProvider } from "./context/ApplicationContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ApplicationProvider>
          <App />
        </ApplicationProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);