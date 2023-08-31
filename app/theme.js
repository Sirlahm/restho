import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

export const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#bf9444",
    },
  },
  typography: {
    fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
    fontWeightBold: 600,
    body1: {
      fontSize: "0.875rem",
      lineHeight: "20px",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: "30px",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.3rem",
      lineHeight: "30px",
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "20px",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "20px",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 968,
      lg: 1230,
      xl: 1536,
    },
  },
});

export default theme;
