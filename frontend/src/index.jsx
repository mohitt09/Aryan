import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UserContext";
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>

    <ToastContainer style={{ zIndex: 999999999999 }} />
  </React.StrictMode>,
  document.getElementById("root")
);
