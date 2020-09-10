import React from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
} from "@material-ui/core";
import Layout from "./components/Layout";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(),
  },
  palette: {
    primary: {
      main: "#EF8216",
    },
    secondary: {
      main: "rgb(2, 65, 96)",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </MuiThemeProvider>
  );
}

export default App;
