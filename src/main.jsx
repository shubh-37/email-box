import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import MailProvider from "./contexts/MailProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MailProvider>
        <App />
      </MailProvider>
    </Router>
  </React.StrictMode>
);
