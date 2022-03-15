function pxToRem(rem: any): string {
  return (parseInt(rem) / 16).toString() + "rem";
}

export default {
  screen: {
    sl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 350,
  },

  colors: {
    purple: "#552583",
    lightPurple: "#80548E",
    yellow: "#C9F90A",
    lightYellow: "#FDB927",
    black: "#0E0D0D",
    lightBlack: "#2D2A2A",
    blue: "#00063C",
    lightBlue: "#206083",
    red: "#EC1E23",
    lightRed: "#BB4346",
    green: "#152C0F",
    lightGreen: "#4EDC4A",
    white: "#F4E4F4",
    lightWhite: "#D2D4EB",
    yellowLetter: "#D4DD6C",
    blueLetter: "#7B69A4",
    pinkDot: "#DE0DEE",
  },
  font: {
    family: "Roboto, sansserif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xs: pxToRem(12),
      sm: pxToRem(14),
      md: pxToRem(16),
      lg: pxToRem(18),
      xl: pxToRem(22),
      sl: pxToRem(24),
    },
  },
} as const;
