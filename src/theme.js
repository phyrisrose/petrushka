import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[100],
    },
    secondary: {
      main: amber[100],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
