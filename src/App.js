import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import ApplictionLayout from "./layouts/ApplictionLayout";

function App() {
  const theme = createTheme({
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            backgroundColor: "#FFFFFF",
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            borderRadius: "0px !important",
            boxShadow: "none",
            textTransform: "capitalize !important",
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#383838",
      },
      secondary: {
        main: "#edf2ff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApplictionLayout />
    </ThemeProvider>
  );
}

export default App;
