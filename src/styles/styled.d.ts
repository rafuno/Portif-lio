import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      purple: string;
      lightPurple: string;
      yellow: string;
      lightYellow: string;
      black: string;
      lightBlack: string;
      blue: string;
      lightBlue: string;
      red: string;
      lightRed: string;
      green: string;
      lightGreen: string;
      white: string;
      lightWhite: string;
      yellowLetter: string;
      blueLetter: string;
      pinkDot: string;
    };
    screen: {
      sl: number;
      xl: number;
      lg: number;
      md: number;
      sm: number;
      xs: number;
    };

    font: {
      family: string;
      light: number;
      normal: number;
      bold: number;
      sizes: {
        sl: string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
      };
    };
  }
}
