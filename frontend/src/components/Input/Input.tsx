import type { Dispatch, SetStateAction } from 'react';
import { InputStyle } from './Input.style';

type InputProps = {
  onChange: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  password?: boolean;
}

const Input = ({ onChange, placeholder, password }: InputProps) => {
  return (
    <InputStyle
      onChange={(e) => { onChange(e.target.value) }}
      placeholder={placeholder}
      type={password ? 'password' : 'text'}
    />
  )
}

export default Input