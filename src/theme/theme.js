import { createTheme } from "@mui/material";
import ColorPalette from "./ColorPalette";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f7f7f8",
    },
    primary: {
      main: "#172B4D",
      light: ColorPalette.light.primary.light,
      contrastText: ColorPalette.light.primary.contrastText,
      dark: ColorPalette.light.primary.dark,
    },
    secondary: {
      main: ColorPalette.light.secondary.main,
      light: ColorPalette.light.secondary.light,
      contrastText: ColorPalette.light.secondary.contrastText,
    },
    success: {
      main: ColorPalette.light.success.main,
      light: ColorPalette.light.success.light,
      contrastText: ColorPalette.light.success.contrastText,
    },
    surface: {
      main: "#D2D2D2",
      light: ColorPalette.light.primary.light,
      contrastText: "#555555",
      dark: ColorPalette.light.primary.dark,
    },
    info: {
      main: ColorPalette.light.info.main,
      light: ColorPalette.light.info.light,
      contrastText: ColorPalette.light.info.contrastText,
    },
    warning: {
      main: ColorPalette.light.warning.main,
      light: ColorPalette.light.warning.light,
      contrastText: ColorPalette.light.warning.contrastText,
    },
    error: {
      main: ColorPalette.light.error.main,
      light: ColorPalette.light.error.light,
      contrastText: ColorPalette.light.error.contrastText,
    },
    text: {
      main: ColorPalette.light.text.main,
      light: ColorPalette.light.text.light,
      fade: ColorPalette.light.text.fade,
      contrastText: ColorPalette.light.text.contrastText,
    },
    border: {
      main: ColorPalette.light.border.main,
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: "3rem", //48px
      lineHeight: "3.625rem", // 58px
      fontWeight: 400,
    },
    h2: {
      fontSize: "2.5rem", //40px
      lineHeight: "3.125rem", // 50px
      fontWeight: 400,
    },
    h3: {
      fontSize: "2rem", //32px
      lineHeight: "2.625rem", // 42px
      fontWeight: 400,
    },
    h4: {
      fontSize: "1rem", //28px
      lineHeight: "2.375rem", // 38px
      fontWeight: 600,
      color: "#000000",
    },
    h5: {
      fontSize: "1.5rem", //24px
      lineHeight: "2.125rem", // 34px
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.25rem", //20px
      lineHeight: "1.875rem", // 30px
      fontWeight: 500,
    },
    titleText: {
      fontSize: "19px", //19px
      fontFamily: '"Lato", serif;',
      lineHeight: "1.625rem", // 26px
      display: "block",
      fontWeight: 900,
    },
    titleTextBig: {
      fontSize: "32px", //32px
      fontFamily: '"Lato", serif;',
      lineHeight: "40px", // 40px
      display: "block",
      fontWeight: 900,
    },
    base: {
      fontSize: "1rem", //16px
      lineHeight: "1.625rem", // 26px
      display: "block",
      fontWeight: 400,
    },
    medium: {
      fontSize: "0.875rem", //14px
      lineHeight: "1.25rem", // 20px
      display: "block",
      fontWeight: 500,
    },
    small: {
      fontSize: "0.75rem", //12px
      lineHeight: "1.125rem", // 18px
      display: "block",
      fontWeight: 700,
    },
    tabsFont: {
      fontSize: "0.75rem", //12px
      lineHeight: "1.125rem", // 18px
      display: "block",
      fontWeight: 400,
    },
    xsmall: {
      fontSize: "0.625rem", //10px
      lineHeight: "1rem", // 16px
      display: "block",
      fontWeight: 500,
    },
    xxsmall: {
      fontSize: "0.5rem", //8px
      lineHeight: "0.625rem", // 16px
      display: "block",
      fontWeight: 400,
    },
  },
  components: {
    MuiPaper: {
      // Dark theme paper color
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          boxShadow:
            "0px 2px 3px 0px rgba(0, 34, 66, 0.05), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
          // padding: "24px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // fontSize: "0.875rem",
          // padding: "8px 10px",
          borderRadius: "6px",
          textTransform: "none",
          // boxShadow: "none",
          // whiteSpace: "nowrap",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "space-between",
          // gap: "10px",
          // fontWeight: 400,
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: ColorPalette.light.border.main, // Change the background color to your desired color
          height: "1px", // Change the height as needed
          margin: "0px", // Change the margin as needed
        },
      },
    },
    MuiAvatar: {
      variants: [
        // {
        //   props: { variant: "rounded" },
        //   style: {
        //     borderRadius: "50%", // You can adjust the value for the desired border radius
        //     width: "36px",
        //     height: "36px",
        //   },
        // },
        {
          props: { variant: "rounded" },
          style: {
            borderRadius: "6px", // You can adjust the value for the desired border radius
            width: "24px",
            height: "24px",
          },
        },
      ],
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: "50px", // Adjust the border-radius value as needed
          backgroundColor: ColorPalette.light.border.main, // Change the background color as needed
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "6px", // Adjust the border-radius value as needed
        },
        standardSuccess: {
          backgroundColor: ColorPalette.light.success.light, // Change the background color for success alerts
          color: ColorPalette.light.success.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardError: {
          backgroundColor: ColorPalette.light.error.light, // Change the background color for error alerts
          color: ColorPalette.light.error.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardWarning: {
          backgroundColor: ColorPalette.light.warning.light, // Change the background color for warning alerts
          color: ColorPalette.light.warning.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardInfo: {
          backgroundColor: ColorPalette.light.info.light, // Change the background color for info alerts
          color: ColorPalette.light.info.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          "& li a": {
            textDecoration: "none",
            fontSize: "16px",
            color: ColorPalette.light.primary.main, // Replace with your text color
          },
          "& li:last-child": {
            "& a": {
              color: ColorPalette.light.text.light, // Replace with your fade text color
              cursor: "default",
            },
          },
        },
        separator: {
          color: ColorPalette.light.text.main, // Set the color for the separator between breadcrumbs
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: ColorPalette.light.text.fade,
          fontSize: "12px",
          fontWeight: 500,
          padding: "10px",
          borderBottom: `2px solid ${ColorPalette.light.border.light}`,
          fontFamily: '"Poppins", sans-serif',
          background: "#fff",
        },
        body: {
          color: ColorPalette.light.text.light,
          fontSize: "14px",
          fontWeight: 400,
          padding: "6px 10px",
          fontFamily: '"Poppins", sans-serif',
        },
      },
    },
  },
});

export default theme;
