import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
      <h1>React 웹 앱</h1>
    </div>
  );
}

const domN = document.getElementById("react-app");
ReactDOM.createRoot(domN).render(
  <StrictMode>
    <App />
  </StrictMode>
);
