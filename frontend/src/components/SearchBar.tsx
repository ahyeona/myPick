import type { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components'

const SearchBarStyle = styled.input`
  border: 0;
  border-radius: 4px;
  background-color: aliceblue;
  padding: 6px;
  width: 30%;
  &:focus {
    outline: 0;
  }
`

type SearchBarProps = {
  onChange: Dispatch<SetStateAction<string>>;
  search: ()=>void;
  placeholder?: string;
}

const SearchBar = ({ onChange, placeholder, search } : SearchBarProps) => {
  return (
    <SearchBarStyle
      onChange={(e)=>onChange(e.target.value)}
      onKeyDown={(e)=>{
        if (e.code === 'Enter') search();
      }}
      placeholder={placeholder || '검색어를 입력하세요.'} />
  )
}

export default SearchBar