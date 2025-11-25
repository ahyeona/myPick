import type { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components'

const InputStyle = styled.input`
  width: 300px;
  height: 20px;
  border: 0;
  border-radius: 6px;
  padding: 10px;
  display: block;
  background-color: ${({theme})=> theme.navBg};
  color: ${({theme})=> theme.buttonText};
  &:focus {
    outline: 0;
  }
`

type InputProps = {
  onChange: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  password?: boolean;
}

const Input = ({onChange, placeholder, password}:InputProps) => {
  return (
    <InputStyle
      onChange={(e)=>{onChange(e.target.value)}} 
      placeholder={placeholder}
      type={password ? 'password' : 'text'}
      />  
  )
}

export default Input