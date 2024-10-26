import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./app";
import "./global.css";
import { themeOptions } from "./theme";

const theme = createTheme(themeOptions);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
