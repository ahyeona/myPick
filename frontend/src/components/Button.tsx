import styled from 'styled-components'

const ButtonStyle = styled.div`
  background-color: ${({theme}) => theme.buttonBg};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme})=> theme.buttonText};
  &:hover {
    cursor: pointer;
  }
` 

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  width?: string;
  height?: string;
};

const Button = ({text, onClick, width="300px", height="40px"} : ButtonProps) => {
  return (
    <ButtonStyle 
    style={{"width" : width, "height" : height }}
    onClick={onClick}>{text}</ButtonStyle>
  )
}

export default Button;
