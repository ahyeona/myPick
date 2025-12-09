import type { Dispatch, SetStateAction } from 'react';
import { SearchBarStyle } from './SearchBar.style';


type SearchBarProps = {
  onChange: Dispatch<SetStateAction<string>>;
  search: () => void;
  placeholder?: string;
}

const SearchBar = ({ onChange, placeholder, search }: SearchBarProps) => {
  return (
    <SearchBarStyle
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.code === 'Enter') search();
      }}
      placeholder={placeholder || '검색어를 입력하세요.'} />
  )
}

export default SearchBar