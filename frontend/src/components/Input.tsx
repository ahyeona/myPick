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
}

const Input = ({onChange, placeholder}:InputProps) => {
  return (
    <InputStyle
      onChange={(e)=>{onChange(e.target.value)}} 
      placeholder={placeholder} />  
  )
}

export default Input