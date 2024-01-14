import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { TeamUpProvider } from "./context/team-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TeamUpProvider>
      <App />
    </TeamUpProvider>
  </React.StrictMode>
);
