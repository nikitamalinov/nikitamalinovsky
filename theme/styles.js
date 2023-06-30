import { extendTheme } from "@chakra-ui/react";

// example theme
const theme = extendTheme({
  colors: {
    blue: "#0076ff",
    //blue: '#1fb6ff',
    blueHover: "#3391FF",
    green: "#13ce66",
    //gray: '#8492a6', // Causes border on navbar menu
    white: "#ffffff",
    red: "#E1341E",
    transparent: "transparent",
    light: "#F6F6F6 ", //grey
    darkBlue: "#004f98", // USAFA Blue
    switchBlueScheme: {
      500: "#0076ff",
    },
  },
  fonts: {
    heading: "Arial, serif",
    body: "sans-serif",
    mono: "Menlo, monospace",
  },
  breakpoints: {},

  fontWeights: {},
  lineHeights: {},
  letterSpacings: {},
});

export default theme;
