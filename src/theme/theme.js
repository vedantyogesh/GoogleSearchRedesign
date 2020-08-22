import { createMuiTheme } from "@material-ui/core/styles";

const googleWhite = "#ffffff";
const googleBlue = '#008af4';
export default createMuiTheme({
  palette: {
    primary: {
      main: `${googleWhite}`,
    },
    secondary: {
      main: `${googleBlue}`,
    },
  },
  typography: {
    tab: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `2px solid ${googleWhite}`,
          opacity: 0.5,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${googleWhite}`,
          opacity: 0.7,
        },
      },
    },
  },
});

