import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bg: string;
    text: string;

    buttonBg: string;
    buttonText: string;
  }
}