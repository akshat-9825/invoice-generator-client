import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import { store } from "./store";
import { Provider } from "react-redux";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
