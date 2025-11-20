import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bg: string;
    textPrimary: string;
    text: string;

    buttonBg: string;
    buttonText: string;

    navBg: string;
  }
}