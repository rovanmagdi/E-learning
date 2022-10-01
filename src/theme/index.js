import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#198754",
      light: "#eefbf3",
      dark: "rgba(48,146,85,0.25)",
    },
    secondary: {
      main: "#198754",
      light: "#ffff",
      dark: "#00000",
    },
  },
  typography: {
    caption: {
      textSize: "12px",
      fontWeight: "900",
    },
  },
});
export { theme };
