import styled from 'styled-components'

const ButtonStyle = styled.div`
  background-color: ${({theme}) => theme.buttonBg};
  width: 300px;
  height: 40px;
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
};

const Button = ({text, onClick} : ButtonProps) => {
  return (
    <ButtonStyle onClick={onClick}>{text}</ButtonStyle>
  )
}

export default Button;
