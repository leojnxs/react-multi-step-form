import { responsiveFontSizes } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";

export const colors = {
  purple: {
    50: "#F2EBEF",
    100: "#EDDDE5",
    200: "#E0B6CF",
    300: "#D996C3",
    400: "#C76AAD",
    500: "#B64798",
    600: "#A42383",
    700: "#91006D",
    800: "#760050",
    900: "#550037",
  },
  gray: {
    50: "#F6F5F7",
    100: "#E9E8ED",
    200: "#D3D1D9",
    300: "#B7B4BF",
    400: "#A19DAB",
    500: "#878294",
    600: "#706A80",
    700: "#5A526B",
    800: "#443D57",
    900: "#312B46",
  },
};

let theme = createTheme({
  palette: {
    background: {
      default: colors.gray[50],
    },
    primary: {
      dark: colors.purple[900],
      main: colors.purple[500],
      light: colors.purple[100],
    },
    secondary: {
      dark: colors.gray[900],
      main: colors.gray[900],
      light: colors.gray[100],
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        icon: {
          width: "1.2rem",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          height: "inherit",
          width: "inherit",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              background: colors.purple[800],
            }),
          textTransform: "none",
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          color: `${theme.palette.secondary.main} !important`,
          transform: "none",
          transformOrigin: "none",
          fontSize: "0.9rem",
          position: "relative",
          lineHeight: "1.5rem",
          top: theme.spacing(-1 / 2),
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h3: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
