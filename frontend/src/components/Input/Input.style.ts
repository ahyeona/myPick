import styled from 'styled-components'

export const InputStyle = styled.input`
  width: 300px;
  height: 20px;
  border: 0;
  border-radius: 6px;
  padding: 10px;
  display: block;
  background-color: ${({ theme }) => theme.navBg};
  color: ${({ theme }) => theme.buttonText};
  &:focus {
    outline: 0;
  }
`
