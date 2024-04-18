import React from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "react-jss";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./theme";
import App from "./App";

import "normalize.css/normalize.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
