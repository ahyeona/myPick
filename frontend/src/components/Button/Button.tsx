import { ButtonStyle } from "./Button.style";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  background?: string;
};

const Button = ({ text, onClick, width = "300px", height = "40px", background }: ButtonProps) => {
  return (
    <ButtonStyle
      style={{ "width": width, "height": height, "background": background }}
      onClick={onClick}>{text}</ButtonStyle>
  )
}

export default Button;
