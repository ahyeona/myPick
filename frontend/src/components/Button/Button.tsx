import { ButtonStyle } from "./Button.style";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  width?: string;
  height?: string;
};

const Button = ({ text, onClick, width = "300px", height = "40px" }: ButtonProps) => {
  return (
    <ButtonStyle
      style={{ "width": width, "height": height }}
      onClick={onClick}>{text}</ButtonStyle>
  )
}

export default Button;
