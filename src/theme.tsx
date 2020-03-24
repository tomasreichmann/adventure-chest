import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: {
      paper: "rgba(242, 236, 217, 1)",
      default: "rgba(229, 220, 194, 1)"
    },
    primary: {
      light: "rgba(247, 209, 68, 1)",
      main: "rgba(224, 163, 14, 1)",
      dark: "rgba(190, 124, 9, 1)",
      contrastText: "rgba(242, 236, 217, 1)"
    },
    secondary: {
      light: "rgba(165, 121, 73, 1)",
      main: "rgba(143, 99, 59, 1)",
      dark: "rgba(127, 83, 48, 1)",
      contrastText: "rgba(242, 236, 217, 1)"
    },
    error: {
      light: "rgba(231, 0, 5, 1)",
      main: "rgba(175, 0, 7, 1)",
      dark: "rgba(118, 0, 7, 1)",
      contrastText: "rgba(242, 236, 217, 1)"
    },
    text: {
      primary: "rgba(5, 24, 48, 0.87)",
      secondary: "rgba(5, 24, 48, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  },
  typography: {
    fontFamily: [
      "Rosario",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    body2: {
      fontFamily: "Kalam, cursive",
    },
  }
});

export default theme;
