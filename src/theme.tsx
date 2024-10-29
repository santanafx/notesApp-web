import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#56a3a6",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#db504a",
      contrastText: "rgba(255,255,255,0.87)",
    },
    error: {
      main: "#dc0909",
    },
    warning: {
      main: "#ffdc26",
    },
    info: {
      main: "#bc29f6",
    },
    success: {
      main: "#00ff0b",
    },
    divider: "#084c61",
    background: {
      default: "#2d2d2d",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "PT Sans",
    subtitle1: {
      fontFamily: "Athiti",
    },
    subtitle2: {
      fontFamily: "Athiti",
    },
    body1: {
      fontFamily: "PT Sans",
    },
    body2: {
      fontFamily: "PT Sans",
    },
    caption: {
      fontFamily: "Athiti",
    },
    overline: {
      fontFamily: "Athiti",
    },
  },
};
