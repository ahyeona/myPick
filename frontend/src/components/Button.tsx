import styled from 'styled-components'

const ButtonStyle = styled.button`
  background-color: ${({theme}) => theme.buttonBg};
` 

const Button = () => {
  return (
    <ButtonStyle>Button</ButtonStyle>
  )
}

export default Button;
